"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { siteImages } from "../config/images";
import "../styles/pageHero.css";

export default function PageHero({
  eyebrow,
  title,
  text,
  image,
  noImage = false,
  ctaText,
  ctaHref = "#services",
  secondaryCtaText,
  secondaryCtaHref = "/team",
  className = "",
  children,
}) {
  const hasBgImage = !noImage && !!image;

  return (
    <section
      className={`page-hero ${!hasBgImage ? "no-image" : ""} ${className}`.trim()}
    >
      {hasBgImage && (
        <motion.div
          className="page-hero-bg"
          style={{ backgroundImage: `url(${image})` }}
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        />
      )}
      <div className="container page-hero-inner">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          {eyebrow && <div className="eyebrow">{eyebrow}</div>}
          <h1>{title}</h1>
          {text && <p>{text}</p>}

          {(ctaText || secondaryCtaText) && (
            <motion.div
              className="hero-cta-group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              {ctaText &&
                (ctaHref.startsWith("#") ? (
                  <a href={ctaHref} className="hero-cta-primary">
                    <span>{ctaText}</span>
                    <FiArrowUpRight />
                  </a>
                ) : (
                  <Link href={ctaHref} className="hero-cta-primary">
                    <span>{ctaText}</span>
                    <FiArrowUpRight />
                  </Link>
                ))}

              {secondaryCtaText &&
                (secondaryCtaHref.startsWith("#") ? (
                  <a href={secondaryCtaHref} className="hero-cta-secondary">
                    <span>{secondaryCtaText}</span>
                    <FiArrowUpRight />
                  </a>
                ) : (
                  <Link href={secondaryCtaHref} className="hero-cta-secondary">
                    <span>{secondaryCtaText}</span>
                    <FiArrowUpRight />
                  </Link>
                ))}
            </motion.div>
          )}

          {children}
        </motion.div>
      </div>
    </section>
  );
}
