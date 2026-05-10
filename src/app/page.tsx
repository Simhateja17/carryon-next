import Image from "next/image";
import Link from "next/link";

const ArrowRight = ({ className = "arrow" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
);

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <div className="home-hero">
        <div className="wrap">
          <div className="hero-grid">
            <div className="hero-left">
              <span className="eyebrow hero-eyebrow">Premium urban logistics</span>
              <h1 className="hero-title">
                Fast &amp; reliable<br />deliveries — <em>across</em>
                <br />your city.
              </h1>
              <p className="lede hero-lede">
                Book instant, same-day, and scheduled deliveries with verified
                drivers, live tracking, secure payments, and the right vehicle for
                every package.
              </p>
              <div className="hero-cta-row">
                <Link href="/" className="btn btn-primary">
                  Book Delivery
                  <ArrowRight />
                </Link>
                <Link href="/driver" className="btn btn-secondary">
                  Become a Driver
                </Link>
              </div>
              <div className="hero-stats">
                <div className="hero-stat">
                  <div className="num">
                    350<em>K+</em>
                  </div>
                  <div className="label">VERIFIED DRIVERS</div>
                </div>
                <div className="hero-stat">
                  <div className="num">
                    1.5<em>M</em>
                  </div>
                  <div className="label">MONTHLY ORDERS</div>
                </div>
                <div className="hero-stat">
                  <div className="num">
                    25<em>+</em>
                  </div>
                  <div className="label">CITIES SERVED</div>
                </div>
              </div>
            </div>
            <div className="hero-art">
              <div className="hero-art-bg" />
              <div className="hero-truck-wrap">
                <Image
                  src="/carryon-truck.png"
                  alt="CarryOn delivery truck"
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
              <div className="float-card f1">
                <div className="float-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M13 2L4.5 13.5H12L11 22l8.5-11.5H12.5L13 2z" />
                  </svg>
                </div>
                <div className="val">Fast delivery across KL</div>
              </div>
              <div className="float-card f2">
                <div className="float-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                </div>
                <div>
                  <div className="label" style={{ color: "var(--royal)" }}>Real-time status</div>
                  <div className="val">Live tracking enabled</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AUDIENCE */}
      <section className="audience">
        <div className="wrap">
          <div className="audience-head">
            <div className="title-wrap">
              <span className="eyebrow">Built for everyone</span>
              <h2 className="section-title" style={{ marginTop: 20 }}>
                One platform. <em>Three</em> distinct journeys.
              </h2>
            </div>
            <p className="lede">
              From a single parcel to enterprise fleets — CarryOn shapes itself
              around you.
            </p>
          </div>
          <div className="audience-grid">
            <div className="aud-card">
              <div className="aud-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 21V8l9-5 9 5v13H3zM9 21v-6h6v6" />
                </svg>
              </div>
              <div>
                <span className="num">/01</span>
                <h3>Business</h3>
                <p>
                  Delivery solutions for teams of every size — from launch-day
                  startups to national networks.
                </p>
              </div>
              <Link href="/business" className="arrow-link">
                Explore Business{" "}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="aud-card">
              <div className="aud-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 21a8 8 0 0116 0" />
                </svg>
              </div>
              <div>
                <span className="num">/02</span>
                <h3>Personal</h3>
                <p>
                  Send parcels, gifts, documents, and daily essentials — across
                  town in minutes.
                </p>
              </div>
              <Link href="/" className="arrow-link">
                Send a parcel{" "}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="aud-card">
              <div className="aud-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 17h2l2-7h10l2 7h2M5 17a2 2 0 104 0M15 17a2 2 0 104 0" />
                </svg>
              </div>
              <div>
                <span className="num">/03</span>
                <h3>Driver</h3>
                <p>
                  Earn flexibly with CarryOn delivery jobs. You drive — we handle
                  the rest.
                </p>
              </div>
              <Link href="/driver" className="arrow-link">
                Drive with us{" "}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHT MARQUEE */}
      <div className="highlights">
        <div className="marquee">
          <span className="item">
            Live <em>Tracking</em>
          </span>
          <span className="dot" />
          <span className="item">
            Same-day <em>Delivery</em>
          </span>
          <span className="dot" />
          <span className="item">
            Verified <em>Drivers</em>
          </span>
          <span className="dot" />
          <span className="item">
            Secure <em>Payments</em>
          </span>
          <span className="dot" />
          <span className="item">
            Six <em>Vehicle</em> Options
          </span>
          <span className="dot" />
          <span className="item">
            24/7 <em>Support</em>
          </span>
          <span className="dot" />
          <span className="item">
            Live <em>Tracking</em>
          </span>
          <span className="dot" />
          <span className="item">
            Same-day <em>Delivery</em>
          </span>
          <span className="dot" />
          <span className="item">
            Verified <em>Drivers</em>
          </span>
          <span className="dot" />
          <span className="item">
            Secure <em>Payments</em>
          </span>
          <span className="dot" />
          <span className="item">
            Six <em>Vehicle</em> Options
          </span>
          <span className="dot" />
          <span className="item">
            24/7 <em>Support</em>
          </span>
          <span className="dot" />
        </div>
      </div>

      {/* DELIVERY MODES */}
      <section className="modes">
        <div className="wrap">
          <div className="modes-head">
            <span className="eyebrow">Delivery modes</span>
            <h2 className="section-title" style={{ marginTop: 20 }}>
              Three ways to <em>move</em>.
              <br />
              One promise of speed.
            </h2>
            <p className="lede">
              Choose the pace that suits your package — from rush-hour priority to
              eco-friendly pooled routes.
            </p>
          </div>
          <div className="modes-grid">
            <div className="mode-card">
              <span className="tag">Standard</span>
              <h3>Regular</h3>
              <p className="price">balanced for daily deliveries</p>
              <ul className="feature">
                <li>Standard ETA across the city</li>
                <li>Most-loved daily option</li>
                <li>Real-time live tracking</li>
                <li>Cashless secure payments</li>
              </ul>
              <Link href="/" className="mode-cta">
                Choose Regular{" "}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="mode-card featured">
              <span className="tag">Most popular</span>
              <h3>
                <em>Priority</em>
              </h3>
              <p className="price">fastest possible delivery</p>
              <ul className="feature">
                <li>Dedicated rider, no detours</li>
                <li>Direct route to your drop point</li>
                <li>Best for urgent &amp; fragile packages</li>
                <li>Premium handling &amp; reporting</li>
              </ul>
              <Link href="/" className="mode-cta">
                Choose Priority{" "}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="mode-card">
              <span className="tag">Eco-friendly</span>
              <h3>Pooling</h3>
              <p className="price">shared routes, lower cost</p>
              <ul className="feature">
                <li>Shared route across the city</li>
                <li>Lowest-cost delivery option</li>
                <li>Smaller carbon footprint</li>
                <li>Perfect for non-urgent items</li>
              </ul>
              <Link href="/" className="mode-cta">
                Choose Pooling{" "}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* VEHICLES */}
      <section className="vehicles">
        <div className="wrap">
          <div className="veh-head">
            <div>
              <span className="eyebrow">The fleet</span>
              <h2 className="section-title" style={{ marginTop: 20 }}>
                A vehicle for <em>every</em> package.
              </h2>
            </div>
            <Link href="/" className="btn btn-ghost-line">
              View all vehicles
              <ArrowRight />
            </Link>
          </div>
          <div className="veh-grid">
            <div className="veh-card">
              <div className="veh-icon">
                <svg width="42" height="42" viewBox="0 0 64 64" fill="none">
                  <circle cx="16" cy="46" r="8" fill="none" stroke="#0F172A" strokeWidth="2.5" />
                  <circle cx="48" cy="46" r="8" fill="none" stroke="#0F172A" strokeWidth="2.5" />
                  <path d="M16 46 L26 28 L40 28 L48 46" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  <path d="M40 28 L34 18" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <h4>Bike</h4>
                <p>Documents, small parcels</p>
                <span className="veh-cap">Up to 5kg</span>
              </div>
            </div>
            <div className="veh-card">
              <div className="veh-icon">
                <svg width="42" height="42" viewBox="0 0 64 64" fill="none">
                  <circle cx="14" cy="48" r="7" fill="none" stroke="#0F172A" strokeWidth="2.5" />
                  <circle cx="50" cy="48" r="7" fill="none" stroke="#0F172A" strokeWidth="2.5" />
                  <path d="M14 48 L24 30 L40 30 L46 22 L54 22" stroke="#2563EB" strokeWidth="2.5" fill="none" strokeLinejoin="round" strokeLinecap="round" />
                  <rect x="22" y="34" width="14" height="10" rx="2" fill="#60A5FA" opacity="0.4" />
                </svg>
              </div>
              <div>
                <h4>Scooter</h4>
                <p>Food, small boxes</p>
                <span className="veh-cap">Up to 10kg</span>
              </div>
            </div>
            <div className="veh-card">
              <div className="veh-icon">
                <svg width="42" height="42" viewBox="0 0 64 64" fill="none">
                  <rect x="6" y="22" width="44" height="22" rx="4" fill="#60A5FA" opacity="0.3" stroke="#0F172A" strokeWidth="2.5" />
                  <circle cx="16" cy="48" r="6" fill="white" stroke="#0F172A" strokeWidth="2.5" />
                  <circle cx="42" cy="48" r="6" fill="white" stroke="#0F172A" strokeWidth="2.5" />
                  <path d="M22 22 V12 H44 L52 22" stroke="#0F172A" strokeWidth="2.5" fill="none" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <h4>Mini Van</h4>
                <p>Mid-size cargo, multiple items</p>
                <span className="veh-cap">Up to 350kg</span>
              </div>
            </div>
            <div className="veh-card">
              <div className="veh-icon">
                <svg width="42" height="42" viewBox="0 0 64 64" fill="none">
                  <path d="M4 28 H22 L26 18 H38 V44 H4 Z" fill="white" stroke="#0F172A" strokeWidth="2.5" strokeLinejoin="round" />
                  <rect x="38" y="20" width="22" height="24" rx="3" fill="#60A5FA" opacity="0.3" stroke="#0F172A" strokeWidth="2.5" />
                  <circle cx="14" cy="48" r="5.5" fill="white" stroke="#0F172A" strokeWidth="2.5" />
                  <circle cx="48" cy="48" r="5.5" fill="white" stroke="#0F172A" strokeWidth="2.5" />
                </svg>
              </div>
              <div>
                <h4>Pickup Truck</h4>
                <p>Open-bed cargo, furniture</p>
                <span className="veh-cap">Up to 750kg</span>
              </div>
            </div>
            <div className="veh-card">
              <div className="veh-icon">
                <svg width="42" height="42" viewBox="0 0 64 64" fill="none">
                  <rect x="4" y="18" width="36" height="28" rx="3" fill="#60A5FA" opacity="0.4" stroke="#0F172A" strokeWidth="2.5" />
                  <path d="M40 26 H54 L60 34 V46 H40" fill="white" stroke="#0F172A" strokeWidth="2.5" strokeLinejoin="round" />
                  <circle cx="14" cy="50" r="5" fill="white" stroke="#0F172A" strokeWidth="2.5" />
                  <circle cx="48" cy="50" r="5" fill="white" stroke="#0F172A" strokeWidth="2.5" />
                </svg>
              </div>
              <div>
                <h4>Tempo</h4>
                <p>Bulk delivery, business cargo</p>
                <span className="veh-cap">Up to 1.2 ton</span>
              </div>
            </div>
            <div className="veh-card">
              <div className="veh-icon">
                <svg width="42" height="42" viewBox="0 0 64 64" fill="none">
                  <rect x="2" y="14" width="42" height="32" rx="3" fill="#0F172A" />
                  <rect x="6" y="18" width="34" height="20" rx="2" fill="#60A5FA" opacity="0.4" />
                  <path d="M44 22 H56 L62 32 V46 H44" fill="white" stroke="#0F172A" strokeWidth="2.5" strokeLinejoin="round" />
                  <circle cx="14" cy="50" r="5" fill="white" stroke="#0F172A" strokeWidth="2.5" />
                  <circle cx="32" cy="50" r="5" fill="white" stroke="#0F172A" strokeWidth="2.5" />
                  <circle cx="50" cy="50" r="5" fill="white" stroke="#0F172A" strokeWidth="2.5" />
                </svg>
              </div>
              <div>
                <h4>Large Truck</h4>
                <p>Long-haul, heavy logistics</p>
                <span className="veh-cap">Up to 5 ton</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROMO */}
      <section className="promo">
        <div className="wrap">
          <div className="promo-card">
            <div className="promo-content">
              <span className="promo-badge">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 2l2.4 7.4H22l-6.2 4.5L18.2 22 12 17.4 5.8 22l2.4-8.1L2 9.4h7.6z" />
                </svg>{" "}
                Limited Offer
              </span>
              <h2>
                <em>20% off</em>
                <br />
                your first delivery.
              </h2>
              <p>
                Welcome gift from CarryOn. Use the code at checkout — works on
                any vehicle, any mode, anywhere we operate.
              </p>
              <div className="promo-cta-row">
                <div className="promo-code">CARRYFIRST</div>
                <Link href="/" className="btn btn-primary" style={{ background: "white", color: "var(--navy)", boxShadow: "0 8px 24px rgba(0,0,0,.2)" }}>
                  Deliver Now
                  <ArrowRight />
                </Link>
              </div>
            </div>
            <div className="promo-visual">
              <div className="pkg">
                <svg width="60%" viewBox="0 0 200 200" fill="none">
                  <path d="M40 80 L100 50 L160 80 V160 L100 190 L40 160 Z" fill="white" opacity="0.1" stroke="rgba(255,255,255,.5)" strokeWidth="2" />
                  <path d="M40 80 L100 110 L160 80" stroke="rgba(255,255,255,.5)" strokeWidth="2" fill="none" />
                  <path d="M100 110 V190" stroke="rgba(255,255,255,.5)" strokeWidth="2" />
                  <rect x="86" y="40" width="28" height="14" rx="2" fill="#FCD34D" />
                  <rect x="86" y="46" width="28" height="2" fill="#F59E0B" opacity="0.5" />
                </svg>
              </div>
              <div className="discount-stamp">
                <div>
                  <div className="pct">20%</div>
                  <div className="off">OFF</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* APPS */}
      <section className="apps">
        <div className="wrap">
          <div className="apps-head">
            <span className="eyebrow">The CarryOn apps</span>
            <h2 className="section-title" style={{ marginTop: 20 }}>
              One ecosystem.
              <br />
              <em>Two</em> beautiful apps.
            </h2>
            <p className="lede">
              Whether you ship or you drive, the CarryOn apps are built to feel
              effortless from the first tap.
            </p>
          </div>
          <div className="apps-grid">
            <div className="app-card">
              <div>
                <span className="app-tag">For Riders &amp; Senders</span>
                <h3>
                  The <em>Rider</em> app.
                </h3>
                <p>
                  Book, track, and pay for deliveries from anywhere — with saved
                  addresses, wallet payments, and live updates.
                </p>
                <ul className="app-feat">
                  <li>Book deliveries</li>
                  <li>Track live</li>
                  <li>Pay securely</li>
                  <li>Saved addresses</li>
                </ul>
              </div>
              <div className="app-store-row">
                <Link href="/" className="store-btn">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.5 12.5c0-2.6 2.1-3.8 2.2-3.9-1.2-1.7-3-2-3.7-2-1.6-.2-3 .9-3.8.9-.8 0-2-.9-3.3-.9-1.7 0-3.3 1-4.1 2.5-1.8 3-.5 7.6 1.2 10.1.9 1.2 1.9 2.6 3.2 2.5 1.3-.1 1.8-.8 3.3-.8 1.6 0 2 .8 3.4.8 1.4 0 2.3-1.2 3.1-2.5.7-1 1-2 1-2.1 0-.1-2.5-1-2.5-3.6z" />
                  </svg>
                  <div>
                    <small>Download on the</small>
                    <div className="name">App Store</div>
                  </div>
                </Link>
                <Link href="/" className="store-btn">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 3.5v17c0 .3.1.5.3.7l9.5-9.2L3 3.5z" />
                  </svg>
                  <div>
                    <small>Get it on</small>
                    <div className="name">Google Play</div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="app-card dark">
              <div>
                <span className="app-tag">For Drivers &amp; Fleets</span>
                <h3>
                  The <em>Driver</em> app.
                </h3>
                <p>
                  Accept orders, navigate the smartest routes, and track your
                  earnings in real time. Built for drivers, by drivers.
                </p>
                <ul className="app-feat">
                  <li>Accept orders</li>
                  <li>Smart navigation</li>
                  <li>Track earnings</li>
                  <li>Manage payouts</li>
                </ul>
              </div>
              <div className="app-store-row">
                <Link href="/" className="store-btn">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.5 12.5c0-2.6 2.1-3.8 2.2-3.9-1.2-1.7-3-2-3.7-2-1.6-.2-3 .9-3.8.9-.8 0-2-.9-3.3-.9-1.7 0-3.3 1-4.1 2.5-1.8 3-.5 7.6 1.2 10.1.9 1.2 1.9 2.6 3.2 2.5 1.3-.1 1.8-.8 3.3-.8 1.6 0 2 .8 3.4.8 1.4 0 2.3-1.2 3.1-2.5.7-1 1-2 1-2.1 0-.1-2.5-1-2.5-3.6z" />
                  </svg>
                  <div>
                    <small>Download on the</small>
                    <div className="name">App Store</div>
                  </div>
                </Link>
                <Link href="/" className="store-btn">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 3.5v17c0 .3.1.5.3.7l9.5-9.2L3 3.5z" />
                  </svg>
                  <div>
                    <small>Get it on</small>
                    <div className="name">Google Play</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="howto">
        <div className="wrap">
          <div className="howto-head">
            <span className="eyebrow">How CarryOn works</span>
            <h2 className="section-title" style={{ marginTop: 20 }}>
              Five steps, <em>zero</em> friction.
            </h2>
            <p className="lede">
              From &quot;send this now&quot; to &quot;delivered&quot; — without a single phone call.
            </p>
          </div>
          <div className="steps">
            <div className="step active">
              <div className="step-num">i</div>
              <h4>Enter pickup &amp; drop</h4>
              <p>Tell us where it&apos;s going.</p>
            </div>
            <div className="step">
              <div className="step-num">ii</div>
              <h4>Select delivery mode</h4>
              <p>Priority, regular or pooled.</p>
            </div>
            <div className="step">
              <div className="step-num">iii</div>
              <h4>Choose vehicle</h4>
              <p>The right ride for your load.</p>
            </div>
            <div className="step">
              <div className="step-num">iv</div>
              <h4>Track live</h4>
              <p>Watch your package move.</p>
            </div>
            <div className="step">
              <div className="step-num">v</div>
              <h4>Delivery completed</h4>
              <p>Proof of delivery in seconds.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials">
        <div className="wrap">
          <div className="test-head">
            <div>
              <span className="eyebrow">Loved by every side of the road</span>
              <h2 className="section-title" style={{ marginTop: 20 }}>
                What people <em>say</em>.
              </h2>
            </div>
          </div>
          <div className="test-grid">
            <div className="test-card">
              <div className="quote-mark">&ldquo;</div>
              <span className="role">Customer</span>
              <p className="quote">
                CarryOn has <em>completely</em> changed how I send things. The live
                tracking is honestly addictive.
              </p>
              <div className="test-author">
                <div className="avatar">AS</div>
                <div>
                  <div className="name">Aanya Sharma</div>
                  <div className="meta">Bandra, Mumbai</div>
                </div>
              </div>
            </div>
            <div className="test-card">
              <div className="quote-mark">&ldquo;</div>
              <span className="role">Driver</span>
              <p className="quote">
                Flexible hours, transparent payouts, and an app that actually{" "}
                <em>respects</em> my time.
              </p>
              <div className="test-author">
                <div className="avatar">RV</div>
                <div>
                  <div className="name">Ravi Verma</div>
                  <div className="meta">Driver Partner &middot; 18 months</div>
                </div>
              </div>
            </div>
            <div className="test-card">
              <div className="quote-mark">&ldquo;</div>
              <span className="role">Business</span>
              <p className="quote">
                We replaced three vendors with one CarryOn account and reduced our
                last-mile costs by <em>32%</em>.
              </p>
              <div className="test-author">
                <div className="avatar">PG</div>
                <div>
                  <div className="name">Priyanka Gupta</div>
                  <div className="meta">Ops Lead, Nova Mart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DOWNLOAD CTA */}
      <section className="download-cta">
        <div className="wrap">
          <div className="dl-card">
            <div className="dl-text">
              <span className="eyebrow">Get the apps</span>
              <h2 className="section-title" style={{ marginTop: 20 }}>
                Take CarryOn
                <br />
                <em>everywhere</em>.
              </h2>
              <p>
                Scan the code or download from your favourite store. Both apps are
                free, fast, and built for daily use.
              </p>
              <div className="dl-actions">
                <Link href="/" className="btn btn-dark">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.5 12.5c0-2.6 2.1-3.8 2.2-3.9-1.2-1.7-3-2-3.7-2-1.6-.2-3 .9-3.8.9-.8 0-2-.9-3.3-.9-1.7 0-3.3 1-4.1 2.5-1.8 3-.5 7.6 1.2 10.1.9 1.2 1.9 2.6 3.2 2.5 1.3-.1 1.8-.8 3.3-.8 1.6 0 2 .8 3.4.8 1.4 0 2.3-1.2 3.1-2.5.7-1 1-2 1-2.1 0-.1-2.5-1-2.5-3.6z" />
                  </svg>
                  App Store
                </Link>
                <Link href="/" className="btn btn-dark">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 3.5v17c0 .3.1.5.3.7l9.5-9.2L3 3.5z" />
                  </svg>
                  Google Play
                </Link>
                <div className="qr" />
              </div>
            </div>
            <div className="phone-mock">
              <div className="phone-screen">
                <svg width="100%" height="100%" viewBox="0 0 240 480" fill="none">
                  <rect x="0" y="0" width="240" height="50" fill="white" rx="0" />
                  <text x="20" y="32" fontFamily="serif" fontSize="18" fontStyle="italic" fill="#0F172A">CarryOn</text>
                  <circle cx="220" cy="25" r="10" fill="#EFF6FF" />
                  <rect x="20" y="70" width="200" height="120" rx="16" fill="#EFF6FF" />
                  <path d="M40 130 Q90 100, 140 130 T200 150" stroke="#2563EB" strokeWidth="2.5" fill="none" strokeDasharray="3 3" />
                  <circle cx="40" cy="130" r="6" fill="#2563EB" />
                  <circle cx="200" cy="150" r="6" fill="#0F172A" />
                  <rect x="20" y="210" width="200" height="56" rx="14" fill="white" stroke="#E2E8F0" />
                  <text x="36" y="234" fontSize="10" fill="#64748B" letterSpacing="1">PICKUP</text>
                  <text x="36" y="252" fontSize="11" fontWeight="600" fill="#0F172A">Andheri West</text>
                  <rect x="20" y="278" width="200" height="56" rx="14" fill="white" stroke="#E2E8F0" />
                  <text x="36" y="302" fontSize="10" fill="#64748B" letterSpacing="1">DROP-OFF</text>
                  <text x="36" y="320" fontSize="11" fontWeight="600" fill="#0F172A">Lower Parel</text>
                  <rect x="20" y="350" width="200" height="44" rx="22" fill="#2563EB" />
                  <text x="120" y="376" fontSize="13" fontWeight="600" fill="white" textAnchor="middle">Book Delivery</text>
                  <rect x="20" y="410" width="60" height="40" rx="12" fill="#F1F5F9" />
                  <rect x="90" y="410" width="60" height="40" rx="12" fill="#F1F5F9" />
                  <rect x="160" y="410" width="60" height="40" rx="12" fill="#F1F5F9" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
