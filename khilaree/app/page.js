import Hero from "../components/Hero";
import Stats from "../components/Stats";
import MarqueeStrip from "../components/MarqueeStrip";
import TeamFeature from "../components/TeamFeature";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import {
  AboutSection,
  ServicesSection,
  ProjectsSection,
  GallerySection,
  EventsSection,
  VideosSection,
} from "../components/CompanySections";
export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Stats />
        <MarqueeStrip />
        <AboutSection />
        <ServicesSection />

        <TeamFeature />
        <EventsSection />
        <GallerySection />
        <Testimonials />
        <VideosSection />
      </main>
      <Footer />
    </>
  );
}
