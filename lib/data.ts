import { HeroSlide, BehavioralNode, MetricCard, FeaturePillar, Testimonial, PricingTier, FaqItem } from './type';

import heroBoardroomImg from '@/assets/hero_boardroom.jpg';
import heroNeuralImg from '@/assets/hero_neural_plexus.jpg';
import heroAnalyticsImg from '@/assets/hero_analytics_city.jpg';

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    title: "EXECUTIVE DECISION INTELLIGENCE",
    headline: "Turn Human Behavior into Enterprise Intelligence",
    subheadline: "Measure and optimize key team behaviors using continuous, data-driven analytics designed for corporate leaders.",
    ctaText: "Request Executive Pilot",
    secondaryCtaText: "Explore Platform",
    ctaAction: "pilot",
    badge: "BEHAVIORAL INTELLIGENCE V4.8",
    image: heroBoardroomImg,
    accentColor: "#00E5FF"
  },
  {
    id: 2,
    title: "AI PATTERN RECOGNITION ENGINE",
    headline: "The Behavioral Intelligence Engine",
    subheadline: "Map hidden communication patterns and team synergies to unlock your organization's full operational potential.",
    ctaText: "Explore the Engine",
    secondaryCtaText: "View Node Graph",
    ctaAction: "engine",
    badge: "NEURAL PLEXUS TELEMETRY",
    image: heroNeuralImg,
    accentColor: "#00E5FF"
  },
  {
    id: 3,
    title: "SINGLE PANE EXECUTIVE ANALYTICS",
    headline: "Real-Time Workforce Clarity",
    subheadline: "Track employee growth, competencies, and team dynamics instantly on a single executive dashboard.",
    ctaText: "Request a Demo",
    secondaryCtaText: "View Capabilities",
    ctaAction: "demo",
    badge: "EXECUTIVE COMMAND SUITE",
    image: heroAnalyticsImg,
    accentColor: "#E11D48"
  }
];

export const BEHAVIORAL_NODES: BehavioralNode[] = [
  {
    id: 'node-exec-1',
    label: 'C-Suite Strategy',
    role: 'Executive Committee',
    division: 'Executive',
    synergyScore: 94,
    frictionLevel: 'Low',
    communicationDensity: 88,
    x: 50,
    y: 25,
    connections: ['node-ops-1', 'node-rd-1', 'node-fin-1'],
    insights: [
      'Strong Strategic Alignment across 4 global regions',
      'Minimal decision latency (avg 1.2 business days)',
      'High sentiment density around long-term sustainability goals'
    ]
  },
  {
    id: 'node-ops-1',
    label: 'Global Operations',
    role: 'Supply Chain & Field Infrastructure',
    division: 'Operations',
    synergyScore: 89,
    frictionLevel: 'Low',
    communicationDensity: 92,
    x: 25,
    y: 50,
    connections: ['node-exec-1', 'node-energy-1', 'node-fin-1'],
    insights: [
      'Operational velocity up 18.4% YOY',
      'High cross-functional collaboration with Energy Systems',
      'Proactive risk mitigation signal detected in European hubs'
    ]
  },
  {
    id: 'node-energy-1',
    label: 'Energy Systems & Infra',
    role: 'Renewables & Grid Integration',
    division: 'Energy Systems',
    synergyScore: 86,
    frictionLevel: 'Moderate',
    communicationDensity: 79,
    x: 35,
    y: 80,
    connections: ['node-ops-1', 'node-rd-1'],
    insights: [
      'Rapid R&D integration for hydrogen initiatives',
      'Moderate communication bottleneck during transition reporting',
      'Recommended automated sync to reduce status check meetings'
    ]
  },
  {
    id: 'node-rd-1',
    label: 'Applied AI & R&D',
    role: 'Product Architecture & Data Science',
    division: 'R&D',
    synergyScore: 91,
    frictionLevel: 'Low',
    communicationDensity: 95,
    x: 75,
    y: 50,
    connections: ['node-exec-1', 'node-energy-1', 'node-fin-1'],
    insights: [
      'Highest innovation output velocity in company history',
      'Seamless knowledge transfer to C-Suite strategic initiatives',
      'Zero turnover risk detected in core engineering leadership'
    ]
  },
  {
    id: 'node-fin-1',
    label: 'Corporate Finance & Risk',
    role: 'Treasury, M&A, Capital Allocation',
    division: 'Finance',
    synergyScore: 88,
    frictionLevel: 'Low',
    communicationDensity: 84,
    x: 65,
    y: 80,
    connections: ['node-exec-1', 'node-ops-1', 'node-rd-1'],
    insights: [
      'Optimal capital allocation alignment across all divisions',
      'Predictive budget risk warnings operational',
      'Cross-departmental trust metric: 92.5%'
    ]
  }
];

export const EXECUTIVE_METRICS: MetricCard[] = [
  {
    id: 'm1',
    title: 'Organizational Synergy Index',
    value: '92.4 / 100',
    change: '+4.8% vs Q1',
    isPositive: true,
    description: 'Measures alignment across business units, executive communication, and strategic goal execution.',
    category: 'Synergy'
  },
  {
    id: 'm2',
    title: 'Workforce Friction Index',
    value: '11.2%',
    change: '-3.5% reduction',
    isPositive: true,
    description: 'Tracks communication bottlenecks, redundant sign-offs, and burnout signals across teams.',
    category: 'Risk'
  },
  {
    id: 'm3',
    title: 'Strategic Velocity Rate',
    value: '1.4x Faster',
    change: '+0.3x increase',
    isPositive: true,
    description: 'Calculates speed from executive decision initiation to multi-departmental field execution.',
    category: 'Velocity'
  },
  {
    id: 'm4',
    title: 'Retention & Growth Index',
    value: '96.8%',
    change: '+2.1% YOY',
    isPositive: true,
    description: 'Predictive talent stability score for high-performing business leaders and senior staff.',
    category: 'Alignment'
  }
];

export const FEATURE_PILLARS: FeaturePillar[] = [
  {
    id: 'f1',
    title: 'Predictive Team Friction Telemetry',
    category: 'BEHAVIORAL RISK PREVENTION',
    description: 'Detect subtle communication silos, decision drag, and team fatigue weeks before impact occurs.',
    iconName: 'Activity',
    metrics: '3.5x Faster Friction Resolution',
    details: [
      'Autonomous network graph anomaly detection',
      'Real-time burnout & sentiment fatigue alerts',
      'Silo-busting automated intervention playbooks'
    ]
  },
  {
    id: 'f2',
    title: 'Continuous Leadership Alignment Scoring',
    category: 'C-SUITE EXECUTION CLARITY',
    description: 'Quantify alignment on key corporate mandates across business units and international subsidiaries.',
    iconName: 'Compass',
    metrics: '94% C-Suite Strategic Consensus',
    details: [
      'Multi-tier executive mandate tracking',
      'Automated alignment heatmaps across BUs',
      'Board-ready quarterly governance reporting'
    ]
  },
  {
    id: 'f3',
    title: 'Real-Time Communication Network Graph',
    category: 'ORGANIZATIONAL DYNAMICS',
    description: 'Map cross-departmental interaction density without infringing on individual privacy or storing raw text.',
    iconName: 'Network',
    metrics: '100% Privacy-Preserving Telemetry',
    details: [
      'Metadata-only graph aggregation engine',
      'Cross-functional synergy scoring',
      'Informal leadership & influencer identification'
    ]
  },
  {
    id: 'f4',
    title: 'SOC-2 Type II Airgapped Compliance',
    category: 'ENTERPRISE SECURITY',
    description: 'Built for energy conglomerates, defense contractors, and financial institutions requiring rigorous security.',
    iconName: 'ShieldCheck',
    metrics: 'Zero-Trust Architecture',
    details: [
      'SOC-2 Type II & ISO 27001 certified',
      'On-premise / private cloud deployment option',
      'Granular role-based access control (RBAC)'
    ]
  },
  {
    id: 'f5',
    title: 'Autonomous Executive AI Coaching Insights',
    category: 'PREDICTIVE GUIDANCE',
    description: 'Delivers high-yield, customized behavioral nudges directly to managers and executive leaders.',
    iconName: 'Cpu',
    metrics: '4.2h Saved Per Executive Weekly',
    details: [
      'Context-aware management recommendations',
      'Tailored leadership growth pathways',
      'Continuous competency tracking & feedback'
    ]
  },
  {
    id: 'f6',
    title: 'Operational Velocity Mapping',
    category: 'VALUE CREATION & ROI',
    description: 'Correlate behavioral improvement metrics directly with bottom-line operational performance and EBITDA.',
    iconName: 'TrendingUp',
    metrics: '$12.4M Avg Annual Value Generated',
    details: [
      'EBITDA-linked behavioral benchmark models',
      'Turnover cost reduction analytics',
      'Post-M&A cultural integration tracking'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    author: 'Marcus Vance',
    role: 'Chief Operating Officer',
    company: 'Vanguard Global Energy Systems',
    industry: 'Energy & Infrastructure',
    quote: 'Yetahiq provided our executive committee with unprecedented visibility into how our 14,000 engineers and operational leaders collaborate across continents. The Behavioral Engine reduced project friction by 28% in our first two quarters.',
    impactMetric: '28% Friction Reduction',
    avatarSeed: 'marcus-vance'
  },
  {
    id: 't2',
    author: 'Dr. Elena Rostova',
    role: 'VP of Organizational Effectiveness',
    company: 'Aether Capital & Logistics',
    industry: 'Financial Services',
    quote: 'The level of rigor Yetahiq brings to behavioral data mirrors ExxonMobil-level operational discipline. We moved from opinion-based management to continuous, data-driven workforce intelligence.',
    impactMetric: '3.4x Faster Strategy Rollouts',
    avatarSeed: 'elena-rostova'
  },
  {
    id: 't3',
    author: 'Harrison Sterling',
    role: 'Senior Vice President of Human Capital',
    company: 'Apex Industrial Technologies',
    industry: 'Industrial Manufacturing',
    quote: 'The executive dashboard gives our C-Suite a single source of truth for team velocity and alignment. It is the most impactful enterprise analytics investment we have made in a decade.',
    impactMetric: '$14.2M Productivity Recovered',
    avatarSeed: 'harrison-sterling'
  }
];

export const HISTORICAL_CHART_DATA = [
  { month: 'Jan', synergy: 82, friction: 22, velocity: 68, alignment: 84 },
  { month: 'Feb', synergy: 84, friction: 19, velocity: 72, alignment: 86 },
  { month: 'Mar', synergy: 87, friction: 16, velocity: 77, alignment: 89 },
  { month: 'Apr', synergy: 89, friction: 14, velocity: 82, alignment: 91 },
  { month: 'May', synergy: 91, friction: 12, velocity: 86, alignment: 93 },
  { month: 'Jun', synergy: 94, friction: 11, velocity: 90, alignment: 96 },
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'pilot-tier',
    name: 'Executive Pilot Sandbox',
    badge: '90-DAY PROVING GROUND',
    priceMonthly: 4900,
    priceAnnual: 3900,
    description: 'Designed for corporate leadership teams evaluating behavioral telemetry across 1 to 2 key business units.',
    features: [
      'Up to 500 Communication Nodes',
      'Continuous Synergy & Friction Telemetry',
      'Weekly Executive AI Guidance Nudges',
      'Standard Dashboard Access for C-Suite',
      'SOC-2 Type II Airgapped Compliance',
      'Dedicated Deployment Manager'
    ],
    ctaText: 'Request Executive Pilot'
  },
  {
    id: 'enterprise-core',
    name: 'Enterprise Command',
    badge: 'MOST POPULAR',
    priceMonthly: 14500,
    priceAnnual: 11600,
    description: 'Full enterprise intelligence infrastructure for multinational organizations scaling across global divisions.',
    isPopular: true,
    features: [
      'Up to 5,000 Communication Nodes',
      'Full Behavioral Intelligence Plexus Engine',
      'Custom EBITDA & Turnover ROI Models',
      'Multi-Tenant Executive Role Access (RBAC)',
      'Real-Time Anomaly & Silo Alerts',
      'On-Premise / Private Cloud Gateway Options',
      '24/7 Dedicated Strategic Advisory'
    ],
    ctaText: 'Deploy Enterprise Core'
  },
  {
    id: 'global-sovereign',
    name: 'Global Airgapped Sovereign',
    badge: 'AIRGAPPED / DEFENSE',
    priceMonthly: 0, // Custom
    priceAnnual: 0,
    description: 'Fully isolated deployment for energy conglomerates, defense contractors, and sovereign infrastructure.',
    features: [
      'Unlimited Communication Nodes',
      'Complete Airgapped Hardware Appliance',
      'Zero Cloud Dependency / Custom LLM Tuning',
      'Custom HRIS & Telemetry Integrations',
      'Board-Level Governance & Compliance Pack',
      'Dedicated On-Site Security Engineers'
    ],
    ctaText: 'Contact Sovereign Sales'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'How does Yetah IQ ensure individual employee privacy?',
    answer: 'Yetah IQ utilizes a metadata-only aggregation engine that never reads, analyzes, or stores raw text content, emails, or chat messages. All behavioral telemetry is anonymized and aggregated at team/node levels (minimum 5 persons) to measure synergy and friction without individual monitoring.',
    category: 'Security'
  },
  {
    id: 'faq-[#2]',
    question: 'Can Yetah IQ be deployed in fully airgapped or on-premise environments?',
    answer: 'Yes. For energy conglomerates, government defense contractors, and financial institutions with strict data sovereignty requirements, Yetah IQ offers SOC-2 Type II certified airgapped hardware appliances and private cloud containers that run entirely inside your security perimeter.',
    category: 'Deployment'
  },
  {
    id: 'faq-3',
    question: 'What is the standard implementation timeline for an enterprise pilot?',
    answer: 'Our streamlined onboarding protocol connects with standard enterprise communication metadata (Slack, MS Teams, Outlook, Jira, HRIS) in less than 48 hours with zero endpoint software installation required on employee devices.',
    category: 'Integration'
  },
  {
    id: 'faq-4',
    question: 'How are behavioral metrics correlated with financial EBITDA and ROI?',
    answer: 'Yetah IQ maps strategic decision latency and cross-functional friction directly to operational milestones and project turnover costs, giving executive teams quantifiable ROI reports showing recovered leadership hours and accelerated execution speed.',
    category: 'Analytics'
  },
  {
    id: 'faq-5',
    question: 'How does Yetah IQ differ from traditional employee engagement surveys?',
    answer: 'Surveys are static, subjective, and backward-looking. Yetah IQ provides continuous, objective, real-time behavioral telemetry that detects emerging friction, burnout risks, and organizational misalignment weeks before they show up in surveys or operational reviews.',
    category: 'Analytics'
  }
];