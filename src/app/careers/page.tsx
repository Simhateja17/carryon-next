import Link from "next/link";

const ArrowRight = ({ className = "arrow" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
);

export default function CareersPage() {
  return (
    <>
      <div className="screen-banner">
        <div className="wrap" style={{ position: "relative" }}>
          <div style={{ textAlign: "center", maxWidth: 840, margin: "0 auto" }}>
            <span className="eyebrow">Careers at CarryOn</span>
            <h1 className="hero-title" style={{ marginTop: 24 }}>
              Find your
              <br />
              <em>career</em> with us.
            </h1>
            <p className="lede" style={{ margin: "32px auto 0" }}>
              Build the systems that move millions of parcels — and the careers
              that move millions of lives.
            </p>
          </div>
          <div className="job-search-bar">
            <input type="text" placeholder="Search jobs by keyword (e.g. engineer, designer, ops)…" />
            <select>
              <option>All locations</option>
              <option>Mumbai</option>
              <option>Bengaluru</option>
              <option>Delhi</option>
              <option>Pune</option>
              <option>Hyderabad</option>
              <option>Remote</option>
            </select>
            <Link href="/#download-app" className="btn btn-primary">
              Find Job
              <ArrowRight />
            </Link>
          </div>
        </div>
      </div>

      <section className="biz-section">
        <div className="wrap">
          <div className="two-col">
            <div className="col-text">
              <span className="eyebrow">Our mission</span>
              <h2 className="section-title" style={{ marginTop: 20 }}>
                To empower local <em>communities</em>
                <br />
                through fast, simple, reliable delivery.
              </h2>
            </div>
            <div className="col-text">
              <span className="eyebrow">Our vision</span>
              <h2 className="section-title" style={{ marginTop: 20 }}>
                To make CarryOn <em>synonymous</em>
                <br />
                with modern logistics.
              </h2>
            </div>
          </div>

          <div style={{ marginTop: 80 }}>
            <div
              style={{
                textAlign: "center",
                maxWidth: 680,
                margin: "0 auto 32px",
              }}
            >
              <span className="eyebrow">Core values</span>
              <h2 className="section-title" style={{ marginTop: 20 }}>
                What we hire <em>for</em>.
              </h2>
            </div>
            <div className="value-pills" style={{ justifyContent: "center" }}>
              <div className="value-pill">
                <em>1.</em> Passion
              </div>
              <div className="value-pill">
                <em>2.</em> Grit
              </div>
              <div className="value-pill">
                <em>3.</em> Humility
              </div>
              <div className="value-pill">
                <em>4.</em> Execution
              </div>
              <div className="value-pill">
                <em>5.</em> Curiosity
              </div>
              <div className="value-pill">
                <em>6.</em> Ownership
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="biz-section alt">
        <div className="wrap">
          <div className="two-col">
            <div className="col-text">
              <span className="eyebrow">Where we operate</span>
              <h2 className="section-title" style={{ marginTop: 20 }}>
                From three cities <em>to</em>
                <br />
                twenty-five.
              </h2>
              <p className="lede">
                In four years we&apos;ve grown from a single warehouse in Mumbai to a
                network spanning India&apos;s largest metros, with sights set on
                Southeast Asia by 2027.
              </p>
            </div>
            <div className="step-list" style={{ marginTop: 0 }}>
              <div className="step-row">
                <div className="n">&apos;22</div>
                <div>
                  <h5>Founded in Mumbai</h5>
                  <p>First 100 deliveries shipped from a Bandra garage.</p>
                </div>
              </div>
              <div className="step-row">
                <div className="n">&apos;23</div>
                <div>
                  <h5>Expanded to Pune &amp; Bengaluru</h5>
                  <p>Crossed 50,000 monthly orders.</p>
                </div>
              </div>
              <div className="step-row">
                <div className="n">&apos;24</div>
                <div>
                  <h5>Series A · 5 metros</h5>
                  <p>Driver fleet grew past 10,000 partners.</p>
                </div>
              </div>
              <div className="step-row">
                <div className="n">&apos;25</div>
                <div>
                  <h5>Pan-India · 20 cities</h5>
                  <p>Launched Fleet Management &amp; Business APIs.</p>
                </div>
              </div>
              <div className="step-row">
                <div className="n">&apos;26</div>
                <div>
                  <h5>25+ cities &amp; growing</h5>
                  <p>SE Asia expansion underway.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="biz-section">
        <div className="wrap">
          <div
            style={{
              textAlign: "center",
              maxWidth: 680,
              margin: "0 auto 60px",
            }}
          >
            <span className="eyebrow">Life at CarryOn</span>
            <h2 className="section-title" style={{ marginTop: 20 }}>
              A team that <em>moves</em>.
            </h2>
          </div>
          <div className="feature-grid-3">
            <div className="feature-card">
              <div className="feat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="8.5" cy="7" r="4" />
                  <path d="M20 8v6M23 11h-6" />
                </svg>
              </div>
              <h4>Cross-functional teams</h4>
              <p>Engineers sit beside operators. Designers ride along.</p>
            </div>
            <div className="feature-card">
              <div className="feat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <h4>Fast-paced work</h4>
              <p>Ship daily. Learn weekly. Compound monthly.</p>
            </div>
            <div className="feature-card">
              <div className="feat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 3v18h18M7 14l4-4 3 3 5-7" />
                </svg>
              </div>
              <h4>Logistics challenges</h4>
              <p>Real-world problems with measurable impact.</p>
            </div>
            <div className="feature-card">
              <div className="feat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L15 9l7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" />
                </svg>
              </div>
              <h4>Generous benefits</h4>
              <p>Equity, full health cover, and unlimited transit credits.</p>
            </div>
            <div className="feature-card">
              <div className="feat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2 12h6M16 12h6M12 2v6M12 16v6" />
                  <circle cx="12" cy="12" r="4" />
                </svg>
              </div>
              <h4>Hybrid &amp; remote</h4>
              <p>Choose your rhythm. Choose your city.</p>
            </div>
            <div className="feature-card">
              <div className="feat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.1V12a10 10 0 11-5.9-9.1" />
                  <path d="M22 4l-10 10-3-3" />
                </svg>
              </div>
              <h4>Real ownership</h4>
              <p>Equity for everyone. Real say in what we build.</p>
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
            <span className="eyebrow">Graduate opportunities</span>
            <h2 className="section-title" style={{ marginTop: 20 }}>
              Start your career <em>here</em>.
            </h2>
          </div>
          <div className="two-col" style={{ gap: 24 }}>
            <div className="feature-card" style={{ padding: 48 }}>
              <div
                className="feat-icon"
                style={{ width: 64, height: 64, borderRadius: 18 }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20" />
                </svg>
              </div>
              <h4 style={{ fontSize: 24, marginBottom: 12 }}>Global Trainee Program</h4>
              <p style={{ fontSize: 15, marginBottom: 20 }}>
                A 24-month rotation across operations, strategy, and product. Build
                a foundation across the entire CarryOn business.
              </p>
              <Link
                href="/#download-app"
                className="arrow-link"
                style={{
                  color: "var(--royal)",
                  fontWeight: 600,
                  display: "inline-flex",
                  gap: 8,
                  alignItems: "center",
                }}
              >
                Apply for GTP{" "}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="feature-card" style={{ padding: 48 }}>
              <div
                className="feat-icon"
                style={{ width: 64, height: 64, borderRadius: 18 }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              </div>
              <h4 style={{ fontSize: 24, marginBottom: 12 }}>Tech Graduate Program</h4>
              <p style={{ fontSize: 15, marginBottom: 20 }}>
                An 18-month engineering residency across our routing, dispatch, and
                platform teams. Mentored by senior architects.
              </p>
              <Link
                href="/#download-app"
                className="arrow-link"
                style={{
                  color: "var(--royal)",
                  fontWeight: 600,
                  display: "inline-flex",
                  gap: 8,
                  alignItems: "center",
                }}
              >
                Apply for TGP{" "}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="biz-section">
        <div className="wrap">
          <div className="test-grid">
            <div className="test-card">
              <div className="quote-mark">&ldquo;</div>
              <span className="role">Engineering</span>
              <p className="quote">
                I shipped my first production system on day eleven. The{" "}
                <em>autonomy</em> here is unreal.
              </p>
              <div className="test-author">
                <div className="avatar">NK</div>
                <div>
                  <div className="name">Niharika K.</div>
                  <div className="meta">Software Engineer &middot; 2 years</div>
                </div>
              </div>
            </div>
            <div className="test-card">
              <div className="quote-mark">&ldquo;</div>
              <span className="role">Operations</span>
              <p className="quote">
                Every day I work on a problem that <em>moves</em> a real package
                across a real city.
              </p>
              <div className="test-author">
                <div className="avatar">AM</div>
                <div>
                  <div className="name">Arjun M.</div>
                  <div className="meta">Ops Manager &middot; 3 years</div>
                </div>
              </div>
            </div>
            <div className="test-card">
              <div className="quote-mark">&ldquo;</div>
              <span className="role">Design</span>
              <p className="quote">
                Design here isn&apos;t decoration — it&apos;s <em>infrastructure</em>. And the
                team treats it that way.
              </p>
              <div className="test-author">
                <div className="avatar">SD</div>
                <div>
                  <div className="name">Saanvi D.</div>
                  <div className="meta">Lead Designer &middot; 18 months</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-strip">
        <div className="wrap">
          <div className="cta-strip-inner">
            <h2 className="section-title" style={{ color: "white" }}>
              Find your
              <br />
              career at <em>CarryOn</em>.
            </h2>
            <p>Open roles across engineering, design, ops, and growth.</p>
            <div className="btn-row">
              <Link
                href="/#download-app"
                className="btn btn-primary"
                style={{ background: "white", color: "var(--navy)" }}
              >
                See All Jobs
                <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
