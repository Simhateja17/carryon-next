import Link from "next/link";

const ArrowRight = ({ className = "arrow" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
);

export default function CarePage() {
  return (
    <>
      <div className="screen-banner">
        <div className="wrap" style={{ position: "relative" }}>
          <div style={{ textAlign: "center", maxWidth: 840, margin: "0 auto" }}>
            <span className="eyebrow">Deliver Care</span>
            <h1 className="hero-title" style={{ marginTop: 24 }}>
              A logistics network
              <br />
              that <em>gives back</em>.
            </h1>
            <p className="lede" style={{ margin: "32px auto 0" }}>
              Empowering local communities to deliver positive change — through
              logistics, access, and support.
            </p>
          </div>
        </div>
      </div>

      <section className="biz-section">
        <div className="wrap">
          <div className="two-col">
            <div className="col-text">
              <span className="eyebrow">Moving forward together</span>
              <h2 className="section-title" style={{ marginTop: 20 }}>
                Moving forward
                <br />
                with the <em>community</em>.
              </h2>
              <p className="lede">
                Every delivery we make is a thread in the city&apos;s social
                fabric. Through Deliver Care, we invest a portion of every order
                into community programmes that strengthen the people and places we
                operate in.
              </p>
              <ul
                className="app-feat"
                style={{ gridTemplateColumns: "1fr", maxWidth: 480, marginTop: 24 }}
              >
                <li>Free deliveries during natural disasters</li>
                <li>Subsidised deliveries for local SMEs</li>
                <li>Essential supply chains for NGOs</li>
                <li>Driver and merchant emergency funds</li>
              </ul>
            </div>
            <div
              style={{
                position: "relative",
                aspectRatio: "1/1",
                borderRadius: 32,
                overflow: "hidden",
                background: "linear-gradient(160deg, #DBEAFE 0%, #EFF6FF 100%)",
                padding: 48,
                border: "1px solid var(--line)",
              }}
            >
              <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none">
                <path
                  d="M200 320 C 100 240, 60 160, 120 110 C 160 80, 200 110, 200 150 C 200 110, 240 80, 280 110 C 340 160, 300 240, 200 320 Z"
                  fill="rgba(37,99,235,0.1)"
                  stroke="#2563EB"
                  strokeWidth="2.5"
                />
                <g opacity="0.4">
                  <rect x="140" y="200" width="20" height="60" rx="2" fill="#0F172A" />
                  <rect x="170" y="180" width="20" height="80" rx="2" fill="#0F172A" />
                  <rect x="200" y="160" width="20" height="100" rx="2" fill="#0F172A" />
                  <rect x="230" y="190" width="20" height="70" rx="2" fill="#0F172A" />
                </g>
                <circle cx="200" cy="120" r="10" fill="#2563EB" />
                <text x="200" y="380" fontFamily="serif" fontSize="22" fontStyle="italic" fill="#0F172A" textAnchor="middle">
                  care, delivered
                </text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section className="biz-section alt">
        <div className="wrap">
          <div
            style={{
              textAlign: "center",
              maxWidth: 680,
              margin: "0 auto 60px",
            }}
          >
            <span className="eyebrow">Our pillars</span>
            <h2 className="section-title" style={{ marginTop: 20 }}>
              Three commitments,
              <br />
              one <em>community</em>.
            </h2>
          </div>
          <div className="about-values">
            <div className="value-card">
              <div className="num">i.</div>
              <h3>Strengthen Community</h3>
              <p>
                We support local SMEs with subsidised delivery rates, helping small
                shopkeepers compete with national chains.
              </p>
            </div>
            <div className="value-card">
              <div className="num">ii.</div>
              <h3>Create Opportunity</h3>
              <p>
                From driver scholarships to skill-building partnerships, we open
                doors for our partners to grow beyond the wheel.
              </p>
            </div>
            <div className="value-card">
              <div className="num">iii.</div>
              <h3>Enable Access</h3>
              <p>
                Free essential deliveries during emergencies — medicines, food,
                supplies — for the people who need it most.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="biz-section">
        <div className="wrap">
          <div className="feature-grid-3">
            <div className="feature-card">
              <div className="feat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 21V8l9-5 9 5v13H3zM9 21v-6h6v6" />
                </svg>
              </div>
              <h4>Support Local SMEs</h4>
              <p>Discounted bulk rates for small businesses in every supported city.</p>
            </div>
            <div className="feature-card">
              <div className="feat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <h4>Essential Delivery Access</h4>
              <p>Free emergency dispatch during natural disasters and crises.</p>
            </div>
            <div className="feature-card">
              <div className="feat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="8.5" cy="7" r="4" />
                </svg>
              </div>
              <h4>Community responses</h4>
              <p>Coordinated relief logistics with state and local NGOs.</p>
            </div>
            <div className="feature-card">
              <div className="feat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 12h-4l-3 9L9 3 6 12H2" />
                </svg>
              </div>
              <h4>Driver welfare fund</h4>
              <p>Emergency support and medical aid for our drivers.</p>
            </div>
            <div className="feature-card">
              <div className="feat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L15 9l7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" />
                </svg>
              </div>
              <h4>Merchant grants</h4>
              <p>Annual grants to standout local businesses on the platform.</p>
            </div>
            <div className="feature-card">
              <div className="feat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 00-1-1.7l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.7l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
                </svg>
              </div>
              <h4>Sustainability programme</h4>
              <p>EV transitions and carbon-offset routing.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-strip">
        <div className="wrap">
          <div className="cta-strip-inner">
            <h2 className="section-title" style={{ color: "white" }}>
              Want to know more about
              <br />
              <em>Deliver Care</em>?
            </h2>
            <div className="btn-row">
              <Link
                href="/contact"
                className="btn btn-primary"
                style={{ background: "white", color: "var(--navy)" }}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
