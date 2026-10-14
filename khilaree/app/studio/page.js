"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiCheckCircle } from "react-icons/fi";
import PageHero from "../../components/PageHero";
import Footer from "../../components/Footer";
import { siteImages } from "../../config/images";
import { ServicesSection } from "../../components/CompanySections";
import "../../styles/inner.css";
import "../../styles/studio.css";

const principles = [
  {
    num: "01",
    tag: "TECHNICAL RIGOR",
    title: "Engineering Excellence",
    description:
      "Professional engineering, careful planning, and technically informed execution across every structural phase.",
    detail:
      "Advanced site supervision, structural stability calculations, and coordinated architectural execution.",
  },
  {
    num: "02",
    tag: "MATERIAL INTEGRITY",
    title: "Quality Without Compromise",
    description:
      "A consistent focus on construction quality and suitable materials that guarantee long-term durability.",
    detail:
      "Strict material procurement, testing standards, and adherence to proven building codes.",
  },
  {
    num: "03",
    tag: "DISCIPLINED SCHEDULE",
    title: "Timely Project Delivery",
    description:
      "Organized project execution and attention to agreed timelines through milestone-driven planning.",
    detail:
      "Systematic resource scheduling, transparent phase management, and accountable project oversight.",
  },
  {
    num: "04",
    tag: "CLIENT VALUE",
    title: "Customer-First Approach",
    description:
      "Thoughtful solutions that consider client requirements, budget considerations, and project needs.",
    detail:
      "Clear transparent advisory, customized spatial configurations, and lifelong property dependability.",
  },
];

const highlights = [
  {
    num: "01",
    title: "Established in 1992",
    desc: "Over 30 years of continuous civil engineering practice and trusted regional construction leadership.",
  },
  {
    num: "02",
    title: "Engineering Expertise",
    desc: "Comprehensive structural planning, technical supervision, and rigorous on-site quality controls.",
  },
  {
    num: "03",
    title: "Quality Construction",
    desc: "Strict material standards, proven building practices, and lasting architectural durability.",
  },
  {
    num: "04",
    title: "Customer-Centric Approach",
    desc: "Tailored solutions designed for residential homeowners, commercial enterprises, and institutions.",
  },
];

export default function Studio() {
  return (
    <>
      {/* 1. CINEMATIC HERO SECTION */}
      <PageHero
        eyebrow="Studio / Since 1992"
        title="Built on Experience."
        text="Khilare & Associates is a Civil Engineering, Construction and Real Estate Development firm established in 1992."
        noImage={true}
        ctaText="Explore Our Expertise"
        ctaHref="#services"
      />

      {/* 2. EDITORIAL TOPIC NAVIGATION STRIP */}
      <nav className="studio-nav-strip" aria-label="Studio section navigation">
        <div className="container studio-nav-inner">
          <div className="studio-nav-links">
            <a href="#intro" className="studio-nav-item">
              <small>01</small> Our Studio
            </a>
            <a href="#principles" className="studio-nav-item">
              <small>02</small> Core Principles
            </a>
            <a href="#vision" className="studio-nav-item">
              <small>03</small> Our Vision
            </a>
            <a href="#services" className="studio-nav-item">
              <small>04</small> Services
            </a>
          </div>
          <div className="studio-nav-companion">
            <Link href="/approach">
              Our Approach <FiArrowUpRight />
            </Link>
          </div>
        </div>
      </nav>

      <main>
        {/* 3. REBUILT INTRODUCTION SECTION */}
        <section id="intro" className="studio-intro-section">
          <div className="container">
            <div className="studio-intro-grid">
              <motion.div
                className="studio-intro-left"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <div className="studio-label">About Khilare &amp; Associates</div>
                <h2 className="studio-intro-title">
                  Crafting Structures,
                  <br />
                  <span>Creating Dreams.</span>
                </h2>
                <div>
                  <span className="studio-intro-badge">
                    Established 1992 • Sangli, Maharashtra
                  </span>
                </div>
              </motion.div>

              <motion.div
                className="studio-intro-right"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                viewport={{ once: true }}
              >
                <p className="studio-lead-copy">
                  Since 1992, Khilare &amp; Associates has worked across civil
                  engineering, construction, and real estate development. Our
                  approach combines engineering expertise, thoughtful planning,
                  dependable execution, and a commitment to quality.
                </p>
                <p className="studio-sub-copy">
                  Headquartered in Sangli with operations spanning Maharashtra,
                  the firm undertakes customized residential developments, smart
                  commercial spaces, structural redevelopment, and turnkey
                  contractor services. Every project is anchored in rigorous
                  engineering calculations, certified building materials, and
                  unwavering client dedication.
                </p>
              </motion.div>
            </div>

            {/* 4 COMPACT EDITORIAL HIGHLIGHTS */}
            <div className="studio-highlights-wrap">
              <div className="studio-highlights-header">Key Institutional Pillars</div>
              <div className="studio-highlights-grid">
                {highlights.map((h, i) => (
                  <motion.div
                    className="studio-highlight-card"
                    key={h.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="highlight-num">{h.num}</div>
                    <h3>{h.title}</h3>
                    <p>{h.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. FOUR CORE PRINCIPLES SECTION */}
        <section id="principles" className="studio-principles-section">
          <div className="container">
            <motion.div
              className="principles-head"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="studio-label">Guiding Foundations</div>
              <h2>Four Core Principles.</h2>
              <p>
                The engineering values, operational standards, and client-centric
                commitments that define every Khilare &amp; Associates project.
              </p>
            </motion.div>

            <div className="principles-grid">
              {principles.map((p, i) => (
                <motion.article
                  className="principle-card"
                  key={p.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="principle-num">
                    <span>{p.num}</span>
                    <span className="principle-tag">{p.tag}</span>
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                  <p style={{ marginTop: "12px", fontSize: "13.5px", color: "var(--studio-muted)", opacity: 0.85 }}>
                    {p.detail}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* 5. REDESIGNED VISION SECTION */}
        <section id="vision" className="studio-vision-section">
          <div className="container vision-grid">
            <motion.div
              className="vision-image-wrap"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img src={siteImages.studio} alt="Khilare & Associates Architectural Execution" />
              <div className="vision-caption">
                <FiCheckCircle style={{ color: "#e5b967" }} />
                <span>On-Site Engineering Execution &amp; Quality Supervision</span>
              </div>
            </motion.div>

            <motion.div
              className="vision-content"
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              viewport={{ once: true }}
            >
              <div className="vision-eyebrow">Our Vision</div>
              <h2>One structure at a time.</h2>
              <p className="vision-quote">
                “To be recognized as a leading construction firm, bringing dreams to
                life — one structure at a time.”
              </p>
              <p className="vision-supporting">
                Every structure we build represents more than architectural
                geometry — it stands as a lasting sanctuary for families, a
                productive foundation for business, and an enduring testament to
                civil engineering integrity, safety, and community value.
              </p>
              <div className="vision-signature-block">
                <span className="brand">KHILARE &amp; ASSOCIATES</span>
                <span className="sub">CIVIL ENGINEERS • BUILDERS • DEVELOPERS • SINCE 1992</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 6. SERVICES SECTION */}
        <ServicesSection />

        {/* Services Navigation Bridge */}
        <div className="container studio-services-footer-bridge">
          <Link href="/expertise">
            Explore All 7 Specialized Services &amp; Specifications <FiArrowUpRight />
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
