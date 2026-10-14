"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiChevronLeft,
  FiChevronRight,
  FiPhone,
  FiMail,
  FiMapPin,
  FiX,
  FiMaximize2,
} from "react-icons/fi";
import {
  company,
  services,
  projects,
  events,
  gallery,
  videos,
} from "../config/companyData";
import "../styles/companySections.css";

export function AboutSection() {
  return (
    <section id="about" className="company-section about-section">
      <div className="container company-two-col">
        {/* LEFT — HEADING */}
        <motion.div
          className="about-intro"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="eyebrow">About Khilare &amp; Associates</div>

          <h2 className="title">
            Crafting Structures,
            <br />
            <span>Creating Dreams.</span>
          </h2>
        </motion.div>

        {/* RIGHT — DESCRIPTION AND FACTS */}
        <motion.div
          className="about-details"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="lead">
            Welcome to Khilare &amp; Associates, your trusted name in the world
            of construction and real estate development. With years of
            experience, innovation, and dedication, we proudly stand as a
            reputed Civil Engineering, Building, Development &amp; Contracting
            firm.
          </p>

          <div className="about-facts">
            <div>
              <b>
                <span className="since-label">Since</span>
                {` ${company.since}`}
              </b>
              <span>Year of Establishment</span>
            </div>

            <div>
              <b>8+</b>
              <span>Core Specialities</span>
            </div>

            <div>
              <b>360°</b>
              <span>Project Approach</span>
            </div>
          </div>

          <Link
            href="/studio"
            className="team-link"
            style={{ marginTop: "25px", display: "inline-flex" }}
          >
            Know More <FiArrowUpRight />
          </Link>
        </motion.div>
      </div>

      {/* 2 HORIZONTAL BALANCED SECTIONS: VISION & MISSION */}
      <div className="vision-mission-row">
        <motion.div
          className="vm-box vision-box"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="eyebrow">Our Vision</div>
          <h3>
            To be recognized as a leading construction firm, bringing dreams to
            life — one structure at a time.
          </h3>
        </motion.div>

        <motion.div
          className="vm-box mission-box"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
        >
          <div className="eyebrow">Our Mission</div>
          <h3>
            To build superior living and commercial spaces with engineering
            excellence, integrity, and timely delivery.
          </h3>
        </motion.div>
      </div>
    </section>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className="company-section services-section">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">What We Do</div>
            <h2 className="title">
              Engineering & development
              <br />
              <span>built around your needs.</span>
            </h2>
          </div>
          <p>
            From planning and structural consultancy to construction,
            contracting and redevelopment, the firm delivers practical solutions
            with quality at every stage.
          </p>
        </div>
        <div className="services-grid">
          {services.map((s, i) => (
            <motion.article
              className="service-card"
              key={s.title}
              whileHover={{
                y: -8,
                boxShadow: "0 22px 45px rgba(16, 61, 59, 0.08)",
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="service-card-top">
                <div className="service-title-wrap">
                  <span className="service-num">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3>{s.title}</h3>
                </div>
                <FiArrowUpRight className="service-arrow" />
              </div>
              <div className="service-body">
                <ul>
                  {s.bullets.map((b) => (
                    <li key={b}>
                      <span className="service-bullet-dot" aria-hidden="true" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProjectsSection() {
  const [active, setActive] = useState(0);
  const p = projects[active];
  return (
    <section id="projects" className="company-section projects-section">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">Products / Services</div>
            <h2 className="title">
              Projects that make
              <br />
              <span>the work visible.</span>
            </h2>
          </div>
          <p>
            Explore the same project portfolio represented on the Khilare &
            Associates digital profile, now presented in a more structured and
            premium interface.
          </p>
        </div>
        <div className="project-tabs">
          {projects.map((x, i) => (
            <button
              className={i === active ? "active" : ""}
              key={x.title}
              onClick={() => setActive(i)}
            >
              {x.title.replace(" — ", " / ")}
            </button>
          ))}
        </div>
        <motion.div
          className="project-feature"
          key={p.title}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="project-copy">
            <div className="eyebrow">
              {String(active + 1).padStart(2, "0")} / PROJECT
            </div>
            <h3>{p.title}</h3>
            <p>{p.meta}</p>
            <a href={company.whatsapp} target="_blank" rel="noreferrer">
              Enquire on WhatsApp <FiArrowUpRight />
            </a>
          </div>
          <div className="project-images">
            {p.images.slice(0, 4).map((img, i) => (
              <img key={img + i} src={img} alt={p.title} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function GallerySection() {
  return (
    <section id="gallery" className="company-section gallery-section">
      <div className="container">
        <div className="gallery-section-head">
          <Link href="/gallery" className="gallery-view-all-link">
            View Gallery <FiArrowUpRight />
          </Link>
          <div className="gallery-head-copy">
            <div className="eyebrow">Gallery</div>
            <h2 className="title">
              Real work <span>Real moments.</span>
            </h2>
            <p>
              The gallery keeps the original visual material from the Khilare
              &amp; Associates profile instead of replacing it with stock
              photography.
            </p>
          </div>
        </div>
        <div className="gallery-grid">
          {gallery.slice(0, 4).map((img, i) => (
            <motion.figure key={img + i} whileHover={{ scale: 1.02 }}>
              <img src={img} alt={`Khilare & Associates gallery ${i + 1}`} />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function EventsSection() {
  const [tab, setTab] = useState(0);
  const [activeImage, setActiveImage] = useState(null);
  const e = events[tab];

  return (
    <section id="events" className="company-section events-section">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">Association & Leadership</div>
            <h2 className="title">
              CREDAI events &<br />
              <span>industry presence.</span>
            </h2>
          </div>
        </div>
        <motion.div
          className="event-feature"
          key={e.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="event-copy">
            <div className="eyebrow">{e.subtitle}</div>
            <h3>{e.title}</h3>
            <p>
              Industry participation and leadership are part of the firm’s
              story, retained here from the original profile.
            </p>
          </div>
          <div className="event-visual-wrap">
            <div className="event-images">
              {e.images.map((img, i) => (
                <div
                  key={img + i}
                  className="event-img-card"
                  onClick={() => setActiveImage(img)}
                  title="Click to view full photo"
                >
                  <img src={img} alt={`${e.title} ${i + 1}`} />
                  <span className="event-zoom-btn">
                    <FiMaximize2 />
                  </span>
                </div>
              ))}
            </div>
            <div className="event-controls-compact">
              <button
                type="button"
                onClick={() =>
                  setTab((tab - 1 + events.length) % events.length)
                }
                aria-label="Previous event"
              >
                <FiChevronLeft />
              </button>
              <span className="event-indicator">
                {tab + 1} / {events.length}
              </span>
              <button
                type="button"
                onClick={() => setTab((tab + 1) % events.length)}
                aria-label="Next event"
              >
                <FiChevronRight />
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* FULL VIEW LIGHTBOX FOR CREDAI IMAGES */}
      {activeImage && (
        <div
          className="credai-lightbox"
          onClick={() => setActiveImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="credai-lightbox-content"
            onClick={(ev) => ev.stopPropagation()}
          >
            <button
              type="button"
              className="credai-lightbox-close"
              onClick={() => setActiveImage(null)}
              aria-label="Close"
            >
              <FiX />
            </button>
            <img src={activeImage} alt="CREDAI Full View" />
          </div>
        </div>
      )}
    </section>
  );
}

export function PaymentSection() {
  return (
    <section id="payment" className="company-section payment-section">
      <div className="container payment-card">
        <div>
          <div className="eyebrow">Payment</div>
          <h2 className="title">
            Simple, direct
            <br />
            <span>payment details.</span>
          </h2>
        </div>
        <div className="payment-grid">
          <div>
            <b>Paytm</b>
            <a href={`tel:${company.phones[0]}`}>{company.phones[0]}</a>
          </div>
          <div>
            <b>PhonePe</b>
            <a href={`tel:${company.phones[0]}`}>{company.phones[0]}</a>
          </div>
          <div>
            <b>Google Pay</b>
            <a href={`tel:${company.phones[0]}`}>{company.phones[0]}</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function VideosSection() {
  return (
    <section id="videos" className="company-section videos-section">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">Videos</div>
            <h2 className="title">
              See the work
              <br />
              <span>in motion.</span>
            </h2>
          </div>
        </div>
        <div className="video-grid">
          {videos.map((v, i) => (
            <div className="video-frame" key={v}>
              <iframe
                src={v}
                title={`Khilare & Associates video ${i + 1}`}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function EnquirySection() {
  return (
    <section id="enquiry" className="company-section enquiry-section">
      <div className="container enquiry-wrap">
        <div>
          <div className="eyebrow">Enquiry</div>
          <h2 className="title">
            Let's build the
            <br />
            <span>next project.</span>
          </h2>
          <p>
            Share your requirement and the Khilare & Associates team can connect
            with you directly.
          </p>
          <div className="contact-list">
            <a href={company.whatsapp} target="_blank" rel="noreferrer">
              <FiPhone /> WhatsApp: {company.phones[0]}
            </a>
            <a href={`mailto:${company.email}`}>
              <FiMail /> {company.email}
            </a>
            <div>
              <FiMapPin /> {company.address}
            </div>
          </div>
        </div>
        <form
          className="enquiry-form"
          action={company.whatsapp}
          method="get"
          target="_blank"
        >
          <label>
            Full Name
            <input name="name" placeholder="Enter full name" required />
          </label>
          <label>
            Phone Number
            <input name="phone" placeholder="Enter phone number" required />
          </label>
          <label>
            Email
            <input name="email" type="email" placeholder="Enter email" />
          </label>
          <label>
            Requirement
            <textarea
              name="message"
              rows="5"
              placeholder="Tell us about your project"
            />
          </label>
          <button type="submit">
            Send Enquiry <FiArrowUpRight />
          </button>
        </form>
      </div>
    </section>
  );
}
