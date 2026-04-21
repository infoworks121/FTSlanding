import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import SystemFlowSection from "@/components/SystemFlowSection";
import RoleDetailsSection from "@/components/RoleDetailsSection";
import ProfitSection from "@/components/ProfitSection";
import FeaturesSection from "@/components/FeaturesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <SystemFlowSection />
    <RoleDetailsSection />
    <ProfitSection />
    <FeaturesSection />
    <WhyChooseSection />
    <TestimonialsSection />
    <FAQSection />
    <ContactSection />
    <Footer />
    <ChatBot />
  </div>
);

export default Index;
