import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Floating Header Navigation */}
      <Navbar />

      {/* Main Interactive sections */}
      <main className="flex-grow">
        {/* Hero Section (Introduction and visual impression) */}
        <Hero />

        {/* Biography Section */}
        <About />

        {/* Technical Skills and Domains */}
        <Skills />

        {/* Showcase of Portfolio Projects */}
        <Projects />

        {/* Direct Contact Form and Social Links */}
        <Contact />
      </main>

      {/* Footer and top navigation helper */}
      <Footer />
    </div>
  );
}
