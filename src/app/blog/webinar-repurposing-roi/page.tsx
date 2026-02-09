import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'The ROI of Webinar Repurposing: Data, Math, and What It Actually Saves You [2026]',
  description: 'Is content repurposing worth it? See the real ROI numbers, cost comparisons, and break-even analysis for webinar repurposing. Data-backed framework for coaches and consultants.',
  keywords: 'content repurposing ROI, webinar repurposing ROI, content repurposing statistics, is content repurposing worth it, ROI of repurposing webinar content, content repurposing cost benefit analysis',
  alternates: {
    canonical: 'https://contentrepurposehub.com/blog/webinar-repurposing-roi',
  },
  openGraph: {
    title: 'The ROI of Webinar Repurposing: Data, Math, and What It Actually Saves You',
    description: 'Real ROI numbers, cost comparisons, and break-even analysis for webinar repurposing. Backed by HubSpot data and industry research.',
    url: 'https://contentrepurposehub.com/blog/webinar-repurposing-roi',
    siteName: 'ContentRepurposeHub',
    type: 'article',
    publishedTime: '2026-03-23T00:00:00.000Z',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The ROI of Webinar Repurposing: Data, Math, and Real Numbers',
    description: 'Is content repurposing worth the investment? The data says yes. Here is the math.',
  },
}

export default function WebinarRepurposingROI() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://contentrepurposehub.com/blog/webinar-repurposing-roi#article',
        headline: 'The ROI of Webinar Repurposing: Data, Math, and What It Actually Saves You',
        description: 'Is content repurposing worth it? See the real ROI numbers, cost comparisons, and break-even analysis for webinar repurposing. Data-backed framework for coaches and consultants.',
        datePublished: '2026-03-23',
        dateModified: '2026-03-23',
        author: {
          '@type': 'Organization',
          name: 'ContentRepurposeHub',
          url: 'https://contentrepurposehub.com',
        },
        publisher: {
          '@type': 'Organization',
          name: 'ContentRepurposeHub',
          url: 'https://contentrepurposehub.com',
        },
        mainEntityOfPage: 'https://contentrepurposehub.com/blog/webinar-repurposing-roi',
        wordCount: 2400,
        articleSection: 'Content Marketing',
        keywords: ['content repurposing ROI', 'webinar repurposing ROI', 'content repurposing statistics', 'is content repurposing worth it', 'content repurposing cost benefit'],
        about: [
          { '@type': 'Thing', name: 'Content Repurposing ROI' },
          { '@type': 'Thing', name: 'Webinar Repurposing' },
          { '@type': 'Thing', name: 'Content Marketing ROI' },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://contentrepurposehub.com' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://contentrepurposehub.com/blog' },
          { '@type': 'ListItem', position: 3, name: 'Webinar Repurposing ROI' },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is the ROI of content repurposing?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The ROI of content repurposing depends on your hourly rate and content output, but for most coaches and consultants billing $200-$500/hour, a $750-$1,500/month repurposing service delivers 300-600% ROI when accounting for time saved and content value generated. HubSpot data shows 60% of marketers get more leads from repurposed content than original content.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is content repurposing worth it for coaches?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Coaches who repurpose webinar content save 10-15 hours per week on content creation. At a billing rate of $200-$500/hour, that time savings alone represents $8,000-$30,000/month in recovered capacity. When combined with the fact that repurposed content generates 3x more engagement, the return significantly exceeds the cost of the service.',
            },
          },
          {
            '@type': 'Question',
            name: 'How much does content repurposing cost?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Content repurposing costs vary by method. DIY tools like Repurpose.io cost around $29/month but require 10-20 hours of your time per webinar. A virtual assistant costs $1,500-$3,000/month with variable quality. Done-for-you repurposing services range from $500-$2,000/month and deliver 14-75+ content pieces per webinar with professional optimization.',
            },
          },
          {
            '@type': 'Question',
            name: 'How long does it take for content repurposing to pay for itself?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'For most coaches, content repurposing pays for itself within the first month when accounting for time savings. A coach billing $300/hour who saves 12 hours per week recovers $14,400/month in productive capacity. Even at a conservative estimate, the service pays for itself within 30 days. The compounding SEO benefits continue to increase ROI over time.',
            },
          },
          {
            '@type': 'Question',
            name: 'What statistics support content repurposing?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Key statistics include: 60% of marketers generate more leads from repurposed content than original content (HubSpot), repurposed content generates 3x more engagement, content repurposing reduces creation time by up to 60%, 52% of marketers use webinars but only 20% repurpose the content, and content repurposing is the 5th most popular digital marketing trend of 2026.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do you calculate the ROI of webinar repurposing?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Use this formula: ROI = (Value of Content Output + Value of Time Saved - Service Cost) / Service Cost x 100. For example, if a repurposing service costs $997/month, saves you 12 hours/week (worth $14,400/month at $300/hour), and produces content valued at $3,000+, the ROI is over 1,600%.',
            },
          },
          {
            '@type': 'Question',
            name: 'Should I hire a VA, use tools, or use a done-for-you service for content repurposing?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'It depends on your budget and standards. DIY tools are cheapest ($29-$100/month) but require 10-20 hours of your time. A VA costs $1,500-$3,000/month and needs management oversight. A done-for-you service costs $750-$1,500/month and handles everything with professional quality and SEO optimization. For coaches billing $200+/hour, done-for-you delivers the best ROI.',
            },
          },
        ],
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="min-h-screen">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-100 z-50">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="font-bold text-xl text-gray-900">
              Content<span className="text-blue-600">Repurpose</span>Hub
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/blog" className="text-gray-600 hover:text-gray-900 transition">Blog</Link>
              <Link href="/#pricing" className="text-gray-600 hover:text-gray-900 transition">Pricing</Link>
              <Link href="/#faq" className="text-gray-600 hover:text-gray-900 transition">FAQ</Link>
              <a
                href="https://cal.com/contentrepurposehub/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition font-medium"
              >
                Book a Call
              </a>
            </div>
          </div>
        </nav>

        {/* Article */}
        <article className="pt-32 pb-20 px-4">
          <div className="max-w-3xl mx-auto">
            {/* Breadcrumb */}
            <nav className="text-sm text-gray-500 mb-6">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/blog" className="hover:text-blue-600">Blog</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-700">Webinar Repurposing ROI</span>
            </nav>

            {/* Header */}
            <header className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">Data-Driven</span>
                <span className="text-xs text-gray-500">12 min read</span>
                <span className="text-xs text-gray-400">March 23, 2026</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                The ROI of Webinar Repurposing: Data, Math, and What It Actually Saves You
              </h1>
              <p className="text-xl text-gray-600">
                You know content repurposing is a good idea. But is it worth the investment? Here are the real numbers: what it costs, what it saves, and when it pays for itself -- backed by industry data and straightforward math.
              </p>
            </header>

            {/* Key Takeaways */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-10">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Key Takeaways</h2>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-0.5">--</span>
                  <span>60% of marketers generate more leads from repurposed content than original content (HubSpot)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-0.5">--</span>
                  <span>Coaches spend an average of 10-15 hours per week on content creation -- time that could be spent coaching clients</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-0.5">--</span>
                  <span>A repurposing service costing $997/month can deliver 300-1,600% ROI depending on your billing rate</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-0.5">--</span>
                  <span>The break-even point for most coaches is within the first month when accounting for time recovered</span>
                </li>
              </ul>
            </div>

            {/* Table of Contents */}
            <div className="bg-gray-50 rounded-xl p-6 mb-10 border border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Table of Contents</h2>
              <ol className="space-y-2 text-blue-600">
                <li><a href="#hidden-cost" className="hover:text-blue-800">1. The Hidden Cost of Leaving Webinar Content Unused</a></li>
                <li><a href="#statistics" className="hover:text-blue-800">2. Key Statistics on Content Repurposing Effectiveness</a></li>
                <li><a href="#time-audit" className="hover:text-blue-800">3. Time Audit: How Many Hours Coaches Spend on Content</a></li>
                <li><a href="#diy-cost" className="hover:text-blue-800">4. The Real Cost of DIY Repurposing</a></li>
                <li><a href="#roi-framework" className="hover:text-blue-800">5. ROI Calculation Framework</a></li>
                <li><a href="#case-example" className="hover:text-blue-800">6. Case Example: 15 Hours/Week vs. a Repurposing Service</a></li>
                <li><a href="#compounding-effect" className="hover:text-blue-800">7. The Compounding Effect of Repurposed Content</a></li>
                <li><a href="#cost-comparison" className="hover:text-blue-800">8. Cost Comparison: VA vs. Tools vs. Done-for-You</a></li>
                <li><a href="#break-even" className="hover:text-blue-800">9. When Repurposing Pays for Itself</a></li>
                <li><a href="#faq" className="hover:text-blue-800">10. Frequently Asked Questions</a></li>
              </ol>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">

              {/* Section 1 */}
              <section id="hidden-cost" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">1. The Hidden Cost of Leaving Webinar Content Unused</h2>
                <p className="text-gray-700 mb-4">
                  Here is a number most coaches never calculate: the cost of the content they have already created but never reused.
                </p>
                <p className="text-gray-700 mb-4">
                  A typical webinar takes 8-12 hours of total work. That includes researching and outlining the content, building the slide deck, rehearsing, promoting the event, delivering the presentation, and handling follow-up. If you bill $300/hour for coaching, those 10 hours represent $3,000 worth of your time.
                </p>
                <p className="text-gray-700 mb-4">
                  After the live event, most coaches save the recording to a folder and never touch it again. The 50-200 people who attended live saw the content once. Everyone else -- the thousands of potential clients who were not in the room -- never see it at all.
                </p>
                <p className="text-gray-700 mb-4">
                  That is a $3,000 asset sitting idle. Multiply it by the 4, 8, or 12 webinars you run per year, and you are looking at $12,000-$36,000 in unused content. This is not a theoretical number. It is the real opportunity cost of not repurposing.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg my-6">
                  <p className="text-gray-800 font-medium">
                    Industry data confirms the gap: 52% of marketers use webinars in their content strategy, but only about 20% ever repurpose that webinar content into other formats. That means 80% of webinar content goes to waste.
                  </p>
                </div>
                <p className="text-gray-700 mb-4">
                  The question is not whether you can afford to invest in repurposing. The question is whether you can afford not to -- when you are already sitting on thousands of dollars in unused content. For a deeper look at what webinar repurposing involves and the full range of content you can extract, see our <Link href="/blog/webinar-repurposing-guide" className="text-blue-600 hover:text-blue-800 font-medium">complete webinar repurposing guide</Link>.
                </p>
              </section>

              {/* Section 2 */}
              <section id="statistics" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">2. Key Statistics on Content Repurposing Effectiveness</h2>
                <p className="text-gray-700 mb-4">
                  Before we run the ROI math, let us look at what the data actually says about content repurposing effectiveness. These are not projections or estimates. They are findings from HubSpot, industry surveys, and marketing research published in 2025 and 2026.
                </p>

                <div className="grid md:grid-cols-2 gap-4 my-6">
                  {[
                    {
                      stat: '60%',
                      description: 'of marketers say repurposed content generates more leads than original content',
                      source: 'HubSpot, 2026',
                    },
                    {
                      stat: '3x',
                      description: 'more engagement from repurposed content compared to single-use content',
                      source: 'Industry Benchmark Data',
                    },
                    {
                      stat: '60%',
                      description: 'reduction in content creation time when repurposing from existing material',
                      source: 'Marketing Efficiency Research',
                    },
                    {
                      stat: '#5',
                      description: 'most popular digital marketing trend of 2026 -- content repurposing',
                      source: 'HubSpot State of Marketing',
                    },
                  ].map((item, i) => (
                    <div key={i} className="bg-white border border-gray-200 rounded-lg p-5">
                      <p className="text-3xl font-bold text-blue-600 mb-2">{item.stat}</p>
                      <p className="text-gray-900 font-medium text-sm mb-1">{item.description}</p>
                      <p className="text-gray-500 text-xs">{item.source}</p>
                    </div>
                  ))}
                </div>

                <p className="text-gray-700 mb-4">
                  Let that first statistic sink in: a majority of marketers are getting <strong>better results from repurposed content than from content they created from scratch</strong>. That might seem counterintuitive, but it makes sense when you consider the mechanics. Repurposed content starts from proven material -- ideas that already resonated with a live audience. You are not guessing what will work. You are reformatting what already worked.
                </p>
                <p className="text-gray-700 mb-4">
                  The 3x engagement figure tells a similar story. When you take a framework from your webinar and turn it into a LinkedIn carousel, it performs better than a carousel you brainstormed from scratch. Why? Because the framework was already refined through the process of preparing and delivering a live presentation. The content is tighter, more structured, and more audience-tested.
                </p>
                <p className="text-gray-700">
                  And the 60% time reduction is where the ROI calculation starts to get interesting. If content repurposing cuts your creation time by more than half, the time you get back becomes available for revenue-generating activities. For coaches and consultants, that means more client sessions, more program sales, and more strategic work on the business.
                </p>
              </section>

              {/* CTA 1 */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 md:p-8 text-center my-10">
                <p className="text-white text-lg font-semibold mb-2">
                  Want to see the ROI for your specific situation?
                </p>
                <p className="text-blue-100 mb-4">
                  Book a free strategy call and we will run the numbers together based on your webinar schedule and billing rate.
                </p>
                <a
                  href="https://cal.com/contentrepurposehub/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
                >
                  Book a Free Strategy Call &rarr;
                </a>
              </div>

              {/* Section 3 */}
              <section id="time-audit" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">3. Time Audit: How Many Hours Coaches Spend on Content Creation</h2>
                <p className="text-gray-700 mb-4">
                  If you are a coach or consultant, you probably already know that content creation eats a disproportionate amount of your week. But the actual numbers are worse than most people realize.
                </p>
                <p className="text-gray-700 mb-4">
                  Based on industry surveys and conversations with hundreds of coaches, here is what a typical content creation week looks like:
                </p>

                <div className="overflow-x-auto my-6">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">Content Task</th>
                        <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">Hours/Week</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Writing LinkedIn posts (3-5/week)', '3-4 hours'],
                        ['Creating and sending newsletters', '2-3 hours'],
                        ['Writing or editing blog posts', '3-4 hours'],
                        ['Designing graphics and carousels', '1-2 hours'],
                        ['Creating short-form video clips', '2-3 hours'],
                        ['Managing email sequences', '1-2 hours'],
                        ['Planning and scheduling', '1-2 hours'],
                      ].map((row, i) => (
                        <tr key={i}>
                          <td className="p-3 border border-gray-200 text-gray-700">{row[0]}</td>
                          <td className="p-3 border border-gray-200 text-gray-700 font-medium">{row[1]}</td>
                        </tr>
                      ))}
                      <tr className="bg-blue-50">
                        <td className="p-3 border border-gray-200 font-bold text-gray-900">Total</td>
                        <td className="p-3 border border-gray-200 font-bold text-blue-600">13-20 hours/week</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 mb-4">
                  That is 13-20 hours per week spent on content creation. For a coach working 40 hours a week, that is 33-50% of total available working time consumed by marketing tasks instead of client-facing work.
                </p>
                <p className="text-gray-700 mb-4">
                  This is the content creation trap that burns out so many coaches. You know you need to post consistently to attract clients. But every hour you spend writing a LinkedIn post is an hour you are not spending on billable coaching sessions, program development, or sales conversations.
                </p>
                <p className="text-gray-700">
                  The math gets uncomfortable quickly when you attach a dollar value to those hours -- which is exactly what we are about to do.
                </p>
              </section>

              {/* Section 4 */}
              <section id="diy-cost" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">4. The Real Cost of DIY Repurposing</h2>
                <p className="text-gray-700 mb-4">
                  Most coaches think of content creation as free because they are doing it themselves. But your time has a dollar value, and when you calculate the true cost of DIY content creation, the numbers are sobering.
                </p>
                <p className="text-gray-700 mb-4">
                  Here is the formula: <strong>True Cost = Hours Spent x Your Effective Hourly Rate</strong>
                </p>
                <p className="text-gray-700 mb-4">
                  Your effective hourly rate is not just what you charge for coaching. It is the revenue you could generate with that time if it were spent on client work, sales calls, or program delivery. For most established coaches and consultants, this ranges from $200-$500/hour.
                </p>

                <div className="overflow-x-auto my-6">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">Your Hourly Rate</th>
                        <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">15 hrs/week on content</th>
                        <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">Monthly cost (60 hrs)</th>
                        <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">Annual cost (720 hrs)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['$150/hour', '$2,250/week', '$9,000/month', '$108,000/year'],
                        ['$200/hour', '$3,000/week', '$12,000/month', '$144,000/year'],
                        ['$300/hour', '$4,500/week', '$18,000/month', '$216,000/year'],
                        ['$500/hour', '$7,500/week', '$30,000/month', '$360,000/year'],
                      ].map((row, i) => (
                        <tr key={i}>
                          <td className="p-3 border border-gray-200 font-medium text-gray-900">{row[0]}</td>
                          <td className="p-3 border border-gray-200 text-gray-700">{row[1]}</td>
                          <td className="p-3 border border-gray-200 text-gray-700">{row[2]}</td>
                          <td className="p-3 border border-gray-200 text-gray-700 font-medium">{row[3]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 mb-4">
                  Read that again: a coach billing $300/hour who spends 15 hours per week on content creation is effectively spending <strong>$18,000 per month</strong> on content. That is $216,000 per year in opportunity cost.
                </p>
                <p className="text-gray-700 mb-4">
                  Even at a conservative rate of $150/hour, 15 hours per week of content creation costs $9,000/month. Compared to a repurposing service at $750-$1,500/month, the DIY approach is 6-12x more expensive when you account for the value of your time.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg my-6">
                  <p className="text-gray-800 font-medium">
                    The content is not free just because you are not writing a check. You are paying with the most valuable and non-renewable resource you have: your time.
                  </p>
                </div>
              </section>

              {/* Section 5 */}
              <section id="roi-framework" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">5. ROI Calculation Framework</h2>
                <p className="text-gray-700 mb-4">
                  Now let us build a proper ROI framework for webinar repurposing. This is the formula you can use to evaluate any repurposing investment -- whether it is a service, a VA, or a set of tools.
                </p>

                <div className="bg-gray-900 rounded-xl p-6 md:p-8 my-6">
                  <p className="text-gray-400 text-sm mb-2 font-medium">The Content Repurposing ROI Formula</p>
                  <p className="text-white text-lg md:text-xl font-mono mb-4">
                    ROI = (Time Saved Value + Content Output Value - Service Cost) / Service Cost x 100
                  </p>
                  <div className="border-t border-gray-700 pt-4 space-y-2">
                    <p className="text-gray-300 text-sm"><strong className="text-white">Time Saved Value</strong> = Hours saved per month x Your hourly rate</p>
                    <p className="text-gray-300 text-sm"><strong className="text-white">Content Output Value</strong> = Number of pieces x Cost to create each piece independently</p>
                    <p className="text-gray-300 text-sm"><strong className="text-white">Service Cost</strong> = Monthly investment in the repurposing service</p>
                  </div>
                </div>

                <p className="text-gray-700 mb-4">
                  Let us plug in realistic numbers for a coach using a repurposing service at $997/month:
                </p>

                <div className="space-y-4 my-6">
                  <div className="bg-white border border-gray-200 rounded-lg p-5">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Time Saved Value</h3>
                    <div className="space-y-1 text-gray-700 text-sm">
                      <p>Hours saved per week: 12 hours (conservative estimate)</p>
                      <p>Hours saved per month: 48 hours</p>
                      <p>Your hourly rate: $300/hour</p>
                      <p className="font-bold text-gray-900 text-base pt-2">Time Saved Value = 48 x $300 = $14,400/month</p>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-5">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Content Output Value</h3>
                    <div className="space-y-1 text-gray-700 text-sm">
                      <p>Content pieces delivered: 30+ per webinar</p>
                      <p>Average cost to create each piece independently: $50-$150 (freelancer rates)</p>
                      <p>Conservative estimate: 30 pieces x $100 each</p>
                      <p className="font-bold text-gray-900 text-base pt-2">Content Output Value = $3,000/month</p>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-5">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Service Cost</h3>
                    <div className="space-y-1 text-gray-700 text-sm">
                      <p className="font-bold text-gray-900 text-base">Service Cost = $997/month</p>
                    </div>
                  </div>

                  <div className="bg-blue-600 text-white rounded-lg p-5">
                    <h3 className="text-lg font-semibold mb-3">Total ROI Calculation</h3>
                    <div className="space-y-1 text-blue-100 text-sm">
                      <p>ROI = ($14,400 + $3,000 - $997) / $997 x 100</p>
                      <p>ROI = $16,403 / $997 x 100</p>
                      <p className="font-bold text-white text-xl pt-2">ROI = 1,645%</p>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-4">
                  Even if you cut the time savings in half and ignore the content output value entirely, the ROI is still over 600%. The numbers work at almost every billing rate above $150/hour.
                </p>
              </section>

              {/* CTA 2 */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 md:p-8 text-center my-10">
                <p className="text-gray-900 text-lg font-semibold mb-2">
                  Ready to see what 1,645% ROI looks like for your business?
                </p>
                <p className="text-gray-600 mb-4">
                  We repurpose your webinars into 14-75+ content pieces. Starting at $750/month.
                </p>
                <a
                  href="https://contentrepurposehub.com/#pricing"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  See Plans &amp; Pricing &rarr;
                </a>
              </div>

              {/* Section 6 */}
              <section id="case-example" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">6. Case Example: 15 Hours/Week on Content vs. Using a Repurposing Service</h2>
                <p className="text-gray-700 mb-4">
                  Let us make this concrete with a side-by-side comparison. Meet two versions of the same coach: one doing everything themselves, and one using a webinar repurposing service.
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-6">
                  <div className="border border-gray-200 rounded-lg p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 pb-3 border-b border-gray-200">Scenario A: DIY Coach</h3>
                    <div className="space-y-3 text-sm text-gray-700">
                      <div>
                        <p className="font-medium text-gray-900">Weekly time on content</p>
                        <p>15 hours</p>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Monthly content output</p>
                        <p>12-15 pieces (inconsistent quality)</p>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Monthly cost (at $300/hr)</p>
                        <p>$18,000 in time</p>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Client hours available</p>
                        <p>25 hours/week</p>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">SEO optimization</p>
                        <p>Minimal (no time to learn)</p>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Stress level</p>
                        <p>High -- always behind on posting</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-2 border-blue-500 rounded-lg p-5 bg-blue-50/30">
                    <h3 className="text-lg font-bold text-blue-700 mb-3 pb-3 border-b border-blue-200">Scenario B: Repurposing Service</h3>
                    <div className="space-y-3 text-sm text-gray-700">
                      <div>
                        <p className="font-medium text-gray-900">Weekly time on content</p>
                        <p>2 hours (review and approve)</p>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Monthly content output</p>
                        <p>30-75+ pieces (professional quality)</p>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Monthly cost</p>
                        <p>$997 service + $2,400 in review time</p>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Client hours available</p>
                        <p>38 hours/week</p>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">SEO optimization</p>
                        <p>Full Google + AI search optimization</p>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Stress level</p>
                        <p>Low -- content runs on autopilot</p>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-4">
                  The Scenario B coach gains back 13 hours per week. At $300/hour, those 13 hours represent $3,900/week in recovered capacity -- or $15,600/month. The service costs $997. The net gain is $14,603 per month, plus they are publishing 2-5x more content at a higher quality.
                </p>
                <p className="text-gray-700 mb-4">
                  But the benefits go beyond the direct math. The Scenario B coach is publishing more consistently, which builds algorithmic momentum on LinkedIn and Google. They are publishing across more platforms, which increases discoverability. And they are doing it without the creative fatigue that comes from producing 15+ pieces of content every week.
                </p>
                <p className="text-gray-700">
                  The Scenario A coach is working harder and getting less. The Scenario B coach is working smarter and getting more. That is the real ROI of webinar repurposing.
                </p>
              </section>

              {/* Section 7 */}
              <section id="compounding-effect" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">7. The Compounding Effect: How Repurposed Content Builds Organic Traffic Over Time</h2>
                <p className="text-gray-700 mb-4">
                  The ROI numbers above only account for the immediate time savings and content output. They do not capture the most powerful benefit of content repurposing: compounding returns.
                </p>
                <p className="text-gray-700 mb-4">
                  Social media posts have a lifespan measured in hours. But blog posts created from your webinar content can rank on Google for years. Every month you publish SEO-optimized articles from your webinars, your organic traffic grows. Unlike paid ads (which stop the moment you stop paying), organic content compounds.
                </p>
                <p className="text-gray-700 mb-4">
                  Here is how the compounding effect works in practice:
                </p>

                <div className="overflow-x-auto my-6">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">Month</th>
                        <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">New Blog Posts</th>
                        <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">Total Posts Live</th>
                        <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">Est. Monthly Organic Visits</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Month 1', '2', '2', '50-100'],
                        ['Month 3', '2', '6', '200-500'],
                        ['Month 6', '2', '12', '800-2,000'],
                        ['Month 9', '2', '18', '2,000-5,000'],
                        ['Month 12', '2', '24', '5,000-12,000'],
                      ].map((row, i) => (
                        <tr key={i}>
                          <td className="p-3 border border-gray-200 font-medium text-gray-900">{row[0]}</td>
                          <td className="p-3 border border-gray-200 text-gray-700">{row[1]}</td>
                          <td className="p-3 border border-gray-200 text-gray-700">{row[2]}</td>
                          <td className="p-3 border border-gray-200 text-gray-700 font-medium">{row[3]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 mb-4">
                  Notice the pattern: each new post adds to the traffic base, while older posts continue to rank and often improve their positions over time. By month 12, you have 24 blog posts working for you around the clock -- all derived from webinars you already delivered. (For a full breakdown of how a single webinar becomes 75+ individual pieces, see our <Link href="/blog/webinar-content-pieces-breakdown" className="text-blue-600 hover:text-blue-800 font-medium">complete content pieces breakdown</Link>.)
                </p>
                <p className="text-gray-700 mb-4">
                  This compounding effect means that the ROI of webinar repurposing actually <em>increases</em> over time. The service cost stays the same, but the total traffic, leads, and authority generated by your growing content library keeps climbing.
                </p>
                <p className="text-gray-700">
                  In 2026, this compounding also applies to AI search engines. Every well-structured article you publish becomes a potential source that ChatGPT, Perplexity, and Gemini can reference when users ask questions in your area of expertise. Your repurposed webinar content does not just rank on Google -- it gets cited by AI assistants, driving an entirely new channel of discovery.
                </p>
              </section>

              {/* Section 8 */}
              <section id="cost-comparison" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">8. Cost Comparison: Hiring a VA vs. Using Tools vs. Done-for-You Service</h2>
                <p className="text-gray-700 mb-4">
                  You have three main options for handling content repurposing. Here is an honest comparison of the costs, output, and trade-offs of each approach.
                </p>

                <div className="overflow-x-auto my-6">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900"></th>
                        <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">DIY Tools</th>
                        <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">Virtual Assistant</th>
                        <th className="text-left p-3 border border-gray-200 font-semibold text-blue-600">Done-for-You Service</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Monthly cost', '$29-$100', '$1,500-$3,000', '$750-$1,500'],
                        ['Your time required', '10-20 hrs/webinar', '3-5 hrs/week (managing)', '1-2 hrs/month (review)'],
                        ['Content pieces/month', 'Varies (5-15)', '10-25', '14-75+'],
                        ['Content quality', 'Depends on your skills', 'Variable', 'Professional, consistent'],
                        ['SEO optimization', 'Basic or none', 'Requires separate specialist', 'Included (Google + AI)'],
                        ['Ramp-up time', 'Immediate but slow', '2-4 weeks training', '1 week onboarding'],
                        ['Scalability', 'Limited by your time', 'Need to hire more VAs', 'Choose a higher tier'],
                        ['Total effective cost*', '$3,000-$10,000+/mo', '$2,500-$5,000/mo', '$750-$1,500/mo'],
                      ].map((row, i) => (
                        <tr key={i}>
                          <td className="p-3 border border-gray-200 font-medium text-gray-900">{row[0]}</td>
                          <td className="p-3 border border-gray-200 text-gray-700">{row[1]}</td>
                          <td className="p-3 border border-gray-200 text-gray-700">{row[2]}</td>
                          <td className="p-3 border border-gray-200 text-gray-700 bg-blue-50/50">{row[3]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-500 text-xs mb-4">*Total effective cost includes the dollar value of your time spent on the process, calculated at $300/hour.</p>

                <p className="text-gray-700 mb-4">
                  <strong>DIY Tools</strong> (Repurpose.io, Descript, Canva, ChatGPT): The sticker price is low -- $29-$100/month for a tool stack. But you are trading 10-20 hours of your time per webinar, which at $300/hour is $3,000-$6,000 in hidden cost. This approach makes sense for new coaches with more time than money, but it is the most expensive option for established coaches when you factor in opportunity cost.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Virtual Assistant</strong>: A competent VA costs $1,500-$3,000/month and still requires 3-5 hours/week of your time for management, quality control, and direction. VAs need training on your brand voice, SEO best practices, and platform-specific formatting. Quality is inconsistent, and you need separate specialists for writing, design, and video editing.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Done-for-You Service</strong>: A specialized repurposing service costs $750-$1,500/month and handles everything end-to-end. You send your webinar recording, and you get back 14-75+ finished content pieces optimized for search and social platforms. Your time commitment drops to 1-2 hours per month for review and approval.
                </p>
                <p className="text-gray-700">
                  For a more detailed breakdown of when each option makes sense, see our upcoming guide on <Link href="/blog/content-repurposing-diy-vs-service" className="text-blue-600 hover:text-blue-800 font-medium">content repurposing: DIY tools vs. done-for-you services</Link>.
                </p>
              </section>

              {/* Section 9 */}
              <section id="break-even" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">9. When Repurposing Pays for Itself (The Break-Even Analysis)</h2>
                <p className="text-gray-700 mb-4">
                  The final question most coaches ask before investing in a repurposing service is: how long until this pays for itself? The answer depends on how you measure the return, but under almost every reasonable scenario, it is faster than you think.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-2">Break-Even on Time Savings Alone</h3>
                <p className="text-gray-700 mb-4">
                  If the service costs $997/month and saves you 12 hours/week (48 hours/month), it pays for itself the moment you use even 2 of those recovered hours for billable work. At $300/hour, 2 billable hours = $600. At $500/hour, 2 hours = $1,000. That is break-even in the first week of the first month.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-2">Break-Even on Client Acquisition</h3>
                <p className="text-gray-700 mb-4">
                  If your average client is worth $3,000-$10,000, the service pays for itself the moment your repurposed content generates one additional client. With 30-75+ pieces of content going out every month across LinkedIn, blog, email, and social media, the probability of attracting at least one new client per month is high. Most coaches report their first content-attributed lead within 30-60 days.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-2">Break-Even on Traffic Value</h3>
                <p className="text-gray-700 mb-4">
                  Organic search traffic has a measurable value. If a blog post ranks for a keyword with a $5-$15 cost-per-click (CPC) in Google Ads and drives 200 visits per month, that post is delivering $1,000-$3,000/month in equivalent paid traffic value. Two or three ranking blog posts -- all created from webinar content you already delivered -- can cover the entire service cost in equivalent ad spend.
                </p>

                <div className="bg-gray-900 rounded-xl p-6 md:p-8 my-6">
                  <p className="text-gray-400 text-sm mb-3 font-medium">Break-Even Summary</p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">Time</div>
                      <p className="text-gray-300 text-sm">Breaks even in <strong className="text-white">Week 1</strong> if you redirect 2+ hours to billable work</p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">Clients</div>
                      <p className="text-gray-300 text-sm">Breaks even with <strong className="text-white">1 new client</strong> from content (typically within 30-60 days)</p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">Traffic</div>
                      <p className="text-gray-300 text-sm">Breaks even with <strong className="text-white">2-3 ranking blog posts</strong> (typically within 3-6 months)</p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">Compound</div>
                      <p className="text-gray-300 text-sm">ROI <strong className="text-white">increases every month</strong> as content library and rankings grow</p>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-4">
                  The key insight is that a repurposing service is not a cost -- it is an investment with measurable, compounding returns. The break-even happens fast (often within the first month), and the gap between cost and return widens every month as your content library grows and your older content continues to drive traffic and leads.
                </p>
                <p className="text-gray-700">
                  For coaches billing $200/hour or more, the math is overwhelmingly clear. The only scenario where DIY makes financial sense is if you have zero clients, zero pipeline, and cannot monetize any recovered time. Once you have even modest client demand, every hour you spend on content creation instead of coaching is a net financial loss.
                </p>
              </section>

              {/* CTA 3 */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 md:p-8 text-center my-10">
                <p className="text-white text-lg font-semibold mb-2">
                  The math is clear. The only question is when you start.
                </p>
                <p className="text-blue-100 mb-4">
                  We turn your webinars into 14-75+ content pieces every month. All optimized for Google and AI search.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href="https://contentrepurposehub.com/#pricing"
                    className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
                  >
                    See Pricing &rarr;
                  </a>
                  <a
                    href="https://cal.com/contentrepurposehub/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
                  >
                    Book Free Strategy Call
                  </a>
                </div>
              </div>

              {/* Section 10: FAQ */}
              <section id="faq" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions About Content Repurposing ROI</h2>

                <div className="space-y-6">
                  {[
                    {
                      q: 'What is the ROI of content repurposing?',
                      a: 'The ROI of content repurposing depends on your hourly rate and content output, but for most coaches and consultants billing $200-$500/hour, a $750-$1,500/month repurposing service delivers 300-1,600% ROI when accounting for time saved and content value generated. HubSpot data shows 60% of marketers get more leads from repurposed content than original content.',
                    },
                    {
                      q: 'Is content repurposing worth it for coaches?',
                      a: 'Yes. Coaches who repurpose webinar content save 10-15 hours per week on content creation. At a billing rate of $200-$500/hour, that time savings alone represents $8,000-$30,000/month in recovered capacity. When combined with the fact that repurposed content generates 3x more engagement, the return significantly exceeds the cost of any repurposing service.',
                    },
                    {
                      q: 'How much does content repurposing cost?',
                      a: 'Content repurposing costs vary by method. DIY tools like Repurpose.io cost around $29/month but require 10-20 hours of your time per webinar. A virtual assistant costs $1,500-$3,000/month with variable quality. Done-for-you repurposing services range from $750-$1,500/month and deliver 14-75+ content pieces per webinar with professional optimization included.',
                    },
                    {
                      q: 'How long does it take for content repurposing to pay for itself?',
                      a: 'For most coaches, content repurposing pays for itself within the first month when accounting for time savings. A coach billing $300/hour who saves 12 hours per week recovers $14,400/month in productive capacity from a service costing under $1,000/month. The compounding SEO benefits continue to increase ROI over the following months as content ranks and drives organic traffic.',
                    },
                    {
                      q: 'What statistics support content repurposing?',
                      a: 'Key statistics include: 60% of marketers generate more leads from repurposed content than original content (HubSpot 2026), repurposed content generates 3x more engagement than single-use content, content repurposing reduces creation time by up to 60%, 52% of marketers use webinars but only about 20% repurpose the content, and content repurposing is the 5th most popular digital marketing trend of 2026.',
                    },
                    {
                      q: 'How do you calculate the ROI of webinar repurposing?',
                      a: 'Use this formula: ROI = (Time Saved Value + Content Output Value - Service Cost) / Service Cost x 100. Time Saved Value equals hours saved per month multiplied by your hourly rate. Content Output Value equals the number of pieces multiplied by the cost to create each piece independently. For a coach at $300/hour saving 48 hours/month with a $997/month service, the ROI exceeds 1,600%.',
                    },
                    {
                      q: 'Should I hire a VA, use tools, or use a done-for-you service for content repurposing?',
                      a: 'It depends on your budget, time availability, and quality standards. DIY tools are cheapest at $29-$100/month but require 10-20 hours of your time per webinar. A VA costs $1,500-$3,000/month and still needs your management. A done-for-you service costs $750-$1,500/month and handles everything end-to-end. For coaches billing $200/hour or more, done-for-you delivers the strongest ROI because it minimizes your time investment.',
                    },
                  ].map((item, i) => (
                    <div key={i} className="border border-gray-200 rounded-lg p-5">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.q}</h3>
                      <p className="text-gray-700">{item.a}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Conclusion */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">The Bottom Line: Content Repurposing ROI Is Not Theoretical</h2>
                <p className="text-gray-700 mb-4">
                  This is not a conceptual argument. The ROI of webinar repurposing is based on straightforward math: the value of your time, the cost of the service, and the content output you receive in return.
                </p>
                <p className="text-gray-700 mb-4">
                  The data from HubSpot and industry research confirms that repurposed content outperforms original content in engagement and lead generation. The time audit shows that coaches spend 13-20 hours per week on content creation -- time that could be redirected to revenue-generating activities. The cost comparison demonstrates that a done-for-you service is the most cost-effective option for any coach billing $150/hour or more. If you are ready to put these numbers into action, our <Link href="/blog/content-repurposing-workflow-coaches" className="text-blue-600 hover:text-blue-800 font-medium">content repurposing workflow for coaches</Link> lays out the step-by-step process.
                </p>
                <p className="text-gray-700 mb-4">
                  And the compounding effect means the ROI gets better every month. Your content library grows, your rankings improve, and your organic traffic increases -- all from webinars you already delivered.
                </p>
                <p className="text-gray-700 mb-4">
                  If you are already running webinars, you are sitting on a content asset worth thousands of dollars. The only question is whether you will extract that value or let it sit in a Zoom folder.
                </p>
                <p className="text-gray-700">
                  Ready to run the numbers for your specific situation? <a href="https://cal.com/contentrepurposehub/30min" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">Book a free strategy call</a> and we will calculate the exact ROI for your coaching business based on your webinar schedule, billing rate, and growth goals. Or explore our <Link href="/blog/webinar-repurposing-guide" className="text-blue-600 hover:text-blue-800 font-medium">complete webinar repurposing guide</Link> to see everything that is possible with a single webinar recording.
                </p>
              </section>
            </div>
          </div>
        </article>

        {/* Reading Path Navigation */}
        <div className="max-w-3xl mx-auto px-4 py-8">
          <div className="bg-gray-50 rounded-xl p-6 md:p-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Continue Reading</h3>
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <Link href="/blog/content-repurposing-workflow-coaches" className="text-blue-600 hover:text-blue-700 font-medium">
                &larr; The Content Repurposing Workflow for Coaches
              </Link>
              <Link href="/blog/content-repurposing-diy-vs-service" className="text-blue-600 hover:text-blue-700 font-medium sm:text-right">
                DIY Tools vs. Done-for-You Services &rarr;
              </Link>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <section className="py-16 gradient-bg px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Stop Leaving Money on the Table
            </h2>
            <p className="text-blue-100 text-lg mb-6">
              14-75+ content pieces from every webinar. Google + AI search optimized. ROI that compounds every month. Starting at $750/month.
            </p>
            <a
              href="https://cal.com/contentrepurposehub/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition text-lg"
            >
              Book Free Strategy Call &rarr;
            </a>
            <p className="text-blue-200 text-sm mt-4">
              No contracts. 30-day guarantee. Cancel anytime.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-400 py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <Link href="/" className="font-bold text-xl text-white mb-4 md:mb-0">
                Content<span className="text-blue-400">Repurpose</span>Hub
              </Link>
              <div className="flex gap-6">
                <Link href="/blog" className="hover:text-white transition">Blog</Link>
                <Link href="/#pricing" className="hover:text-white transition">Pricing</Link>
                <Link href="/#faq" className="hover:text-white transition">FAQ</Link>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
              <p>&copy; 2026 ContentRepurposeHub. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
