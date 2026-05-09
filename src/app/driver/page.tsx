import Link from "next/link";

const ArrowRight = ({ className = "arrow" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
);

export default function DriverPage() {
  return (
    <>
      <div className="biz-hero">
        <div className="wrap">
          <div className="biz-grid">
            <div>
              <span className="eyebrow">Drive with CarryOn</span>
              <h1 className="hero-title" style={{ marginTop: 24 }}>
                Register as a
                <br />
                <em>delivery</em> partner.
              </h1>
              <p className="lede" style={{ marginTop: 24 }}>
                Earn extra income by delivering around your own schedule, with
                transparent payouts and total flexibility on your hours.
              </p>

              <div className="benefits">
                <div className="benefit">
                  <div className="icn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2v20M5 8l7-6 7 6" />
                    </svg>
                  </div>
                  <p>Earn extra income</p>
                </div>
                <div className="benefit">
                  <div className="icn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                  </div>
                  <p>Be your own boss</p>
                </div>
                <div className="benefit">
                  <div className="icn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 12h18M3 6h18M3 18h18" />
                    </svg>
                  </div>
                  <p>Total flexibility</p>
                </div>
              </div>
            </div>
            <div className="biz-form-card">
              <h3>
                Get started in <em>minutes</em>.
              </h3>
              <p className="form-sub">
                Verification typically takes 2-3 business days.
              </p>
              <div className="form-row full">
                <div className="form-group">
                  <label>Mobile Number</label>
                  <input type="tel" placeholder="+91 98000 00000" />
                </div>
              </div>
              <div className="form-row full">
                <div className="form-group">
                  <label>City</label>
                  <select>
                    <option>Mumbai</option>
                    <option>Delhi</option>
                    <option>Bengaluru</option>
                    <option>Pune</option>
                    <option>Hyderabad</option>
                  </select>
                </div>
              </div>
              <div className="form-row full">
                <div className="form-group">
                  <label>Vehicle Type You Own</label>
                  <select>
                    <option>Bike</option>
                    <option>Scooter</option>
                    <option>Mini Van</option>
                    <option>Pickup Truck</option>
                    <option>Tempo</option>
                  </select>
                </div>
              </div>
              <label
                style={{
                  display: "flex",
                  gap: 10,
                  alignItems: "flex-start",
                  marginTop: 16,
                  fontSize: 13,
                  color: "var(--slate-700)",
                }}
              >
                <input type="checkbox" defaultChecked style={{ marginTop: 3 }} />
                I agree to the Terms &amp; Conditions and Driver Code of Conduct
              </label>
              <label
                style={{
                  display: "flex",
                  gap: 10,
                  alignItems: "flex-start",
                  marginTop: 10,
                  fontSize: 13,
                  color: "var(--slate-700)",
                }}
              >
                <input type="checkbox" style={{ marginTop: 3 }} />
                Send me promotional updates &amp; mission bonuses
              </label>
              <Link
                href="/"
                className="btn btn-primary"
                style={{ width: "100%", justifyContent: "center", marginTop: 24 }}
              >
                Get Started as a Driver
                <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <section className="biz-section">
        <div className="wrap">
          <div className="two-col">
            <div className="col-text">
              <span className="eyebrow">What you&apos;ll need</span>
              <h2 className="section-title" style={{ marginTop: 20 }}>
                A <em>quick</em> checklist.
              </h2>
              <p className="lede">
                Just a handful of basics to get started — no paperwork mountain.
              </p>
            </div>
            <div className="step-list" style={{ marginTop: 0 }}>
              <div className="step-row">
                <div className="n">·</div>
                <div>
                  <h5>Own or rent a vehicle</h5>
                  <p>Any of our supported vehicle types.</p>
                </div>
              </div>
              <div className="step-row">
                <div className="n">·</div>
                <div>
                  <h5>Personal identification</h5>
                  <p>Aadhaar, PAN, or driving license.</p>
                </div>
              </div>
              <div className="step-row">
                <div className="n">·</div>
                <div>
                  <h5>Valid driver license</h5>
                  <p>Matched to your vehicle category.</p>
                </div>
              </div>
              <div className="step-row">
                <div className="n">·</div>
                <div>
                  <h5>Age 18+</h5>
                  <p>You must be a legal adult.</p>
                </div>
              </div>
              <div className="step-row">
                <div className="n">·</div>
                <div>
                  <h5>A smartphone</h5>
                  <p>Android or iOS, internet ready.</p>
                </div>
              </div>
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
            <span className="eyebrow">Driver perks</span>
            <h2 className="section-title" style={{ marginTop: 20 }}>
              Exclusive <em>benefits</em>.
            </h2>
          </div>
          <div className="feature-grid-3">
            <div className="feature-card">
              <div className="feat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 7L9 18l-5-5" />
                </svg>
              </div>
              <h4>CarryOn gear</h4>
              <p>Branded uniform, helmet, and insulated bag kit.</p>
            </div>
            <div className="feature-card">
              <div className="feat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s-8-4-8-12a8 8 0 1116 0c0 8-8 12-8 12z" />
                </svg>
              </div>
              <h4>Insurance support</h4>
              <p>Personal and on-trip insurance from day one.</p>
            </div>
            <div className="feature-card">
              <div className="feat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L15 9l7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" />
                </svg>
              </div>
              <h4>Mission bonuses</h4>
              <p>Hit weekly targets and unlock cash rewards.</p>
            </div>
            <div className="feature-card">
              <div className="feat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 16h13M3 8h11M16 16h2a3 3 0 010 6h-2zM14 8h6l3 4v4h-9z" />
                </svg>
              </div>
              <h4>Fuel discounts</h4>
              <p>Up to 8% savings at partner fuel stations.</p>
            </div>
            <div className="feature-card">
              <div className="feat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M9 9h6v6H9z" />
                </svg>
              </div>
              <h4>Vehicle stickers</h4>
              <p>Boost visibility &amp; credibility on every ride.</p>
            </div>
            <div className="feature-card">
              <div className="feat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19 12a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h4>Maintenance discounts</h4>
              <p>Service partners across every operating city.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="biz-section">
        <div className="wrap">
          <div className="two-col">
            <div className="col-text">
              <span className="eyebrow">The driver app</span>
              <h2 className="section-title" style={{ marginTop: 20 }}>
                A driver app, <em>actually</em>
                <br />
                built for drivers.
              </h2>
              <p className="lede">
                Designed with thousands of partners over thousands of trips. Fast,
                light, and respects your data.
              </p>
              <div className="step-list" style={{ marginTop: 32 }}>
                <div className="step-row">
                  <div className="n">i</div>
                  <div>
                    <h5>View available orders</h5>
                    <p>Filter by distance, vehicle, and earning.</p>
                  </div>
                </div>
                <div className="step-row">
                  <div className="n">ii</div>
                  <div>
                    <h5>Pick &amp; deliver</h5>
                    <p>Accept the orders that fit your route.</p>
                  </div>
                </div>
                <div className="step-row">
                  <div className="n">iii</div>
                  <div>
                    <h5>Check earnings anytime</h5>
                    <p>Daily payouts straight to your account.</p>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div className="phone-mock" style={{ margin: 0 }}>
                <div
                  className="phone-screen"
                  style={{
                    background: "linear-gradient(180deg, #0F172A 0%, #1E3A8A 100%)",
                    padding: 24,
                  }}
                >
                  <svg width="100%" height="100%" viewBox="0 0 240 480" fill="none">
                    <text x="20" y="32" fontFamily="serif" fontSize="16" fontStyle="italic" fill="white">Hello, Ravi</text>
                    <text x="20" y="50" fontSize="11" fill="rgba(255,255,255,.6)" letterSpacing="1">YOU&apos;RE ONLINE</text>
                    <circle cx="218" cy="36" r="6" fill="#10B981" />
                    <rect x="20" y="70" width="200" height="80" rx="16" fill="rgba(255,255,255,.06)" stroke="rgba(255,255,255,.1)" />
                    <text x="36" y="96" fontSize="10" fill="rgba(255,255,255,.6)" letterSpacing="1">TODAY&apos;S EARNINGS</text>
                    <text x="36" y="128" fontFamily="serif" fontSize="32" fill="white">₹ 2,840</text>
                    <rect x="20" y="170" width="200" height="100" rx="16" fill="white" />
                    <rect x="36" y="186" width="60" height="14" rx="3" fill="#EFF6FF" />
                    <text x="44" y="197" fontSize="9" fontWeight="700" fill="#2563EB" letterSpacing="1">PRIORITY</text>
                    <text x="36" y="224" fontSize="11" fontWeight="600" fill="#0F172A">Andheri → Bandra</text>
                    <text x="36" y="240" fontSize="10" fill="#64748B">2.4 km · 12 min</text>
                    <text x="36" y="258" fontFamily="serif" fontSize="20" fill="#0F172A">₹ 180</text>
                    <rect x="148" y="232" width="60" height="28" rx="14" fill="#2563EB" />
                    <text x="178" y="249" fontSize="11" fontWeight="600" fill="white" textAnchor="middle">Accept</text>
                    <rect x="20" y="284" width="200" height="100" rx="16" fill="white" />
                    <rect x="36" y="300" width="60" height="14" rx="3" fill="#F0FDF4" />
                    <text x="44" y="311" fontSize="9" fontWeight="700" fill="#059669" letterSpacing="1">REGULAR</text>
                    <text x="36" y="338" fontSize="11" fontWeight="600" fill="#0F172A">Powai → Worli</text>
                    <text x="36" y="354" fontSize="10" fill="#64748B">8.1 km · 28 min</text>
                    <text x="36" y="372" fontFamily="serif" fontSize="20" fill="#0F172A">₹ 240</text>
                    <rect x="148" y="346" width="60" height="28" rx="14" fill="#2563EB" />
                    <text x="178" y="363" fontSize="11" fontWeight="600" fill="white" textAnchor="middle">Accept</text>
                    <rect x="20" y="410" width="200" height="50" rx="14" fill="rgba(255,255,255,.08)" />
                    <text x="120" y="441" fontSize="13" fontWeight="500" fill="white" textAnchor="middle">View all orders →</text>
                  </svg>
                </div>
              </div>
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
            <span className="eyebrow">FAQ</span>
            <h2 className="section-title" style={{ marginTop: 20 }}>
              Driver questions, <em>answered</em>.
            </h2>
          </div>
          <div className="faq-list">
            <details className="faq-item" open>
              <summary>Do I need to work full-time?</summary>
              <p>
                Not at all. CarryOn drivers set their own hours — most partners
                drive 4-6 hours a day, but you can drive as little as 2 hours or as
                much as 10. Total flexibility is the point.
              </p>
            </details>
            <details className="faq-item">
              <summary>How long does verification take?</summary>
              <p>
                Typically 2-3 business days from document submission. We&apos;ll keep
                you updated by SMS and the app.
              </p>
            </details>
            <details className="faq-item">
              <summary>Can I attach multiple vehicles?</summary>
              <p>
                Yes — drivers with multiple vehicles can register them all and switch
                in-app. Fleet owners with 5+ vehicles should explore our Fleet
                Management programme.
              </p>
            </details>
            <details className="faq-item">
              <summary>Can I deliver without owning a vehicle?</summary>
              <p>
                You&apos;ll need access to a vehicle, but it doesn&apos;t have to be
                yours. Rentals, leases, and family-owned vehicles are all accepted
                with proper documentation.
              </p>
            </details>
          </div>
        </div>
      </section>

      <section className="cta-strip">
        <div className="wrap">
          <div className="cta-strip-inner">
            <span className="eyebrow" style={{ color: "var(--sky)" }}>
              Your road, your hours
            </span>
            <h2 className="section-title" style={{ color: "white", marginTop: 24 }}>
              Join us as a
              <br />
              <em>Delivery Partner</em>.
            </h2>
            <div className="btn-row">
              <Link
                href="/"
                className="btn btn-primary"
                style={{ background: "white", color: "var(--navy)" }}
              >
                Apply Now
                <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
