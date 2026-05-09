"use client";

import Link from "next/link";
import { useState } from "react";

const ArrowRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
);

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const closeAll = () => setOpenDropdown(null);

  const toggle = (key: string) => {
    setOpenDropdown((prev) => (prev === key ? null : key));
  };

  return (
    <div className="nav-shell">
      <nav className="nav">
        <Link href="/" className="brand" onClick={closeAll}>
          <span className="mark">C</span>
          Carry<em>On</em>
        </Link>
        <ul className="nav-links">
          <li>
            <Link href="/" onClick={closeAll}>
              Delivery
            </Link>
          </li>
          <li>
            <Link href="/business" onClick={closeAll}>
              Business
            </Link>
          </li>
          <li
            className={`has-drop ${openDropdown === "driver" ? "open" : ""}`}
            onClick={() => toggle("driver")}
            onMouseEnter={() => setOpenDropdown("driver")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            Driver
            <ul className="submenu">
              <li>
                <Link href="/fleet" onClick={closeAll}>
                  Fleet Management
                </Link>
              </li>
              <li>
                <Link href="/driver" onClick={closeAll}>
                  Delivery Partner
                </Link>
              </li>
            </ul>
          </li>
          <li
            className={`has-drop ${openDropdown === "about" ? "open" : ""}`}
            onClick={() => toggle("about")}
            onMouseEnter={() => setOpenDropdown("about")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            About
            <ul className="submenu">
              <li>
                <Link href="/about" onClick={closeAll}>
                  About CarryOn
                </Link>
              </li>
              <li>
                <Link href="/careers" onClick={closeAll}>
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/tracking" onClick={closeAll}>
                  Tracking
                </Link>
              </li>
              <li>
                <Link href="/contact" onClick={closeAll}>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/care" onClick={closeAll}>
                  Deliver Care
                </Link>
              </li>
            </ul>
          </li>
        </ul>
        <div className="nav-actions">
          <Link href="/login" className="btn-ghost" onClick={closeAll}>
            Login
          </Link>
          <Link href="/signup" className="btn-ghost" onClick={closeAll}>
            Sign Up
          </Link>
          <Link href="/" className="btn-cta" onClick={closeAll}>
            Book Delivery
            <ArrowRight />
          </Link>
        </div>
      </nav>
    </div>
  );
}
