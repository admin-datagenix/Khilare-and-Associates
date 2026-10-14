"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiArrowUpRight, FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import "../styles/navbar.css";

const links = [
  ["Home", "/"],
  [
    "About",
    "/studio",
    ["Our Studio", "/studio"],
    ["Services", "/expertise"],
    ["Our Approach", "/approach"],
  ],
  ["Gallery", "/gallery"],
  ["Projects", "/work"],
  ["Insights", "/insights"],
  ["Contact", "/contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 35);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={`navbar ${scrolled ? "nav-scrolled" : ""}`}>
      <Link href="/" className="nav-brand" onClick={() => setOpen(false)}>
        <span className="nav-logo-wrap">
          <img src="/images/logo-khilare.png" alt="Khilare & Associates" />
        </span>
        <span className="nav-brand-text">
          KHILARE & ASSOCIATES<small>SINCE 1992</small>
        </span>
      </Link>
      <nav className="desktop-nav">
        {links.map((x, i) =>
          x.length > 2 ? (
            <div className="nav-dropdown" key={x[0]}>
              <Link href={x[1]}>
                {x[0]} <FiChevronDown />
              </Link>
              <div className="dropdown-menu">
                {x.slice(2).map((sub, j) => (
                  <Link href={sub[1]} key={sub[0]}>
                    {sub[0]}
                    <FiArrowUpRight />
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <Link href={x[1]} key={x[0]}>
              {x[0]}
            </Link>
          ),
        )}
      </nav>
      <Link
        href="/contact"
        className="nav-project"
        onClick={() => setOpen(false)}
      >
        Start a Project <FiArrowUpRight />
      </Link>
      <button
        className="nav-menu"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <FiX /> : <FiMenu />}
      </button>
      {open && (
        <div className="mobile-nav">
          {links.map((x, i) => (
            <div key={x[0]}>
              <Link href={x[1]} onClick={() => setOpen(false)}>
                {x[0]}
                <FiArrowUpRight />
              </Link>
              {x.slice(2).map((sub) => (
                <Link
                  className="mobile-sub"
                  href={sub[1]}
                  key={sub[0]}
                  onClick={() => setOpen(false)}
                >
                  {sub[0]}
                  <FiArrowUpRight />
                </Link>
              ))}
            </div>
          ))}
          <Link
            href="/contact"
            className="mobile-project"
            onClick={() => setOpen(false)}
          >
            Start a Project <FiArrowUpRight />
          </Link>
        </div>
      )}
    </header>
  );
}
