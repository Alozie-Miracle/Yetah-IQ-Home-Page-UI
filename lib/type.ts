import { StaticImageData } from "next/image";

export interface HeroSlide {
  id: number;
  title: string;
  headline: string;
  subheadline: string;
  ctaText: string;
  secondaryCtaText?: string;
  ctaAction: string;
  badge: string;
  image: StaticImageData;
  accentColor: string;
}

export interface BehavioralNode {
  id: string;
  label: string;
  role: string;
  division: 'Executive' | 'Operations' | 'Energy Systems' | 'R&D' | 'Finance';
  synergyScore: number;
  frictionLevel: 'Low' | 'Moderate' | 'High';
  communicationDensity: number;
  x: number;
  y: number;
  connections: string[];
  insights: string[];
}

export interface MetricCard {
  id: string;
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  description: string;
  category: 'Synergy' | 'Alignment' | 'Velocity' | 'Risk';
}

export interface FeaturePillar {
  id: string;
  title: string;
  category: string;
  description: string;
  iconName: string;
  metrics: string;
  details: string[];
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  industry: string;
  quote: string;
  impactMetric: string;
  avatarSeed: string;
}

export interface PricingTier {
  id: string;
  name: string;
  badge?: string;
  priceMonthly: number;
  priceAnnual: number;
  description: string;
  isPopular?: boolean;
  features: string[];
  ctaText: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'Security' | 'Integration' | 'Analytics' | 'Deployment';
}

export interface PilotFormData {
  fullName: string;
  executiveTitle: string;
  workEmail: string;
  organizationName: string;
  headcount: string;
  primaryObjective: string;
  preferredTimeline: string;
  comments: string;
}