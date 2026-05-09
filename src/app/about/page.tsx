import Link from "next/link";

const ArrowRight = ({ className = "arrow" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
);

export default function AboutPage() {
  return (
    <>
      <div className="screen-banner">
        <div className="wrap" style={{ position: "relative" }}>
          <div style={{ textAlign: "center", maxWidth: 840, margin: "0 auto" }}>
            <span className="eyebrow">About CarryOn</span>
            <h1 className="hero-title" style={{ marginTop: 24 }}>
              Built for
              <br />
              <em>smarter</em> deliveries.
            </h1>
            <p className="lede" style={{ margin: "32px auto 0" }}>
              Deliver faster and safer with an intelligent logistics network
              designed for users, drivers, and businesses — together, on the same
              map.
            </p>
          </div>
        </div>
      </div>

      <section className="biz-section">
        <div className="wrap">
          <div className="two-col">
            <div className="col-text">
              <span className="eyebrow">Our story</span>
              <h2 className="section-title" style={{ marginTop: 20 }}>
                A logistics network <em>worthy</em>
                <br />
                of the cities it serves.
              </h2>
              <p className="lede">
                CarryOn was founded on a simple belief: a city&apos;s logistics should
                feel as alive and intelligent as the city itself. We build the
                infrastructure so a parcel can move through Mumbai, Bengaluru, or
                Delhi as effortlessly as a thought through a network — fast,
                transparent, and respectful of every person it touches.
              </p>
              <p className="lede" style={{ marginTop: 20 }}>
                From the verified driver picking up your package to the AI engine
                routing it home, every layer of CarryOn is built around a single
                question:{" "}
                <em
                  style={{
                    fontFamily: "var(--italic)",
                    fontStyle: "italic",
                    color: "var(--royal)",
                  }}
                >
                  how do we make the next delivery the best one yet?
                </em>
              </p>
            </div>
            <div className="map-card" style={{ aspectRatio: "1.05/1", borderRadius: 32 }}>
              <svg width="100%" height="100%" viewBox="0 0 600 600" fill="none">
                <defs>
                  <pattern id="gridA" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(37,99,235,0.08)" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="600" height="600" fill="url(#gridA)" />
                <g opacity="0.16">
                  <rect x="60" y="320" width="50" height="200" rx="4" fill="#0F172A" />
                  <rect x="120" y="280" width="40" height="240" rx="4" fill="#0F172A" />
                  <rect x="170" y="240" width="60" height="280" rx="4" fill="#0F172A" />
                  <rect x="240" y="180" width="40" height="340" rx="4" fill="#0F172A" />
                  <rect x="290" y="220" width="50" height="300" rx="4" fill="#0F172A" />
                  <rect x="350" y="260" width="60" height="260" rx="4" fill="#0F172A" />
                  <rect x="420" y="200" width="40" height="320" rx="4" fill="#0F172A" />
                  <rect x="470" y="280" width="60" height="240" rx="4" fill="#0F172A" />
                </g>
                <g>
                  <circle cx="120" cy="160" r="6" fill="#2563EB" />
                  <circle cx="120" cy="160" r="14" fill="none" stroke="#2563EB" strokeWidth="1.5" opacity="0.4" />
                  <circle cx="280" cy="120" r="6" fill="#2563EB" />
                  <circle cx="280" cy="120" r="14" fill="none" stroke="#2563EB" strokeWidth="1.5" opacity="0.4" />
                  <circle cx="440" cy="180" r="6" fill="#2563EB" />
                  <circle cx="440" cy="180" r="14" fill="none" stroke="#2563EB" strokeWidth="1.5" opacity="0.4" />
                  <circle cx="200" cy="80" r="4" fill="#60A5FA" />
                  <circle cx="380" cy="60" r="4" fill="#60A5FA" />
                  <circle cx="500" cy="100" r="4" fill="#60A5FA" />
                  <circle cx="60" cy="100" r="4" fill="#60A5FA" />
                  <path d="M120 160 L280 120 L440 180" stroke="#2563EB" strokeWidth="1.5" fill="none" opacity="0.5" strokeDasharray="3 4" />
                  <path d="M120 160 L60 100" stroke="#60A5FA" strokeWidth="1" fill="none" opacity="0.5" strokeDasharray="2 3" />
                  <path d="M120 160 L200 80" stroke="#60A5FA" strokeWidth="1" fill="none" opacity="0.5" strokeDasharray="2 3" />
                  <path d="M280 120 L380 60" stroke="#60A5FA" strokeWidth="1" fill="none" opacity="0.5" strokeDasharray="2 3" />
                  <path d="M440 180 L500 100" stroke="#60A5FA" strokeWidth="1" fill="none" opacity="0.5" strokeDasharray="2 3" />
                </g>
                <text x="300" y="440" fontFamily="serif" fontSize="40" fontStyle="italic" fill="#0F172A" textAnchor="middle" opacity="0.9">
                  25+ cities,
                </text>
                <text x="300" y="490" fontFamily="General Sans, sans-serif" fontSize="18" fontWeight="600" fill="#2563EB" textAnchor="middle" letterSpacing="3">
                  ONE NETWORK
                </text>
              </svg>
            </div>
          </div>

          <div className="stats-row">
            <div className="stat-item">
              <div className="num">
                10<em>K+</em>
              </div>
              <div className="label">Deliveries Completed</div>
            </div>
            <div className="stat-item">
              <div className="num">
                5<em>K+</em>
              </div>
              <div className="label">Driver Partners</div>
            </div>
            <div className="stat-item">
              <div className="num">
                25<em>+</em>
              </div>
              <div className="label">Cities Supported</div>
            </div>
            <div className="stat-item">
              <div className="num">
                99<em>%</em>
              </div>
              <div className="label">Dispatch Success</div>
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
            <span className="eyebrow">What we believe in</span>
            <h2 className="section-title" style={{ marginTop: 20 }}>
              Our <em>values</em>.
            </h2>
          </div>
          <div className="about-values">
            <div className="value-card">
              <div className="num">i.</div>
              <h3>Trust</h3>
              <p>
                Every driver is verified. Every transaction is encrypted. Every
                parcel is tracked. Trust isn&apos;t a slogan — it&apos;s the
                architecture.
              </p>
            </div>
            <div className="value-card">
              <div className="num">ii.</div>
              <h3>Speed</h3>
              <p>
                The shortest distance between two points is rarely a straight line
                — it&apos;s the smartest one. We obsess over minutes saved.
              </p>
            </div>
            <div className="value-card">
              <div className="num">iii.</div>
              <h3>Care</h3>
              <p>
                We treat your parcels like our own — and we treat our drivers like
                the heroes of the city, because that&apos;s what they are.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="biz-section">
        <div className="wrap">
          <div className="two-col">
            <div className="col-text">
              <span className="eyebrow">Our mission</span>
              <h2 className="section-title" style={{ marginTop: 20 }}>
                To make a city&apos;s <em>logistics</em>
                <br />
                feel as alive as the city itself.
              </h2>
            </div>
            <div className="col-text">
              <span className="eyebrow">Our vision</span>
              <h2 className="section-title" style={{ marginTop: 20 }}>
                To make CarryOn <em>synonymous</em>
                <br />
                with modern delivery.
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-strip">
        <div className="wrap">
          <div className="cta-strip-inner">
            <h2 className="section-title" style={{ color: "white" }}>
              Want to <em>get in touch</em>?
            </h2>
            <p>
              We&apos;d love to hear from press, partners, and curious minds.
            </p>
            <div className="btn-row">
              <Link
                href="/contact"
                className="btn btn-primary"
                style={{ background: "white", color: "var(--navy)" }}
              >
                Contact Us
                <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
