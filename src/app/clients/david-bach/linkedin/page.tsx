import type { Metadata } from 'next'
import LinkedInClient from './LinkedInClient'

export const metadata: Metadata = {
  title: '10 LinkedIn Posts for David Bach — The Automatic Millionaire Content',
  description:
    '10 platform-optimized LinkedIn posts: thought leadership, story-based, framework, and contrarian. Ready to copy and post.',
  alternates: {
    canonical: 'https://contentrepurposehub.com/clients/david-bach/linkedin',
  },
}

export default function LinkedInPage() {
  return <LinkedInClient />
}
