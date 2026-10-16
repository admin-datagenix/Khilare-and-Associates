
"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, animate } from "framer-motion";
import {
  FiCalendar,
  FiHome,
  FiUsers,
  FiShield,
} from "react-icons/fi";
import "../styles/stats.css";

const data = [
  {
    icon: FiCalendar,
    value: 30,
    suffix: "+",
    label: "Years of Experience",
  },
  {
    icon: FiHome,
    value: 100,
    suffix: "+",
    label: "Projects Completed",
  },
  {
    icon: FiUsers,
    value: 50,
    suffix: "+",
    label: "Happy Clients",
  },
  {
    icon: FiShield,
    value: 100,
    suffix: "%",
    label: "Commitment to Quality",
  },
];

function CountUp({ value, suffix, start }) {
  const count = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!start) return;

    const controls = animate(count, value, {
      duration: 1.5,
      ease: "easeOut",
    });

    const unsubscribe = count.on("change", (latest) => {
      setDisplay(Math.round(latest));
    });

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [start, value, count]);

  return (
    <span className="stat-number">
      {display}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.25,
  });

  return (
    <section className="stats" ref={sectionRef}>
      <div className="container stats-grid">
        {data.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.article
              className="stat"
              key={item.label}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.55,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              <div className="stat-icon">
                <Icon aria-hidden="true" />
              </div>

              <div className="stat-content">
                <CountUp
                  value={item.value}
                  suffix={item.suffix}
                  start={isInView}
                />

                <span className="stat-label">{item.label}</span>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}