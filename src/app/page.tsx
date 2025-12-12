import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Books from "@/components/sections/Books";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import NewsletterSignup from "@/components/NewsletterSignup";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Books />
      
      {/* Newsletter Section */}
      <section className="section">
        <div className="container-custom">
          <NewsletterSignup source="homepage" />
        </div>
      </section>
      
      <Contact />
      <Footer />
    </>
  );
}
