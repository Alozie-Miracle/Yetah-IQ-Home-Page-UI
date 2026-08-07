'use client'
import { motion } from 'motion/react';

import decisionSignalsImg from '@/assets/decision_signals_preview.jpg';
import actionPlansImg from '@/assets/action_plans_preview.jpg';
import trajectoryImg from '@/assets/trajectory_tracking_preview.jpg';
import anonymityImg from '@/assets/anonymity_privacy_preview.jpg';
import Image from 'next/image';


import hand from '@/assets/hand.jpeg'
import hand2 from '@/assets/hand2.jpeg'
import tracking from '@/assets/hero3.jpg'


const InsightSection = () => {
  const items = [
    {
      id: 'signals',
      title: 'Decision Signals',
      description: 'Instantly identify who is Promotion Ready, who Needs Support, or who requires a Risk Watch.',
      image: hand,
      reverse: false
    },
    {
      id: 'plans',
      title: 'Generated Action Plans',
      description: 'Get clear, tailored recommendations on strengths, growth areas, and specific next steps for every 1:1.',
      image: hand2,
      reverse: true
    },
    {
      id: 'tracking',
      title: 'Cross-Cycle Tracking',
      description: 'Track trajectory over time to spot performance trends and high-potential team members early.',
      image: trajectoryImg,
      reverse: false
    },
    // {
    //   id: 'anonymity',
    //   title: 'Anonymity Thresholds',
    //   description: 'Keep feedback completely confidential until safety thresholds are met to protect honest communication.',
    //   image: anonymityImg,
    //   reverse: true
    // }
  ];

  return (
    <section id="insight" className="bg-[#F4F5F7] text-slate-900 py-20 sm:py-24 border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{  margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-4xl space-y-4"
        >
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight leading-tight text-slate-900">
            From Raw Feedback To <span className="text-red-600 font-normal">Instant Decision Signals</span>
          </h2>
          <p className="text-base sm:text-xl text-slate-600 font-light leading-relaxed">
            Don’t let valuable feedback gather dust in spreadsheets. Yetah IQ turns quantitative scores and qualitative comments into clear employee growth roadmaps.
          </p>
        </motion.div>

        {/* Feature Sections - Alternating Flex Layout */}
        <div className="space-y-16 sm:space-y-20">
          {items.map((item) => (
            <div
              key={item.id}
              className={`flex flex-col lg:flex-row items-center gap-8 sm:gap-12 ${
                item.reverse ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Column */}
              <motion.div 
                initial={{ opacity: 0, x: item.reverse ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{  margin: '-50px' }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
                className="w-full lg:w-1/2"
              >
                <div className="overflow-hidden bg-slate-200 aspect-16/10 border border-slate-300 shadow-sm rounded-lg">
                  <Image
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </motion.div>

              {/* Text Column */}
              <motion.div 
                initial={{ opacity: 0, x: item.reverse ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{  margin: '-50px' }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
                className="w-full lg:w-1/2 space-y-4"
              >
                <h3 className="text-xl sm:text-3xl font-light text-slate-900 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};


export default InsightSection