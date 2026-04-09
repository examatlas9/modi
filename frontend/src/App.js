import "@/App.css";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Collections from "@/components/Collections";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

function App() {
  return (
    <div className="App bg-[#0A0A0A]">
      <Header />
      <main>
        <Hero />
        <About />
        <Collections />
        <Services />
        <Testimonials />
        <FAQSection />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
