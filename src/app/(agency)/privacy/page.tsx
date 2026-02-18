import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | ContentRepurposeHub",
  description:
    "Privacy Policy for ContentRepurposeHub. Learn how we collect, use, and protect your personal information when you use our webinar repurposing service.",
  alternates: {
    canonical: "https://contentrepurposehub.com/privacy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white">
      <header className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <a href="/" className="text-blue-300 hover:text-white text-sm transition mb-4 inline-block">
            ← Back to ContentRepurposeHub
          </a>
          <h1 className="text-4xl font-bold mt-2">Privacy Policy</h1>
          <p className="text-blue-200 mt-2">Last updated: February 18, 2026</p>
        </div>
      </header>

      <article className="max-w-3xl mx-auto px-4 py-12 prose prose-lg prose-gray">
        <p>
          ContentRepurposeHub (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the website
          contentrepurposehub.com. This Privacy Policy explains how we collect, use, disclose, and
          safeguard your information when you visit our website or use our services.
        </p>

        <h2>Information We Collect</h2>

        <h3>Information You Provide</h3>
        <p>We collect information you voluntarily provide when you:</p>
        <ul>
          <li>
            <strong>Submit a lead capture form</strong> — your name and email address
          </li>
          <li>
            <strong>Complete a scorecard or quiz</strong> — your responses and contact information
          </li>
          <li>
            <strong>Book a strategy call</strong> — your name, email, and scheduling details (processed
            by Cal.com)
          </li>
          <li>
            <strong>Use our chat widget</strong> — messages you send through the on-site chat
          </li>
          <li>
            <strong>Contact us by email</strong> — the content of your correspondence
          </li>
        </ul>

        <h3>Information Collected Automatically</h3>
        <p>When you visit our website, we automatically collect:</p>
        <ul>
          <li>
            <strong>Usage data</strong> — pages visited, time on page, click patterns, scroll depth,
            and navigation paths (via Google Analytics 4 and Microsoft Clarity)
          </li>
          <li>
            <strong>Device information</strong> — browser type, operating system, screen resolution,
            and device category
          </li>
          <li>
            <strong>Location data</strong> — approximate geographic location based on IP address
            (country/region level only)
          </li>
          <li>
            <strong>Referral data</strong> — the website or source that referred you to us
          </li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Deliver our webinar repurposing services to clients</li>
          <li>Send you content and updates you requested (newsletters, lead magnets, email sequences)</li>
          <li>Respond to your inquiries and support requests</li>
          <li>Analyze website usage to improve our content and user experience</li>
          <li>Identify session recordings and heatmaps to fix usability issues (Microsoft Clarity)</li>
          <li>Prevent fraud and maintain website security</li>
        </ul>

        <h2>Third-Party Services</h2>
        <p>We use the following third-party services that may process your data:</p>

        <div className="not-prose overflow-x-auto">
          <table className="w-full text-sm border-collapse border border-gray-200 my-6">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-2 text-left font-semibold">Service</th>
                <th className="border border-gray-200 px-4 py-2 text-left font-semibold">Purpose</th>
                <th className="border border-gray-200 px-4 py-2 text-left font-semibold">Data Processed</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2">Google Analytics 4</td>
                <td className="border border-gray-200 px-4 py-2">Website analytics</td>
                <td className="border border-gray-200 px-4 py-2">Usage data, device info, location</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2">Microsoft Clarity</td>
                <td className="border border-gray-200 px-4 py-2">Session recordings, heatmaps</td>
                <td className="border border-gray-200 px-4 py-2">Click patterns, scroll behavior, session data</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">Google Sheets</td>
                <td className="border border-gray-200 px-4 py-2">Lead storage</td>
                <td className="border border-gray-200 px-4 py-2">Name, email, form source</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2">Beehiiv</td>
                <td className="border border-gray-200 px-4 py-2">Email newsletter delivery</td>
                <td className="border border-gray-200 px-4 py-2">Name, email</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">Cal.com</td>
                <td className="border border-gray-200 px-4 py-2">Scheduling</td>
                <td className="border border-gray-200 px-4 py-2">Name, email, calendar availability</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2">Vercel</td>
                <td className="border border-gray-200 px-4 py-2">Website hosting</td>
                <td className="border border-gray-200 px-4 py-2">Server logs, IP addresses</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">Writesonic (Botsonic)</td>
                <td className="border border-gray-200 px-4 py-2">Chat widget</td>
                <td className="border border-gray-200 px-4 py-2">Chat messages</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Each third-party service operates under its own privacy policy. We encourage you to review
          their policies directly.
        </p>

        <h2>Email Communications</h2>
        <p>
          When you submit your email through a form on our site, you may be subscribed to our email
          list. We use email to deliver content you requested (lead magnets, newsletters, educational
          sequences) and occasional updates about our services.
        </p>
        <p>
          Every email includes an unsubscribe link. You can opt out at any time by clicking
          &quot;Unsubscribe&quot; at the bottom of any email, or by contacting us at
          hello@contentrepurposehub.com.
        </p>

        <h2>Cookies and Tracking</h2>
        <p>Our website uses cookies and similar technologies for:</p>
        <ul>
          <li>
            <strong>Analytics cookies</strong> — Google Analytics 4 uses first-party cookies to
            distinguish users and track sessions
          </li>
          <li>
            <strong>Session recording</strong> — Microsoft Clarity uses cookies to record browsing
            sessions for usability analysis
          </li>
          <li>
            <strong>Attribution tracking</strong> — Beehiiv uses cookies to attribute newsletter
            signups to their source
          </li>
        </ul>
        <p>
          You can control cookies through your browser settings. Disabling cookies may affect some
          website functionality.
        </p>

        <h2>Data Retention</h2>
        <p>
          We retain your personal information for as long as necessary to provide our services and
          fulfill the purposes described in this policy. Specifically:
        </p>
        <ul>
          <li>
            <strong>Lead capture data</strong> — retained until you request deletion or unsubscribe
          </li>
          <li>
            <strong>Analytics data</strong> — retained per Google Analytics and Microsoft Clarity
            default retention periods (14 months for GA4)
          </li>
          <li>
            <strong>Client project data</strong> — retained for the duration of the service engagement
            plus 12 months
          </li>
        </ul>

        <h2>Your Rights</h2>
        <p>Depending on your location, you may have the right to:</p>
        <ul>
          <li>Access the personal information we hold about you</li>
          <li>Request correction of inaccurate information</li>
          <li>Request deletion of your personal information</li>
          <li>Opt out of email communications</li>
          <li>Request a copy of your data in a portable format</li>
        </ul>
        <p>
          To exercise any of these rights, contact us at hello@contentrepurposehub.com. We will
          respond within 30 days.
        </p>

        <h2>California Residents (CCPA)</h2>
        <p>
          If you are a California resident, you have additional rights under the California Consumer
          Privacy Act (CCPA), including the right to know what personal information we collect, request
          deletion, and opt out of the sale of personal information. We do not sell personal
          information.
        </p>

        <h2>Data Security</h2>
        <p>
          We implement reasonable technical and organizational measures to protect your personal
          information, including encrypted connections (HTTPS), secure third-party service providers,
          and access controls. However, no method of transmission over the internet is 100% secure.
        </p>

        <h2>Children&apos;s Privacy</h2>
        <p>
          Our services are not directed to individuals under 18. We do not knowingly collect personal
          information from children. If you believe we have collected information from a minor, please
          contact us immediately.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Changes will be posted on this page with
          an updated &quot;Last updated&quot; date. Continued use of the website after changes
          constitutes acceptance of the updated policy.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy or our data practices, contact us at:
        </p>
        <ul>
          <li>
            <strong>Email:</strong> hello@contentrepurposehub.com
          </li>
          <li>
            <strong>Website:</strong> contentrepurposehub.com
          </li>
        </ul>
      </article>

      <footer className="bg-gray-900 text-gray-400 py-12 px-4">
        <div className="max-w-3xl mx-auto text-center text-sm">
          <a href="/" className="text-white font-bold text-lg hover:text-blue-400 transition">
            Content<span className="text-blue-400">Repurpose</span>Hub
          </a>
          <div className="flex justify-center gap-6 mt-4">
            <a href="/" className="hover:text-white transition">Home</a>
            <a href="/blog" className="hover:text-white transition">Blog</a>
            <a href="/privacy" className="text-white transition">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition">Terms of Service</a>
          </div>
          <p className="mt-6">© 2026 ContentRepurposeHub. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
