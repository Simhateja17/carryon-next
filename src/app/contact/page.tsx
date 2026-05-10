import Link from "next/link";
import Image from "next/image";

const ArrowRight = ({ className = "arrow" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
);

export default function ContactPage() {
  return (
    <>
      <div className="screen-banner">
        <div className="wrap" style={{ position: "relative" }}>
          <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto" }}>
            <span className="eyebrow">Get in touch</span>
            <h1 className="hero-title" style={{ marginTop: 24 }}>
              We&apos;d love to
              <br />
              <em>hear</em> from you.
            </h1>
            <p className="lede" style={{ margin: "32px auto 0" }}>
              Questions about delivery, driver onboarding, or business logistics?
              Our support team is here to help — 24 hours a day.
            </p>
          </div>
        </div>
      </div>

      <section className="biz-section">
        <div className="wrap">
          <div
            className="promo-card"
            style={{ padding: "48px 60px", marginBottom: 60 }}
          >
            <div className="promo-content">
              <span className="promo-badge">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 2l2.4 7.4H22l-6.2 4.5L18.2 22 12 17.4 5.8 22l2.4-8.1L2 9.4h7.6z" />
                </svg>{" "}
                Limited time
              </span>
              <h2 style={{ fontSize: 48 }}>
                Get <em>20% off</em>
                <br />
                your first order.
              </h2>
            </div>
            <div
              style={{
                display: "flex",
                gap: 16,
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <div className="promo-code" style={{ fontSize: 18 }}>
                CARRYFIRST
              </div>
              <Link
                href="/"
                className="btn btn-primary"
                style={{ background: "white", color: "var(--navy)" }}
              >
                Order Now
                <ArrowRight />
              </Link>
            </div>
          </div>

          <div className="contact-grid">
            <div className="contact-card">
              <div className="icn-lg">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                </svg>
              </div>
              <h3>
                General <em>Support</em>
              </h3>
              <p style={{ color: "var(--slate-500)", marginBottom: 24, fontSize: 15 }}>
                For delivery issues, account questions, payments, refunds, and
                anything in between.
              </p>
              <div className="info-line">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>{" "}
                support@carryon.io
              </div>
              <div className="info-line">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3.1-8.7A2 2 0 014 2h3a2 2 0 012 1.7c.1 1 .3 1.9.6 2.8a2 2 0 01-.5 2.1L7.9 10a16 16 0 006 6l1.4-1.2a2 2 0 012.1-.5c.9.3 1.8.5 2.8.6a2 2 0 011.7 2z" />
                </svg>{" "}
                +91 1800 425 0000 &middot; 24/7
              </div>
              <div className="info-line">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 11.5a8.4 8.4 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.4 8.4 0 01-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.4 8.4 0 013.8-.9h.5a8.5 8.5 0 018 8v.5z" />
                </svg>{" "}
                Live chat in app
              </div>
              <Link href="/#download-app" className="btn btn-secondary" style={{ marginTop: 24 }}>
                Visit FAQ
                <ArrowRight />
              </Link>
            </div>
            <div className="contact-card">
              <div className="icn-lg">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 17h2l2-7h10l2 7h2M5 17a2 2 0 104 0M15 17a2 2 0 104 0" />
                </svg>
              </div>
              <h3>
                Driver <em>Centre</em>
              </h3>
              <p style={{ color: "var(--slate-500)", marginBottom: 24, fontSize: 15 }}>
                For onboarding, technical issues, payouts, and partner support —
                we&apos;ve got a dedicated team.
              </p>
              <div className="info-line">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>{" "}
                Andheri (E), Mumbai 400069
              </div>
              <div className="info-line">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>{" "}
                Mon-Sat &middot; 09:00 — 19:00
              </div>
              <div className="info-line">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3.1-8.7A2 2 0 014 2h3a2 2 0 012 1.7c.1 1 .3 1.9.6 2.8a2 2 0 01-.5 2.1L7.9 10a16 16 0 006 6l1.4-1.2a2 2 0 012.1-.5c.9.3 1.8.5 2.8.6a2 2 0 011.7 2z" />
                </svg>{" "}
                +91 1800 425 1111
              </div>
              <Link href="/#download-app" className="btn btn-secondary" style={{ marginTop: 24 }}>
                Driver Onboarding
                <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="biz-section alt">
        <div className="wrap">
          <div
            className="dl-card"
            style={{
              background: "linear-gradient(135deg, var(--navy) 0%, #1E3A8A 100%)",
              color: "white",
            }}
          >
            <div className="dl-text" style={{ position: "relative", zIndex: 1 }}>
              <span className="eyebrow" style={{ color: "var(--sky)" }}>
                Get the apps
              </span>
              <h2 className="section-title" style={{ color: "white", marginTop: 20 }}>
                Ready to <em>go</em>?
              </h2>
              <p style={{ color: "rgba(255,255,255,.75)", marginTop: 12 }}>
                Download the CarryOn apps and book your first delivery in under a
                minute.
              </p>
              <div className="dl-actions" style={{ marginTop: 32 }}>
                <Link
                  href="/"
                  className="btn btn-primary"
                  style={{ background: "white", color: "var(--navy)" }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M15.4 2.1c-.7.8-1.1 1.8-1 2.9 1 .1 2-.3 2.7-1 .7-.8 1.1-1.8 1-2.9-1-.1-2 .3-2.7 1z" />
                    <path d="M20.6 17.2c-.4.9-.7 1.4-1.3 2.3-.8 1.2-1.8 2.7-3.1 2.7-1.2 0-1.5-.8-3.1-.8-1.6 0-2 .8-3.2.8-1.3 0-2.3-1.4-3.1-2.6-2.1-3.4-2.3-7.4-1-9.4.9-1.4 2.3-2.2 3.7-2.2 1.4 0 2.3.8 3.4.8 1.1 0 1.8-.8 3.4-.8 1.2 0 2.5.7 3.4 1.8-3 1.7-2.5 5.9.5 7.4z" />
                  </svg>
                  App Store
                </Link>
                <Link
                  href="/"
                  className="btn btn-primary"
                  style={{ background: "white", color: "var(--navy)" }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 3.5v17c0 .3.1.5.3.7l9.5-9.2L3 3.5z" />
                  </svg>
                  Google Play
                </Link>
              </div>
            </div>
            <div
              style={{
                position: "relative",
                zIndex: 1,
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <div className="phone-mock" style={{ margin: 0 }}>
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
        </div>
      </section>
    </>
  );
}
