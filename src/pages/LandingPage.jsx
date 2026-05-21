import Navbar from "../components/landing/Navbar";

import HeroSection from "../components/landing/HeroSection";

import FeaturesSection from "../components/landing/FeaturesSection";

import TechStackSection from "../components/landing/TechStackSection";

import CTASection from "../components/landing/CTASection";

import Footer from "../components/landing/Footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <Navbar />

      <HeroSection />

      <FeaturesSection />

      <TechStackSection />

      <CTASection />

      <Footer />
    </div>
  );
};

export default LandingPage;