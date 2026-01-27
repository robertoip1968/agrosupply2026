import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import AudienceSection from "@/components/AudienceSection";
import GallerySection from "@/components/GallerySection";
import WhySection from "@/components/WhySection";
import SponsorshipSection from "@/components/SponsorshipSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <div id="sobre">
          <AboutSection />
        </div>
        <StatsSection />
        <AudienceSection />
        <GallerySection />
        <WhySection />
        <SponsorshipSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
