"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiStar } from "react-icons/fi";
import "../styles/testimonials.css";
const reviews = [
  [
    "H",
    "H Garrett",
    "14 April 2026",
    "We have worked with Khilare & Associates to support the preparation of a full business case. The team were professional, responsive and easy to work with.",
  ],
  [
    "D",
    "D Shields",
    "12 April 2026",
    "Working with this company is a pleasure. The whole team are consistently professional and deliver with a clear focus on quality.",
  ],
  [
    "A",
    "A Reid",
    "9 April 2026",
    "Great company to work with. Very professional and easy to deal with from the first conversation through to delivery.",
  ],
  [
    "R",
    "R Patil",
    "3 March 2026",
    "Strong technical understanding, clear communication and a genuine focus on getting the project completed properly.",
  ],
];
export default function Testimonials() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(
      () => setIndex((x) => (x + 1) % reviews.length),
      5000,
    );
    return () => clearInterval(t);
  }, []);
  return (
    <section className="reviews-section">
      <div className="container">
        <div className="reviews-head">
          <h2 className="title">Trusted by Our Clients.</h2>
        </div>
        <div className="reviews-slider">
          <button
            className="review-arrow prev"
            onClick={() =>
              setIndex((index - 1 + reviews.length) % reviews.length)
            }
            aria-label="Previous review"
          >
            <FiChevronLeft />
          </button>
          <AnimatePresence mode="wait">
            {[0, 1, 2].map((offset) => {
              const r = reviews[(index + offset) % reviews.length];
              return (
                <motion.article
                  key={r[1] + index}
                  className="review-card"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.35 }}
                >
                  <div className="review-top">
                    <span className="review-avatar">{r[0]}</span>
                    <div>
                      <b>{r[1]}</b>
                      <small>{r[2]}</small>
                    </div>
                    <span className="google">G</span>
                  </div>
                  <div className="stars">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <FiStar key={n} fill="currentColor" />
                    ))}
                  </div>
                  <p>{r[3]}</p>
                  <span className="read-more">Read more</span>
                </motion.article>
              );
            })}
          </AnimatePresence>
          <button
            className="review-arrow next"
            onClick={() => setIndex((index + 1) % reviews.length)}
            aria-label="Next review"
          >
            <FiChevronRight />
          </button>
        </div>
        <div className="review-footer"></div>
        <div className="review-dots">
          {reviews.map((_, i) => (
            <button
              key={i}
              className={i === index ? "active" : ""}
              onClick={() => setIndex(i)}
              aria-label={`Review ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
