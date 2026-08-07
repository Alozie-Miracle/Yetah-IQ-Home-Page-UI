'use client'
import { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState<'yearly' | 'monthly'>('yearly');

  return (
    <section 
      id="pricing"
      className="py-24 relative border-b bg-[#F4F5F7] text-slate-900 border-slate-200 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Billing Cycle Toggle */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono font-light tracking-widest uppercase px-3 py-1 rounded border inline-block bg-teal-50 border-teal-200 text-teal-700">
              PRICING
            </span>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-slate-900">
              Simple, Transparent Pricing That Grows With You
            </h2>
          </div>

          <div className="flex items-center gap-4">
            {/* Monthly / Yearly Billing Toggle */}
            <div className="p-1 rounded-xl border flex items-center gap-1 bg-white border-slate-300 shadow-sm">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-3.5 py-1.5 text-xs cursor-pointer font-mono rounded transition-all ${
                  billingCycle === 'monthly'
                    ? 'bg-teal-600 text-white font-medium shadow'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-3.5 py-1.5 cursor-pointer text-xs font-mono rounded transition-all flex items-center gap-1.5 ${
                  billingCycle === 'yearly'
                    ? 'bg-teal-600 text-white font-medium shadow'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <span>Yearly</span>
                <span className="text-[10px] bg-emerald-500 text-black font-extrabold px-1.5 py-0.5 rounded">
                  −25%
                </span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Card 1: Free */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 relative bg-white border border-slate-200 shadow-sm hover:shadow-md"
          >
            <div>
              <div className="pt-2 mb-6">
                <h3 className="text-2xl font-light text-slate-900">
                  Free
                </h3>
                <p className="text-xs font-light mt-1 text-slate-500">
                  For small teams getting started
                </p>
              </div>

              <div className="mb-8 pb-6 border-b border-slate-200">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-light font-mono tracking-tight text-slate-900">
                    Free
                  </span>
                </div>
              </div>

              <div className="space-y-3.5 mb-8">
                {['Up to 30 people', '1 active cycle', 'Anonymous feedback'].map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" />
                    <span className="text-sm font-light text-slate-700">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href='/login'
              className="w-full cursor-pointer py-3.5 text-sm font-light transition-all flex items-center justify-center gap-2 bg-[#070E17] hover:bg-slate-800 text-white rounded-lg shadow-sm"
            >
              <span>Get started free</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Card 2: Grow (Most teams pick this) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className="rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 relative bg-white border-2 border-teal-600 shadow-xl"
          >
            <div className="absolute -top-3.5 left-8">
              <span className="px-3 py-1 rounded-full text-[10px] font-mono font-light uppercase tracking-widest bg-teal-600 text-white shadow-md">
                Most teams pick this
              </span>
            </div>

            <div>
              <div className="pt-2 mb-6">
                <h3 className="text-2xl font-light text-slate-900">
                  Grow
                </h3>
                <p className="text-xs font-light mt-1 text-slate-500">
                  For teams that take performance seriously
                </p>
              </div>

              <div className="mb-8 pb-6 border-b border-slate-200">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-light font-mono tracking-tight text-slate-900">
                    {billingCycle === 'yearly' ? '$6' : '$8'}
                  </span>
                  <span className="text-xs font-mono font-light text-slate-500">
                    /person/mo {billingCycle === 'yearly' ? 'billed yearly' : 'billed monthly'}
                  </span>
                </div>
              </div>

              <div className="space-y-3.5 mb-8">
                {['Unlimited people', 'Unlimited cycles', 'Summaries & signals'].map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" />
                    <span className="text-sm font-light text-slate-700">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href='/login'
              className="w-full py-3.5 cursor-pointer text-sm font-light transition-all flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg shadow-md"
            >
              <span>Start free trial</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Card 3: Enterprise */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
            className="rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 relative bg-white border border-slate-200 shadow-sm hover:shadow-md"
          >
            <div>
              <div className="pt-2 mb-6">
                <h3 className="text-2xl font-light text-slate-900">
                  Enterprise
                </h3>
                <p className="text-xs font-light mt-1 text-slate-500">
                  For larger orgs with advanced needs
                </p>
              </div>

              <div className="mb-8 pb-6 border-b border-slate-200">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-light font-mono tracking-tight text-slate-900">
                    Custom pricing
                  </span>
                </div>
              </div>

              <div className="space-y-3.5 mb-8">
                {['Everything in Grow', 'SSO / SAML', 'Dedicated CSM'].map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" />
                    <span className="text-sm font-light text-slate-700">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href="mailto:admin@yetahiq.com"
              className="w-full py-3.5 cursor-pointer text-sm font-light transition-all flex items-center justify-center gap-2 bg-[#070E17] hover:bg-slate-800 text-white rounded-lg shadow-sm"
            >
              <span>Contact us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default PricingSection;