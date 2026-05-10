import Image from "next/image";
import Link from "next/link";

const ArrowRight = ({ className = "arrow" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
);

export default function FoundersPage() {
  return (
    <>
      <div className="screen-banner founders-hero">
        <div className="wrap" style={{ position: "relative" }}>
          <div style={{ textAlign: "center", maxWidth: 860, margin: "0 auto" }}>
            <span className="eyebrow">The founders</span>
            <h1 className="hero-title" style={{ marginTop: 24 }}>
              Built by people who know
              <br />
              <em>movement</em> matters.
            </h1>
            <p className="lede" style={{ margin: "32px auto 0" }}>
              CarryOn is shaped by operators focused on practical logistics,
              trusted delivery, and reliable city-scale movement.
            </p>
          </div>
        </div>
      </div>

      <section className="biz-section founders-section">
        <div className="wrap">
          <div className="founders-grid">
            <div className="founder-photo-card">
              <Image
                src="/founder-photo.jpeg"
                alt="CarryOn founder"
                width={640}
                height={640}
                className="founder-photo"
                priority
              />
              <div className="founder-photo-badge">
                <span>Founder</span>
                <strong>CarryOn</strong>
              </div>
            </div>

            <div className="founder-copy-card">
              <span className="eyebrow">Leadership</span>
              <h2 className="section-title" style={{ marginTop: 18 }}>
                Founder-led logistics with a <em>clear</em> operating standard.
              </h2>
              <p className="lede">
                Our founding team is building CarryOn around the details that
                matter most: verified drivers, transparent tracking, secure
                handoffs, and delivery options that fit real customer needs.
              </p>
              <p className="lede" style={{ marginTop: 18 }}>
                The goal is direct: make every booking feel simple, every route
                feel accountable, and every delivery feel dependable.
              </p>

              <div className="founder-registration-card">
                <span className="forwarded-label">Forwarded</span>
                <h3>DYNAMIC MOVERS SDN. BHD.</h3>
                <p>
                  <strong>SSM number:</strong> <span>202601011534</span>
                  <em>(1673632-K)</em>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="biz-section alt">
        <div className="wrap">
          <div className="founder-principles">
            <div className="value-card">
              <div className="num">1.</div>
              <h3>Accountability</h3>
              <p>Every movement should be visible, traceable, and owned from pickup to delivery.</p>
            </div>
            <div className="value-card">
              <div className="num">2.</div>
              <h3>Reliability</h3>
              <p>The platform is designed around practical dispatch, clear ETAs, and consistent service.</p>
            </div>
            <div className="value-card">
              <div className="num">3.</div>
              <h3>Access</h3>
              <p>CarryOn supports individuals, drivers, and businesses with delivery options that scale.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-strip">
        <div className="wrap">
          <div className="cta-strip-inner">
            <h2 className="section-title" style={{ color: "white" }}>
              Move with <em>CarryOn</em>.
            </h2>
            <p>Download the app to book deliveries and follow every shipment live.</p>
            <div className="btn-row">
              <Link
                href="/#download-app"
                className="btn btn-primary"
                style={{ background: "white", color: "var(--navy)" }}
              >
                Download App
                <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
