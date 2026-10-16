"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import "../styles/hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <motion.div
        className="hero-bg"
        style={{ backgroundImage: `url('/images/hero 5.png')` }}
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.1,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      <div className="hero-shade" />
      <div className="hero-gridlines" />

      <div className="container hero-inner">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -45 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="hero-kicker">
            Civil Engineers • Builders • Developers
          </div>

          <h1>
            Building Tomorrow
            <br />
            <span>With Precision.</span>
          </h1>

          <p>
            Engineering expertise, quality construction and thoughtful
            development — from concept to completion.
          </p>

          <div className="hero-buttons">
            <Link href="/work" className="hero-circle-link">
              <span className="hero-link-text">Explore Projects</span>

              <span className="hero-arrow">
                <FiArrowRight />
              </span>
            </Link>

            <Link href="/contact" className="hero-circle-link">
              <span className="hero-link-text">Start a Conversation</span>

              <span className="hero-arrow">
                <FiArrowRight />
              </span>
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="hero-side">SANGLI • MAHARASHTRA</div>
    </section>
  );
}
