'use client'
import { motion } from 'motion/react';

const FeatureSection = () => {
  const data = [
    {
      id: "1",
      text: "Yetah IQ (AI insights)" 
    },
    {
      id: "2",
      text: "Performance Reviews "
    },
    {
      id: "3",
      text: "Goals & Employee Development "
    },
    {
      id: "4",
      text: "360⁰ Feedback"
    },
    {
      id: "5",
      text: "Company Memos"
    },
    {
      id: "6",
      text: "Workforce Analytics"
    },
    {
      id: "7",
      text: "Organization Management"
    }
  ]

  return (
    <section id="features" className="relative bg-[#F4F5F7] text-slate-900 py-24 sm:py-32 overflow-hidden border-b border-slate-200">
      
      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center space-y-8"
      >
        <div className="space-y-4 max-w-4xl">
          <span className="text-xs font-mono font-light tracking-widest uppercase px-3 py-1 rounded border inline-block bg-teal-50 border-teal-200 text-teal-700">
            FEATURES
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-tight text-slate-900">
            Everything Your Team Needs for <span className="text-teal-600 font-normal">Honest, Useful Reviews</span>
          </h2>
        </div>

        {/* Feature Badges */}
        <div className="flex items-center justify-center gap-3 flex-col md:flex-row flex-wrap pt-2">
          {data.map((item) => (
            <span 
              key={item.id} 
              className="text-xs font-mono font-light tracking-widest uppercase px-3.5 py-1.5 rounded border border-slate-300 bg-white text-slate-700 hover:border-teal-500 hover:text-teal-700 transition-colors shadow-sm"
            >
              {item.text}
            </span>
          ))}
        </div>

      </motion.div>
    </section>
  );
};

export default FeatureSection;