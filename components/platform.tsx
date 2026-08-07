'use client'
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

import reviewsImg from '@/assets/reviews_card.jpg';
import synthesisImg from '@/assets/synthesis_card.jpg';
import setupImg from '@/assets/setup_card.jpg';
import Image from 'next/image';

import photo from '@/assets/photo3.jpg'

const PlatformOverview = () => {
  const highlights = [
    {
      id: 'reviews',
      title: '360° Multi-Directional Reviews',
      description: 'Evaluate performance from every angle, peer, direct report, manager, and self.',
      image: reviewsImg
    },
    {
      id: 'synthesis',
      title: 'Automated Feedback Synthesis',
      description: 'Stop spending days reading hundreds of survey comments. Let intelligence group key themes instantly.',
      image: photo
    },
    {
      id: 'setup',
      title: 'Turnkey Setup',
      description: 'Launch a fully configured review cycle in under 10 minutes.',
      image: setupImg
    }
  ];

  return (
    <section id="platform" className="bg-white text-slate-900 py-20 sm:py-24 border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Section Header - ExxonMobil Corporate Style */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{  margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-4xl space-y-4"
        >
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight leading-tight">
            <span className="text-red-600 font-normal">360° Performance Intelligence</span>, Built For Teams That Care
          </h2>
          <p className="text-base sm:text-xl text-slate-600 font-light leading-relaxed">
            Yetah IQ transforms scattered feedback into clear, actionable signals. Collect 360° reviews across peer, upward, downward, and self-evaluations without the administrative friction.
          </p>
        </motion.div>

        {/* 3-Column Corporate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {highlights.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{  margin: '-50px' }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
              className="group flex flex-col justify-between space-y-4"
            >
              <div className="space-y-4">
                {/* Card Image */}
                <div className="overflow-hidden bg-slate-100 aspect-16/10 border border-slate-200 shadow-sm">
                  <Image
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Card Title (Uppercase Corporate Style) */}
                <h3 className="text-sm font-bold tracking-wider text-slate-900 uppercase font-sans">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};


export default PlatformOverview