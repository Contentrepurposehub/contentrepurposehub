import { NextRequest, NextResponse } from 'next/server'

interface LeadPayload {
  name: string
  email: string
  client: string
  source?: string
}

// Google Sheets API integration
async function appendToGoogleSheet(lead: LeadPayload) {
  const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n')
  const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID

  if (!privateKey || !clientEmail || !spreadsheetId) {
    console.warn('Google Sheets credentials not configured — lead stored in logs only')
    console.log('LEAD CAPTURED:', JSON.stringify(lead))
    return { stored: 'logs' }
  }

  // Create JWT for Google Sheets API
  const header = btoa(JSON.stringify({ alg: 'RS256', typ: 'JWT' }))
  const now = Math.floor(Date.now() / 1000)
  const claimSet = btoa(
    JSON.stringify({
      iss: clientEmail,
      scope: 'https://www.googleapis.com/auth/spreadsheets',
      aud: 'https://oauth2.googleapis.com/token',
      exp: now + 3600,
      iat: now,
    })
  )

  // Import the key and sign the JWT
  const encoder = new TextEncoder()
  const keyData = privateKey
    .replace('-----BEGIN PRIVATE KEY-----', '')
    .replace('-----END PRIVATE KEY-----', '')
    .replace(/\s/g, '')

  const binaryKey = Uint8Array.from(atob(keyData), (c) => c.charCodeAt(0))
  const cryptoKey = await crypto.subtle.importKey(
    'pkcs8',
    binaryKey,
    { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' },
    false,
    ['sign']
  )

  const signatureInput = encoder.encode(`${header}.${claimSet}`)
  const signature = await crypto.subtle.sign('RSASSA-PKCS1-v1_5', cryptoKey, signatureInput)
  const jwt = `${header}.${claimSet}.${btoa(String.fromCharCode(...new Uint8Array(signature)))}`

  // Exchange JWT for access token
  const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`,
  })

  const tokenData = await tokenRes.json()
  if (!tokenData.access_token) {
    throw new Error('Failed to get Google access token')
  }

  // Append row to sheet
  const sheetName = lead.client || 'Leads'
  const values = [[lead.name, lead.email, new Date().toISOString(), lead.source || 'direct', lead.client]]

  const sheetsRes = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${encodeURIComponent(sheetName)}!A:E:append?valueInputOption=USER_ENTERED`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${tokenData.access_token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ values }),
    }
  )

  if (!sheetsRes.ok) {
    const errText = await sheetsRes.text()
    throw new Error(`Google Sheets API error: ${errText}`)
  }

  return { stored: 'google_sheets' }
}

// Optional webhook notification
async function fireWebhook(webhookUrl: string, lead: LeadPayload) {
  try {
    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(lead),
    })
  } catch (err) {
    console.error('Webhook failed:', err)
  }
}

// Client-specific configuration
const CLIENT_CONFIG: Record<string, { webhookUrl?: string }> = {
  'david-bach': {
    webhookUrl: process.env.DAVID_BACH_WEBHOOK_URL,
  },
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, client, source } = body as LeadPayload

    // Validate required fields
    if (!name || !email || !client) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, client' },
        { status: 400 }
      )
    }

    // Basic email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
    }

    const lead: LeadPayload = { name, email, client, source }

    // Store in Google Sheets
    const result = await appendToGoogleSheet(lead)

    // Fire webhook if configured for this client
    const config = CLIENT_CONFIG[client]
    if (config?.webhookUrl) {
      await fireWebhook(config.webhookUrl, lead)
    }

    return NextResponse.json({ success: true, ...result })
  } catch (err) {
    console.error('Lead capture error:', err)
    return NextResponse.json({ error: 'Failed to capture lead' }, { status: 500 })
  }
}
