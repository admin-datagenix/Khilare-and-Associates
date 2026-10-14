"use client";

import Link from "next/link";
import { FiMail, FiMapPin, FiPhone, FiArrowUpRight } from "react-icons/fi";
import { FaWhatsapp, FaYoutube, FaGoogle } from "react-icons/fa";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      {/* CTA SECTION */}
      <section className="footer-cta">
        <div className="container footer-cta-inner">
          <div className="footer-cta-copy">
            <div className="eyebrow">Start a conversation</div>

            <h2>Let’s Build Something Strong.</h2>

            <p>Your vision, our expertise — together we build better.</p>
          </div>

          <a
            href="https://wa.me/919225812831"
            target="_blank"
            rel="noopener noreferrer"
            className="primary-round"
          >
            <span>Start a Project</span>
            <span className="round-btn">
              <FiArrowUpRight />
            </span>
          </a>
        </div>
      </section>

      {/* MAIN FOOTER */}
      <div className="footer-main">
        <div className="container footer-grid">
          {/* COMPANY */}
          <div className="footer-brand">
            <Link href="/" className="footer-logo-link">
              <img
                src="/images/logo-khilare.png"
                alt="Khilare & Associates logo"
              />
            </Link>

            <h3>KHILARE &amp; ASSOCIATES</h3>

            <p className="footer-description">
              Civil Engineering, Construction and Real Estate Development.
              Established 1992.
            </p>

            <div className="socials">
              <a
                href="https://wa.me/919225812831"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>

              <a
                href="https://www.youtube.com/watch?v=mENiwZXQWmc"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube Video - Khilare & Associates"
                title="Watch Khilare & Associates Video"
              >
                <FaYoutube />
              </a>

              <a
                href="https://g.page/r/CARD"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google"
              >
                <FaGoogle />
              </a>
            </div>
          </div>

          {/* EXPLORE */}
          <div className="footer-column">
            <h4>Explore</h4>

            <nav className="footer-links" aria-label="Explore">
              <Link href="/">Home</Link>
              <Link href="/studio">About Us</Link>
              <Link href="/#leadership">Leadership</Link>
              <Link href="/work">Projects</Link>
              <Link href="/gallery">Gallery</Link>
              <Link href="/contact">Enquiry</Link>
            </nav>
          </div>

          {/* SERVICES */}
          <div className="footer-column">
            <h4>Services</h4>

            <nav className="footer-links" aria-label="Services">
              <Link href="/expertise">Civil Engineering</Link>
              <Link href="/expertise">Construction</Link>
              <Link href="/expertise">Structural Engineering Consultancy</Link>
              <Link href="/expertise">Project Planning &amp; Design</Link>
              <Link href="/expertise">Contractor Services</Link>
              <Link href="/expertise">Redevelopment</Link>
            </nav>
          </div>

          {/* CONTACT */}
          <div className="footer-column footer-contact">
            <h4>Contact</h4>

            <a href="tel:+919225812831" className="contact-item">
              <FiPhone />
              <span>+91 92258 12831</span>
            </a>

            <a href="tel:+919604277779" className="contact-item">
              <FiPhone />
              <span>+91 96042 77779</span>
            </a>

            <a href="mailto:rskhilare@gmail.com" className="contact-item">
              <FiMail />
              <span>rskhilare@gmail.com</span>
            </a>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Shivam+Campus+Dhamani+Road+Vishrambag+Sangli"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <FiMapPin />
              <span>
                Shivam Campus, B Wing, 1st Floor, Flat No. 104, Dhamani Road,
                Vishrambag, Sangli.
              </span>
            </a>
          </div>
        </div>

        {/* COPYRIGHT BAR */}
        <div className="container copyright">
          <span className="footer-copy-left">
            © {new Date().getFullYear()} Khilare &amp; Associates. All rights
            reserved.
          </span>

          <span className="footer-tagline">
            Quantity With Quality <span className="footer-dot">•</span> Since
            1992
          </span>

          <span className="footer-credit datagenix-link">
            Designed and developed by{" "}
            <a
              href="https://www.datagenix.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="designed-by"
            >
              <strong className="datagenix-brand">DatagenixAi</strong>
            </a>
          </span>
        </div>
      </div>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        className="wa"
        href="https://wa.me/919225812831"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Khilare & Associates on WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </footer>
  );
}
