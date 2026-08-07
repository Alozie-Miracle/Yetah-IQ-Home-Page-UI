'use client'
import { useState } from 'react';
import { ChevronDown, HelpCircle, Search, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ_LIST: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'How long does it take to set up a review cycle?',
    answer: 'You can launch your first cycle in under 10 minutes. Pick your participants, choose or customize your question set, set a deadline, and send invites.'
  },
  {
    id: 'faq-2',
    question: 'Is feedback really anonymous?',
    answer: 'Yes. Yetah IQ enforces strict anonymity thresholds. Qualitative comments and peer scores remain completely hidden until the minimum required number of submissions is met.'
  },
  {
    id: 'faq-3',
    question: 'How do AI summaries work, and is our data safe?',
    answer: 'Our intelligence engine processes anonymized review scores and text comments to extract core themes, strengths, and growth areas. Your feedback data is encrypted, never sold, and never used to train public AI models.'
  },
  {
    id: 'faq-4',
    question: 'Can we run different types of reviews (e.g., peer-only or upward-only)?',
    answer: 'Yes. You can fully customize each cycle—whether you want a complete 360° review, a simple upward manager check-in, or a peer-to-peer feedback round.'
  },
  {
    id: 'faq-5',
    question: 'Can I export reports for 1:1 meetings?',
    answer: 'Yes. You can export individual PDF summaries or CSV reports with one click, perfect for sharing with employees or bringing to calibration meetings.'
  },
  {
    id: 'faq-6',
    question: 'How does Yetah IQ help between official review cycles?',
    answer: 'Reviews shouldn’t be a once-a-year event. Yetah IQ provides continuous action tracking so managers and employees can refer back to key goals, log progress in weekly 1:1s, and keep growth plans alive year-round—not just when a review deadline approaches.'
  },
  {
    id: 'faq-7',
    question: 'Can Yetah IQ help us identify future leaders and flight risks early?',
    answer: 'Yes. By aggregating feedback across multiple cycles, the system surface-level trends automatically. You’ll get clear signals on who is consistently ready for promotion, who needs targeted coaching, and who might be showing early signs of disengagement or burnout long before it affects performance.'
  },
  {
    id: 'faq-8',
    question: 'How does Yetah IQ link feedback to actual employee development and training?',
    answer: 'Instead of just telling you what an employee is struggling with, Yetah IQ’s automated action plans generate concrete, step-by-step development goals (e.g., specific skills to practice, mentorship pairings, or project opportunities) tailored to each individual’s growth areas.'
  }
];

const FaqSection = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = FAQ_LIST.filter((item) => {
    return (
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const toggleAccordion = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-white text-slate-900 border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-slate-900">
              Frequently Asked Questions
            </h2>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl text-xs font-mono bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-teal-600 placeholder:text-slate-400 transition-all"
            />
          </div>
        </motion.div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 rounded-2xl border bg-slate-50 border-slate-200">
              <HelpCircle className="w-8 h-8 mx-auto text-slate-400 mb-2" />
              <p className="text-sm font-mono text-slate-500">
                No matching questions found for "{searchQuery}".
              </p>
            </div>
          ) : (
            filteredFaqs.map((item, index) => {
              const isOpen = openFaqId === item.id;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ margin: '-30px' }}
                  transition={{ duration: 0.4, delay: index * 0.05, ease: 'easeOut' }}
                  className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'bg-white border-teal-600 shadow-sm'
                      : 'bg-slate-50 border-slate-200 hover:border-slate-400'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-mono text-teal-700 font-semibold shrink-0">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <h3 className="text-base sm:text-lg font-light text-slate-900">
                        {item.question}
                      </h3>
                    </div>
                    <div className={`p-1.5 rounded-full transition-transform duration-300 ${isOpen ? 'rotate-180 bg-teal-600 text-white' : 'bg-slate-200 text-slate-600'}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-sm sm:text-base text-slate-600 font-light leading-relaxed border-t border-slate-100 pt-4 ml-8">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })
          )}
        </div>

        {/* Contact Email Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          className="p-8 rounded-2xl border bg-slate-50 border-slate-200 text-center space-y-4"
        >
          <div className="inline-flex p-3 rounded-full bg-teal-50 text-teal-700 border border-teal-200">
            <Mail className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-light text-slate-900">
            Have additional questions about Yetah IQ?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto font-light">
            Our team is available to help with custom evaluation setups, privacy guidelines, and organizational onboarding.
          </p>
          <div className="pt-2">
            <a
              href="mailto:admin@yetahiq.com"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-mono font-medium text-teal-700 bg-white border border-teal-200 hover:border-teal-500 rounded-lg shadow-sm hover:shadow transition-all"
            >
              <Mail className="w-4 h-4 text-teal-700" />
              <span>admin@yetahiq.com</span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default FaqSection;