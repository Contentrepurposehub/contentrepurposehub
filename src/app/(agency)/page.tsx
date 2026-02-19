import BeehiivSubscribeForm from "@/components/BeehiivSubscribeForm"
import CheckoutButton from "@/components/CheckoutButton"
import MobileNav from "@/components/MobileNav"
import AnimatedSection from "@/components/AnimatedSection"
import AnimatedCard from "@/components/AnimatedCard"
import AnimatedCounter from "@/components/AnimatedCounter"
import AnimatedTimeline from "@/components/AnimatedTimeline"
import PulsingCTA from "@/components/PulsingCTA"
import FloatingEmoji from "@/components/FloatingEmoji"
import ParallaxBand from "@/components/ParallaxBand"

export default function Home() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://contentrepurposehub.com/#organization',
        name: 'ContentRepurposeHub',
        url: 'https://contentrepurposehub.com',
        description: 'Webinar repurposing service for coaches and consultants. We transform your webinars into 14-75+ content pieces optimized for Google and AI search engines.',
        foundingDate: '2026',
        serviceType: ['Content Repurposing', 'Webinar Marketing', 'Content Marketing'],
        areaServed: {
          '@type': 'Country',
          name: 'United States'
        },
        knowsAbout: [
          'Webinar Repurposing',
          'Content Repurposing',
          'SEO Content Writing',
          'AI Search Optimization',
          'LinkedIn Content Strategy',
          'Lead Magnet Creation',
          'Email Marketing Sequences',
          'Content Marketing for Coaches'
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'sales',
          email: 'hello@contentrepurposehub.com',
          url: 'https://cal.com/contentrepurposehub/30min'
        }
      },
      {
        '@type': 'WebSite',
        '@id': 'https://contentrepurposehub.com/#website',
        url: 'https://contentrepurposehub.com',
        name: 'ContentRepurposeHub',
        description: 'Webinar repurposing service - turn 1 webinar into 14-75+ content pieces',
        publisher: { '@id': 'https://contentrepurposehub.com/#organization' }
      },
      {
        '@type': 'Service',
        '@id': 'https://contentrepurposehub.com/#service',
        name: 'Webinar Repurposing Service',
        provider: { '@id': 'https://contentrepurposehub.com/#organization' },
        description: 'We repurpose your webinars into lead magnets, LinkedIn posts, blog posts, newsletters, email sequences, and social content. All content is optimized for Google search AND AI search engines like ChatGPT, Perplexity, and Gemini.',
        serviceType: 'Content Repurposing',
        areaServed: {
          '@type': 'Country',
          name: 'United States'
        },
        audience: {
          '@type': 'Audience',
          audienceType: 'Coaches, Consultants, Course Creators, B2B Companies'
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Webinar Repurposing Plans',
          itemListElement: [
            {
              '@type': 'Offer',
              '@id': 'https://contentrepurposehub.com/#starter-plan',
              name: 'Starter Plan',
              price: '750',
              priceCurrency: 'USD',
              priceSpecification: {
                '@type': 'UnitPriceSpecification',
                price: '750',
                priceCurrency: 'USD',
                billingDuration: 'P1M',
                unitText: 'month'
              },
              description: '1 webinar repurposed into 14 content pieces: 1 lead magnet, 10 LinkedIn posts, 1 newsletter, 1 blog post, 1 landing page copy. All SEO and AI-search optimized.',
              eligibleRegion: {
                '@type': 'Country',
                name: 'United States'
              }
            },
            {
              '@type': 'Offer',
              '@id': 'https://contentrepurposehub.com/#growth-plan',
              name: 'Growth Plan',
              price: '1000',
              priceCurrency: 'USD',
              priceSpecification: {
                '@type': 'UnitPriceSpecification',
                price: '1000',
                priceCurrency: 'USD',
                billingDuration: 'P1M',
                unitText: 'month'
              },
              description: '2 webinars repurposed into 32+ content pieces: 2 lead magnets, 20 LinkedIn posts, 2 newsletters, 2 blog posts, 2 Twitter threads, 3-email welcome sequence. All SEO and AI-search optimized.',
              eligibleRegion: {
                '@type': 'Country',
                name: 'United States'
              }
            },
            {
              '@type': 'Offer',
              '@id': 'https://contentrepurposehub.com/#scale-plan',
              name: 'Scale Plan',
              price: '1500',
              priceCurrency: 'USD',
              priceSpecification: {
                '@type': 'UnitPriceSpecification',
                price: '1500',
                priceCurrency: 'USD',
                billingDuration: 'P1M',
                unitText: 'month'
              },
              description: '4 webinars repurposed into 75+ content pieces: 4 lead magnets, 40 LinkedIn posts, 4 newsletters, 4 blog posts, 4 Twitter threads, 7-email sequence, 8 Instagram captions, 4 YouTube scripts, content calendar, brand voice document. All SEO and AI-search optimized.',
              eligibleRegion: {
                '@type': 'Country',
                name: 'United States'
              }
            }
          ]
        }
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://contentrepurposehub.com/#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is webinar repurposing?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Webinar repurposing is the process of transforming a single webinar recording into multiple content pieces. We take your 30-60 minute webinar and create lead magnets, LinkedIn posts, blog articles, newsletters, email sequences, Twitter threads, Instagram captions, and YouTube scripts from it. This maximizes the ROI of content you have already created.'
            }
          },
          {
            '@type': 'Question',
            name: 'How many content pieces do I get from one webinar?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'With our Starter plan, one webinar becomes 14 content pieces. Growth plan turns 2 webinars into 32+ pieces. Scale plan transforms 4 webinars into 75+ pieces monthly. Every piece is optimized for both Google search and AI search engines.'
            }
          },
          {
            '@type': 'Question',
            name: 'What does Google and AI-search optimized mean?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'All our content is structured to rank on Google (traditional SEO with keywords, meta descriptions, proper headings) AND to be cited by AI assistants like ChatGPT, Perplexity, Gemini, and Grok. This dual optimization means your content gets found whether someone searches on Google or asks an AI assistant for recommendations.'
            }
          },
          {
            '@type': 'Question',
            name: 'How much does webinar repurposing cost?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Our plans start at $750/month for the Starter plan (1 webinar, 14 pieces). Growth is $1,000/month (2 webinars, 32+ pieces). Scale is $1,500/month (4 webinars, 75+ pieces). All plans include SEO and AI-search optimization at no extra cost.'
            }
          },
          {
            '@type': 'Question',
            name: 'What types of content do you create from webinars?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'We create: Lead magnets (PDF guides, checklists), LinkedIn posts (thought leadership, carousel-ready), Blog posts (SEO-optimized, 1500-2500 words), Newsletters (email-ready), Email sequences (welcome series, nurture sequences), Twitter/X threads, Instagram captions, YouTube Short scripts, Landing page copy, Content calendars, and Brand voice documents.'
            }
          },
          {
            '@type': 'Question',
            name: 'How long does webinar repurposing take?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'First delivery within 7-10 business days of receiving your webinar. After that, content is delivered on a rolling weekly basis. We recommend having your webinars recorded in advance so we can work ahead of your publishing schedule.'
            }
          },
          {
            '@type': 'Question',
            name: 'Do I need to have webinars already recorded?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, you need at least one recorded webinar to start. Most coaches and consultants have webinars, workshop recordings, or training videos sitting unused. We turn that existing content into a content engine. If you run webinars regularly, we can repurpose them as you record them.'
            }
          },
          {
            '@type': 'Question',
            name: 'Will the content sound like me?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. We use your actual words from your webinar as the source material, so every piece sounds authentically like you. Scale plan includes a Brand Voice Document that ensures consistency across all content. We capture your stories, examples, and teaching style.'
            }
          },
          {
            '@type': 'Question',
            name: 'Who is webinar repurposing for?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Our service is designed for coaches, consultants, course creators, and B2B companies who already run webinars or have recorded training content. If you have valuable content sitting in a Zoom recording folder, we turn it into a consistent content machine.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can I cancel anytime?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. All plans are month-to-month with no long-term contracts. Cancel before your next billing date and you will not be charged. We earn your business every month through results.'
            }
          },
          {
            '@type': 'Question',
            name: 'Is ContentRepurposeHub a new service?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. ContentRepurposeHub launched in 2026. Early clients get more personal attention, faster turnaround, and direct access to the founder. Every content piece gets hands-on review. All plans include a 30-day satisfaction guarantee.'
            }
          }
        ]
      },
      {
        '@type': 'WebPage',
        '@id': 'https://contentrepurposehub.com/#webpage',
        url: 'https://contentrepurposehub.com',
        name: 'Webinar Repurposing Service | Turn 1 Webinar into 14-75+ Content Pieces',
        description: 'Webinar repurposing service for coaches and consultants. We transform your webinars into lead magnets, LinkedIn posts, blog articles, newsletters, and more. All content optimized for Google and AI search.',
        isPartOf: { '@id': 'https://contentrepurposehub.com/#website' },
        about: { '@id': 'https://contentrepurposehub.com/#service' },
        mainEntity: { '@id': 'https://contentrepurposehub.com/#service' }
      },
      {
        '@type': 'ItemList',
        '@id': 'https://contentrepurposehub.com/#webinar-repurposing-checklist',
        name: 'Webinar Repurposing Checklist: 14 Ways to Repurpose Your Webinar',
        description: 'Free checklist for coaches and consultants showing 14 proven ways to repurpose a single webinar into 30+ pieces of content, including video clips, blog posts, carousels, email sequences, and YouTube videos.',
        url: 'https://contentrepurposehub.com/#free-checklists',
        numberOfItems: 14,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Vertical Video Clips', description: 'Create 3-5 short-form video clips from key webinar moments for TikTok, Instagram Reels, and YouTube Shorts.' },
          { '@type': 'ListItem', position: 2, name: 'Audiogram Clips', description: 'Create 2-3 audiogram clips with waveform animations for LinkedIn and Twitter.' },
          { '@type': 'ListItem', position: 3, name: 'Quote Cards', description: 'Create 5-8 shareable quote cards from memorable webinar moments.' },
          { '@type': 'ListItem', position: 4, name: 'Full Blog Post', description: 'Transform your webinar into a 1,500-2,500 word SEO-optimized blog post.' },
          { '@type': 'ListItem', position: 5, name: 'LinkedIn Article', description: 'Write an 800-1,200 word LinkedIn article for thought leadership.' },
          { '@type': 'ListItem', position: 6, name: 'Podcast Episode', description: 'Extract audio from your webinar and create a podcast episode with intro and outro.' },
          { '@type': 'ListItem', position: 7, name: 'PDF Checklist or Guide', description: 'Create a 1-2 page PDF lead magnet that captures emails.' },
          { '@type': 'ListItem', position: 8, name: 'Slide Deck Download', description: 'Clean up your presentation slides and offer as a downloadable resource.' },
          { '@type': 'ListItem', position: 9, name: 'Twitter/X Thread', description: 'Break webinar insights into an 8-15 tweet thread that teaches.' },
          { '@type': 'ListItem', position: 10, name: 'LinkedIn Carousel', description: 'Design 8-12 swipeable carousel slides from your webinar framework.' },
          { '@type': 'ListItem', position: 11, name: 'Micro-Lesson Posts', description: 'Create 5-7 standalone social media posts from individual webinar sections.' },
          { '@type': 'ListItem', position: 12, name: 'Welcome Email Sequence', description: 'Build a 3-5 email welcome sequence that nurtures leads.' },
          { '@type': 'ListItem', position: 13, name: 'Newsletter Content', description: 'Turn webinar Q&A into 2-3 newsletter editions ready to send.' },
          { '@type': 'ListItem', position: 14, name: 'YouTube Long-Form Video', description: 'Upload your full webinar to YouTube with chapters and keyword-rich description for search traffic.' }
        ]
      },
      {
        '@type': 'HowTo',
        '@id': 'https://contentrepurposehub.com/#howto-vertical-video',
        name: 'How to Create Vertical Video Clips from Your Webinar',
        description: 'Turn key moments from your webinar into 3-5 short-form video clips for TikTok, Instagram Reels, and YouTube Shorts.',
        step: [
          { '@type': 'HowToStep', name: 'Watch and timestamp', text: 'Watch your webinar at 1.5x speed and timestamp the moments where you explained something perfectly or told a compelling story.' },
          { '@type': 'HowToStep', name: 'Cut clips', text: 'Cut 30-60 second clips from each timestamped moment.' },
          { '@type': 'HowToStep', name: 'Add captions', text: 'Add captions to each clip since 85% of viewers watch on mute.' },
          { '@type': 'HowToStep', name: 'Distribute', text: 'Post clips to TikTok, Instagram Reels, and YouTube Shorts.' }
        ]
      },
      {
        '@type': 'HowTo',
        '@id': 'https://contentrepurposehub.com/#howto-blog-post',
        name: 'How to Turn Your Webinar into an SEO Blog Post',
        description: 'Transform your webinar into a 1,500-2,500 word blog post optimized for Google and AI search engines.',
        step: [
          { '@type': 'HowToStep', name: 'Transcribe', text: 'Transcribe your webinar using Otter.ai or similar transcription tools.' },
          { '@type': 'HowToStep', name: 'Clean up', text: 'Remove filler words, ums, and verbal tics from the transcript.' },
          { '@type': 'HowToStep', name: 'Structure', text: 'Add H2 headers every 200-300 words and organize into logical sections.' },
          { '@type': 'HowToStep', name: 'Optimize', text: 'Include your target keyword in the title and throughout the post. This becomes evergreen content.' }
        ]
      },
      {
        '@type': 'HowTo',
        '@id': 'https://contentrepurposehub.com/#howto-linkedin-carousel',
        name: 'How to Create a LinkedIn Carousel from Your Webinar',
        description: 'Design 8-12 swipeable LinkedIn carousel slides from your webinar framework. Carousels outperform regular posts on LinkedIn.',
        step: [
          { '@type': 'HowToStep', name: 'Create hook slide', text: 'Design Slide 1 as a compelling hook that makes people want to swipe.' },
          { '@type': 'HowToStep', name: 'One point per slide', text: 'Create Slides 2-10 with one key point from your webinar per slide.' },
          { '@type': 'HowToStep', name: 'Add CTA', text: 'Design the last slide with a clear call-to-action.' },
          { '@type': 'HowToStep', name: 'Design', text: 'Use Canva carousel templates to create professional-looking slides.' }
        ]
      },
      {
        '@type': 'HowTo',
        '@id': 'https://contentrepurposehub.com/#howto-email-sequence',
        name: 'How to Build a Welcome Email Sequence from Your Webinar',
        description: 'Create a 3-5 email welcome sequence that nurtures leads using insights from your webinar.',
        step: [
          { '@type': 'HowToStep', name: 'Deliver value', text: 'Email 1: Deliver your lead magnet and set expectations.' },
          { '@type': 'HowToStep', name: 'Share insights', text: 'Emails 2-4: Share one key insight from your webinar per email.' },
          { '@type': 'HowToStep', name: 'Convert', text: 'Email 5: Include a soft call-to-action. Keep all emails short and actionable.' }
        ]
      },
      {
        '@type': 'HowTo',
        '@id': 'https://contentrepurposehub.com/#howto-youtube-video',
        name: 'How to Upload Your Webinar as YouTube Long-Form Video',
        description: 'Upload your full webinar to YouTube with chapters and keyword-rich description for evergreen search traffic.',
        step: [
          { '@type': 'HowToStep', name: 'Edit', text: 'Edit out dead time and unnecessary pauses from your webinar recording.' },
          { '@type': 'HowToStep', name: 'Add chapters', text: 'Add chapter markers so viewers can jump to specific sections.' },
          { '@type': 'HowToStep', name: 'Optimize title', text: 'Write a searchable, keyword-rich title for YouTube SEO.' },
          { '@type': 'HowToStep', name: 'Create thumbnail', text: 'Create an eye-catching thumbnail and let the YouTube algorithm work.' }
        ]
      }
    ]
  };

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
            <div className="font-bold text-xl text-gray-900">
              Content<span className="text-blue-600">Repurpose</span>Hub
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="/blog" className="text-gray-600 hover:text-gray-900 transition">Blog</a>
              <a href="#free-checklists" className="text-gray-600 hover:text-gray-900 transition">Free Checklists</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition">How It Works</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition">Pricing</a>
              <a href="#faq" className="text-gray-600 hover:text-gray-900 transition">FAQ</a>
              <a
                href="https://cal.com/contentrepurposehub/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition font-medium"
              >
                Book a Call
              </a>
            </div>
            <MobileNav />
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <AnimatedSection hero className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium mb-6">
              For Coaches &amp; Consultants With Recorded Webinars
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Your Webinar Already Did the Hard Part.{' '}
              <span className="gradient-text">We Turn It Into the System That Fills Your Next One.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-4 max-w-2xl mx-auto">
              One recording becomes a live blog, a lead-capturing scorecard, 30 days of LinkedIn posts, newsletters, and email sequences. Each month compounds on the last. By Month 6, your first post ranks higher than it ever could alone.
            </p>
            <p className="text-lg text-blue-600 font-medium mb-8">
              Every piece optimized for Google + AI search (ChatGPT, Perplexity, Gemini)
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <PulsingCTA
                href="https://cal.com/contentrepurposehub/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-bg text-white px-8 py-4 rounded-lg hover:opacity-90 transition font-semibold text-lg inline-block"
              >
                See How Many Months of Content You Already Have →
              </PulsingCTA>
              <a
                href="#pricing"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-gray-400 transition font-semibold text-lg"
              >
                See Pricing
              </a>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              ✓ No contracts &nbsp; ✓ First delivery in 7 days &nbsp; ✓ 30-day &quot;Sounds Like Me&quot; guarantee
            </p>
          </AnimatedSection>
        </section>

        {/* Problem Section */}
        <section className="py-20 bg-gray-50 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                You Already Created the Content. It&apos;s Sitting in a Zoom Folder.
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                10-20 hours of prep. Your best frameworks. Your real stories. Delivered once, then buried. Meanwhile, you&apos;re staring at a blank page trying to create something new for next week.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  emoji: '📁',
                  title: 'The Content Graveyard',
                  desc: "5, 10, maybe 20 webinars sitting in Google Drive. Each one contains frameworks, stories, and insights your audience has never seen as written content."
                },
                {
                  emoji: '⏰',
                  title: 'The Time Trap',
                  desc: "15-20 hours to properly repurpose one webinar into posts, articles, and lead magnets. Between client sessions and running your business, that time doesn't exist."
                },
                {
                  emoji: '🔄',
                  title: 'The Content Treadmill',
                  desc: "You post when you can. Skip weeks. Start over. Nothing compounds because there's no system connecting one piece to the next."
                },
                {
                  emoji: '🤖',
                  title: 'Invisible to AI Search',
                  desc: "Right now, someone is asking ChatGPT: 'Who's the best coach for [your topic]?' If your content isn't structured for AI search, the answer won't be you."
                },
              ].map((item, i) => (
                <AnimatedCard key={i} index={i} className="bg-white p-8 rounded-xl card-shadow card-hover-glow border border-transparent">
                  <FloatingEmoji className="text-4xl mb-4" delay={i * 500}>{item.emoji}</FloatingEmoji>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        {/* Mini CTA after Problem Section */}
        <div className="py-8 px-4 text-center bg-white">
          <p className="text-gray-700 text-lg mb-3">
            The content already exists. <span className="font-semibold text-gray-900">You just need someone to turn it into a system.</span>
          </p>
          <a
            href="#pricing"
            className="inline-block gradient-bg text-white px-6 py-3 rounded-lg hover:opacity-90 transition font-medium"
          >
            See Plans &amp; Pricing →
          </a>
        </div>

        {/* Parallax Band 1 */}
        <ParallaxBand
          imageUrl="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&w=1920&q=80"
          headline="One Webinar. Eight Content Types. Zero Extra Work."
          subtext="Your recording already contains the frameworks, stories, and data points. We extract and structure them for every platform."
        />

        {/* Free Webinar Repurposing Checklists Section */}
        <section id="free-checklists" className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
                Free Resource. No Email Required.
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Webinar Repurposing Checklist: 5 of 14 Ways to Repurpose Your Webinar
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Here are 5 proven content formats you can create from every webinar you run, with step-by-step instructions. Get all 14 by subscribing below.
              </p>
            </div>

            {/* 5 Free Checklists */}
            <div className="space-y-6">
              {/* Checklist 1: Vertical Video Clips */}
              <article className="bg-white rounded-xl p-6 md:p-8 border border-gray-200 card-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="gradient-bg text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                  <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">Short-Form Video</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">Vertical Video Clips</h3>
                <p className="text-sm text-blue-600 font-medium mb-3">Create 3-5 clips per webinar</p>
                <p className="text-gray-600 mb-4">
                  Your webinar is full of gold. Those moments where you explained something perfectly or told a story that made people lean in. Those moments become TikToks, Reels, and YouTube Shorts.
                </p>
                <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
                  <p className="text-xs font-bold text-green-700 uppercase tracking-wide mb-1">How To Do It</p>
                  <p className="text-gray-700 text-sm">
                    Watch at 1.5x speed. Timestamp the good moments. Cut 30-60 second clips. Add captions (85% watch on mute). Post everywhere.
                  </p>
                </div>
              </article>

              {/* Checklist 2: Full Blog Post */}
              <article className="bg-white rounded-xl p-6 md:p-8 border border-gray-200 card-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="gradient-bg text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                  <span className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-medium">Long-Form Content</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">Full Blog Post</h3>
                <p className="text-sm text-blue-600 font-medium mb-3">1,500-2,500 words for SEO</p>
                <p className="text-gray-600 mb-4">
                  Your webinar is a rough draft of a blog post. The structure, examples, and expertise are already there. It just needs reformatting for readers.
                </p>
                <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
                  <p className="text-xs font-bold text-green-700 uppercase tracking-wide mb-1">How To Do It</p>
                  <p className="text-gray-700 text-sm">
                    Transcribe with Otter.ai. Remove filler words. Add H2 headers every 200-300 words. Include target keyword in title. This becomes evergreen content.
                  </p>
                </div>
              </article>

              {/* Checklist 3: LinkedIn Carousel */}
              <article className="bg-white rounded-xl p-6 md:p-8 border border-gray-200 card-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="gradient-bg text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                  <span className="text-xs bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full font-medium">Social Media</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">LinkedIn Carousel</h3>
                <p className="text-sm text-blue-600 font-medium mb-3">8-12 swipeable slides</p>
                <p className="text-gray-600 mb-4">
                  Carousels outperform regular posts on LinkedIn. Take a framework from your webinar, design one slide per point, and watch the saves pile up.
                </p>
                <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
                  <p className="text-xs font-bold text-green-700 uppercase tracking-wide mb-1">How To Do It</p>
                  <p className="text-gray-700 text-sm">
                    Slide 1: Hook. Slides 2-10: One point each. Last slide: CTA. Use Canva carousel templates.
                  </p>
                </div>
              </article>

              {/* Checklist 4: Welcome Email Sequence */}
              <article className="bg-white rounded-xl p-6 md:p-8 border border-gray-200 card-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="gradient-bg text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                  <span className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium">Email Content</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">Welcome Email Sequence</h3>
                <p className="text-sm text-blue-600 font-medium mb-3">3-5 emails that nurture leads</p>
                <p className="text-gray-600 mb-4">
                  Someone downloads your lead magnet. Then what? A welcome sequence keeps you top of mind and builds the relationship that converts subscribers into clients.
                </p>
                <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
                  <p className="text-xs font-bold text-green-700 uppercase tracking-wide mb-1">How To Do It</p>
                  <p className="text-gray-700 text-sm">
                    Email 1: Deliver the magnet. Emails 2-4: One insight from your webinar each. Email 5: Soft CTA. Keep emails short and valuable.
                  </p>
                </div>
              </article>

              {/* Checklist 5: YouTube Long-Form Video */}
              <article className="bg-white rounded-xl p-6 md:p-8 border border-gray-200 card-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="gradient-bg text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">5</span>
                  <span className="text-xs bg-red-100 text-red-700 px-3 py-1 rounded-full font-medium">Evergreen Assets</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">YouTube Long-Form Video</h3>
                <p className="text-sm text-blue-600 font-medium mb-3">Full webinar for search traffic</p>
                <p className="text-gray-600 mb-4">
                  Upload to YouTube with chapters and a keyword-rich description. Your webinar often becomes your top-performing content for organic search traffic.
                </p>
                <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
                  <p className="text-xs font-bold text-green-700 uppercase tracking-wide mb-1">How To Do It</p>
                  <p className="text-gray-700 text-sm">
                    Edit out dead time. Add chapter markers. Write a searchable title. Create a thumbnail. Let the YouTube algorithm work for you.
                  </p>
                </div>
              </article>
            </div>

            {/* 9 Locked Checklists */}
            <div className="mt-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  + 9 More Ways to Repurpose Your Webinar
                </h3>
                <p className="text-gray-600 mt-2 text-lg">
                  Get the complete checklist with all 14 content formats. Free.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { num: 6, title: 'Audiogram Clips', category: 'Short-Form Video', subtitle: '2-3 clips per webinar' },
                  { num: 7, title: 'Quote Cards', category: 'Social Graphics', subtitle: '5-8 cards per webinar' },
                  { num: 8, title: 'LinkedIn Article', category: 'Long-Form Content', subtitle: '800-1,200 words' },
                  { num: 9, title: 'Podcast Episode', category: 'Long-Form Content', subtitle: 'Audio with intro/outro' },
                  { num: 10, title: 'PDF Checklist or Guide', category: 'Lead Magnets', subtitle: '1-2 pages that capture emails' },
                  { num: 11, title: 'Slide Deck Download', category: 'Lead Magnets', subtitle: 'Your slides as a resource' },
                  { num: 12, title: 'Twitter/X Thread', category: 'Social Media', subtitle: '8-15 tweets that teach' },
                  { num: 13, title: 'Micro-Lesson Posts', category: 'Social Media', subtitle: '5-7 standalone posts' },
                  { num: 14, title: 'Newsletter Content', category: 'Email Content', subtitle: '2-3 editions ready to send' },
                ].map((item) => (
                  <div key={item.num} className="relative bg-white rounded-xl p-5 border border-gray-200 overflow-hidden">
                    <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] z-10 flex items-center justify-center">
                      <div className="text-center">
                        <span className="text-2xl">🔒</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-gray-300 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">{item.num}</span>
                      <span className="text-xs text-gray-400 font-medium">{item.category}</span>
                    </div>
                    <h4 className="text-base font-semibold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-xs text-gray-500">{item.subtitle}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Lead Magnet / Email Capture Section */}
        <section id="free-checklist" className="py-20 px-4 bg-gray-50">
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 sm:p-8 md:p-12 card-shadow">
              <div className="text-center">
                <div className="inline-block bg-white/20 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                  Free Download: All 14 Checklists
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Get the Complete Webinar Repurposing Checklist
                </h2>
                <p className="text-xl text-blue-100 font-semibold mb-4">
                  All 14 Content Ideas + Step-by-Step Instructions
                </p>
                <p className="text-blue-100 mb-8 max-w-lg mx-auto">
                  You just saw 5 of the 14 ways to repurpose your webinar. Get the full checklist with all 14 content formats, including the 9 you haven&apos;t seen yet.
                </p>

                {/* Beehiiv Embed Form */}
                <div className="mb-6 bg-white rounded-xl p-4 sm:p-6 overflow-hidden">
                  <BeehiivSubscribeForm />
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-blue-100">
                  <span className="flex items-center gap-1">
                    <span className="text-green-300">✓</span> Instant PDF download
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="text-green-300">✓</span> No spam, unsubscribe anytime
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section - The Webinar Flywheel */}
        <section id="what-you-get" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
                The Webinar Flywheel
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Not Just Content. A System That Compounds.
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Other services hand you clips and posts. We build the engine: your webinar feeds content, content captures leads, leads fill your next webinar. Every month strengthens what came before.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: '📝',
                  title: 'SEO Blog Posts',
                  desc: 'Each post is a chapter in a serialized series. Post 1 links to Post 2. Post 4 strengthens Posts 1-3. By Month 6, Google sees topical authority. AI assistants cite you as the source.',
                  tag: 'Compounds Monthly'
                },
                {
                  icon: '📚',
                  title: 'Interactive Scorecards',
                  desc: 'Your best framework, turned into a lead-capturing scorecard on a live page we build and host. Visitors take the quiz, enter their email, land on your list. Works 24/7.',
                  tag: 'Captures Leads'
                },
                {
                  icon: '💼',
                  title: 'LinkedIn Posts',
                  desc: 'Written from your actual words. Your stories. Your frameworks. Your one-liners. Posted 3x/week, they build authority and drive traffic back to your blog and scorecard.',
                  tag: 'Drives Traffic'
                },
                {
                  icon: '📧',
                  title: 'Email Newsletters',
                  desc: 'Ready-to-send editions that keep subscribers engaged between webinars. Every edition links to your blog, your scorecard, your next event. The list grows. The flywheel spins.',
                  tag: 'Nurtures Leads'
                },
                {
                  icon: '📨',
                  title: 'Email Sequences',
                  desc: 'New subscriber signs up through your scorecard. The welcome sequence fires automatically. By email 3, they know your methodology. By email 5, they book a call.',
                  tag: 'Converts Leads'
                },
                {
                  icon: '📄',
                  title: 'Landing Pages',
                  desc: 'A live, hosted page that ties everything together. Your blog, scorecard, and social content all point here. One URL that captures leads and promotes your next webinar.',
                  tag: 'Central Hub'
                },
                {
                  icon: '🐦',
                  title: 'Twitter/X Threads',
                  desc: 'Your webinar insights structured for the X algorithm. Each thread ends with a CTA back to your landing page. Reach new audiences, capture them into the system.',
                  tag: 'Expands Reach'
                },
                {
                  icon: '📸',
                  title: 'Instagram Captions',
                  desc: 'Hooks pulled from real moments in your webinar. Each caption drives profile visits and DMs. Every touchpoint feeds back to your landing page.',
                  tag: 'Expands Reach'
                },
              ].map((item, i) => (
                <AnimatedCard key={i} index={i} staggerDelay={0.12} className="border border-gray-200 p-6 rounded-xl card-hover-glow">
                  <div className="flex justify-between items-start mb-3">
                    <div className="text-3xl">{item.icon}</div>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">{item.tag}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </AnimatedCard>
              ))}
            </div>

            {/* The Flywheel Visual */}
            <div className="mt-12 max-w-3xl mx-auto bg-blue-50 border border-blue-200 rounded-xl p-8 text-center">
              <p className="text-blue-900 font-bold text-lg mb-3">
                The Flywheel in Action
              </p>
              <p className="text-blue-800 text-sm leading-relaxed">
                Webinar → Blog post ranks on Google → Visitor finds your scorecard → Enters email → Welcome sequence nurtures them → They attend your next webinar → You record it → We repurpose it → The cycle accelerates.
              </p>
              <p className="text-blue-600 text-sm font-medium mt-3">
                That&apos;s the difference between &quot;more content&quot; and a growth engine.
              </p>
            </div>
          </div>
        </section>

        {/* AI Search Advantage Section */}
        <section className="py-20 bg-blue-600 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Your Content, Found Everywhere
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Traditional SEO is not enough anymore. When someone asks ChatGPT, Perplexity, or Gemini for recommendations in your niche, your content needs to be there.
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="bg-white/10 backdrop-blur p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-white mb-3">Google Optimization</h3>
                <ul className="space-y-2 text-blue-100">
                  <li>✓ Keyword research and targeting</li>
                  <li>✓ Proper heading structure (H1, H2, H3)</li>
                  <li>✓ Meta descriptions and title tags</li>
                  <li>✓ Internal linking strategy</li>
                  <li>✓ Schema markup for rich snippets</li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-white mb-3">AI Search Optimization</h3>
                <ul className="space-y-2 text-blue-100">
                  <li>✓ Clear, factual content structure</li>
                  <li>✓ Question-answer formatting</li>
                  <li>✓ Entity and topic authority signals</li>
                  <li>✓ Citation-ready formatting</li>
                  <li>✓ LLM-friendly semantic markup</li>
                </ul>
              </div>
            </div>
            <p className="text-white mt-8 text-lg font-medium">
              Every piece of content we create is optimized for both. No extra charge.
            </p>
          </div>
        </section>

        {/* Parallax Band 2 */}
        <ParallaxBand
          imageUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&w=1920&q=80"
          headline="Your Content Library Compounds. Every Month Builds on the Last."
          subtext="Month 1 plants the seed. Month 6, your first post ranks higher than it ever could alone."
        />

        {/* How It Works */}
        <section id="how-it-works" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How It Works Month Over Month
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Month 1 builds the foundation. Every month after that builds on it. Faster for us to produce. More valuable for you. The system gets stronger with every cycle.
              </p>
            </div>

            {/* Month 1 */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 gradient-bg rounded-full flex items-center justify-center text-white text-lg font-bold flex-shrink-0">1</div>
                <h3 className="text-xl font-bold text-gray-900">Month 1: We Build Your Content Engine</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 ml-13 pl-0 sm:pl-[52px]">
                {[
                  { week: 'Week 1', items: 'Blog post (live on your page) + lead magnet (interactive scorecard) + landing page with email capture' },
                  { week: 'Week 2', items: 'Newsletter edition + first 5 LinkedIn posts in your Google Sheet' },
                  { week: 'Week 3', items: 'LinkedIn posts 6-10 + your posting schedule (Mon/Wed/Fri through next month)' },
                  { week: 'Week 4', items: 'AI Ranking Report showing where your content appears in ChatGPT/Perplexity + next month planning' },
                ].map((item, i) => (
                  <div key={i} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <p className="text-blue-600 font-semibold text-sm mb-1">{item.week}</p>
                    <p className="text-gray-700 text-sm">{item.items}</p>
                  </div>
                ))}
              </div>
              <p className="text-gray-500 text-sm mt-4 sm:pl-[52px] italic">
                You receive something every week. Never a single dump.
              </p>
            </div>

            {/* Month 2+ */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white text-lg font-bold flex-shrink-0">2+</div>
                <h3 className="text-xl font-bold text-gray-900">Month 2+: Send Another Recording, We Add to the Engine</h3>
              </div>
              <div className="sm:pl-[52px]">
                <p className="text-gray-600 mb-4">
                  Send us your next webinar or podcast episode. Or one from your back catalog. We skip the foundation work (already done) and go straight to content production:
                </p>
                <div className="grid sm:grid-cols-3 gap-3 mb-4">
                  {[
                    { label: 'New blog post', detail: 'Next chapter in your content series (accumulates on your page)' },
                    { label: '10 new LinkedIn posts', detail: 'Appended to your existing Google Sheet' },
                    { label: 'New newsletter', detail: 'Ready to paste into your email platform' },
                  ].map((item, i) => (
                    <div key={i} className="bg-white rounded-lg p-4 border border-gray-200">
                      <p className="font-semibold text-gray-900 text-sm">{item.label}</p>
                      <p className="text-gray-500 text-xs mt-1">{item.detail}</p>
                    </div>
                  ))}
                </div>
                <p className="text-gray-600 text-sm">
                  Plus: updated posting schedule, AI Ranking Report, lead count summary, and your next month&apos;s plan. Same weekly cadence as Month 1.
                </p>
              </div>
            </div>

            {/* The key insight */}
            <div className="max-w-3xl mx-auto bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
              <p className="text-blue-900 font-semibold text-lg mb-2">
                Your blog posts form a serialized content series
              </p>
              <p className="text-blue-800 text-sm">
                Each monthly blog post is the next chapter in an ongoing series. Post 1 links to Post 2. Post 3 references Posts 1-2. A reader who finds Post 4 goes back and reads all of them. By Month 6, you have a 6-part deep dive that Google ranks as authoritative and AI assistants cite as comprehensive.
              </p>
            </div>
          </div>
        </section>

        {/* Mini CTA after How It Works */}
        <div className="py-8 px-4 text-center bg-gray-50">
          <p className="text-gray-700 text-lg mb-3">
            That&apos;s the system. <span className="font-semibold text-gray-900">You record. We build. You publish. It compounds.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#pricing"
              className="inline-block gradient-bg text-white px-6 py-3 rounded-lg hover:opacity-90 transition font-medium"
            >
              Choose Your Plan →
            </a>
            <a
              href="https://cal.com/contentrepurposehub/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-gray-400 transition font-medium"
            >
              Book a Free Call
            </a>
          </div>
        </div>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-gray-50 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Monthly Webinar Repurposing Plans
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Send us a webinar or podcast each month. We turn it into a content engine that compounds over time. All content is Google + AI Search optimized.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Starter */}
              <div className="bg-white border border-gray-200 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">Starter</h3>
                <p className="text-gray-600 text-sm mb-4">1 Webinar or Podcast / Month</p>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-gray-900">$750</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <p className="text-xs text-green-600 font-medium mb-4">$600/mo with 6-month commitment</p>
                <div className="text-sm text-blue-600 font-medium mb-4">14 pieces/month</div>
                <ul className="space-y-3 mb-8">
                  {[
                    '1 Blog Post (serialized, SEO + AI optimized)',
                    '1 Lead Magnet (interactive scorecard/quiz)',
                    '10 LinkedIn Posts',
                    '1 Newsletter Edition',
                    '1 Landing Page (hosted)',
                    'Monthly AI Ranking Report',
                    'Google + AI Search Optimization',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-600">
                      <span className="text-green-500 mr-2 mt-0.5">&#10003;</span>{item}
                    </li>
                  ))}
                </ul>
                <CheckoutButton
                  plan="starter"
                  className="block w-full text-center border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-gray-400 transition font-medium cursor-pointer"
                >
                  Get Started
                </CheckoutButton>
              </div>

              {/* Growth - Featured */}
              <div className="bg-white border-2 border-blue-600 rounded-2xl p-8 relative pricing-glow">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium shimmer-badge">
                  Recommended
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">Growth</h3>
                <p className="text-gray-600 text-sm mb-4">2 Webinars or Podcasts / Month</p>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-gray-900">$1,000</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <p className="text-xs text-green-600 font-medium mb-4">$800/mo with 6-month commitment</p>
                <div className="text-sm text-blue-600 font-medium mb-4">32+ pieces/month</div>
                <ul className="space-y-3 mb-8">
                  {[
                    '1 Blog Post (serialized, brand-matched)',
                    '20 LinkedIn Posts (voice-matched)',
                    '2 Newsletters',
                    '2 Twitter/X Threads',
                    '3-Email Welcome Sequence',
                    'Brand Intelligence Report',
                    'Keyword Gap Analysis + Monthly Refresh',
                    'Monthly AI Ranking Report',
                    'Google + AI Search Optimization',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-600">
                      <span className="text-green-500 mr-2 mt-0.5">&#10003;</span>{item}
                    </li>
                  ))}
                </ul>
                <CheckoutButton
                  plan="growth"
                  className="block w-full text-center gradient-bg text-white px-6 py-3 rounded-lg hover:opacity-90 transition font-medium cursor-pointer"
                >
                  Get Started
                </CheckoutButton>
              </div>

              {/* Scale */}
              <div className="bg-white border border-gray-200 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">Scale</h3>
                <p className="text-gray-600 text-sm mb-4">4 Webinars or Podcasts / Month</p>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-gray-900">$1,500</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <p className="text-xs text-green-600 font-medium mb-4">$1,200/mo with 6-month commitment</p>
                <div className="text-sm text-blue-600 font-medium mb-4">75+ pieces/month</div>
                <ul className="space-y-3 mb-8">
                  {[
                    '4 Blog Posts (serialized, brand-matched)',
                    '40 LinkedIn Posts',
                    '4 Newsletters',
                    '4 Twitter/X Threads',
                    '7-Email Nurture Sequence',
                    '8 Instagram Captions',
                    '4 YouTube Short Scripts',
                    '30-Day Content Calendar',
                    'Brand Voice Document',
                    'Keyword Gap Analysis + Monthly Refresh',
                    'Monthly AI Ranking Report',
                    'Google + AI Search Optimization',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-600">
                      <span className="text-green-500 mr-2 mt-0.5">&#10003;</span>{item}
                    </li>
                  ))}
                </ul>
                <CheckoutButton
                  plan="scale"
                  className="block w-full text-center border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-gray-400 transition font-medium cursor-pointer"
                >
                  Get Started
                </CheckoutButton>
              </div>
            </div>

            {/* Content Sprint Add-On */}
            <div className="mt-10 max-w-3xl mx-auto bg-white border border-blue-200 rounded-xl p-6 text-center">
              <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-2">Optional Add-On</p>
              <p className="text-gray-900 font-bold text-lg mb-2">
                Back Catalog Sprint: Process 3-5 Extra Recordings in Month 1
              </p>
              <p className="text-gray-600 text-sm mb-3">
                Have 10+ webinars sitting in Zoom? We&apos;ll process 3 recordings for $500 or 5 for $750 alongside your regular delivery. Only available at signup.
              </p>
            </div>

            {/* Guarantee */}
            <div className="text-center mt-10 bg-white p-6 rounded-xl max-w-2xl mx-auto card-shadow">
              <p className="text-gray-900 font-semibold text-lg mb-2">
                30-Day &quot;Sounds Like Me&quot; Guarantee
              </p>
              <p className="text-gray-600">
                If your first delivery doesn&apos;t capture your voice and expertise, full refund. You keep everything we created.
              </p>
            </div>
          </div>
        </section>

        {/* How It Compounds Section */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Month 6 Is Worth More Than Month 1
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Content repurposing isn&apos;t a one-time project. It&apos;s an engine. Every month you stay, the engine gets more powerful.
              </p>
            </div>

            {/* Compounding visualization */}
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              {[
                { month: 'Month 1', posts: '1 blog post', linkedin: '10 LinkedIn posts', extra: 'Foundation: landing page + lead magnet + brand voice' },
                { month: 'Month 3', posts: '3 blog posts', linkedin: '30 LinkedIn posts', extra: 'Google starts seeing topical authority' },
                { month: 'Month 6', posts: '6 blog posts', linkedin: '60 LinkedIn posts', extra: 'Post #1 ranks higher because #2-6 link to it' },
                { month: 'Month 12', posts: '12 blog posts', linkedin: '120 LinkedIn posts', extra: 'Full content engine + growing email list' },
              ].map((item, i) => (
                <AnimatedTimeline key={i} index={i} className="bg-white rounded-xl p-5 border border-gray-200 text-center">
                  <div className="text-blue-600 font-bold text-lg mb-2">{item.month}</div>
                  <div className="text-gray-900 font-semibold text-sm">{item.posts}</div>
                  <div className="text-gray-600 text-sm">{item.linkedin}</div>
                  <div className="text-gray-500 text-xs mt-3 italic leading-snug">{item.extra}</div>
                </AnimatedTimeline>
              ))}
            </div>

            {/* What compounds */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                { title: 'SEO Topical Authority', desc: '6 blog posts in a serialized series tells Google you\'re THE authority on this topic. Post #1 ranks better in Month 6 than it ever could alone in Month 1.' },
                { title: 'AI Search Citations', desc: 'More pages with FAQ schema and direct answers means more chances ChatGPT, Perplexity, and Gemini cite your content. We track this monthly in your AI Ranking Report.' },
                { title: 'Email List Growth', desc: 'More blog traffic means more signups through your scorecard. Larger list means more webinar attendees. More attendees means more source material. The flywheel accelerates itself.' },
                { title: 'LinkedIn Consistency', desc: 'LinkedIn\'s algorithm rewards consistent 3x/week posting. 10 posts last about 3.5 weeks. You need monthly refills. By Month 6, your reach is measurably higher.' },
                { title: 'Internal Link Network', desc: 'Each new blog post links to your landing page and previous posts. Link equity distributes across your whole content library. Every new post makes every old post stronger.' },
                { title: 'Content Freshness', desc: 'Google decays content that doesn\'t get updated. We keep adding to your series, refreshing older posts with new internal links and updated data. Your content stays alive.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{item.title}</p>
                    <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* The cancel argument */}
            <div className="max-w-3xl mx-auto bg-gray-900 text-white rounded-xl p-8 text-center">
              <p className="text-lg font-bold mb-3">
                The compounding return only works if you stay
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                Canceling after Month 2 means your blog series stops at Chapter 2. Your reader never gets Chapters 3-12. Google never sees the topical cluster that makes Post 1 rank. Your LinkedIn runs out of posts in 3.5 weeks. The 6-month discount exists because clients who stay 6 months see measurably better results than those who leave at Month 2.
              </p>
            </div>
          </div>
        </section>

        {/* Back Catalog Section */}
        <section className="py-20 bg-gray-50 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                You Don&apos;t Need to Create Anything New
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                You already have recorded webinars and podcast episodes sitting in Zoom, Riverside, or YouTube doing nothing. Each one contains unique stories, frameworks, and data points that your audience has never seen as written content.
              </p>
            </div>

            {/* The pitch */}
            <div className="bg-white rounded-xl border border-gray-200 p-8 mb-8">
              <p className="text-gray-900 text-lg leading-relaxed mb-6">
                We process <strong>one recording per month</strong> (Starter), <strong>two per month</strong> (Growth), or <strong>four per month</strong> (Scale). At your current library size, that&apos;s months of content already waiting. You don&apos;t need to record a single new thing.
              </p>
              <div className="grid sm:grid-cols-3 gap-4 mb-6">
                {[
                  { recordings: '5 recordings', months: '5 months', desc: 'of weekly content, live blog posts, and growing SEO authority' },
                  { recordings: '10 recordings', months: '10 months', desc: 'enough to build a serious topical cluster Google can\'t ignore' },
                  { recordings: '20 recordings', months: '20 months', desc: 'nearly 2 years of content from recordings you\'ve already done' },
                ].map((item, i) => (
                  <div key={i} className="bg-gray-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold gradient-text">{item.recordings}</div>
                    <div className="text-sm font-semibold text-gray-900 mt-1">= {item.months}</div>
                    <div className="text-xs text-gray-500 mt-1">{item.desc}</div>
                  </div>
                ))}
              </div>
              <p className="text-gray-500 text-sm">
                <strong>What counts as source material:</strong> Zoom webinars, YouTube videos, podcast episodes, conference talks, workshop recordings, live Q&amp;A sessions, training videos. Any recording where you&apos;re speaking and teaching.
              </p>
            </div>

            {/* Processing order */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-3">Recommended processing order:</h3>
              <ol className="space-y-2 text-sm text-gray-600">
                <li className="flex gap-2"><span className="font-bold text-blue-600">1.</span> Most commercially relevant recording (closest to what you sell)</li>
                <li className="flex gap-2"><span className="font-bold text-blue-600">2.</span> Most data-rich recording (numbers and frameworks = best blog content)</li>
                <li className="flex gap-2"><span className="font-bold text-blue-600">3.</span> Most story-rich recording (personal stories = best LinkedIn content)</li>
                <li className="flex gap-2"><span className="font-bold text-blue-600">4.</span> Evergreen topics before timely ones</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { target: 75, prefix: '14-', suffix: '+', label: 'Content Pieces Per Month', desc: 'From one webinar recording' },
                { target: 7, prefix: '', suffix: ' Days', label: 'To First Delivery', desc: 'Blog, scorecard, landing page' },
                { target: 20, prefix: '15-', suffix: ' hrs', label: 'Saved Per Month', desc: 'Time you\'d spend doing this yourself' },
                { target: 54, prefix: '$', suffix: '', label: 'Per Content Piece', desc: 'Starter plan. Freelancers charge $200-500.' },
              ].map((item, i) => (
                <AnimatedCard key={i} index={i} className="">
                  <div className="text-4xl font-bold gradient-text mb-2">
                    <AnimatedCounter target={item.target} prefix={item.prefix} suffix={item.suffix} />
                  </div>
                  <div className="text-lg font-semibold text-gray-900 mb-1">{item.label}</div>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof / Why Trust Us Section */}
        <section className="py-20 bg-gray-50 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Coaches Choose This Over DIY or AI Tools
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                A $99/month AI tool gives you clips. A VA gives you generic posts. Neither builds a system. Here&apos;s what makes this different.
              </p>
            </div>

            {/* Credibility Pillars - 4 cards, breaking Rule of 3 */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <AnimatedCard index={0} className="bg-white rounded-xl p-6 border border-gray-200 card-hover-glow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Your Words, Not AI Slop</h3>
                <p className="text-gray-600 text-sm">
                  Every piece starts from your webinar transcript. We extract your stories, examples, and insights, then structure them for search and social. The content sounds like you because it IS you. Your audience can tell the difference.
                </p>
              </AnimatedCard>
              <AnimatedCard index={1} className="bg-white rounded-xl p-6 border border-gray-200 card-hover-glow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Optimized for Google AND AI Search</h3>
                <p className="text-gray-600 text-sm">
                  Most services optimize for Google only. We structure every piece for both Google and AI assistants (ChatGPT, Perplexity, Gemini). When someone asks an AI &quot;who&apos;s the best coach for [your topic]?&quot; your content can be the answer.
                </p>
              </AnimatedCard>
              <AnimatedCard index={2} className="bg-white rounded-xl p-6 border border-gray-200 card-hover-glow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">A Monthly Engine, Not a One-Off Project</h3>
                <p className="text-gray-600 text-sm">
                  First delivery in 7-10 days. Something new every week after that. Each month adds to a compounding content library. More blog posts. More LinkedIn posts. More SEO authority. Month 6 is worth more than Month 1.
                </p>
              </AnimatedCard>
              <AnimatedCard index={3} className="bg-white rounded-xl p-6 border border-gray-200 card-hover-glow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Live Pages We Build and Host</h3>
                <p className="text-gray-600 text-sm">
                  Your blog post, scorecard, and landing page are live web pages, not PDFs in a Google Drive. Real URLs that rank on Google, capture emails, and grow your authority. We handle the hosting and technical setup.
                </p>
              </AnimatedCard>
            </div>

            {/* The Math */}
            <div className="bg-white rounded-xl border border-gray-200 p-8 md:p-10 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">The Math That Makes This a No-Brainer</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-sm font-semibold text-red-600 uppercase mb-3">Without Repurposing</p>
                  <ul className="space-y-3 text-gray-700 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-0.5">&#10005;</span>
                      <span>10-20 hours creating one webinar</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-0.5">&#10005;</span>
                      <span>Webinar gets watched once, then forgotten</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-0.5">&#10005;</span>
                      <span>15-20 more hours to create fresh content</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-0.5">&#10005;</span>
                      <span>No SEO value, no long-term traffic</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-0.5">&#10005;</span>
                      <span>Invisible to AI search engines</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold text-green-600 uppercase mb-3">With ContentRepurposeHub</p>
                  <ul className="space-y-3 text-gray-700 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-0.5">&#10003;</span>
                      <span>Same webinar becomes 14-75+ content pieces</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-0.5">&#10003;</span>
                      <span>Blog posts drive traffic for years, not hours</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-0.5">&#10003;</span>
                      <span>Save 15-20 hours/month on content creation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-0.5">&#10003;</span>
                      <span>Every piece SEO optimized for Google rankings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-0.5">&#10003;</span>
                      <span>AI search optimized: cited by ChatGPT, Perplexity</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 text-center bg-gray-50 rounded-lg p-4">
                <p className="text-gray-900 font-medium">
                  At $750/month for 14 pieces, that&apos;s <span className="text-blue-600 font-bold">$54 per content piece</span>. A freelance writer charges $200-$500 per piece. And they don&apos;t include SEO, AI optimization, or live hosted pages.
                </p>
              </div>
            </div>

            {/* Built for Coaches */}
            <div className="text-center">
              <p className="text-gray-500 text-sm font-medium uppercase tracking-wider mb-4">Built Specifically For</p>
              <div className="flex flex-wrap justify-center gap-3">
                {['Business Coaches', 'Life Coaches', 'Executive Coaches', 'Consultants', 'Course Creators', 'B2B Companies'].map((audience) => (
                  <span key={audience} className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                    {audience}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Parallax Band 3 */}
        <ParallaxBand
          imageUrl="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&w=1920&q=80"
          headline="Stop Creating From Scratch. Start Compounding."
          subtext="Every coach we work with already has the content. It just needs a system."
        />

        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-gray-50 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-6">
              {[
                {
                  q: 'What is webinar repurposing?',
                  a: 'Webinar repurposing transforms your recorded webinar into multiple content formats. We take your 30-60 minute webinar and create lead magnets, LinkedIn posts, blog articles, newsletters, email sequences, Twitter threads, and more. You create once, we multiply it everywhere.',
                },
                {
                  q: 'How many content pieces do I get?',
                  a: 'Starter plan: 14 pieces from 1 webinar. Growth plan: 32+ pieces from 2 webinars. Scale plan: 75+ pieces from 4 webinars. Every piece is optimized for Google and AI search engines.',
                },
                {
                  q: 'What does "Google + AI Search Optimized" mean?',
                  a: 'Your content is structured to rank on Google (traditional SEO) AND to be cited by AI assistants like ChatGPT, Perplexity, Gemini, and Grok. When someone asks an AI for recommendations in your niche, your content can be the answer.',
                },
                {
                  q: 'Do I need to have webinars already?',
                  a: 'Yes, you need at least one recorded webinar or podcast episode. Most coaches have 5-20 recordings sitting unused in Zoom or YouTube. We process one per month (Starter), two per month (Growth), or four per month (Scale). That means 10 existing recordings = 10 months of content without creating anything new.',
                },
                {
                  q: 'Will the content sound like me?',
                  a: 'Yes. We use YOUR words from your webinar. Every piece captures your voice, stories, and teaching style. Scale plan includes a Brand Voice Document for complete consistency.',
                },
                {
                  q: 'How long until I get my content?',
                  a: 'First delivery within 7-10 business days. After that, you receive something every week. Blog posts in Week 1, LinkedIn posts and newsletters in Weeks 2-3, and your AI Ranking Report in Week 4. Never a single dump.',
                },
                {
                  q: 'What formats do you accept?',
                  a: 'Zoom recordings, YouTube videos, Vimeo, Google Drive links, Loom. Any video format. If you can share it, we can repurpose it.',
                },
                {
                  q: 'What happens month over month?',
                  a: 'Month 1 builds the foundation: your brand voice, positioning, landing page, lead magnet, and first blog post. Month 2+ we skip all of that (it\'s already done) and go straight to content production. New blog post, new LinkedIn posts, new newsletter, updated posting schedule, AI Ranking Report. Each month is faster because we already know your voice. Each month is more valuable because the content compounds.',
                },
                {
                  q: 'What if I run out of webinars to send?',
                  a: 'Three options. (1) Each webinar brief contains enough material for 3-4 blog posts, not just 1. We can mine deeper angles from existing material. (2) We can refresh and expand existing blog posts with new data, which Google rewards. (3) Conference talks, guest podcast appearances, live Q&A sessions. Any recording where you\'re speaking works. If you truly have no source material, we offer a 2-month pause to preserve the relationship.',
                },
                {
                  q: 'Can I cancel anytime?',
                  a: 'Yes. All plans are month-to-month. Cancel before your next billing date. That said, the compounding return only works over time. Your Month 1 blog post ranks measurably better in Month 6 when Posts 2-6 link back to it. The 6-month commitment discount (20% off) exists because clients who stay see the compounding return.',
                },
                {
                  q: 'Who is this for?',
                  a: 'Coaches, consultants, course creators, and B2B companies who run webinars. If you have valuable expertise in recorded webinars and want to turn it into a consistent content engine, this is for you.',
                },
                {
                  q: 'How is this different from hiring a VA or writer?',
                  a: 'A VA might transcribe your webinar. A writer might create a few disconnected posts. We build a compounding content system: serialized blog posts that form a topical cluster, a lead capture page that grows your email list, LinkedIn posts that reference each other and drive back to your blog, and monthly AI Ranking Reports no other service provides. Everything is hosted on live pages we maintain. Your brand voice, positioning, and content strategy are embedded in our system.',
                },
                {
                  q: 'Is ContentRepurposeHub a new service?',
                  a: 'Yes. We launched in 2026, and that works in your favor. Early clients get more personal attention, faster turnaround, and direct access to the founder. Every piece gets hands-on review. Zero risk: our 30-day guarantee means you get a full refund if the content doesn\'t meet your standards.',
                },
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-xl border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.q}</h3>
                  <p className="text-gray-600">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 gradient-bg px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How Many Months of Content Are Already in Your Back Catalog?
            </h2>
            <p className="text-blue-100 text-lg mb-4">
              Tell us how many webinars and podcast episodes you have recorded. We&apos;ll map out exactly how long your existing library can fuel the flywheel, and which recording to process first for maximum impact.
            </p>
            <p className="text-blue-200 text-sm mb-8">
              Early clients get direct access to the founder. Every content piece gets hands-on review. That level of attention has an expiration date.
            </p>
            <PulsingCTA
              href="https://cal.com/contentrepurposehub/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition text-lg"
            >
              Book Your Free 20-Minute Strategy Call →
            </PulsingCTA>
            <p className="text-blue-200 text-sm mt-4">
              ✓ 20 minutes &nbsp; ✓ 30-day &quot;Sounds Like Me&quot; guarantee &nbsp; ✓ No contracts
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-400 py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="font-bold text-xl text-white mb-4 md:mb-0">
                Content<span className="text-blue-400">Repurpose</span>Hub
              </div>
              <div className="flex gap-6">
                <a href="/blog" className="hover:text-white transition">Blog</a>
                <a href="#how-it-works" className="hover:text-white transition">How It Works</a>
                <a href="#pricing" className="hover:text-white transition">Pricing</a>
                <a href="#faq" className="hover:text-white transition">FAQ</a>
                <a
                  href="https://cal.com/contentrepurposehub/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  Book a Call
                </a>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
              <div className="flex justify-center gap-4 mb-4">
                <a href="/about" className="hover:text-white transition">About</a>
                <span>·</span>
                <a href="/privacy" className="hover:text-white transition">Privacy Policy</a>
                <span>·</span>
                <a href="/terms" className="hover:text-white transition">Terms of Service</a>
              </div>
              <p className="mb-2">Founded by <a href="/about" className="text-white hover:text-blue-400 transition">Marius Galatan</a></p>
              <p>© 2026 ContentRepurposeHub. All rights reserved.</p>
              <p className="mt-2 text-gray-500">
                Webinar repurposing service for coaches and consultants. Content optimized for Google and AI search engines.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
