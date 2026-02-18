import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | ContentRepurposeHub",
  description:
    "Terms of Service for ContentRepurposeHub. The terms and conditions governing the use of our webinar repurposing service and website.",
  alternates: {
    canonical: "https://contentrepurposehub.com/terms",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-white">
      <header className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <a href="/" className="text-blue-300 hover:text-white text-sm transition mb-4 inline-block">
            ← Back to ContentRepurposeHub
          </a>
          <h1 className="text-4xl font-bold mt-2">Terms of Service</h1>
          <p className="text-blue-200 mt-2">Last updated: February 18, 2026</p>
        </div>
      </header>

      <article className="max-w-3xl mx-auto px-4 py-12 prose prose-lg prose-gray">
        <p>
          These Terms of Service (&quot;Terms&quot;) govern your use of the ContentRepurposeHub
          website (contentrepurposehub.com) and services. By accessing our website or purchasing our
          services, you agree to these Terms.
        </p>

        <h2>1. Services</h2>
        <p>
          ContentRepurposeHub provides webinar repurposing services for coaches, consultants, and
          course creators. We transform webinar content into written and digital marketing assets
          including blog posts, social media content, email sequences, lead magnets, and landing pages.
        </p>
        <p>Our service tiers and deliverables are described on our pricing page. Specific deliverables
          for each engagement are confirmed during the onboarding process.
        </p>

        <h2>2. Client Engagements</h2>

        <h3>Onboarding</h3>
        <p>
          Each engagement begins with a strategy call and onboarding process where we collect your
          source material (webinar recordings, transcripts, brand assets) and confirm your deliverable
          package.
        </p>

        <h3>Source Material</h3>
        <p>
          You are responsible for providing accurate source material for repurposing. We create
          derivative content based on what you provide. We do not independently verify claims, data,
          or credentials in your source material.
        </p>

        <h3>Delivery Timeline</h3>
        <p>
          First deliverables are typically provided within 7 business days of receiving complete source
          material. Timelines may vary based on project scope and are confirmed during onboarding.
        </p>

        <h2>3. Pricing and Payment</h2>
        <p>
          Service pricing starts at $750/month. Exact pricing depends on the selected tier (Starter,
          Growth, or Scale) and is confirmed before work begins.
        </p>
        <ul>
          <li>Payment is due at the beginning of each service period</li>
          <li>All prices are in US Dollars (USD)</li>
          <li>
            We offer a 30-day money-back guarantee on your first month — if you&apos;re not satisfied
            with the deliverables, we&apos;ll refund your payment in full
          </li>
        </ul>

        <h2>4. Intellectual Property</h2>

        <h3>Your Content</h3>
        <p>
          You retain all rights to your source material (webinar recordings, transcripts, brand
          assets). By providing source material, you grant us a limited license to use it solely for
          creating your deliverables.
        </p>

        <h3>Deliverables</h3>
        <p>
          Upon full payment, you own all content we create for you. This includes blog posts, social
          media content, email sequences, lead magnets, and any other deliverables. You may use,
          modify, and distribute this content without restriction.
        </p>

        <h3>Our Website</h3>
        <p>
          The ContentRepurposeHub website, including its design, blog content, tools, and branding,
          remains our intellectual property. You may not copy, reproduce, or distribute our website
          content without written permission.
        </p>

        <h3>Portfolio Use</h3>
        <p>
          We may reference our work with you in our portfolio or case studies (e.g., &quot;helped a
          leadership coach generate 75+ content pieces from a single webinar&quot;). We will not use
          your name, likeness, or specific content without your explicit consent.
        </p>

        <h2>5. Website Use</h2>
        <p>When using our website, you agree not to:</p>
        <ul>
          <li>Submit false or misleading information through our forms</li>
          <li>Attempt to access restricted areas or other users&apos; data</li>
          <li>Use automated tools to scrape or extract content from our website</li>
          <li>Interfere with the website&apos;s operation or security</li>
          <li>Use the website for any unlawful purpose</li>
        </ul>

        <h2>6. Lead Capture and Email</h2>
        <p>
          When you submit your email address through a form on our website, you consent to receiving
          the specific content you requested (lead magnet, newsletter, etc.) and related follow-up
          communications. You can unsubscribe at any time using the link in any email.
        </p>
        <p>
          Our data collection and email practices are described in detail in our{" "}
          <a href="/privacy">Privacy Policy</a>.
        </p>

        <h2>7. Hosted Client Pages</h2>
        <p>
          As part of our service, we may host landing pages, blog posts, and interactive tools (such
          as scorecards) on our domain at contentrepurposehub.com/clients/[your-name]. These pages:
        </p>
        <ul>
          <li>Remain hosted for the duration of your active service engagement</li>
          <li>Collect leads on your behalf and sync them to your email platform</li>
          <li>May be taken down or archived after your engagement ends (with 30 days notice)</li>
          <li>Content from these pages can be exported to your own domain at any time upon request</li>
        </ul>

        <h2>8. Disclaimers</h2>
        <p>
          <strong>No guaranteed results.</strong> While we optimize all content for search engines
          (Google) and AI search systems, we cannot guarantee specific rankings, traffic numbers,
          lead generation results, or revenue outcomes. Content marketing results depend on many
          factors outside our control, including your niche, competition, existing audience, and
          distribution efforts.
        </p>
        <p>
          <strong>Not legal, financial, or medical advice.</strong> Content we create is marketing
          material, not professional advice. You are responsible for ensuring your content complies
          with regulations applicable to your industry.
        </p>

        <h2>9. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, ContentRepurposeHub&apos;s total liability for any
          claim arising from our services shall not exceed the amount you paid us in the 3 months
          preceding the claim. We are not liable for indirect, incidental, special, or consequential
          damages.
        </p>

        <h2>10. Cancellation</h2>
        <ul>
          <li>You may cancel your service at any time by emailing hello@contentrepurposehub.com</li>
          <li>Cancellation takes effect at the end of your current billing period</li>
          <li>Work completed before cancellation is yours to keep</li>
          <li>
            First-month cancellations are eligible for our 30-day money-back guarantee
          </li>
        </ul>

        <h2>11. Modifications to Terms</h2>
        <p>
          We may update these Terms from time to time. Changes will be posted on this page with an
          updated date. Continued use of our website or services after changes constitutes acceptance
          of the updated Terms. For active clients, material changes to service terms will be
          communicated by email.
        </p>

        <h2>12. Governing Law</h2>
        <p>
          These Terms are governed by the laws of the United States. Any disputes will be resolved
          through good-faith negotiation first. If negotiation fails, disputes will be resolved
          through binding arbitration.
        </p>

        <h2>13. Contact</h2>
        <p>Questions about these Terms? Contact us:</p>
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
            <a href="/privacy" className="hover:text-white transition">Privacy Policy</a>
            <a href="/terms" className="text-white transition">Terms of Service</a>
          </div>
          <p className="mt-6">© 2026 ContentRepurposeHub. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
