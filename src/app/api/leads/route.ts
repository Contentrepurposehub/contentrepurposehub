import { NextRequest, NextResponse } from 'next/server'

interface LeadPayload {
  name: string
  email: string
  client: string
  source?: string
}

function toBase64Url(data: string | Uint8Array): string {
  let b64: string
  if (typeof data === 'string') {
    b64 = btoa(data)
  } else {
    b64 = btoa(String.fromCharCode(...data))
  }
  return b64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
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

  // Create JWT for Google Sheets API (base64url encoded)
  const header = toBase64Url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }))
  const now = Math.floor(Date.now() / 1000)
  const claimSet = toBase64Url(
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
  const signatureBuffer = await crypto.subtle.sign('RSASSA-PKCS1-v1_5', cryptoKey, signatureInput)
  const signature = toBase64Url(new Uint8Array(signatureBuffer))
  const jwt = `${header}.${claimSet}.${signature}`

  // Exchange JWT for access token
  const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`,
  })

  const tokenData = await tokenRes.json()
  if (!tokenData.access_token) {
    console.error('Google token error:', JSON.stringify(tokenData))
    throw new Error('Failed to get Google access token')
  }

  // Append row to sheet — tab names map to how they appear in Google Sheets
  // Add new clients here: 'client-slug': 'Sheet-Tab-Name'
  const SHEET_TAB_NAMES: Record<string, string> = {
  }
  const sheetName = SHEET_TAB_NAMES[lead.client] || lead.client || 'Leads'
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

// ─── Email Platform Adapters ─────────────────────────────────────────
// Each adapter calls a specific email platform's API to add the subscriber.
// Env vars per client: CLIENTSLUG_EMAIL_PLATFORM, CLIENTSLUG_EMAIL_API_KEY, CLIENTSLUG_EMAIL_LIST_ID

async function addToBeehiiv(lead: LeadPayload, apiKey: string, publicationId: string) {
  const res = await fetch(
    `https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: lead.email,
        utm_source: 'contentrepurposehub',
        utm_medium: lead.source || 'landing-page',
        referring_site: `https://contentrepurposehub.com/clients/${lead.client}`,
      }),
    }
  )
  if (!res.ok) {
    const err = await res.text()
    throw new Error(`Beehiiv API error: ${err}`)
  }
  return { platform: 'beehiiv' }
}

async function addToMailchimp(lead: LeadPayload, apiKey: string, listId: string) {
  // Mailchimp API key format: xxxxx-us21 (server prefix after the dash)
  const server = apiKey.split('-').pop()
  const res = await fetch(
    `https://${server}.api.mailchimp.com/3.0/lists/${listId}/members`,
    {
      method: 'POST',
      headers: {
        Authorization: `Basic ${btoa(`anystring:${apiKey}`)}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email_address: lead.email,
        status: 'subscribed',
        merge_fields: { FNAME: lead.name },
        tags: ['contentrepurposehub'],
      }),
    }
  )
  if (!res.ok) {
    const err = await res.text()
    // Mailchimp returns 400 if already subscribed — not a real error
    if (res.status === 400 && err.includes('already a list member')) {
      return { platform: 'mailchimp', note: 'already_subscribed' }
    }
    throw new Error(`Mailchimp API error: ${err}`)
  }
  return { platform: 'mailchimp' }
}

async function addToConvertKit(lead: LeadPayload, apiKey: string, formId: string) {
  const res = await fetch(
    `https://api.convertkit.com/v3/forms/${formId}/subscribe`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        api_key: apiKey,
        email: lead.email,
        first_name: lead.name,
      }),
    }
  )
  if (!res.ok) {
    const err = await res.text()
    throw new Error(`ConvertKit API error: ${err}`)
  }
  return { platform: 'convertkit' }
}

async function addToActiveCampaign(lead: LeadPayload, apiKey: string, listId: string) {
  // ActiveCampaign API URL is stored as the API key prefix: https://account.api-us1.com|actual-key
  // We split on | to get both. If no |, assume apiKey is just the key and listId contains the URL.
  // Env var format: CLIENTSLUG_EMAIL_API_KEY=https://account.api-us1.com|your-api-key
  const [apiUrl, actualKey] = apiKey.includes('|') ? apiKey.split('|') : ['', apiKey]
  if (!apiUrl) {
    throw new Error('ActiveCampaign requires API URL. Set CLIENTSLUG_EMAIL_API_KEY=https://account.api-us1.com|your-api-key')
  }

  // Step 1: Create or update contact
  const contactRes = await fetch(`${apiUrl}/api/3/contacts`, {
    method: 'POST',
    headers: {
      'Api-Token': actualKey,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      contact: { email: lead.email, firstName: lead.name },
    }),
  })
  if (!contactRes.ok) {
    const err = await contactRes.text()
    throw new Error(`ActiveCampaign contact error: ${err}`)
  }
  const contactData = await contactRes.json()
  const contactId = contactData.contact?.id

  // Step 2: Add contact to list
  if (contactId && listId) {
    await fetch(`${apiUrl}/api/3/contactLists`, {
      method: 'POST',
      headers: {
        'Api-Token': actualKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contactList: { list: listId, contact: contactId, status: 1 },
      }),
    })
  }

  return { platform: 'activecampaign' }
}

// Platform adapter map
const platformAdapters: Record<string, (lead: LeadPayload, apiKey: string, listId: string) => Promise<{ platform: string; note?: string }>> = {
  beehiiv: addToBeehiiv,
  mailchimp: addToMailchimp,
  convertkit: addToConvertKit,
  activecampaign: addToActiveCampaign,
}

// Read client email platform config from env vars
function getClientEmailConfig(clientSlug: string): { platform: string; apiKey: string; listId: string } | null {
  const prefix = clientSlug.replace(/-/g, '_').toUpperCase()
  const platform = process.env[`${prefix}_EMAIL_PLATFORM`]
  const apiKey = process.env[`${prefix}_EMAIL_API_KEY`]
  const listId = process.env[`${prefix}_EMAIL_LIST_ID`]

  if (!platform || !apiKey || !listId) return null
  return { platform: platform.toLowerCase(), apiKey, listId }
}

// Fallback: generic webhook (for unsupported platforms)
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

function getClientWebhookUrl(clientSlug: string): string | undefined {
  const envKey = clientSlug.replace(/-/g, '_').toUpperCase() + '_WEBHOOK_URL'
  return process.env[envKey]
}

// Send lead to client's email platform (or fallback to webhook)
async function sendToClientPlatform(lead: LeadPayload): Promise<{ synced: string } | null> {
  const clientSlug = lead.client

  // Try direct platform integration first
  const emailConfig = getClientEmailConfig(clientSlug)
  if (emailConfig) {
    const adapter = platformAdapters[emailConfig.platform]
    if (adapter) {
      try {
        const result = await adapter(lead, emailConfig.apiKey, emailConfig.listId)
        console.log(`Lead synced to ${result.platform} for ${clientSlug}`)
        return { synced: result.platform }
      } catch (err) {
        console.error(`${emailConfig.platform} sync failed for ${clientSlug}:`, err)
      }
    } else {
      console.warn(`Unknown email platform "${emailConfig.platform}" for ${clientSlug}`)
    }
  }

  // Fallback: generic webhook
  const webhookUrl = getClientWebhookUrl(clientSlug)
  if (webhookUrl) {
    await fireWebhook(webhookUrl, lead)
    return { synced: 'webhook' }
  }

  return null
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

    // Store in Google Sheets (non-blocking — don't fail the request if Sheets is down)
    let sheetResult: Record<string, string> = {}
    try {
      sheetResult = await appendToGoogleSheet(lead)
    } catch (sheetErr) {
      console.error('Google Sheets error (lead still captured):', sheetErr)
      sheetResult = { stored: 'error' }
    }

    // Sync lead to client's email platform (non-blocking — don't fail if platform is down)
    let syncResult: Record<string, string> | null = null
    const emailConfig = getClientEmailConfig(lead.client)
    try {
      syncResult = await sendToClientPlatform(lead)
    } catch (syncErr) {
      console.error('Email platform sync error:', syncErr)
    }

    return NextResponse.json({
      success: true,
      ...sheetResult,
      ...(syncResult || {}),
      _debug: {
        hasEmailConfig: !!emailConfig,
        platform: emailConfig?.platform || 'none',
        envPrefix: lead.client.replace(/-/g, '_').toUpperCase(),
      },
    })
  } catch (err) {
    console.error('Lead capture error:', err)
    return NextResponse.json({ error: 'Failed to capture lead' }, { status: 500 })
  }
}
