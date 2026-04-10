import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SystemFlowSection from "@/components/SystemFlowSection";
import RoleDetailsSection from "@/components/RoleDetailsSection";
import ProfitSection from "@/components/ProfitSection";
import FeaturesSection from "@/components/FeaturesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <SystemFlowSection />
    <RoleDetailsSection />
    <ProfitSection />
    <FeaturesSection />
    <WhyChooseSection />
    <TestimonialsSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
