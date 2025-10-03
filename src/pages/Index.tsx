import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Footer from "@/components/Footer";
import FeaturedClients from "@/components/FeaturedClients";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import TeamMember from "@/components/TeamMember";
import BeforeAfterResults from "@/components/BeforeAfterResults";
import FAQ from "@/components/FAQ";
import BlogSection from "@/components/BlogSection";
import ServicesSection from "@/components/ServicesSection";


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ServicesSection />
        <AboutSection />
        <TeamMember />
        <FeaturedClients />
        <WhyChooseUs />
        <BeforeAfterResults />
        <FAQ />
        <BlogSection />
        <About />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
