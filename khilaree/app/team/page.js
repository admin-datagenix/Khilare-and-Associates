"use client";
import Navbar from "../../components/Navbar";
import PageHero from "../../components/PageHero";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import { FiLinkedin, FiMail } from "react-icons/fi";
import "../../styles/teamPage.css";
const people = [
  [
    "/images/founder.jpg",
    "Rajendra S. Khilare",
    "Director",
    "Civil Engineering • Construction • Development",
  ],
  [
    "/images/founder.jpg",
    "Project Management Team",
    "Project Delivery",
    "Planning • Coordination • Quality",
  ],
  [
    "/images/founder.jpg",
    "Design & Engineering",
    "Technical Team",
    "Design • Detailing • Site Support",
  ],
];
export default function Team() {
  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title="People Behind the Projects."
        text="A focused team bringing engineering, planning and construction experience together."
      />
      <main className="team-page">
        <div className="container team-grid">
          {people.map(([im, n, r, d], i) => (
            <motion.article
              key={n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="team-card-img">
                <img src={im} alt={n} />
              </div>
              <div className="team-card-copy">
                <span>{r}</span>
                <h2>{n}</h2>
                <p>{d}</p>
                <div>
                  <a href="mailto:rskhilare@gmail.com">
                    <FiMail />
                  </a>
                  <a href="#">
                    <FiLinkedin />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
