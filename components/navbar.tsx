'use client'

import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, LogIn, ChevronRight } from 'lucide-react';
import Link from 'next/link';


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    // onNavigateSection(id);
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { id: 'platform', label: 'Platform' },
    { id: 'insight', label: 'Insight' },
    { id: 'features', label: 'Features' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'faq', label: 'FAQ' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070E17]/90 backdrop-blur-md border-b border-[#1E3A5F]/80 shadow-2xl py-3.5'
          : 'bg-linear-to-b from-[#070E17]/90 to-transparent border-b border-white/10 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo: Yetah IQ */}
          <Link 
            href='/'
            className="flex items-center gap-2.5 group text-left focus:outline-none"
            aria-label="Yetah IQ Homepage"
          >
            <div className="w-9 h-9 rounded bg-[#0A1626] border border-[#1E3A5F] flex items-center justify-center relative overflow-hidden group-hover:border-cyan-400 transition-colors shadow-md">
              <div className="absolute inset-0 bg-linear-to-br from-cyan-500/20 via-transparent to-red-500/20"></div>
              <span className="relative z-10 font-light text-lg tracking-tighter text-white">
                Y<span className="text-red-500 font-mono text-xs ml-0.5">✦</span>
              </span>
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-light text-xl tracking-tight text-white font-sans">
                Yetah IQ
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links: platform, insight, features, pricing, faq */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                href={`#${link.id}`}
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-sm font-light transition-colors hover:text-cyan-400 capitalize ${
                //   activeSection === link.id
                //     ? 'text-cyan-400 border-b-2 border-cyan-400 pb-0.5'
                    // : 
                    'text-slate-300'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href='/login'
              className="px-4 py-2 text-xs font-mono font-light text-slate-300 hover:text-white border border-[#1E3A5F] hover:border-slate-400 rounded bg-[#0F2238]/60 backdrop-blur-sm transition-all flex items-center gap-1.5"
            >
              <LogIn className="w-3.5 h-3.5 text-cyan-400" />
              <span>Login</span>
            </Link>

            <Link
              href='/signup'
              className="px-5 py-2 text-xs font-light tracking-wider text-white bg-red-600 hover:bg-red-700 rounded transition-all flex items-center gap-1.5 shadow-md"
            >
              <span>Register</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white rounded bg-[#0A1626] border border-[#1E3A5F]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#070E17]/95 backdrop-blur-xl border-b border-[#1E3A5F] px-4 pt-4 pb-6 mt-3 space-y-3">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={`#${link.id}`}
                className="text-left py-2.5 px-3 rounded text-sm text-slate-200 hover:bg-[#0F2238] hover:text-cyan-400 font-medium capitalize"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-[#1E3A5F] flex flex-col gap-2.5">
            <Link
              href='/login'
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 text-center text-xs font-mono font-semibold text-slate-300 bg-[#0F2238] border border-[#1E3A5F] rounded flex items-center justify-center gap-2"
            >
              <LogIn className="w-3.5 h-3.5 text-cyan-400" />
              Login to Account
            </Link>
            <Link
              href='/signup'
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 text-center text-xs font-light tracking-wider text-white bg-red-600 hover:bg-red-700 rounded shadow-lg flex items-center justify-center gap-2"
            >
              Register
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};


export default Navbar