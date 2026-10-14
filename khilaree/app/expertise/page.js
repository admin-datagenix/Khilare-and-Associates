import PageHero from "../../components/PageHero";
import FeatureCards from "../../components/FeatureCards";
import Footer from "../../components/Footer";
import "../../styles/inner.css";
const data = [
  [
    "Civil Engineering",
    "Expert planning, designing and site supervision with focus on quality, safety and precision.",
  ],
  [
    "Construction",
    "Full-service construction solutions for residential, commercial and industrial sites.",
  ],
  [
    "Structural Engineering Consultancy",
    "Expert analysis and guidance for strong, safe and durable structures.",
  ],
  [
    "Project Planning & Design",
    "Professional planning, creative layouts, 2D/3D models and detailing.",
  ],
  [
    "Real Estate Development",
    "Commercial and residential development with practical planning.",
  ],
  [
    "Redevelopment",
    "Modern upgrades for existing buildings with smooth project execution.",
  ],
  [
    "Contractor Services",
    "Skilled manpower, reliable management and execution support.",
  ],
  [
    "Residential Projects",
    "Customized residential projects with practical layouts and quality construction.",
  ],
];
export default function Expertise() {
  return (
    <>
      <PageHero
        eyebrow="Expertise"
        title="Engineering That Moves Projects."
        text="Explore the core capabilities presented by Khilare & Associates."
        noImage={true}
      />
      <main>
        <section className="section">
          <div className="container">
            <FeatureCards
              items={data.map(([title, text]) => ({ title, text }))}
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
