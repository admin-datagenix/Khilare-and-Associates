"use client";
import PageHero from "../../components/PageHero";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import { siteImages } from "../../config/images";
import "../../styles/insightsPage.css";
const photos = [
  [siteImages.gallery[0], "Construction Progress"],
  [siteImages.gallery[1], "Commercial Spaces"],
  [siteImages.gallery[2], "Residential Development"],
  [siteImages.gallery[3], "Interiors"],
  [siteImages.gallery[4], "Construction"],
  [siteImages.gallery[5], "Engineering"],
];
export default function Insights() {
  return (
    <>
      <PageHero
        eyebrow="Insights / Gallery"
        title="Moments of Progress."
        text="A visual collection of construction, buildings and project imagery."
      />
      <main className="insights-page">
        <div className="container gallery-grid-page">
          {photos.map(([p, t], i) => (
            <motion.figure
              key={p}
              className={"gallery-card gc" + i}
              initial={{ opacity: 0, y: 45, scale: 0.94 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: i * 0.08, duration: 0.7 }}
            >
              <img src={p} alt={t} />
              <figcaption>{t}</figcaption>
            </motion.figure>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
