"use client";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import "../styles/featureCards.css";
export default function FeatureCards({ items }) {
  return (
    <div className="feature-cards">
      {items.map((x, i) => (
        <motion.article
          key={x.title}
          whileHover={{ y: -8 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05 }}
        >
          <span>0{i + 1}</span>
          <h3>{x.title}</h3>
          <p>{x.text}</p>
          <FiArrowUpRight />
        </motion.article>
      ))}
    </div>
  );
}
