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

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zM8.3 18.3H5.7V9.7h2.6v8.6zM7 8.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm11.3 9.8h-2.6v-4.2c0-1 0-2.3-1.4-2.3s-1.6 1.1-1.6 2.3v4.2h-2.6V9.7h2.5v1.2c.4-.6 1.2-1.4 2.6-1.4 2.7 0 3.2 1.8 3.2 4.1v4.7z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="footer footer-lite">
      <div className="wrap">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-wordmark">CarryOn</div>
            <p>
              Precision logistics for every mile.
              <br />
              Sending anything, anywhere made
              <br />
              simple and reliable.
            </p>
            <div className="socials lite">
              <a href="#" className="social-lite" aria-label="Twitter">
                <TwitterIcon />
              </a>
              <a href="#" className="social-lite" aria-label="LinkedIn">
                <LinkedInIcon />
              </a>
              <a href="#" className="social-lite" aria-label="Facebook">
                <FacebookIcon />
              </a>
            </div>
          </div>
          <div className="fcol">
            <h5>SERVICES</h5>
            <ul>
              <li><a href="#">On-Demand Delivery</a></li>
              <li><a href="#">Scheduled Routes</a></li>
              <li><a href="#">Enterprise API</a></li>
              <li><a href="#">Warehousing</a></li>
              <li><a href="#">Custom Fleet</a></li>
            </ul>
          </div>
          <div className="fcol">
            <h5>COMPANY</h5>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><a href="#">Sustainability</a></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><a href="#">Press Kit</a></li>
              <li><a href="#">Safety Report</a></li>
            </ul>
          </div>
          <div className="fcol">
            <h5>SUPPORT</h5>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Partner with Us</a></li>
              <li><Link href="/contact">Contact Support</Link></li>
              <li><Link href="/fleet">Fleet Login</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="copy">&copy; 2024 CarryOn Logistics. All rights reserved.</p>
          <div className="footer-legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
