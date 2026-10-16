"use client";
import PageHero from "../../components/PageHero";
import Footer from "../../components/Footer";
import { gallery } from "../../config/companyData";
import { motion } from "framer-motion";
import "../../styles/inner.css";
import "../../styles/companySections.css";

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Real work. Real moments."
        text="The gallery keeps the original visual material from the Khilare & Associates profile."
      />
      <main style={{ backgroundColor: "#f4f0e9", paddingBottom: "80px" }}>
        <section
          className="container company-section gallery-section"
          style={{ background: "transparent" }}
        >
          <div className="gallery-grid">
            {gallery.map((img, i) => (
              <motion.figure key={img + i} whileHover={{ scale: 1.02 }}>
                <img
                  src={img}
                  alt={`Khilare & Associates gallery ${i + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    display: "block",
                  }}
                />
              </motion.figure>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
