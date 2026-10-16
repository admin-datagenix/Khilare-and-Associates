"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { siteImages } from "../config/images";
import "../styles/studioTeaser.css";
export default function StudioTeaser() {
  return (
    <section className="section studio-teaser">
      <div className="container studio-teaser-grid">
        <motion.div
          className="studio-photo"
          initial={{ opacity: 0, x: -55, rotate: -1 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={siteImages.studio}
            alt="Modern construction and architecture"
          />
        </motion.div>
        <div>
          <div className="eyebrow">Our Studio</div>
          <h2 className="title">
            Engineering Excellence.
            <br />
            Built on Trust.
          </h2>
          <p className="copy">
            Khilare & Associates is a Civil Engineering, Construction and Real
            Estate Development firm established in 1992, focused on quality,
            value and client relationships.
          </p>
          <Link href="/studio" className="primary-round">
            Discover Studio{" "}
            <span className="round-btn">
              <FiArrowUpRight />
            </span>
          </Link>
        </div>
        <motion.div
          className="founder"
          initial={{ opacity: 0, x: 55 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.12 }}
        >
          <div className="founder-mark">
            <img
              src="/images/logo-khilare.png"
              alt="Khilare & Associates logo"
            />
          </div>
          <div>
            <b>Mr. Ravindra Shankar Khilare – Pawar</b>
            <small>Chief Promoter</small>
            <p>
              CREDAI Sangli — Past President
              <br />
              CREDAI Maharashtra — Past Vice President
            </p>
            <em>“Building not just structures, but lasting relationships.”</em>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
