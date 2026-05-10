import Link from "next/link";

const ArrowRight = ({ className = "arrow" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
);

export default function BusinessPage() {
  return (
    <>
      <div className="biz-hero">
        <div className="wrap">
          <div className="biz-grid">
            <div>
              <span className="eyebrow">For business</span>
              <h1 className="hero-title" style={{ marginTop: 24 }}>
                Last-mile
                <br />
                logistics, <em>perfected</em>.
              </h1>
              <p className="lede" style={{ marginTop: 24 }}>
                Fast, reliable same-day, scheduled, bulk, and integrated delivery
                solutions for businesses of every size.
              </p>
              <div className="hero-cta-row" style={{ marginTop: 36 }}>
                <Link href="/#download-app" className="btn btn-primary">
                  Deliver Now
                  <ArrowRight />
                </Link>
                <Link href="/contact" className="btn btn-secondary">
                  Talk to Sales
                </Link>
              </div>
              <div className="hero-stats" style={{ marginTop: 60 }}>
                <div className="hero-stat">
                  <div className="num">
                    50<em>K+</em>
                  </div>
                  <div className="label">BUSINESSES SERVED</div>
                </div>
                <div className="hero-stat">
                  <div className="num">
                    1.5<em>M</em>
                  </div>
                  <div className="label">MONTHLY ORDERS</div>
                </div>
                <div className="hero-stat">
                  <div className="num">
                    99<em>%</em>
                  </div>
                  <div className="label">DISPATCH SUCCESS</div>
                </div>
              </div>
            </div>
            <div className="biz-form-card">
              <h3>
                Tell us about <em>your</em> business.
              </h3>
              <p className="form-sub">
                A specialist will reach out within 24 hours.
              </p>
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input type="text" placeholder="Anaya" />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" placeholder="Kapoor" />
                </div>
              </div>
              <div className="form-row full">
                <div className="form-group">
                  <label>Company</label>
                  <input type="text" placeholder="Nova Mart Pvt Ltd" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Job Title</label>
                  <input type="text" placeholder="Operations Lead" />
                </div>
                <div className="form-group">
                  <label>Industry</label>
                  <select>
                    <option>E-commerce</option>
                    <option>Retail</option>
                    <option>F&amp;B</option>
                    <option>Pharma</option>
                    <option>Manufacturing</option>
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" placeholder="anaya@novamart.in" />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input type="tel" placeholder="+91 98000 00000" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>City</label>
                  <input type="text" placeholder="Mumbai" />
                </div>
                <div className="form-group">
                  <label>Vehicle Most Often</label>
                  <select>
                    <option>Bike</option>
                    <option>Mini Van</option>
                    <option>Tempo</option>
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Monthly Volume</label>
                  <select>
                    <option>&lt; 100 orders</option>
                    <option>100 — 1,000</option>
                    <option>1,000 — 10,000</option>
                    <option>10,000 +</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>How do you order today?</label>
                  <select>
                    <option>Manual / phone</option>
                    <option>Spreadsheets</option>
                    <option>Other vendor</option>
                    <option>API / integration</option>
                  </select>
                </div>
              </div>
              <Link
                href="/#download-app"
                className="btn btn-primary"
                style={{ width: "100%", justifyContent: "center", marginTop: 16 }}
              >
                Submit request
                <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="section-tabs">
        <Link href="#sec-biz" className="active">
          For Business
        </Link>
        <Link href="#sec-ecom">E-Commerce</Link>
        <Link href="#sec-api">API</Link>
        <Link href="#sec-custom">Customised</Link>
        <Link href="#sec-partners">Partnerships</Link>
      </div>

      <section className="biz-section" id="sec-biz">
        <div className="wrap">
          <div className="two-col">
            <div className="col-text">
              <span className="eyebrow">For Business</span>
              <h2 className="section-title" style={{ marginTop: 20 }}>
                Grow with a fleet that <em>scales</em> as you do.
              </h2>
              <p className="lede">
                Reduce operational costs, reach more customers, and scale across
                cities — with one logistics partner instead of five.
              </p>
            </div>
            <div
              className="feature-grid-3"
              style={{ gridTemplateColumns: "1fr 1fr", margin: 0 }}
            >
              <div className="feature-card">
                <div className="feat-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 3v18h18M7 14l4-4 3 3 5-7" />
                  </svg>
                </div>
                <h4>Reduce costs</h4>
                <p>Smarter routing, lower per-order economics.</p>
              </div>
              <div className="feature-card">
                <div className="feat-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </div>
                <h4>Faster fulfilment</h4>
                <p>Same-day dispatch on bulk orders.</p>
              </div>
              <div className="feature-card">
                <div className="feat-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 21V8l9-5 9 5v13H3z" />
                  </svg>
                </div>
                <h4>Multi-branch</h4>
                <p>Manage every location from one dashboard.</p>
              </div>
              <div className="feature-card">
                <div className="feat-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </div>
                <h4>Account support</h4>
                <p>A dedicated team that knows you by name.</p>
              </div>
            </div>
          </div>

          <div className="stats-row">
            <div className="stat-item">
              <div className="num">
                350<em>K+</em>
              </div>
              <div className="label">Verified drivers</div>
            </div>
            <div className="stat-item">
              <div className="num">
                1.5<em>M</em>
              </div>
              <div className="label">Monthly orders</div>
            </div>
            <div className="stat-item">
              <div className="num">
                50<em>K+</em>
              </div>
              <div className="label">Businesses</div>
            </div>
            <div className="stat-item">
              <div className="num">
                99<em>%</em>
              </div>
              <div className="label">Dispatch success</div>
            </div>
          </div>

          <div style={{ marginTop: 80 }}>
            <div
              style={{
                textAlign: "center",
                maxWidth: 680,
                margin: "0 auto 60px",
              }}
            >
              <span className="eyebrow">Place your first order</span>
              <h2 className="section-title" style={{ marginTop: 20 }}>
                Four steps. <em>Done.</em>
              </h2>
            </div>
            <div className="steps" style={{ gridTemplateColumns: "repeat(4,1fr)" }}>
              <div className="step active">
                <div
                  className="step-num"
                  style={{
                    background: "#EFF6FF",
                    color: "#2563EB",
                    borderColor: "#DBEAFE",
                  }}
                >
                  1
                </div>
                <h4 style={{ color: "var(--navy)" }}>Set delivery route</h4>
                <p style={{ color: "var(--slate-500)" }}>
                  Pickup &amp; drop in seconds.
                </p>
              </div>
              <div className="step">
                <div
                  className="step-num"
                  style={{
                    background: "#EFF6FF",
                    color: "#2563EB",
                    borderColor: "#DBEAFE",
                  }}
                >
                  2
                </div>
                <h4 style={{ color: "var(--navy)" }}>Pick a vehicle</h4>
                <p style={{ color: "var(--slate-500)" }}>
                  Right ride for the load.
                </p>
              </div>
              <div className="step">
                <div
                  className="step-num"
                  style={{
                    background: "#EFF6FF",
                    color: "#2563EB",
                    borderColor: "#DBEAFE",
                  }}
                >
                  3
                </div>
                <h4 style={{ color: "var(--navy)" }}>Confirm delivery</h4>
                <p style={{ color: "var(--slate-500)" }}>
                  Pay or invoice — your call.
                </p>
              </div>
              <div className="step">
                <div
                  className="step-num"
                  style={{
                    background: "#EFF6FF",
                    color: "#2563EB",
                    borderColor: "#DBEAFE",
                  }}
                >
                  4
                </div>
                <h4 style={{ color: "var(--navy)" }}>Track in real time</h4>
                <p style={{ color: "var(--slate-500)" }}>
                  Watch every order move.
                </p>
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
            <span className="eyebrow">Business tools</span>
            <h2 className="section-title" style={{ marginTop: 20 }}>
              Everything <em>essential</em> in one place.
            </h2>
          </div>
          <div className="feature-grid-3">
            <div className="feature-card">
              <div className="feat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M9 9h6v6H9z" />
                </svg>
              </div>
              <h4>Bulk Delivery</h4>
              <p>Dispatch hundreds of orders in a single batch.</p>
            </div>
            <div className="feature-card">
              <div className="feat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 12h18M3 6h18M3 18h18" />
                </svg>
              </div>
              <h4>Long-haul Delivery</h4>
              <p>Inter-city routes with tracked transit handoffs.</p>
            </div>
            <div className="feature-card">
              <div className="feat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2a10 10 0 100 20 10 10 0 000-20zM2 12h20" />
                </svg>
              </div>
              <h4>Professional Guidance</h4>
              <p>Logistics consultants who think like operators.</p>
            </div>
            <div className="feature-card">
              <div className="feat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              </div>
              <h4>API Support</h4>
              <p>Embed CarryOn directly into your stack.</p>
            </div>
            <div className="feature-card">
              <div className="feat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                  <path d="M14 2v6h6M16 13H8M16 17H8" />
                </svg>
              </div>
              <h4>Monthly Statements</h4>
              <p>Clean invoices, GST-ready, on schedule.</p>
            </div>
            <div className="feature-card">
              <div className="feat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="6" width="20" height="12" rx="2" />
                  <path d="M2 10h20" />
                </svg>
              </div>
              <h4>Business Wallet</h4>
              <p>Pre-loaded balance for your team to draw from.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="biz-section" id="sec-ecom">
        <div className="wrap">
          <div className="two-col">
            <div className="col-text">
              <span className="eyebrow">E-Commerce Integrations</span>
              <h2 className="section-title" style={{ marginTop: 20 }}>
                Plug us into your <em>storefront</em> in minutes.
              </h2>
              <p className="lede">
                Sync Shopify, WooCommerce, marketplaces, and your POS — orders flow
                straight into our dispatch engine.
              </p>
              <ul
                className="app-feat"
                style={{
                  gridTemplateColumns: "1fr 1fr",
                  maxWidth: 480,
                  marginTop: 24,
                }}
              >
                <li>Shopify integration</li>
                <li>WooCommerce</li>
                <li>Marketplace connector</li>
                <li>POS integration</li>
                <li>Order auto-sync</li>
                <li>Live tracking updates</li>
                <li>Saved pickup addresses</li>
                <li>Multi-payment support</li>
              </ul>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div
                className="feature-card"
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  gap: 24,
                  alignItems: "center",
                  padding: 32,
                }}
              >
                <div
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: 20,
                    background: "linear-gradient(135deg,#10B981,#059669)",
                    display: "grid",
                    placeItems: "center",
                    color: "white",
                    fontFamily: "var(--display)",
                    fontStyle: "italic",
                    fontSize: 36,
                  }}
                >
                  S
                </div>
                <div>
                  <h4 style={{ fontSize: 22 }}>CarryOn Shopify Plugin</h4>
                  <p>
                    One-click install. Auto-fulfil every order with the right
                    vehicle, region-aware.
                  </p>
                </div>
              </div>
              <div
                className="feature-card"
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  gap: 24,
                  alignItems: "center",
                  padding: 32,
                }}
              >
                <div
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: 20,
                    background: "linear-gradient(135deg,var(--royal),var(--sky))",
                    display: "grid",
                    placeItems: "center",
                    color: "white",
                    fontFamily: "var(--display)",
                    fontStyle: "italic",
                    fontSize: 36,
                  }}
                >
                  e
                </div>
                <div>
                  <h4 style={{ fontSize: 22 }}>
                    CarryOn E-Commerce Connector
                  </h4>
                  <p>
                    Universal connector with WooCommerce, Magento, and OpenCart
                    support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="biz-section alt" id="sec-api">
        <div className="wrap">
          <div className="two-col">
            <div>
              <div className="code-card">
                <div className="dots">
                  <span />
                  <span />
                  <span />
                </div>
                <pre style={{ margin: 0, fontFamily: "inherit" }}>
                  <span className="com">// POST /v1/orders — create a delivery</span>
                  {`\n`}
                  <span className="kw">curl</span> https://api.carryon.io/v1/orders \{`\n`}
                  {"  "}
                  <span className="str">-H</span>{" "}
                  <span className="str">&quot;Authorization: Bearer ********&quot;</span>{" "}\{`\n`}
                  {"  "}
                  <span className="str">-H</span>{" "}
                  <span className="str">
                    &quot;Content-Type: application/json&quot;
                  </span>{" "}\{`\n`}
                  {"  "}
                  <span className="str">-d</span> &apos;{"{"}
                  {`\n`}
                  {"    "}
                  <span className="kw">&quot;pickup&quot;</span>: {"{"}
                  {`\n`}
                  {"      "}
                  <span className="kw">&quot;lat&quot;</span>: 19.0760,{" "}
                  {`\n`}
                  {"      "}
                  <span className="kw">&quot;lng&quot;</span>: 72.8777{" "}
                  {`\n`}
                  {"    "}
                  {"}"},{" "}
                  {`\n`}
                  {"    "}
                  <span className="kw">&quot;drop&quot;</span>: {"{"}
                  {`\n`}
                  {"      "}
                  <span className="kw">&quot;lat&quot;</span>: 19.1075,{" "}
                  {`\n`}
                  {"      "}
                  <span className="kw">&quot;lng&quot;</span>: 72.8263{" "}
                  {`\n`}
                  {"    "}
                  {"}"},{" "}
                  {`\n`}
                  {"    "}
                  <span className="kw">&quot;vehicle&quot;</span>:{" "}
                  <span className="str">&quot;mini_van&quot;</span>,{" "}
                  {`\n`}
                  {"    "}
                  <span className="kw">&quot;mode&quot;</span>:{" "}
                  <span className="str">&quot;priority&quot;</span>,{" "}
                  {`\n`}
                  {"    "}
                  <span className="kw">&quot;webhook_url&quot;</span>:{" "}
                  <span className="str">
                    &quot;https://yoursite.com/hook&quot;
                  </span>
                  {" "}
                  {`\n`}
                  {"  "}
                  {"}"}&apos;{" "}
                  {`\n`}
                  {`\n`}
                  <span className="com">// Response →</span>
                  {`\n`}
                  {"{"}
                  {`\n`}
                  {"  "}
                  <span className="kw">&quot;order_id&quot;</span>:{" "}
                  <span className="str">&quot;ord_8xK2pQrT&quot;</span>,{" "}
                  {`\n`}
                  {"  "}
                  <span className="kw">&quot;status&quot;</span>:{" "}
                  <span className="str">&quot;matched&quot;</span>,{" "}
                  {`\n`}
                  {"  "}
                  <span className="kw">&quot;eta_minutes&quot;</span>: 23,{" "}
                  {`\n`}
                  {"  "}
                  <span className="kw">&quot;driver&quot;</span>: {"{"}
                  {`\n`}
                  {"    "}
                  <span className="kw">&quot;name&quot;</span>:{" "}
                  <span className="str">&quot;Ravi V.&quot;</span>,{" "}
                  {`\n`}
                  {"    "}
                  <span className="kw">&quot;vehicle&quot;</span>:{" "}
                  <span className="str">&quot;DL-3C-5491&quot;</span>{" "}
                  {`\n`}
                  {"  "}
                  {"}"}
                  {" "}
                  {`\n`}
                  {"}"}
                </pre>
              </div>
            </div>
            <div className="col-text">
              <span className="eyebrow">API Solutions</span>
              <h2 className="section-title" style={{ marginTop: 20 }}>
                Built for <em>builders</em>.
              </h2>
              <p className="lede">
                Production-grade endpoints, webhook lifecycles, sandbox keys, and
                elegant docs your developers will actually enjoy.
              </p>
              <ul
                className="app-feat"
                style={{
                  gridTemplateColumns: "1fr 1fr",
                  maxWidth: 480,
                  marginTop: 24,
                }}
              >
                <li>Order placement API</li>
                <li>Delivery quote API</li>
                <li>Scheduling API</li>
                <li>Live location API</li>
                <li>Webhook events</li>
                <li>Driver matching</li>
                <li>Sandbox testing</li>
                <li>Branch management</li>
              </ul>
              <div style={{ marginTop: 32 }}>
                <Link href="/#download-app" className="btn btn-primary">
                  Read API docs
                  <ArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="biz-section" id="sec-custom">
        <div className="wrap">
          <div className="two-col">
            <div className="col-text">
              <span className="eyebrow">Customised Solutions</span>
              <h2 className="section-title" style={{ marginTop: 20 }}>
                When <em>off-the-shelf</em>
                <br />
                isn&apos;t enough.
              </h2>
              <p className="lede">
                Enterprise SLAs, contracted pricing, and dedicated fleets for
                businesses with serious volume.
              </p>
            </div>
            <div className="step-list" style={{ marginTop: 0 }}>
              <div className="step-row">
                <div className="n">1</div>
                <div>
                  <h5>Tell us your delivery needs</h5>
                  <p>Volume, geography, SLAs, and SOPs.</p>
                </div>
              </div>
              <div className="step-row">
                <div className="n">2</div>
                <div>
                  <h5>Access dedicated portal</h5>
                  <p>Your branded ops console, ready in days.</p>
                </div>
              </div>
              <div className="step-row">
                <div className="n">3</div>
                <div>
                  <h5>Place orders manually or via API</h5>
                  <p>Whatever fits your existing workflow.</p>
                </div>
              </div>
              <div className="step-row">
                <div className="n">4</div>
                <div>
                  <h5>Receive routing guidance</h5>
                  <p>Our planners review your traffic in real time.</p>
                </div>
              </div>
              <div className="step-row">
                <div className="n">5</div>
                <div>
                  <h5>Deliver against SOPs &amp; SLAs</h5>
                  <p>With trained drivers and live escalation.</p>
                </div>
              </div>
              <div className="step-row">
                <div className="n">6</div>
                <div>
                  <h5>Export reports</h5>
                  <p>Parcel-level audit logs &amp; proof of delivery.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="biz-section alt" id="sec-partners">
        <div className="wrap">
          <div
            style={{
              textAlign: "center",
              maxWidth: 680,
              margin: "0 auto 60px",
            }}
          >
            <span className="eyebrow">Channel Partnerships</span>
            <h2 className="section-title" style={{ marginTop: 20 }}>
              Embed delivery, <em>everywhere</em>.
            </h2>
            <p className="lede" style={{ margin: "24px auto 0" }}>
              Bring CarryOn directly into your platform — and unlock new revenue
              streams without building logistics from scratch.
            </p>
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
              <h4>Preferred partner ecosystem</h4>
              <p>Curated, exclusive integrations.</p>
            </div>
            <div className="feature-card">
              <div className="feat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              </div>
              <h4>Cross-platform integrations</h4>
              <p>SDKs for web, iOS, and Android.</p>
            </div>
            <div className="feature-card">
              <div className="feat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 00-1-1.7l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.7l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
                </svg>
              </div>
              <h4>Technology alliances</h4>
              <p>Co-built solutions with marquee partners.</p>
            </div>
            <div className="feature-card">
              <div className="feat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 3h18v18H3z" />
                  <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
                </svg>
              </div>
              <h4>Merchant enablement</h4>
              <p>Turn delivery into your selling point.</p>
            </div>
            <div className="feature-card">
              <div className="feat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v20M2 12h20" />
                </svg>
              </div>
              <h4>New revenue streams</h4>
              <p>Earn on every shipment we deliver.</p>
            </div>
            <div className="feature-card">
              <div className="feat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                </svg>
              </div>
              <h4>Embedded delivery</h4>
              <p>Make logistics invisible to your users.</p>
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
              <span className="eyebrow">Trusted by</span>
              <h2 className="section-title" style={{ marginTop: 20, fontSize: 42 }}>
                Powering <em>50,000+</em> businesses.
              </h2>
            </div>
            <div className="logos-strip">
              <div className="logo-item bold">NOVA MART</div>
              <div className="logo-item">Shopflow</div>
              <div className="logo-item bold">EASY · STORE</div>
              <div className="logo-item">BulkBox</div>
              <div className="logo-item bold">ODDLE</div>
              <div className="logo-item">Mercato</div>
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
            <span className="eyebrow">Questions answered</span>
            <h2 className="section-title" style={{ marginTop: 20 }}>
              FAQ
            </h2>
          </div>
          <div className="faq-list">
            <details className="faq-item" open>
              <summary>How do I create a business account?</summary>
              <p>
                Submit the form above and our team will activate your account
                within 24 hours, including a dedicated portal and a wallet
                pre-loaded with credits to test our service.
              </p>
            </details>
            <details className="faq-item">
              <summary>How much does CarryOn charge?</summary>
              <p>
                Pricing is volume-based and varies by city, vehicle, and delivery
                mode. Most businesses see 15-32% savings versus their previous
                logistics setup. Book a call for a tailored quote.
              </p>
            </details>
            <details className="faq-item">
              <summary>Which payment methods are available?</summary>
              <p>
                UPI, NetBanking, all major cards, monthly invoices for enterprise
                accounts, and pre-paid wallet credits — whichever fits your finance
                team&apos;s workflow best.
              </p>
            </details>
            <details className="faq-item">
              <summary>Can the API handle multi-stop orders?</summary>
              <p>
                Yes — multi-stop, multi-pickup, and multi-drop are all first-class
                citizens in our API. Orders can include up to 10 stops with
                optimised routing.
              </p>
            </details>
            <details className="faq-item">
              <summary>Do you support scheduled dispatch?</summary>
              <p>
                Schedule deliveries up to 30 days in advance with priority dispatch
                windows and automatic driver assignment ahead of pickup.
              </p>
            </details>
            <details className="faq-item">
              <summary>Who can I contact for technical support?</summary>
              <p>
                Every business account includes a dedicated success manager and
                access to our 24/7 priority developer support channel via Slack and
                email.
              </p>
            </details>
          </div>
        </div>
      </section>

      <section className="cta-strip">
        <div className="wrap">
          <div className="cta-strip-inner">
            <span className="eyebrow" style={{ color: "var(--sky)" }}>
              Ready to scale?
            </span>
            <h2 className="section-title" style={{ color: "white", marginTop: 24 }}>
              Scale your business logistics
              <br />
              with <em>CarryOn</em>.
            </h2>
            <p>
              Get a custom quote and dedicated logistics consultant within 24
              hours.
            </p>
            <div className="btn-row">
              <Link
                href="/#download-app"
                className="btn btn-primary"
                style={{ background: "white", color: "var(--navy)" }}
              >
                Contact Sales
              </Link>
              <Link
                href="/#download-app"
                className="btn btn-ghost-line"
                style={{ color: "white", borderColor: "rgba(255,255,255,.3)" }}
              >
                Request Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
