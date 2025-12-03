import HeroSection from "@/components/Hero";
import Skills from "@/components/Skills/Skills";
import AboutSection from "@/components/About";
import ProjectsSection from "@/components/Projects/Projects";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-gray-950 text-white overflow-hidden">
      <Header />
      <HeroSection />
      <Skills />
      <ProjectsSection />
      <AboutSection />
      <Footer />
    </main>
  );
}
