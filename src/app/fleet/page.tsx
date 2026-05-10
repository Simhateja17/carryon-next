import Link from "next/link";

const ArrowRight = ({ className = "arrow" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
);

export default function FleetPage() {
  return (
    <>
      <div className="biz-hero">
        <div className="wrap">
          <div className="biz-grid">
            <div>
              <span className="eyebrow">Fleet Management</span>
              <h1 className="hero-title" style={{ marginTop: 24 }}>
                Maximise your
                <br />
                fleet <em>potential</em>.
              </h1>
              <p className="lede" style={{ marginTop: 24 }}>
                Built for fleet owners. Manage drivers, vehicles, and delivery
                capacity more efficiently with CarryOn Fleet Management.
              </p>

              <div className="benefits">
                <div className="benefit">
                  <div className="icn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 3v18h18M7 14l4-4 3 3 5-7" />
                    </svg>
                  </div>
                  <p>Increase income</p>
                </div>
                <div className="benefit">
                  <div className="icn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 12h-4l-3 9L9 3 6 12H2" />
                    </svg>
                  </div>
                  <p>Maximise output</p>
                </div>
                <div className="benefit">
                  <div className="icn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="11" cy="11" r="8" />
                      <path d="M21 21l-4-4" />
                    </svg>
                  </div>
                  <p>Fleet visibility</p>
                </div>
              </div>
            </div>
            <div className="biz-form-card">
              <h3>
                Register your <em>fleet</em>.
              </h3>
              <p className="form-sub">
                A fleet specialist will get in touch within 48 hours.
              </p>
              <div className="form-row">
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" placeholder="Your name" />
                </div>
                <div className="form-group">
                  <label>Company</label>
                  <input type="text" placeholder="Fleet name" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Phone</label>
                  <input type="tel" placeholder="+91 98000 00000" />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" placeholder="you@fleet.com" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Drivers</label>
                  <select>
                    <option>1-5 drivers</option>
                    <option>6-20</option>
                    <option>21-50</option>
                    <option>50+</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Vehicles</label>
                  <select>
                    <option>1-5 vehicles</option>
                    <option>6-20</option>
                    <option>21-50</option>
                    <option>50+</option>
                  </select>
                </div>
              </div>
              <div className="form-row full">
                <div className="form-group">
                  <label>Vehicle Types</label>
                  <input type="text" placeholder="e.g. mini van, pickup truck, tempo" />
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
                I agree to the Privacy Policy and Fleet Partner Terms
              </label>
              <Link
                href="/#download-app"
                className="btn btn-primary"
                style={{ width: "100%", justifyContent: "center", marginTop: 20 }}
              >
                Submit Fleet Application
                <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <section className="biz-section">
        <div className="wrap">
          <div
            style={{
              textAlign: "center",
              maxWidth: 680,
              margin: "0 auto 60px",
            }}
          >
            <span className="eyebrow">How to set up your fleet</span>
            <h2 className="section-title" style={{ marginTop: 20 }}>
              Seven steps to
              <br />
              <em>scale</em>.
            </h2>
          </div>
          <div className="step-list" style={{ maxWidth: 880, margin: "0 auto" }}>
            <div className="step-row">
              <div className="n">1</div>
              <div>
                <h5>Register as a fleet owner</h5>
                <p>Submit company details and KYC documents.</p>
              </div>
            </div>
            <div className="step-row">
              <div className="n">2</div>
              <div>
                <h5>Log in as a fleet owner</h5>
                <p>Access your dedicated fleet dashboard.</p>
              </div>
            </div>
            <div className="step-row">
              <div className="n">3</div>
              <div>
                <h5>Register vehicles</h5>
                <p>Upload RC, insurance, and PUC documents.</p>
              </div>
            </div>
            <div className="step-row">
              <div className="n">4</div>
              <div>
                <h5>Get vehicles approved</h5>
                <p>Verification typically completes within 48 hours.</p>
              </div>
            </div>
            <div className="step-row">
              <div className="n">5</div>
              <div>
                <h5>Register drivers</h5>
                <p>Add driver profiles with licenses &amp; ID.</p>
              </div>
            </div>
            <div className="step-row">
              <div className="n">6</div>
              <div>
                <h5>Get drivers approved</h5>
                <p>Background &amp; document verification.</p>
              </div>
            </div>
            <div className="step-row">
              <div className="n">7</div>
              <div>
                <h5>Pair drivers and vehicles</h5>
                <p>Assign and start accepting orders.</p>
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
            <span className="eyebrow">Fleet FAQ</span>
            <h2 className="section-title" style={{ marginTop: 20 }}>
              Everything you should <em>know</em>.
            </h2>
          </div>
          <div className="faq-list">
            <details className="faq-item" open>
              <summary>What is CarryOn Fleet Management?</summary>
              <p>
                A dedicated suite that lets fleet owners onboard, manage, and grow
                multiple drivers and vehicles from one console — with priority
                support and consolidated payouts.
              </p>
            </details>
            <details className="faq-item">
              <summary>How can I register?</summary>
              <p>
                Use the form above. A specialist will review your application and
                get back within 48 hours with onboarding instructions.
              </p>
            </details>
            <details className="faq-item">
              <summary>What are the requirements?</summary>
              <p>
                Company KYC, vehicle RC + insurance + PUC for each vehicle, and
                valid driver licenses for each driver.
              </p>
            </details>
            <details className="faq-item">
              <summary>Can I add vehicles later?</summary>
              <p>
                Yes — you can add or retire vehicles anytime from your fleet
                dashboard.
              </p>
            </details>
          </div>
        </div>
      </section>

      <section className="cta-strip">
        <div className="wrap">
          <div className="cta-strip-inner">
            <h2 className="section-title" style={{ color: "white" }}>
              Ready to manage
              <br />
              your <em>fleet</em>?
            </h2>
            <div className="btn-row">
              <Link
                href="/#download-app"
                className="btn btn-primary"
                style={{ background: "white", color: "var(--navy)" }}
              >
                Register Fleet
              </Link>
              <Link
                href="/#download-app"
                className="btn btn-ghost-line"
                style={{ color: "white", borderColor: "rgba(255,255,255,.3)" }}
              >
                Talk to Specialist
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
