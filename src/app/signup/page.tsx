import Link from "next/link";

const ArrowRight = ({ className = "arrow" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
);

export default function SignupPage() {
  return (
    <div className="auth-shell">
      <div className="auth-art">
        <div className="auth-art-content">
          <Link href="/" className="brand">
            <span className="mark">C</span>
            Carry<em>On</em>
          </Link>
          <h1>
            Start moving
            <br />
            with <em>CarryOn</em>.
          </h1>
          <p>
            Join 350,000+ riders, drivers, and businesses moving smarter every
            day. Your first delivery is on us.
          </p>

          <div
            style={{
              marginTop: 40,
              display: "flex",
              flexDirection: "column",
              gap: 14,
              maxWidth: 440,
            }}
          >
            <div
              style={{
                padding: "20px 24px",
                borderRadius: 18,
                background: "rgba(255,255,255,.08)",
                border: "1px solid rgba(255,255,255,.12)",
                display: "flex",
                alignItems: "center",
                gap: 16,
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                  background: "linear-gradient(135deg, var(--royal), var(--sky))",
                  display: "grid",
                  placeItems: "center",
                  color: "white",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 7L9 18l-5-5" />
                </svg>
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "var(--headline)",
                    fontWeight: 500,
                    color: "white",
                    fontSize: 15,
                  }}
                >
                  20% off your first delivery
                </div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,.6)" }}>
                  Auto-applied at checkout
                </div>
              </div>
            </div>
            <div
              style={{
                padding: "20px 24px",
                borderRadius: 18,
                background: "rgba(255,255,255,.08)",
                border: "1px solid rgba(255,255,255,.12)",
                display: "flex",
                alignItems: "center",
                gap: 16,
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                  background: "linear-gradient(135deg, var(--royal), var(--sky))",
                  display: "grid",
                  placeItems: "center",
                  color: "white",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "var(--headline)",
                    fontWeight: 500,
                    color: "white",
                    fontSize: 15,
                  }}
                >
                  Live tracking from minute one
                </div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,.6)" }}>
                  Watch your driver arrive in real time
                </div>
              </div>
            </div>
            <div
              style={{
                padding: "20px 24px",
                borderRadius: 18,
                background: "rgba(255,255,255,.08)",
                border: "1px solid rgba(255,255,255,.12)",
                display: "flex",
                alignItems: "center",
                gap: 16,
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                  background: "linear-gradient(135deg, var(--royal), var(--sky))",
                  display: "grid",
                  placeItems: "center",
                  color: "white",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 12h-4l-3 9L9 3 6 12H2" />
                </svg>
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "var(--headline)",
                    fontWeight: 500,
                    color: "white",
                    fontSize: 15,
                  }}
                >
                  Saved addresses &amp; payments
                </div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,.6)" }}>
                  Book a delivery in two taps
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="auth-trust">
          <div className="trust-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s-8-4-8-12a8 8 0 1116 0c0 8-8 12-8 12z" />
              <path d="M9 12l2 2 4-4" />
            </svg>
            Free to join · no card required
          </div>
          <div className="trust-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
            Set up in under 60 seconds
          </div>
        </div>
      </div>

      <div className="auth-form-wrap">
        <div className="auth-form">
          <h2>
            Create your <em>account</em>.
          </h2>
          <p>Pick the role that fits and we&apos;ll tailor the experience.</p>

          <div className="input-block">
            <label>I am a</label>
            <div className="role-pick">
              <div className="role-opt active">User</div>
              <div className="role-opt">Driver</div>
              <div className="role-opt">Business</div>
            </div>
          </div>
          <div className="input-block">
            <label>Full Name</label>
            <input type="text" placeholder="Anaya Kapoor" />
          </div>
          <div className="input-block">
            <label>Email</label>
            <input type="email" placeholder="anaya@example.com" />
          </div>
          <div className="input-block">
            <label>Phone</label>
            <input type="tel" placeholder="+91 98000 00000" />
          </div>
          <div className="input-block">
            <label>Password</label>
            <input type="password" placeholder="At least 8 characters" />
          </div>
          <label
            style={{
              display: "flex",
              gap: 10,
              alignItems: "flex-start",
              margin: "8px 0 8px",
              fontSize: 13,
              color: "var(--slate-700)",
            }}
          >
            <input type="checkbox" defaultChecked style={{ marginTop: 3 }} />
            I agree to the Terms &amp; Conditions and Privacy Policy
          </label>
          <Link href="/#download-app" className="btn btn-primary">
            Create Account
            <ArrowRight />
          </Link>
          <p className="auth-foot">
            Already have an account? <Link href="/login">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
