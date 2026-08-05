
import FaqSection from "@/components/faq";
import FeatureSection from "@/components/features";
import Footer from "@/components/footer";
import HeroCarousel from "@/components/hero";
import InsightSection from "@/components/insight";
import Navbar from "@/components/navbar";
import PlatformOverview from "@/components/platform";
import PricingSection from "@/components/pricing";



export default function Home() {


  return (
    <div className="min-h-screen bg-[#070E17] text-slate-100 font-sans selection:bg-cyan-500 selection:text-black flex flex-col justify-between">
      <Navbar />

      <main className="grow">
        {/* Hero Section */}
        <HeroCarousel />

        {/* Platform / Overview Section (White Background ExxonMobil Style) */}
        <PlatformOverview />

        {/* Insight Section */}
        <InsightSection />

        {/* Feature Section */}
        <FeatureSection />

        {/* Pricing Section */}
        <PricingSection />

        {/* FAQ Section */}
        <FaqSection />

      </main>

      <Footer />
    </div>
  );
}
