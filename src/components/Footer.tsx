import Link from "next/link";

const TwitterIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 5.8a8.5 8.5 0 01-2.4.7 4.2 4.2 0 001.8-2.3 8.4 8.4 0 01-2.6 1A4.1 4.1 0 0011.7 9a11.7 11.7 0 01-8.5-4.3 4.1 4.1 0 001.3 5.5A4.1 4.1 0 012.6 10v.1a4.1 4.1 0 003.3 4 4.1 4.1 0 01-1.9.1 4.1 4.1 0 003.9 2.9A8.3 8.3 0 012 18.6a11.7 11.7 0 006.3 1.9c7.6 0 11.7-6.3 11.7-11.7v-.5A8.4 8.4 0 0022 5.8z" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm5.6 7h-2c-.2 0-.5.3-.5.7V11h2.5l-.3 2.5H15V20h-2.6v-6.5H10V11h2.4V9.4c0-1.5.7-3.4 3.4-3.4h2.2V9h-.4z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2 0 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c0 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2 0-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c0-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4 1.2-.1 1.6-.1 4.8-.1zm0 2.2c-3.2 0-3.6 0-4.7.1-1.1 0-1.7.2-2.1.3-.5.2-.9.4-1.3.8-.4.4-.6.8-.8 1.3-.1.4-.3 1-.3 2.1C2.7 9.4 2.7 9.8 2.7 12s0 2.6.1 3.7c0 1.1.2 1.7.3 2.1.2.5.4.9.8 1.3.4.4.8.6 1.3.8.4.1 1 .3 2.1.3 1.1.1 1.5.1 4.7.1s3.6 0 4.7-.1c1.1 0 1.7-.2 2.1-.3.5-.2.9-.4 1.3-.8.4-.4.6-.8.8-1.3.1-.4.3-1 .3-2.1.1-1.1.1-1.5.1-3.7s0-2.6-.1-3.7c0-1.1-.2-1.7-.3-2.1-.2-.5-.4-.9-.8-1.3-.4-.4-.8-.6-1.3-.8-.4-.1-1-.3-2.1-.3-1.1-.1-1.5-.1-4.7-.1zm0 3.7a4 4 0 110 7.9 4 4 0 010-7.9zm0 6.5a2.6 2.6 0 100-5.2 2.6 2.6 0 000 5.2zm5-6.7a.9.9 0 11-1.9 0 .9.9 0 011.9 0z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zM8.3 18.3H5.7V9.7h2.6v8.6zM7 8.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm11.3 9.8h-2.6v-4.2c0-1 0-2.3-1.4-2.3s-1.6 1.1-1.6 2.3v4.2h-2.6V9.7h2.5v1.2c.4-.6 1.2-1.4 2.6-1.4 2.7 0 3.2 1.8 3.2 4.1v4.7z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="brand">
              <span className="mark">C</span>Carry<em>On</em>
            </div>
            <p>
              The new era of urban logistics. Built for users, drivers, and
              businesses who move fast and refuse to compromise on quality.
            </p>
            <div className="socials">
              <a href="#" className="social">
                <TwitterIcon />
              </a>
              <a href="#" className="social">
                <FacebookIcon />
              </a>
              <a href="#" className="social">
                <InstagramIcon />
              </a>
              <a href="#" className="social">
                <LinkedInIcon />
              </a>
            </div>
          </div>
          <div className="fcol">
            <h5>Service</h5>
            <ul>
              <li>
                <Link href="/business">Business</Link>
              </li>
              <li>
                <Link href="/">Personal Delivery</Link>
              </li>
              <li>
                <Link href="/driver">Driver</Link>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>
          <div className="fcol">
            <h5>Driver</h5>
            <ul>
              <li>
                <Link href="/driver">Become Driver</Link>
              </li>
              <li>
                <Link href="/fleet">Fleet Management</Link>
              </li>
              <li>
                <Link href="/contact">Driver Support</Link>
              </li>
              <li>
                <Link href="/tracking">Tracking</Link>
              </li>
            </ul>
          </div>
          <div className="fcol">
            <h5>Company</h5>
            <ul>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/care">Deliver Care</Link>
              </li>
              <li>
                <Link href="/careers">Careers</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="fcol">
            <h5>Legal</h5>
            <ul>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms &amp; Conditions</a>
              </li>
              <li>
                <a href="#">Safety</a>
              </li>
              <li>
                <a href="#">Cookies</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="copy">
            &copy; 2026 CarryOn Logistics. All rights reserved. Crafted with
            precision.
          </p>
          <div className="lang-select">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20" />
            </svg>
            English (IN) &middot; &#x20B9; INR
          </div>
        </div>
      </div>
    </footer>
  );
}
