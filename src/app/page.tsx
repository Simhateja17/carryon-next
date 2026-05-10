import Link from "next/link";
import Image from "next/image";
import DownloadAppButton from "@/components/DownloadAppButton";

const ArrowRight = ({ className = "arrow" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
);

const vehicles = [
  {
    name: "Bike",
    description: "Documents, food, small parcels",
    capacity: "Up to 5kg",
    icon: "/bike-icon.png",
  },
  {
    name: "Scooter",
    description: "Groceries, food, quick errands",
    capacity: "Up to 10kg",
    icon: "/scooter-icon.png",
  },
  {
    name: "Car",
    description: "Flowers, fragile goods, parcels",
    capacity: "Up to 40kg",
    icon: "/car-icon.png",
  },
  {
    name: "Pickup (4x4)",
    description: "Small boxes, furniture, bicycle",
    capacity: "Up to 250kg",
    icon: "/veh-icon-4.png",
  },
  {
    name: "Van 7-ft",
    description: "Small fridge, bike, washing machine",
    capacity: "Up to 500kg",
    icon: "/veh-icon-3.png",
  },
  {
    name: "Large Van 9-ft",
    description: "Washing machine, 1-seater sofa",
    capacity: "Up to 800kg",
    icon: "/veh-icon-3.png",
  },
  {
    name: "Mini Van",
    description: "Mid-size cargo, multiple items",
    capacity: "Up to 350kg",
    icon: "/veh-icon-3.png",
  },
  {
    name: "Pickup Truck",
    description: "Open-bed cargo, furniture",
    capacity: "Up to 750kg",
    icon: "/veh-icon-4.png",
  },
  {
    name: "Tempo",
    description: "Bulk delivery, business cargo",
    capacity: "Up to 1.2 ton",
    icon: "/tempo-component-9.png",
  },
  {
    name: "Small Lorry 10-ft",
    description: "Small bed, 2-seater sofa, fridge",
    capacity: "Up to 1000kg",
    icon: "/lorry-icon.png",
  },
  {
    name: "Medium Lorry 14-ft",
    description: "Queen bed, wardrobe, large items",
    capacity: "Up to 2500kg",
    icon: "/lorry-icon.png",
  },
  {
    name: "Large Lorry 17-ft",
    description: "King bed, washer, 3-seater sofa",
    capacity: "Up to 4000kg",
    icon: "/lorry-icon.png",
  },
];

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
                <DownloadAppButton className="btn btn-primary">
                  Book Delivery
                  <ArrowRight />
                </DownloadAppButton>
                <DownloadAppButton className="btn btn-secondary">
                  Become a Driver
                </DownloadAppButton>
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
              <div className="map-card">
                <Image
                  src="/hero-frame.png"
                  alt="Delivery tracking preview"
                  fill
                  className="map-image"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
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
              <div>
                <span className="num">/01</span>
                <h3>Business</h3>
                <p>
                  Delivery solutions for teams of every size — from launch-day
                  startups to national networks.
                </p>
              </div>
              <Link href="/business" className="arrow-link">
                Explore Business
              </Link>
            </div>
            <div className="aud-card">
              <div>
                <span className="num">/02</span>
                <h3>Personal</h3>
                <p>
                  Send parcels, gifts, documents, and daily essentials — across
                  town in minutes.
                </p>
              </div>
              <Link href="/" className="arrow-link">
                Send a parcel
              </Link>
            </div>
            <div className="aud-card">
              <div>
                <span className="num">/03</span>
                <h3>Driver</h3>
                <p>
                  Earn flexibly with CarryOn delivery jobs. You drive — we handle
                  the rest.
                </p>
              </div>
              <Link href="/driver" className="arrow-link">
                Drive with us
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
            Many <em>Vehicle</em> Options
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
            Many <em>Vehicle</em> Options
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
                Choose Regular
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
                Choose Priority
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
                Choose Pooling
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
          </div>
          <div className="veh-grid">
            {vehicles.map((vehicle) => (
              <div className="veh-card" key={vehicle.name}>
                <div className="veh-icon">
                  <Image
                    src={vehicle.icon}
                    alt={`${vehicle.name} icon`}
                    width={180}
                    height={120}
                    className="veh-icon-image"
                  />
                </div>
                <div>
                  <h4>{vehicle.name}</h4>
                  <p>{vehicle.description}</p>
                  <span className="veh-cap">{vehicle.capacity}</span>
                </div>
              </div>
            ))}
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
                    <path d="M15.4 2.1c-.7.8-1.1 1.8-1 2.9 1 .1 2-.3 2.7-1 .7-.8 1.1-1.8 1-2.9-1-.1-2 .3-2.7 1z" />
                    <path d="M20.6 17.2c-.4.9-.7 1.4-1.3 2.3-.8 1.2-1.8 2.7-3.1 2.7-1.2 0-1.5-.8-3.1-.8-1.6 0-2 .8-3.2.8-1.3 0-2.3-1.4-3.1-2.6-2.1-3.4-2.3-7.4-1-9.4.9-1.4 2.3-2.2 3.7-2.2 1.4 0 2.3.8 3.4.8 1.1 0 1.8-.8 3.4-.8 1.2 0 2.5.7 3.4 1.8-3 1.7-2.5 5.9.5 7.4z" />
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
                    <path d="M15.4 2.1c-.7.8-1.1 1.8-1 2.9 1 .1 2-.3 2.7-1 .7-.8 1.1-1.8 1-2.9-1-.1-2 .3-2.7 1z" />
                    <path d="M20.6 17.2c-.4.9-.7 1.4-1.3 2.3-.8 1.2-1.8 2.7-3.1 2.7-1.2 0-1.5-.8-3.1-.8-1.6 0-2 .8-3.2.8-1.3 0-2.3-1.4-3.1-2.6-2.1-3.4-2.3-7.4-1-9.4.9-1.4 2.3-2.2 3.7-2.2 1.4 0 2.3.8 3.4.8 1.1 0 1.8-.8 3.4-.8 1.2 0 2.5.7 3.4 1.8-3 1.7-2.5 5.9.5 7.4z" />
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
              <div className="step-num">1</div>
              <h4>Enter pickup &amp; drop</h4>
              <p>Tell us where it&apos;s going.</p>
            </div>
            <div className="step">
              <div className="step-num">2</div>
              <h4>Select delivery mode</h4>
              <p>Priority, regular or pooled.</p>
            </div>
            <div className="step">
              <div className="step-num">3</div>
              <h4>Choose vehicle</h4>
              <p>The right ride for your load.</p>
            </div>
            <div className="step">
              <div className="step-num">4</div>
              <h4>Track live</h4>
              <p>Watch your package move.</p>
            </div>
            <div className="step">
              <div className="step-num">5</div>
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
                <div className="avatar">NA</div>
                <div>
                  <div className="name">Nur Aisyah Rahman</div>
                  <div className="meta">Bangsar, Kuala Lumpur</div>
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
                <div className="avatar">AZ</div>
                <div>
                  <div className="name">Ahmad Zikri</div>
                  <div className="meta">Driver Partner &middot; Petaling Jaya</div>
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
                <div className="avatar">LC</div>
                <div>
                  <div className="name">Lim Chia Wei</div>
                  <div className="meta">Ops Lead, Selangor Fresh Mart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DOWNLOAD CTA */}
      <section id="download-app" className="download-cta">
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
                    <path d="M15.4 2.1c-.7.8-1.1 1.8-1 2.9 1 .1 2-.3 2.7-1 .7-.8 1.1-1.8 1-2.9-1-.1-2 .3-2.7 1z" />
                    <path d="M20.6 17.2c-.4.9-.7 1.4-1.3 2.3-.8 1.2-1.8 2.7-3.1 2.7-1.2 0-1.5-.8-3.1-.8-1.6 0-2 .8-3.2.8-1.3 0-2.3-1.4-3.1-2.6-2.1-3.4-2.3-7.4-1-9.4.9-1.4 2.3-2.2 3.7-2.2 1.4 0 2.3.8 3.4.8 1.1 0 1.8-.8 3.4-.8 1.2 0 2.5.7 3.4 1.8-3 1.7-2.5 5.9.5 7.4z" />
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
              <div className="phone-screen phone-screen--image">
                <Image
                  src="/mockup-screen.png"
                  alt="CarryOn app mockup"
                  fill
                  className="phone-screen-image"
                  sizes="(max-width: 768px) 260px, 280px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
