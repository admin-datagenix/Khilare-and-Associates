"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiHome,
  FiLayers,
  FiCompass,
  FiPenTool,
  FiBriefcase,
  FiRefreshCw,
} from "react-icons/fi";
import "../styles/expertiseTeaser.css";
const cards = [
  [FiHome, "Civil Engineering", "Planning • Design • Site Supervision"],
  [FiLayers, "Construction", "Residential • Commercial • Contracting"],
  [FiCompass, "Structural Consultancy", "Analysis • Guidance • Safety"],
  [FiPenTool, "Project Planning & Design", "2D/3D Planning • Coordination"],
  [FiBriefcase, "Real Estate Development", "Commercial • Residential"],
  [FiRefreshCw, "Redevelopment", "Society Projects • Modernization"],
];
export default function ExpertiseTeaser() {
  return (
    <section className="section expertise-teaser">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">What We Do</div>
            <h2 className="title">Our Expertise</h2>
            <p className="copy">
              Comprehensive solutions for every stage of construction and
              development.
            </p>
          </div>
          <Link href="/expertise" className="text-arrow">
            Explore all expertise <FiArrowUpRight />
          </Link>
        </div>
        <div className="expertise-grid">
          {cards.map(([I, t, c], i) => (
            <motion.article
              className="expertise-card"
              key={t}
              whileHover={{ y: -10, rotateX: 2 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <I />
              <span>0{i + 1}</span>
              <h3>{t}</h3>
              <p>{c}</p>
              <FiArrowUpRight className="arrow" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
