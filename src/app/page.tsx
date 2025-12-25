import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import MissionSection from "@/components/MissionSection";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <div id="about">
        <AboutSection />
      </div>
      <div id="mission">
        <MissionSection />
      </div>
      <Footer />
    </main>
  );
}
