"use client";
import { motion } from "framer-motion";
import "../styles/constructionReel.css";
export default function ConstructionReel() {
  return (
    <section className="reel-section">
      <div className="container reel-wrap">
        <div className="reel-copy">
          <div className="eyebrow">AI + Engineering Visualisation</div>
          <h2 className="title">
            See the Build
            <br />
            <span>Before It Rises.</span>
          </h2>
          <p className="copy">
            A cinematic technical visualisation section for construction,
            planning and project storytelling.
          </p>
          <div className="tech-pills">
            <span>AI Visualisation</span>
            <span>3D Thinking</span>
            <span>Precision</span>
          </div>
        </div>
        <motion.div
          className="reel"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <video
            src="/video/construction-vision.mp4"
            autoPlay
            muted
            loop
            playsInline
            poster="https://images.unsplash.com/photo-1783144182707-b04ce3b2d7e2?auto=format&fit=crop&fm=jpg&q=90&w=3000"
          />
          <div className="scanline" />
          <div className="reel-label">AI-ASSISTED CONSTRUCTION VISION</div>
          <div className="reel-corner">CIVIL / 01</div>
        </motion.div>
      </div>
    </section>
  );
}
