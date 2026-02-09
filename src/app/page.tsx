import BeehiivSubscribeForm from "@/components/BeehiivSubscribeForm"
import CheckoutButton from "@/components/CheckoutButton"
import MobileNav from "@/components/MobileNav"

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
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium mb-6">
              Webinar Repurposing for Coaches & Consultants
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Turn 1 Webinar Into{' '}
              <span className="gradient-text">75+ Content Pieces</span>
            </h1>
            <p className="text-xl text-gray-600 mb-4 max-w-2xl mx-auto">
              We repurpose your webinars into lead magnets, LinkedIn posts, blog articles, newsletters, email sequences, and more.
            </p>
            <p className="text-lg text-blue-600 font-medium mb-8">
              All content optimized for Google + AI Search (ChatGPT, Perplexity, Gemini)
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://cal.com/contentrepurposehub/30min" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="gradient-bg text-white px-8 py-4 rounded-lg hover:opacity-90 transition font-semibold text-lg"
              >
                Book Your Free Strategy Call →
              </a>
              <a 
                href="#pricing" 
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-gray-400 transition font-semibold text-lg"
              >
                See Pricing
              </a>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              ✓ No long-term contracts &nbsp; ✓ First delivery in 7 days &nbsp; ✓ Cancel anytime
            </p>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-20 bg-gray-50 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Your Webinars Are Sitting Unused
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                You spent hours preparing and delivering that webinar. Then what? It disappeared into a Zoom folder.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  emoji: '📁', 
                  title: 'Content Graveyard', 
                  desc: "Amazing webinars with 200+ attendees sitting in folders, never to be seen again. That's hours of expertise wasted." 
                },
                { 
                  emoji: '⏰', 
                  title: 'No Time to Repurpose', 
                  desc: "You know you should turn that webinar into posts and articles. But who has 10+ hours to do it properly?" 
                },
                { 
                  emoji: '📉', 
                  title: 'Invisible to AI Search', 
                  desc: "People are asking ChatGPT and Perplexity for recommendations in your niche. Your content is nowhere to be found." 
                },
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-xl card-shadow">
                  <div className="text-4xl mb-4">{item.emoji}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mini CTA after Problem Section */}
        <div className="py-8 px-4 text-center bg-white">
          <p className="text-gray-700 text-lg mb-3">
            Ready to put your webinars to work? <span className="font-semibold text-gray-900">We handle the repurposing for you.</span>
          </p>
          <a
            href="#pricing"
            className="inline-block gradient-bg text-white px-6 py-3 rounded-lg hover:opacity-90 transition font-medium"
          >
            See Plans & Pricing →
          </a>
        </div>

        {/* Free Webinar Repurposing Checklists Section */}
        <section id="free-checklists" className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
                Free Resource — No Email Required
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Webinar Repurposing Checklist: 5 of 14 Ways to Repurpose Your Webinar
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Here are 5 proven content formats you can create from every webinar you run — with step-by-step instructions. Get all 14 by subscribing below.
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
                  Your webinar is full of gold. Those moments where you explained something perfectly or told a compelling story — those moments become TikToks, Reels, and YouTube Shorts.
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
                  Get the complete checklist with all 14 content formats — free.
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
                  Free Download — All 14 Checklists
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Get the Complete Webinar Repurposing Checklist
                </h2>
                <p className="text-xl text-blue-100 font-semibold mb-4">
                  All 14 Content Ideas + Step-by-Step Instructions
                </p>
                <p className="text-blue-100 mb-8 max-w-lg mx-auto">
                  You just saw 5 of the 14 ways to repurpose your webinar. Get the full checklist with all 14 content formats — including the 9 you haven&apos;t seen yet.
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

        {/* Solution Section */}
        <section id="what-you-get" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What We Create From Your Webinar
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Every piece is optimized for Google ranking AND AI search citation.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { 
                  icon: '📚', 
                  title: 'Lead Magnets', 
                  desc: 'PDF guides, checklists, and frameworks that capture emails and establish authority.',
                  tag: 'Google + AI Optimized'
                },
                { 
                  icon: '💼', 
                  title: 'LinkedIn Posts', 
                  desc: 'Thought leadership posts, stories, and carousel-ready content that builds your brand.',
                  tag: 'Algorithm Optimized'
                },
                { 
                  icon: '📝', 
                  title: 'SEO Blog Posts', 
                  desc: '1,500-2,500 word articles that rank on Google and get cited by AI assistants.',
                  tag: 'Google + AI Optimized'
                },
                { 
                  icon: '📧', 
                  title: 'Email Newsletters', 
                  desc: 'Ready-to-send newsletters that keep your list engaged and drive traffic.',
                  tag: 'Conversion Optimized'
                },
                { 
                  icon: '📨', 
                  title: 'Email Sequences', 
                  desc: 'Welcome sequences and nurture campaigns that convert subscribers to clients.',
                  tag: 'Conversion Optimized'
                },
                { 
                  icon: '🐦', 
                  title: 'Twitter/X Threads', 
                  desc: 'Viral-ready threads optimized for the X algorithm and engagement.',
                  tag: 'Algorithm Optimized'
                },
                { 
                  icon: '📸', 
                  title: 'Instagram Captions', 
                  desc: 'Engaging captions with hooks that stop the scroll and drive profile visits.',
                  tag: 'Algorithm Optimized'
                },
                { 
                  icon: '🎬', 
                  title: 'YouTube Short Scripts', 
                  desc: 'Scripts for short-form video content derived from your webinar insights.',
                  tag: 'Video Optimized'
                },
                { 
                  icon: '📄', 
                  title: 'Landing Page Copy', 
                  desc: 'High-converting landing page copy for your offers and lead magnets.',
                  tag: 'Conversion Optimized'
                },
              ].map((item, i) => (
                <div key={i} className="border border-gray-200 p-6 rounded-xl hover:border-blue-300 transition">
                  <div className="flex justify-between items-start mb-3">
                    <div className="text-3xl">{item.icon}</div>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">{item.tag}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
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

        {/* How It Works */}
        <section id="how-it-works" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How Webinar Repurposing Works
              </h2>
              <p className="text-gray-600 text-lg">
                From recorded webinar to published content in 4 simple steps
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { 
                  step: '1', 
                  title: 'Send Your Webinar', 
                  desc: 'Share your recorded webinar (Zoom, YouTube, Vimeo — any format). We handle the rest.' 
                },
                { 
                  step: '2', 
                  title: 'We Extract Gold', 
                  desc: 'Our team identifies key insights, stories, frameworks, and quotable moments from your content.' 
                },
                { 
                  step: '3', 
                  title: 'Content Creation', 
                  desc: 'We transform your webinar into 14-75+ optimized content pieces based on your plan.' 
                },
                { 
                  step: '4', 
                  title: 'Publish & Rank', 
                  desc: 'You receive ready-to-post content. Publish and watch your traffic grow from Google and AI search.' 
                },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mini CTA after How It Works */}
        <div className="py-8 px-4 text-center bg-gray-50">
          <p className="text-gray-700 text-lg mb-3">
            That&apos;s it. <span className="font-semibold text-gray-900">You record. We repurpose. You publish.</span>
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
                Webinar Repurposing Plans
              </h2>
              <p className="text-gray-600 text-lg">
                All content is Google + AI Search optimized. No hidden fees.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Starter */}
              <div className="bg-white border border-gray-200 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">Starter</h3>
                <p className="text-gray-600 text-sm mb-4">1 Webinar Repurposed</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">$750</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <div className="text-sm text-blue-600 font-medium mb-4">14 pieces/month</div>
                <ul className="space-y-3 mb-8">
                  {[
                    '1 Lead Magnet (PDF)',
                    '10 LinkedIn Posts',
                    '1 Newsletter',
                    '1 Blog Post (SEO + AI optimized)',
                    '1 Landing Page Copy',
                    'Google + AI Search Optimization'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-600">
                      <span className="text-green-500 mr-2 mt-0.5">✓</span>{item}
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
              <div className="bg-white border-2 border-blue-600 rounded-2xl p-8 relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">Growth</h3>
                <p className="text-gray-600 text-sm mb-4">2 Webinars Repurposed</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">$1,000</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <div className="text-sm text-blue-600 font-medium mb-4">32+ pieces/month</div>
                <ul className="space-y-3 mb-8">
                  {[
                    '2 Lead Magnets (PDF)',
                    '20 LinkedIn Posts',
                    '2 Newsletters',
                    '2 Blog Posts (SEO + AI optimized)',
                    '2 Twitter/X Threads',
                    '3-Email Welcome Sequence',
                    'Google + AI Search Optimization'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-600">
                      <span className="text-green-500 mr-2 mt-0.5">✓</span>{item}
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
                <p className="text-gray-600 text-sm mb-4">4 Webinars Repurposed</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">$1,500</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <div className="text-sm text-blue-600 font-medium mb-4">75+ pieces/month</div>
                <ul className="space-y-3 mb-8">
                  {[
                    '4 Lead Magnets (PDF)',
                    '40 LinkedIn Posts',
                    '4 Newsletters',
                    '4 Blog Posts (SEO + AI optimized)',
                    '4 Twitter/X Threads',
                    '7-Email Full Sequence',
                    '8 Instagram Captions',
                    '4 YouTube Short Scripts',
                    'Content Calendar',
                    'Brand Voice Document',
                    'Google + AI Search Optimization'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-600">
                      <span className="text-green-500 mr-2 mt-0.5">✓</span>{item}
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

            {/* Guarantee */}
            <div className="text-center mt-12 bg-white p-6 rounded-xl max-w-2xl mx-auto card-shadow">
              <p className="text-gray-900 font-semibold text-lg mb-2">
                30-Day Satisfaction Guarantee
              </p>
              <p className="text-gray-600">
                Not happy with the content? Full refund within the first 30 days. No questions asked.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { stat: '14-75+', label: 'Content Pieces Per Month', desc: 'From a single webinar' },
                { stat: '7 Days', label: 'First Delivery', desc: 'Fast turnaround' },
                { stat: '2X', label: 'Search Visibility', desc: 'Google + AI search' },
                { stat: '$0', label: 'Extra for SEO', desc: 'All optimization included' },
              ].map((item, i) => (
                <div key={i}>
                  <div className="text-4xl font-bold gradient-text mb-2">{item.stat}</div>
                  <div className="text-lg font-semibold text-gray-900 mb-1">{item.label}</div>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

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
                  a: 'Yes, you need at least one recorded webinar. Most coaches have webinars, workshop recordings, or training videos sitting unused. If you run webinars regularly, we repurpose them as you create them.',
                },
                {
                  q: 'Will the content sound like me?',
                  a: 'Yes. We use YOUR words from your webinar. Every piece captures your voice, stories, and teaching style. Scale plan includes a Brand Voice Document for complete consistency.',
                },
                {
                  q: 'How long until I get my content?',
                  a: 'First delivery within 7-10 business days. After that, content is delivered weekly. We recommend sending webinars in advance so we can work ahead of your publishing schedule.',
                },
                {
                  q: 'What formats do you accept?',
                  a: 'Zoom recordings, YouTube videos, Vimeo, Google Drive links, Loom — any video format. If you can share it, we can repurpose it.',
                },
                {
                  q: 'Can I cancel anytime?',
                  a: 'Yes. All plans are month-to-month. Cancel before your next billing date and you will not be charged. We earn your business every month.',
                },
                {
                  q: 'Who is this for?',
                  a: 'Coaches, consultants, course creators, and B2B companies who run webinars. If you have valuable expertise in recorded webinars and want to turn it into a consistent content engine, this is for you.',
                },
                {
                  q: 'How is this different from hiring a VA or writer?',
                  a: 'A VA might transcribe your webinar. A writer might create a few posts. We transform your webinar into a complete content system — lead magnets, posts, articles, emails — all optimized for search. Plus, we handle the SEO and AI optimization that most writers cannot do.',
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
              Stop Letting Your Webinars Collect Dust
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Book a free strategy call. We will show you exactly how to turn your existing webinars into a content machine that ranks on Google and AI search.
            </p>
            <a 
              href="https://cal.com/contentrepurposehub/30min" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition text-lg"
            >
              Book Free Strategy Call →
            </a>
            <p className="text-blue-200 text-sm mt-4">
              ✓ 20 minutes &nbsp; ✓ No commitment &nbsp; ✓ See sample content
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
