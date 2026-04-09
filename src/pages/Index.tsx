import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Reviews from "@/components/Reviews";
import Portfolio from "@/components/Portfolio";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ChatAssistant from "@/components/ChatAssistant";
import StarsBackground from "@/components/StarsBackground";

const Index = () => (
  <div className="min-h-screen w-full relative overflow-x-hidden bg-background">
    <div className="fixed inset-0 -z-20 bg-background" aria-hidden="true" />
    <StarsBackground />
    <div className="relative z-10">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Reviews />
      <WhyUs />
      <Contact />
      <Footer />
      <ChatAssistant />
    </div>
  </div>
);

export default Index;
