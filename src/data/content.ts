export interface ProblemOutcomeItem {
  id: string
  title: string
  description: string
}

export interface Programme {
  id: string
  title: string
  slug: string
  tagline: string
  duration: string
  level: string
  whoItIsFor: string
  price: string
  originalPrice?: string
  highlights: string[]
  tools: string[]
}

export interface CurriculumWeek {
  week: number
  title: string
  topics: string[]
  miniProject: {
    title: string
    description: string
    deliverable: string
  }
}

export interface PortfolioProject {
  id: string
  title: string
  category: string
  tools: string[]
  impactMetric: string
  description: string
  architectureHighlights: string[]
}

export interface LearningStep {
  step: string
  title: string
  description: string
  detail: string
}

export interface WhoItsForItem {
  id: string
  audience: string
  oneLiner: string
  idealFor: string
}

export interface InstructorData {
  name: string
  role: string
  bio: string
  initials: string
  credibilityPoints: {
    title: string
    detail: string
  }[]
}

export interface Testimonial {
  id: string
  name: string
  role: string
  cohort: string
  quote: string
  initials: string
}

export interface PricingPlan {
  id: string
  name: string
  tagline: string
  price: string
  originalPrice?: string
  billingNote: string
  isRecommended?: boolean
  features: string[]
  ctaText: string
}

export interface BatchInfo {
  date: string
  status: string
  seatsLeft: number
}

// 1. Problem vs Outcome
export const PROBLEM_POINTS: ProblemOutcomeItem[] = [
  {
    id: 'pain-1',
    title: 'Passive tutorial consumption',
    description:
      'Watching endless AI demos and saving Twitter threads without retaining repeatable prompt engineering or API integration patterns.',
  },
  {
    id: 'pain-2',
    title: 'Fragmented tool overwhelm',
    description:
      'Chasing 10 new AI apps every week without mastering core orchestrators like n8n or understanding how to connect LLMs to real data.',
  },
  {
    id: 'pain-3',
    title: 'Zero verifiable proof of work',
    description:
      'Possessing surface-level chat familiarity but lacking deployed apps, live webhooks, or measurable portfolio projects employers respect.',
  },
]

export const OUTCOME_POINTS: ProblemOutcomeItem[] = [
  {
    id: 'outcome-1',
    title: 'Autonomous workflow engineering',
    description:
      'Design, test, and deploy resilient multi-agent pipelines in n8n and Make that handle conditional logic, fallbacks, and live webhooks.',
  },
  {
    id: 'outcome-2',
    title: 'Rapid full-stack AI prototyping',
    description:
      'Convert concepts into working web apps with custom UI, authentication, and vector search using Claude, Gemini, and modern web frameworks.',
  },
  {
    id: 'outcome-3',
    title: 'Job-ready portfolio & credential',
    description:
      'Ship 4 production-grade capstone systems verified by senior engineers, paired with a shareable digital credential and career audit.',
  },
]

// 2. Programmes Data
export const PROGRAMMES: Programme[] = [
  {
    id: 'students',
    title: 'AI for Students',
    slug: 'ai-for-students',
    tagline: 'Supercharge academic research, build real projects, and land top-tier tech internships.',
    duration: '6 Weeks • 4 hrs/week',
    level: 'Beginner to Intermediate',
    whoItIsFor: 'College students, STEM undergraduates, and fresh graduates aiming for modern technical roles.',
    price: '₹14,999',
    originalPrice: '₹22,999',
    highlights: [
      'Automated literature reviews & thesis research',
      'Building your first AI web application',
      'Resume & portfolio transformation for tech jobs',
    ],
    tools: ['ChatGPT', 'Claude', 'Lovable', 'Canva'],
  },
  {
    id: 'professionals',
    title: 'AI for Working Professionals',
    slug: 'ai-for-professionals',
    tagline: 'Automate repetitive workflows, synthesize market intelligence, and multiply your daily impact.',
    duration: '6 Weeks • 5 hrs/week',
    level: 'Intermediate',
    whoItIsFor: 'Product managers, strategy consultants, operations leaders, and software engineers.',
    price: '₹19,999',
    originalPrice: '₹29,999',
    highlights: [
      'Executive memo & PRD generation pipelines',
      'Meeting transcript analysis & action trackers',
      'Custom GPTs tailored to enterprise workflows',
    ],
    tools: ['Claude 3.7', 'Gemini 2.0', 'n8n', 'Notion AI'],
  },
  {
    id: 'automation',
    title: 'No-Code Automation',
    slug: 'no-code-automation',
    tagline: 'Build autonomous agents that run 24/7 without maintaining server infrastructure.',
    duration: '6 Weeks • 6 hrs/week',
    level: 'Intermediate to Advanced',
    whoItIsFor: 'Growth marketers, founders, operations leads, and freelance automation specialists.',
    price: '₹24,999',
    originalPrice: '₹34,999',
    highlights: [
      'Multi-agent handoffs with conditional branching',
      'Database synchronization (Supabase, Airtable, Notion)',
      'Error alerting, rate-limit retries & webhook security',
    ],
    tools: ['n8n', 'Make', 'Claude API', 'OpenAI API'],
  },
  {
    id: 'content',
    title: 'AI Content Creation',
    slug: 'ai-content-creation',
    tagline: 'Scale premium visual assets, long-form editorial, and multi-channel campaigns effortlessly.',
    duration: '6 Weeks • 4 hrs/week',
    level: 'All Levels Welcome',
    whoItIsFor: 'Content creators, agency owners, brand designers, and growth marketers.',
    price: '₹16,999',
    originalPrice: '₹24,999',
    highlights: [
      'Multi-format carousel and ad creative pipelines',
      'Voice-consistent editorial and newsletter automation',
      'Automated video script generation & storyboarding',
    ],
    tools: ['Canva AI', 'Midjourney', 'Claude', 'ChatGPT'],
  },
]

// 3. Curriculum Week-by-Week (Weeks 1 to 6 per programme)
export const CURRICULUM_DATA: Record<string, CurriculumWeek[]> = {
  students: [
    {
      week: 1,
      title: 'Prompt Foundations & Mental Models',
      topics: [
        'Tokens, temperature, and system prompt architectures',
        'Structured outputs (JSON, Markdown tables) for research',
        'Few-shot prompting and Chain-of-Thought reasoning',
      ],
      miniProject: {
        title: 'Academic Research Synthesizer',
        description: 'Extract key hypotheses, methodologies, and limitations from 5 arXiv PDFs into structured tables.',
        deliverable: 'Interactive Notion template + Prompt System Spec',
      },
    },
    {
      week: 2,
      title: 'Multimodal AI & Data Exploration',
      topics: [
        'Visual reasoning with Gemini 2.0 Flash',
        'Code interpretation for datasets and chart generation',
        'Mathematical problem breakdown and verification loops',
      ],
      miniProject: {
        title: 'Automated Lab Data Visualizer',
        description: 'Input raw CSV data; receive annotated charts, trend summaries, and statistical sanity checks.',
        deliverable: 'Python Notebook + Gemini Prompt Promptbook',
      },
    },
    {
      week: 3,
      title: 'Building Interactive Prototypes with AI',
      topics: [
        'AI coding tools: prompt-to-UI fundamentals with Lovable',
        'Component composition and styling with Tailwind CSS',
        'Connecting free public APIs for live data',
      ],
      miniProject: {
        title: 'Campus Event & Hackathon Finder App',
        description: 'Deploy a responsive single-page web application that filters and summarizes upcoming campus hackathons.',
        deliverable: 'Live Vercel URL + GitHub Repository',
      },
    },
    {
      week: 4,
      title: 'Personal Knowledge Bases & Second Brain',
      topics: [
        'Retrieval fundamentals: embeddings and vector similarity',
        'Structuring personal notes, lecture transcripts, and bookmarks',
        'Building a query engine over your personal coursework',
      ],
      miniProject: {
        title: 'Exam Prep Assistant Bot',
        description: 'Upload semester syllabi and notes; generate custom practice exams with instant grading and explanations.',
        deliverable: 'Custom GPT / Claude Project Workspace',
      },
    },
    {
      week: 5,
      title: 'Workflow Automation for Productivity',
      topics: [
        'Introduction to event-driven webhooks',
        'Connecting Google Drive, Gmail, and Notion using Make',
        'Scheduled daily digests and automated assignment tracking',
      ],
      miniProject: {
        title: 'Daily Research Digest Pipeline',
        description: 'Pulls top papers in your major every morning at 8:00 AM and delivers a 3-bullet briefing to your Telegram/Slack.',
        deliverable: 'Active Make Scenario + Blueprint JSON',
      },
    },
    {
      week: 6,
      title: 'Career Launch & Portfolio Audit',
      topics: [
        'AI-assisted resume targeting and portfolio case study writing',
        'Live technical demonstration skills for interviews',
        'Peer presentations and industry mentor review',
      ],
      miniProject: {
        title: 'Capstone Portfolio Deployment',
        description: 'Publish your personal AI engineer portfolio showcasing all 4 semester projects with live interactive demos.',
        deliverable: 'Live Custom Domain Portfolio + Verified Certificate',
      },
    },
  ],

  professionals: [
    {
      week: 1,
      title: 'Advanced Executive Prompt Engineering',
      topics: [
        'Metaprompting, role anchoring, and tone calibration',
        'Synthesizing 50-page earnings reports and competitor transcripts',
        'Zero-hallucination citation checks and verification constraints',
      ],
      miniProject: {
        title: 'Competitive Intelligence Briefing Engine',
        description: 'Ingest 3 quarterly competitor filings and produce an executive 1-page SWOT matrix with verbatim citations.',
        deliverable: 'Production Prompt Template + Output Benchmark',
      },
    },
    {
      week: 2,
      title: 'Strategic Document & PRD Synthesis',
      topics: [
        'Turning unstructured meeting notes into detailed Product Requirement Documents (PRDs)',
        'User story generation, acceptance criteria, and edge-case modeling',
        'Architecture decision records (ADRs) with Claude 3.7',
      ],
      miniProject: {
        title: 'Autonomous PRD Generator',
        description: 'Converts raw customer interview transcripts into a fully formatted PRD with user personas and API schema specs.',
        deliverable: 'Markdown PRD + Review Checklist',
      },
    },
    {
      week: 3,
      title: 'Meeting Intelligence & Action Extraction',
      topics: [
        'Whisper transcription pipelines and speaker diarization',
        'Sentiment, blocker detection, and deadline extraction',
        'Automated ticket creation in Jira, Linear, and Asana',
      ],
      miniProject: {
        title: 'Executive Meeting Orchestrator',
        description: 'Processes Zoom/Meet audio recording, extracts decisions, and pushes assigned tickets to Linear automatically.',
        deliverable: 'Make / Zapier Automation + Webhook Test Suite',
      },
    },
    {
      week: 4,
      title: 'Enterprise Custom GPTs & Knowledge Bots',
      topics: [
        'Configuring enterprise retrieval with verified source grounding',
        'Custom actions and OpenAPI schema specification',
        'Access controls, security guardrails, and data privacy safeguards',
      ],
      miniProject: {
        title: 'Internal SOP & Policy Companion',
        description: 'A private knowledge bot answering complex HR, legal, and operational compliance queries with source doc links.',
        deliverable: 'Deployed OpenAI Custom Assistant / API Node',
      },
    },
    {
      week: 5,
      title: 'Data Analysis & SQL Generation for Leaders',
      topics: [
        'Natural language to PostgreSQL and BigQuery query generation',
        'Cohort retention analysis and revenue breakdown scripts',
        'Automated executive slide deck data synthesis',
      ],
      miniProject: {
        title: 'Self-Serve Business Intelligence Query Bot',
        description: 'Translates natural language product questions into optimized SQL queries with automated execution safety checks.',
        deliverable: 'Python / Streamlit Query Tool + Database Seed',
      },
    },
    {
      week: 6,
      title: 'Capstone: Team Productivity System',
      topics: [
        'End-to-end organizational impact presentation',
        'Cost/benefit modeling for enterprise AI adoption',
        'Final executive capstone review and certification',
      ],
      miniProject: {
        title: 'Enterprise Operations Hub',
        description: 'A fully integrated multi-tool workspace streamlining customer inquiries, internal alerts, and executive reporting.',
        deliverable: 'Live Production Pipeline + ROI Calculation Report',
      },
    },
  ],

  automation: [
    {
      week: 1,
      title: 'n8n & Make Architecture Fundamentals',
      topics: [
        'Core architecture: triggers, routers, iterators, and aggregators',
        'Webhook payloads, JSON transformations, and regex filters',
        'Authentication: API Keys, OAuth2, and header signatures',
      ],
      miniProject: {
        title: 'Instant Lead Enrichment Webhook',
        description: 'Receives new form submissions, enriches domains with Clearbit/Apollo API, and notifies private Slack channels.',
        deliverable: 'n8n Workflow JSON + Postman Test Collection',
      },
    },
    {
      week: 2,
      title: 'Integrating LLMs into Event Workflows',
      topics: [
        'OpenAI and Anthropic API nodes: structured outputs and functions',
        'Handling rate limits, retries, exponential backoffs, and timeouts',
        'Dynamic prompt construction based on real-time database state',
      ],
      miniProject: {
        title: 'Customer Ticket Triage & Routing Agent',
        description: 'Classifies support tickets by urgency and sentiment, extracts key product entities, and routes to appropriate teams.',
        deliverable: 'Live n8n Scenario with fallback notification',
      },
    },
    {
      week: 3,
      title: 'Autonomous Multi-Agent Collaboration',
      topics: [
        'Orchestrating primary and sub-agent handoffs',
        'Tool-calling frameworks: web search, calculator, database lookup',
        'Short-term vs long-term memory with Redis and Supabase',
      ],
      miniProject: {
        title: 'Autonomous Market Research Agent',
        description: 'An agent that researches target companies, crawls recent press releases, analyzes financials, and generates briefing dossiers.',
        deliverable: 'Multi-node n8n Agent Workflow with tool calling',
      },
    },
    {
      week: 4,
      title: 'Database Sync & State Management',
      topics: [
        'Supabase, PostgreSQL, and Airtable two-way synchronization',
        'Event-driven deduplication and idempotency keys',
        'Batching high-volume transactions efficiently',
      ],
      miniProject: {
        title: 'Omnichannel Inventory & Order Sync Engine',
        description: 'Real-time synchronization between Stripe checkouts, PostgreSQL inventory, and customer email alerts.',
        deliverable: 'Production database schema + automated webhook test',
      },
    },
    {
      week: 5,
      title: 'Error Handling, Logging & Security Audits',
      topics: [
        'Building failover branches and alerting on dead letters',
        'Encrypting sensitive payloads and credential rotation',
        'Sentry / Datadog webhook monitoring for automation systems',
      ],
      miniProject: {
        title: 'Self-Healing Automation Infrastructure',
        description: 'A monitoring supervisor that detects failed runs, attempts automated self-healing retries, and pings on-call engineers.',
        deliverable: 'Resilient n8n workflow with comprehensive error routes',
      },
    },
    {
      week: 6,
      title: 'Production Deployment & Client Packaging',
      topics: [
        'Self-hosting n8n on Docker / DigitalOcean / Railway',
        'Packaging reusable automation templates for client handoff',
        'Freelance pricing models and ongoing maintenance contracts',
      ],
      miniProject: {
        title: 'Turnkey Enterprise Automation Suite',
        description: 'A complete end-to-end automation client package with installation script, environment variables guide, and runbook.',
        deliverable: 'Docker Compose file + Video Walkthrough + Capstone Audit',
      },
    },
  ],

  content: [
    {
      week: 1,
      title: 'AI Brand Voice & Prompt Systems',
      topics: [
        'Encoding brand guidelines, tone parameters, and vocabulary bans',
        'Few-shot prompt libraries for recurring content formats',
        'Claude 3.7 Projects for persistent editorial memory',
      ],
      miniProject: {
        title: 'Brand Voice Matrix & Promptbook',
        description: 'Build a comprehensive 5-channel prompt playbook tailored to a specific brand identity.',
        deliverable: 'Notion Prompt Operating System + Voice Guide',
      },
    },
    {
      week: 2,
      title: 'Long-Form Editorial & Ghostwriting Pipelines',
      topics: [
        'Outline expansion, depth injection, and narrative pacing',
        'Transforming podcasts and video transcripts into comprehensive essays',
        'Automated SEO keyword integration and readability scoring',
      ],
      miniProject: {
        title: 'Newsletter Editorial Engine',
        description: 'Input a 30-minute podcast transcript; generate a 1,200-word newsletter, 5 LinkedIn posts, and 3 Twitter threads.',
        deliverable: 'End-to-end editorial pipeline + verified outputs',
      },
    },
    {
      week: 3,
      title: 'Visual Asset Generation with Canva & Midjourney',
      topics: [
        'Prompt composition for professional brand imagery',
        'Canva AI bulk creation: producing 50 carousel slides in 10 minutes',
        'Maintaining visual consistency: colors, fonts, and aspect ratios',
      ],
      miniProject: {
        title: 'Omnichannel Social Media Kit',
        description: 'Create a 10-slide high-converting educational carousel and matching story graphics using Canva AI automation.',
        deliverable: 'Figma / Canva Asset Library + Design Tokens',
      },
    },
    {
      week: 4,
      title: 'Short-Form Video Scripting & Storyboards',
      topics: [
        'Hook architecture: the first 3 seconds of viral retention',
        'Pacing, visual cue notation, and sound design callouts',
        'AI voice cloning and caption synchronization workflows',
      ],
      miniProject: {
        title: '30-Day Short-Form Video Content Calendar',
        description: 'Generate 30 production-ready TikTok/Reels scripts with hook variants, visual direction notes, and call-to-actions.',
        deliverable: 'Structured Airtable Calendar + Script Deck',
      },
    },
    {
      week: 5,
      title: 'Automated Publishing & Repurposing Systems',
      topics: [
        'Connecting content generation engines to Buffer, Hootsuite, and Ghost',
        'Automated RSS and newsletter syndication via Make',
        'Dynamic image generation via APIs',
      ],
      miniProject: {
        title: 'Autonomous Social Publishing Pipeline',
        description: 'Drops approved drafts from Notion into scheduled multi-channel social queues with dynamically rendered banners.',
        deliverable: 'Make scenario + Live Webhook Integration',
      },
    },
    {
      week: 6,
      title: 'Agency Scaling & Content Monetization',
      topics: [
        'Packaging AI content retainers for high-ticket clients ($2k-$5k/mo)',
        'Client onboarding workflows and revision governance',
        'Final showcase, portfolio review, and industry certification',
      ],
      miniProject: {
        title: 'Client-Ready AI Content Agency Proposal',
        description: 'A complete agency service deck including sample generated campaigns, workflow diagrams, and SLA pricing contracts.',
        deliverable: 'Client Pitch Deck + Live Portfolio Showcase',
      },
    },
  ],
}

// 4. Portfolio Projects Data (4 portfolio-style cards)
export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'lead-agent',
    title: 'Autonomous Sales & Lead Intelligence Agent',
    category: 'Autonomous Multi-Agent System',
    tools: ['n8n', 'Claude 3.7', 'Make', 'Google Sheets'],
    impactMetric: 'Saves 14 hrs/week • Sub-1s Webhook Trigger',
    description:
      'A multi-stage agent pipeline that ingests inbound customer inquiries, enriches domain firmographics, computes buying intent scores, and drafts contextualized executive emails.',
    architectureHighlights: [
      'Webhook listener with HMAC authentication',
      'Claude 3.7 reasoning node with JSON structured outputs',
      'Airtable two-way synchronization and automated Slack alerts',
    ],
  },
  {
    id: 'ai-knowledge-base',
    title: 'Full-Stack Enterprise Knowledge Base & Chatbot',
    category: 'Production Full-Stack Application',
    tools: ['Lovable', 'Gemini 2.0 Flash', 'Supabase', 'Tailwind CSS'],
    impactMetric: '99.4% factual accuracy • Sub-220ms response time',
    description:
      'A customer support portal featuring real-time vector search across internal PDF documentation, user authentication, conversation history persistence, and escalation webhooks.',
    architectureHighlights: [
      'Vector similarity search with pgvector and cosine distance',
      'Streaming token responses with graceful connection recovery',
      'Role-based access control for administrative audit logs',
    ],
  },
  {
    id: 'brand-engine',
    title: 'Multimodal Brand Asset & Copy Orchestrator',
    category: 'Generative Design & Content Pipeline',
    tools: ['ChatGPT', 'Canva AI', 'Claude', 'Midjourney'],
    impactMetric: '10x faster asset production • 5 synchronized formats',
    description:
      'An automated creative engine that takes raw product release notes and instantly generates branded social carousels, newsletter editorial, ad copy variations, and marketing banners.',
    architectureHighlights: [
      'Zero-drift brand voice adherence prompt system',
      'Batch SVG & Canva templating with dynamic typography',
      'Automated export to multi-aspect ratio social media queues',
    ],
  },
  {
    id: 'ops-orchestrator',
    title: 'Automated Operations & Meeting Intelligence Hub',
    category: 'Enterprise Workflow Automation',
    tools: ['Whisper', 'Claude', 'Notion API', 'Slack Webhooks'],
    impactMetric: 'Zero manual note-taking • 100% automated Linear tickets',
    description:
      'Ingests client and internal call recordings, performs speaker diarization, isolates decisive action items with assigned owners, and synchronizes tickets directly into Linear and Notion.',
    architectureHighlights: [
      'Audio chunking and transcription with high noise tolerance',
      'Deterministic action item parsing and entity extraction',
      'Direct Linear API issue creation with priority tagging',
    ],
  },
]

// 5. How Learning Works Data (4 steps)
export const LEARNING_STEPS: LearningStep[] = [
  {
    step: '01',
    title: 'Learn',
    description: 'Concise conceptual frameworks and mental models',
    detail:
      'No 40-hour bloated video lectures. Each topic is broken down into high-density 15-minute lessons explaining the foundational mechanics, token constraints, and architecture patterns.',
  },
  {
    step: '02',
    title: 'Practice',
    description: 'Pre-configured sandboxes & production templates',
    detail:
      'Jump directly into pre-built n8n workflows, Claude prompt books, and Lovable boilerplate repositories. Clone our verified production blueprints and experiment with real API keys.',
  },
  {
    step: '03',
    title: 'Build',
    description: 'Hands-on capstones solving genuine problems',
    detail:
      'Every week culminates in building a working piece of software. You leave with real web apps, autonomous agents, and automated pipelines running on the cloud—not toy examples.',
  },
  {
    step: '04',
    title: 'Get Feedback',
    description: 'Direct code & architecture reviews from AI engineers',
    detail:
      'Submit your workflows for asynchronous Loom video critiques from practicing AI engineers. Receive specific guidance on prompt reliability, rate limit defense, and portfolio polish.',
  },
]

// 6. Who It's For Data (students, freshers, working professionals, freelancers - one line each)
export const WHO_ITS_FOR: WhoItsForItem[] = [
  {
    id: 'students',
    audience: 'Students',
    oneLiner: 'Stand out from thousands of generic applicants by shipping live, deployed AI projects instead of theoretical course certificates.',
    idealFor: 'College undergraduates aiming for competitive internships and hackathons',
  },
  {
    id: 'freshers',
    audience: 'Freshers',
    oneLiner: 'Bridge the campus-to-corporate gap by mastering autonomous agents and modern AI toolchains companies are actively hiring for.',
    idealFor: 'Recent graduates (0-2 yrs) pivoting into tech, consulting, or growth roles',
  },
  {
    id: 'professionals',
    audience: 'Working Professionals',
    oneLiner: 'Automate 10+ hours of repetitive weekly operations and build intelligent workflows that multiply your strategic value.',
    idealFor: 'Product managers, analysts, operators, and engineers modernizing their output',
  },
  {
    id: 'freelancers',
    audience: 'Freelancers',
    oneLiner: 'Package high-ticket AI automation retainers ($2k-$5k/mo) and deliver agency-grade systems to clients in days, not months.',
    idealFor: 'Independent consultants, creators, and agency builders scaling their service offerings',
  },
]

// 7. Instructor & Credibility Data
export const INSTRUCTOR_DATA: InstructorData = {
  name: 'Karan Shenoy',
  role: 'Founder & Lead AI Systems Architect',
  initials: 'KS',
  bio: 'Former Staff Engineer leading generative systems and workflow automation. Over the past 4 years, Karan has engineered production LLM orchestrations serving millions of queries and mentored over 1,200 builders.',
  credibilityPoints: [
    {
      title: '8+ Years Building Real Production Systems',
      detail: 'Architected enterprise AI pipelines at scale; no theoretical academic lectures—only proven production patterns.',
    },
    {
      title: '1,200+ Alumni Across 40+ Cohorts',
      detail: 'Students and engineers trained now work at leading tech companies, venture-backed startups, and high-growth agencies.',
    },
    {
      title: 'Direct Code & Workflow Reviews',
      detail: 'Every single student project is personally audited with actionable video feedback on reliability and edge cases.',
    },
  ],
}

// 8. Testimonials Data (3 clean cards, no fake logos)
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Tanvi Saxena',
    role: 'Associate Product Manager',
    cohort: 'AI for Working Professionals (Cohort 02)',
    initials: 'TS',
    quote:
      'I automated our weekly customer sentiment pipeline in n8n within week 3. It saved our product team 9 hours of manual triage every Monday. The curriculum is purely practical.',
  },
  {
    id: 'test-2',
    name: 'Aditya Chhabra',
    role: 'Final Year CS Student',
    cohort: 'AI for Students (Cohort 03)',
    initials: 'AC',
    quote:
      'Instead of another generic to-do app, I showcased the Autonomous Market Research Agent during my interview. The hiring managers were genuinely impressed by the live webhook architecture.',
  },
  {
    id: 'test-3',
    name: 'Neha Deshmukh',
    role: 'Freelance Automation Consultant',
    cohort: 'No-Code Automation (Cohort 01)',
    initials: 'ND',
    quote:
      'The client packaging framework alone was worth the enrollment fee. I signed two recurring $2,500/mo automation retainers within 3 weeks of graduating from the cohort.',
  },
]

// 9. Batches and Pricing Plans
export const UPCOMING_BATCHES: BatchInfo[] = [
  { date: 'Nov 24, 2026', status: 'Filling Fast', seatsLeft: 7 },
  { date: 'Dec 15, 2026', status: 'Registration Open', seatsLeft: 18 },
  { date: 'Jan 12, 2027', status: 'Early Bird Open', seatsLeft: 26 },
]

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Self-Paced Track',
    tagline: 'Ideal for independent self-starters needing structured project roadmaps.',
    price: '₹9,999',
    originalPrice: '₹14,999',
    billingNote: 'One-time payment • Lifetime access',
    isRecommended: false,
    features: [
      'Full 6-week curriculum access across selected track',
      '6 downloadable weekly mini-project blueprints',
      'Curated prompt repositories & n8n templates',
      'Private Discord community access',
      'Standard digital completion certificate',
    ],
    ctaText: 'Choose Self-Paced',
  },
  {
    id: 'pro-cohort',
    name: 'Live Cohort Mentorship',
    tagline: 'Our flagship small-group cohort with live classes and personal audits.',
    price: '₹16,999',
    originalPrice: '₹24,999',
    billingNote: 'One-time payment • Flexible 3-month EMI available',
    isRecommended: true,
    features: [
      'Everything in Self-Paced Track',
      '12 live interactive masterclasses with lead instructors',
      'Weekly 1-on-1 asynchronous video project audits',
      '4 production capstones deployed to your GitHub',
      'Verified digital credential with tamper-proof URL',
      'Direct interview prep & resume modernization clinic',
    ],
    ctaText: 'Register Now',
  },
  {
    id: 'executive',
    name: '1-on-1 Career Fellowship',
    tagline: 'Comprehensive private mentorship for career switchers and founders.',
    price: '₹34,999',
    originalPrice: '₹49,999',
    billingNote: 'One-time payment • Installment options supported',
    isRecommended: false,
    features: [
      'Everything in Live Cohort Mentorship',
      '4 private 45-minute 1-on-1 strategy sessions',
      'Custom architecture design for your specific business or role',
      'Direct hiring network introduction & portfolio spotlight',
      'Private WhatsApp escalation channel for 90 days',
    ],
    ctaText: 'Apply for Fellowship',
  },
]

// 10. 8 Real FAQs (prerequisites, duration, certificate, refund, schedule, placements, payment, devices needed)
export const FAQ_QUESTIONS = [
  {
    id: 'faq-prerequisites',
    title: '1. What are the prerequisites? Do I need prior coding or math knowledge?',
    content:
      'No technical or mathematical background is required. The curriculum begins with structured prompt architecture and visual workflow builders (n8n, Make), then advances step-by-step into modern AI code generation with Lovable and APIs. If you know how to use a web browser, you are qualified.',
  },
  {
    id: 'faq-duration',
    title: '2. What is the duration and weekly time commitment?',
    content:
      'Each cohort runs for exactly 6 weeks. The estimated commitment is 4 to 6 hours per week: 2 hours of live masterclasses (recorded if you cannot attend live) and 2 to 4 hours of self-directed building with mentor support.',
  },
  {
    id: 'faq-certificate',
    title: '3. Will I receive a verified certificate upon completion?',
    content:
      'Yes. Graduates who successfully complete and deploy the 4 required capstone projects receive a verified, tamper-proof digital credential that links directly to your public GitHub repository and live project demos for LinkedIn.',
  },
  {
    id: 'faq-refund',
    title: '4. What is your refund and satisfaction policy?',
    content:
      'We offer a 100% no-questions-asked refund policy through the end of Week 1. If you attend the first week of live sessions, review the materials, and feel the cohort is not the right fit for your goals, email us for a full refund.',
  },
  {
    id: 'faq-schedule',
    title: '5. What is the live schedule, and what happens if I miss a session?',
    content:
      'Live masterclasses are hosted on Saturday and Sunday afternoons (IST / GMT friendly). All sessions are recorded in 4K and uploaded to your cohort portal within 3 hours alongside the workflow JSONs, code repos, and interactive summaries.',
  },
  {
    id: 'faq-placements',
    title: '6. Does AI Academy offer placement or career assistance?',
    content:
      'While we do not promise unrealistic "guaranteed placements," we provide comprehensive career infrastructure: personalized resume audits, modern portfolio reviews, mock interview simulations, and direct referral spotlights to our network of 60+ partner companies.',
  },
  {
    id: 'faq-payment',
    title: '7. What payment methods and installment options are available?',
    content:
      'We accept all major credit cards, debit cards, UPI, Net Banking, and international cards via Stripe and Razorpay. No-cost EMI options across 3 to 6 months are available at checkout.',
  },
  {
    id: 'faq-devices',
    title: '8. What devices and software setup do I need?',
    content:
      'Any standard laptop or desktop running Windows, macOS, or Linux with a modern web browser (Chrome, Brave, Edge, Safari) and an internet connection. All tools (n8n cloud, Claude, Lovable, Gemini, Make) run directly in the browser or on lightweight free tiers; you do not need an expensive GPU.',
  },
]
