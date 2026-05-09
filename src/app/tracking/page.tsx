import Link from "next/link";

const ArrowRight = ({ className = "arrow" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
);

export default function TrackingPage() {
  return (
    <>
      <div className="screen-banner">
        <div className="wrap" style={{ position: "relative" }}>
          <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto" }}>
            <span className="eyebrow">Track your delivery</span>
            <h1 className="hero-title" style={{ marginTop: 24 }}>
              Track every delivery
              <br />
              in <em>real time</em>.
            </h1>
            <p className="lede" style={{ margin: "32px auto 0" }}>
              Enter your CarryOn tracking ID to see driver location, route
              progress, ETA, and proof-of-delivery updates.
            </p>
          </div>
          <div className="track-search-card">
            <input type="text" placeholder="Enter tracking ID, phone number, or order code…" />
            <Link href="/" className="btn btn-primary">
              Track Now
              <ArrowRight />
            </Link>
          </div>
        </div>
      </div>

      <section className="biz-section">
        <div className="wrap">
          <div className="track-map">
            <svg width="100%" height="100%" viewBox="0 0 1280 500" fill="none" preserveAspectRatio="xMidYMid slice">
              <defs>
                <pattern id="grid2" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(37,99,235,0.08)" strokeWidth="1" />
                </pattern>
                <linearGradient id="route2" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#2563EB" />
                  <stop offset="100%" stopColor="#60A5FA" />
                </linearGradient>
              </defs>
              <rect width="1280" height="500" fill="url(#grid2)" />
              <path d="M0 200 Q400 180, 600 220 T1280 280" stroke="rgba(37,99,235,0.18)" strokeWidth="32" fill="none" strokeLinecap="round" />
              <path d="M150 0 Q220 200, 400 350 T800 500" stroke="rgba(37,99,235,0.12)" strokeWidth="22" fill="none" strokeLinecap="round" />
              <path d="M120 380 Q400 280, 700 250 T1100 120" stroke="url(#route2)" strokeWidth="6" fill="none" strokeLinecap="round" strokeDasharray="4 8" />
              <circle cx="120" cy="380" r="18" fill="white" stroke="#2563EB" strokeWidth="4" />
              <circle cx="120" cy="380" r="8" fill="#2563EB" />
              <text x="80" y="345" fontFamily="General Sans,sans-serif" fontSize="13" fontWeight="600" fill="#0F172A">PICKUP</text>
              <circle cx="700" cy="250" r="28" fill="rgba(37,99,235,.18)" />
              <circle cx="700" cy="250" r="18" fill="#2563EB" />
              <path d="M691 250 L697 256 L709 244" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              <text x="660" y="220" fontFamily="General Sans,sans-serif" fontSize="13" fontWeight="600" fill="#0F172A">DRIVER</text>
              <circle cx="1100" cy="120" r="18" fill="#0F172A" />
              <circle cx="1100" cy="120" r="6" fill="white" />
              <text x="1060" y="90" fontFamily="General Sans,sans-serif" fontSize="13" fontWeight="600" fill="#0F172A">DROP</text>
            </svg>
            <div className="track-eta-card">
              <div className="eta-label">ESTIMATED ARRIVAL</div>
              <div className="eta-time">
                23<em> min</em>
              </div>
              <div className="eta-meta">Driver: Ravi V. · 4.9 ★</div>
              <div className="progress-bar">
                <div />
              </div>
            </div>
          </div>

          <div className="feature-grid-3" style={{ marginTop: 60 }}>
            <div className="feature-card">
              <div className="feat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="10" r="3" />
                  <path d="M12 22s-7-7-7-12a7 7 0 1114 0c0 5-7 12-7 12z" />
                </svg>
              </div>
              <h4>Live driver location</h4>
              <p>Updated every 5 seconds.</p>
            </div>
            <div className="feature-card">
              <div className="feat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <h4>ETA updates</h4>
              <p>Smart predictions based on traffic.</p>
            </div>
            <div className="feature-card">
              <div className="feat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 11l3 3L22 4" />
                  <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
                </svg>
              </div>
              <h4>Proof of delivery</h4>
              <p>Photo, signature, and timestamp.</p>
            </div>
            <div className="feature-card">
              <div className="feat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                </svg>
              </div>
              <h4>Issue support</h4>
              <p>Reach the driver or our team in two taps.</p>
            </div>
          </div>

          <div style={{ marginTop: 80 }}>
            <div
              style={{
                textAlign: "center",
                maxWidth: 680,
                margin: "0 auto 40px",
              }}
            >
              <span className="eyebrow">Delivery timeline</span>
              <h2 className="section-title" style={{ marginTop: 20 }}>
                Every step, <em>visible</em>.
              </h2>
            </div>
            <div className="timeline-card">
              <div className="timeline">
                <div className="tl-step done">
                  <div className="tl-dot" />
                  <h5>Order received</h5>
                  <span className="time">10:42 AM</span>
                </div>
                <div className="tl-step done">
                  <div className="tl-dot" />
                  <h5>Driver assigned</h5>
                  <span className="time">10:46 AM</span>
                </div>
                <div className="tl-step done">
                  <div className="tl-dot" />
                  <h5>Picked up</h5>
                  <span className="time">11:08 AM</span>
                </div>
                <div className="tl-step current">
                  <div className="tl-dot" />
                  <h5>In transit</h5>
                  <span className="time">ETA 11:31 AM</span>
                </div>
                <div className="tl-step">
                  <div className="tl-dot" />
                  <h5>Delivered</h5>
                  <span className="time">—</span>
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
            <span className="eyebrow">Business tracking</span>
            <h2 className="section-title" style={{ marginTop: 20 }}>
              A whole <em>fleet</em>
              <br />
              at a glance.
            </h2>
          </div>
          <div className="dash-card">
            <div className="dash-grid-stat">
              <div className="dash-stat primary">
                <div className="lbl">Active Orders</div>
                <div className="val">128</div>
              </div>
              <div className="dash-stat warn">
                <div className="lbl">Delayed</div>
                <div className="val">3</div>
              </div>
              <div className="dash-stat success">
                <div className="lbl">Completed Today</div>
                <div className="val">847</div>
              </div>
              <div className="dash-stat">
                <div className="lbl">Drivers Online</div>
                <div className="val">
                  62<em>/74</em>
                </div>
              </div>
            </div>
            <table className="dash-table">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Route</th>
                  <th>Driver</th>
                  <th>Vehicle</th>
                  <th>ETA</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>ord_8xK2pQrT</td>
                  <td>Andheri W → Bandra</td>
                  <td>Ravi V.</td>
                  <td>Bike</td>
                  <td>11 min</td>
                  <td>
                    <span className="status-pill transit">In Transit</span>
                  </td>
                </tr>
                <tr>
                  <td>ord_3mNrLp9w</td>
                  <td>Powai → BKC</td>
                  <td>Sameer K.</td>
                  <td>Mini Van</td>
                  <td>23 min</td>
                  <td>
                    <span className="status-pill transit">In Transit</span>
                  </td>
                </tr>
                <tr>
                  <td>ord_7fGhVxPq</td>
                  <td>Lower Parel → Worli</td>
                  <td>Akhil J.</td>
                  <td>Scooter</td>
                  <td>—</td>
                  <td>
                    <span className="status-pill delivered">Delivered</span>
                  </td>
                </tr>
                <tr>
                  <td>ord_1kLmZyRn</td>
                  <td>Thane → Mulund</td>
                  <td>Vikas M.</td>
                  <td>Tempo</td>
                  <td>+12 min</td>
                  <td>
                    <span className="status-pill delayed">Delayed</span>
                  </td>
                </tr>
                <tr>
                  <td>ord_5vQpTbXc</td>
                  <td>Versova → Juhu</td>
                  <td>Anil P.</td>
                  <td>Bike</td>
                  <td>4 min</td>
                  <td>
                    <span className="status-pill transit">In Transit</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="cta-strip">
        <div className="wrap">
          <div className="cta-strip-inner">
            <h2 className="section-title" style={{ color: "white" }}>
              Need help with
              <br />a <em>delivery</em>?
            </h2>
            <p>
              Our team is on standby 24/7 for tracking issues, missing parcels,
              and delivery support.
            </p>
            <div className="btn-row">
              <Link
                href="/contact"
                className="btn btn-primary"
                style={{ background: "white", color: "var(--navy)" }}
              >
                Open Help Center
                <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
