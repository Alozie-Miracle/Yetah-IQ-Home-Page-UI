'use client'
import { motion } from 'motion/react';
import featuresBgImg from '@/assets/features_bg_section.jpg';
import photo from '@/assets/photo3.jpg';
import Image from 'next/image';

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
    <section id="features" className="relative text-white py-32 sm:py-40 overflow-hidden border-b border-[#1E3A5F]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={photo}
          alt="Features Background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay for High Contrast */}
        <div className="absolute inset-0 bg-linear-to-r from-[#070E17]/90 via-[#070E17]/80 to-[#070E17]/90 backdrop-blur-[2px]" />
      </div>

      {/* Content Placed at the Middle */}
      <motion.div 
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center min-h-62.5 space-y-6"
      >
        

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-tight max-w-4xl text-white">
          Everything Your Team Needs for <span className="text-cyan-400 font-normal">Honest, Useful Reviews</span>
        </h2>

        <div className='flex items-center justify-center gap-5 flex-col md:flex-row flex-wrap'>
          {data.map(data => (
            <span key={data.id} className="text-xs font-mono font-light tracking-widest uppercase px-3.5 py-1.5 rounded border border-red-800/80 bg-red-950/60 text-red-400">
              {data.text}
            </span>
          ))}
        </div>

      </motion.div>
    </section>
  );
};


export default FeatureSection