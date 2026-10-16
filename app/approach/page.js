import PageHero from "../../components/PageHero";
import FeatureCards from "../../components/FeatureCards";
import Footer from "../../components/Footer";
import "../../styles/inner.css";
const data = [
  [
    "Understand",
    "Capture client requirements, site context, scope and priorities.",
  ],
  [
    "Plan",
    "Structure the project with practical planning, coordination and timelines.",
  ],
  ["Design", "Develop drawings, layouts, solutions and technical direction."],
  [
    "Build",
    "Execute construction with skilled teams, supervision and management.",
  ],
  [
    "Deliver",
    "Complete quality checks, finishing and handover with transparency.",
  ],
];
export default function Approach() {
  return (
    <>
      <PageHero
        eyebrow="Approach"
        title="From Concept to Completion."
        text="A clear process that turns requirements into practical engineering and construction outcomes."
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
        <section className="dark-story">
          <div className="container">
            <div className="eyebrow">Precision / Quality / Delivery</div>
            <h2 className="title">
              Plan clearly.
              <br />
              Build confidently.
            </h2>
            <p className="copy">
              The firm's published profile highlights quality, safety, precision
              and timely project delivery.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
