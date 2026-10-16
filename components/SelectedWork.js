"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { siteImages } from "../config/images";
import "../styles/selectedWork.css";
const projects = [
  siteImages.projects[0],
  siteImages.projects[1],
  siteImages.projects[2],
  siteImages.projects[3],
];
const info = [
  [
    "Universal Trade Center",
    "Commercial & Residential | 100 ft Road, Vishrambag",
  ],
  ["Pruthvi Paradise", "Upcoming | Yashwantnagar"],
  ["KP TOWER", "Ready Possession | Near D Mart"],
  ["Unity Crown", "Recently Completed | Commercial Spaces"],
];
export default function SelectedWork() {
  return (
    <section className="work-band">
      <div className="container work-band-grid">
        <div className="work-intro">
          <div className="eyebrow">Featured Projects</div>
          <h2 className="title">Selected Work</h2>
          <p>
            A glimpse of projects and developments presented by Khilare &
            Associates.
          </p>
          <Link href="/work" className="primary-round">
            View all projects{" "}
            <span className="round-btn">
              <FiArrowUpRight />
            </span>
          </Link>
        </div>
        <div className="project-grid">
          {projects.map((im, i) => (
            <motion.div
              className="project"
              key={info[i][0]}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.12, duration: 0.65 }}
              whileHover={{ y: -10 }}
            >
              <img src={im} alt={info[i][0]} />
              <div className="project-info">
                <div>
                  <b>{info[i][0]}</b>
                  <small>{info[i][1]}</small>
                </div>
                <FiArrowUpRight />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
