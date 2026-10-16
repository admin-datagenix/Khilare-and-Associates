"use client";

import PageHero from "../../components/PageHero";
import Footer from "../../components/Footer";
import { ProjectsSection } from "../../components/CompanySections";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { sourceImage } from "../../config/companyData";
import "../../styles/workPage.css";

const p = [
  [
    sourceImage("1771929931960"),
    "Universal Trade Center",
    "In Progress Project",
    "100 ft Road, Vishrambag",
  ],
  [
    sourceImage("1748425326843"),
    "Commercial Building Development",
    "Commercial Project",
    "Smart commercial spaces for offices & shops",
  ],
  [
    sourceImage("1751523113626"),
    "Pruthvi Paradise",
    "Upcoming Project",
    "Yashwantnagar",
  ],
  [
    sourceImage("1748415889441"),
    "Universal Tower",
    "Upcoming Project",
    "Govt. Colony, Vishrambag",
  ],
  [sourceImage("1748425288500"), "KP TOWER", "Ready Possession", "Near D Mart"],
  [
    sourceImage("1766207140936"),
    "Unity Crown",
    "Recently Completed",
    "Commercial spaces 400–3000 sqft",
  ],
];

export default function Work() {
  return (
    <>
      {/* PROJECT PAGE HERO */}
      <PageHero
        eyebrow="Projects"
        title="Projects With Purpose."
        text="A visual showcase using project names and descriptions published by Khilare & Associates."
      />

      {/* EXISTING PROJECTS SECTION - UNCHANGED */}
      <ProjectsSection />

      {/* ADDITIONAL PROJECT CARDS */}
      <main className="work-page">
        <div className="container">
          <div className="work-page-heading">
            <div className="eyebrow">PROJECT PORTFOLIO</div>

            <h2>
              More work.
              <br />
              <span>More milestones.</span>
            </h2>

            <p>
              Explore selected projects of Khilare & Associates across
              residential, commercial and redevelopment work.
            </p>
          </div>

          <div className="wp-grid">
            {p.map(([im, t, c, l], i) => (
              <motion.article
                className="wp-card"
                key={t}
                initial={{ opacity: 0, y: 50, rotateX: 4 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.18,
                }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.7,
                }}
              >
                <div className="wp-image-wrap">
                  <img src={im} alt={t} />
                </div>

                <div className="wp-card-content">
                  <span>{c}</span>

                  <h2>{t}</h2>

                  <p>{l}</p>

                  <FiArrowUpRight className="wp-arrow" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
