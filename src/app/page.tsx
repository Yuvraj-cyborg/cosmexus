import Hero from "@/components/Hero";
import DashboardSection from "@/components/DashboardSection";
import SpaceViewport from "@/components/SpaceViewport";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <DashboardSection />
      <SpaceViewport />
      <Footer />
    </main>
  );
}
