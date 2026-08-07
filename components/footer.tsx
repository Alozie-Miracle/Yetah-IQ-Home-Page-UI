import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#070E17] border-t border-[#1E3A5F] text-slate-400 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Column 1: Logo & Description */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-[#112236] border border-[#1E3A5F] flex items-center justify-center font-bold text-white text-sm">
                <span className="text-cyan-400">Y</span>
                <span className="text-red-500 text-xs font-black ml-0.5">✦</span>
              </div>
              <span className="font-extrabold text-lg text-white tracking-wider font-sans">
                Yetah IQ
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Enterprise behavioral intelligence platform built for modern corporate organizations.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-3">
            <p className="font-mono text-xs font-bold text-white uppercase tracking-wider">Navigation</p>
            <ul className="space-y-2 text-slate-300">
              <li>
                <Link href='#hero' className="hover:text-cyan-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href='#platform' className="hover:text-cyan-400 transition-colors">
                  Platform
                </Link>
              </li>
              <li>
                <Link href='#insight' className="hover:text-cyan-400 transition-colors">
                  Insight
                </Link>
              </li>
              <li>
                <Link href='#features' className="hover:text-cyan-400 transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href='#pricing'  className="hover:text-cyan-400 transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Terms and Services */}
          <div className="space-y-3">
            <p className="font-mono text-xs font-bold text-white uppercase tracking-wider">Terms & Services</p>
            <ul className="space-y-2 text-slate-300">
              <li>
                <span className="hover:text-cyan-400 transition-colors cursor-pointer ">Terms of Service</span>
              </li>
              <li>
                <span className="hover:text-cyan-400 transition-colors cursor-pointer ">Privacy Policy</span>
              </li>
              <li>
                <span className="hover:text-cyan-400 transition-colors cursor-pointer ">Security & Governance</span>
              </li>
              <li>
                <span className="hover:text-cyan-400 transition-colors cursor-pointer ">Cookie Settings</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Login and Register */}
          <div className="space-y-3">
            <p className="font-mono text-xs font-bold text-white uppercase tracking-wider">Account Access</p>
            <div className="flex flex-col gap-2 pt-1">
              <button className="w-full cursor-pointer sm:w-auto px-4 py-2 text-xs font-mono font-light text-slate-300 border border-[#1E3A5F] rounded bg-[#0F2238]/60 hover:text-white hover:border-slate-400 transition-all text-center">
                Login
              </button>
              <button className="w-full cursor-pointer sm:w-auto px-4 py-2 text-xs font-light tracking-wider text-white bg-red-600 rounded shadow hover:bg-red-700 transition-all text-center">
                Register
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-6 border-t border-[#1E3A5F] flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-500">
          <p>© {new Date().getFullYear()} Yetah IQ. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};


export default Footer