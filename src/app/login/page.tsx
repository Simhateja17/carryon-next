import Link from "next/link";

const ArrowRight = ({ className = "arrow" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
);

export default function LoginPage() {
  return (
    <div className="auth-shell">
      <div className="auth-art">
        <div className="auth-art-content">
          <h1>
            Welcome <em>back</em>
            <br />
            to CarryOn.
          </h1>
          <p>
            Pick up where you left off. Your saved addresses, history, and live
            deliveries — all waiting for you.
          </p>

          <div
            style={{
              marginTop: 40,
              padding: 28,
              borderRadius: 24,
              background: "rgba(255,255,255,.08)",
              border: "1px solid rgba(255,255,255,.12)",
              backdropFilter: "blur(20px)",
              maxWidth: 440,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                marginBottom: 20,
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: "linear-gradient(135deg, var(--royal), var(--sky))",
                  display: "grid",
                  placeItems: "center",
                  color: "white",
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 7h14l-1 12H6L5 7zM9 7V5a3 3 0 016 0v2" />
                </svg>
              </div>
              <div>
                <div
                  style={{
                    fontSize: 11,
                    letterSpacing: 1,
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,.6)",
                  }}
                >
                  LIVE DELIVERY
                </div>
                <div
                  style={{
                    fontFamily: "var(--headline)",
                    fontWeight: 500,
                    fontSize: 16,
                    color: "white",
                  }}
                >
                  Order ord_8xK2pQrT
                </div>
              </div>
              <div
                style={{
                  marginLeft: "auto",
                  padding: "4px 10px",
                  borderRadius: 999,
                  background: "rgba(96,165,250,.2)",
                  color: "var(--sky)",
                  fontSize: 11,
                  fontWeight: 600,
                }}
              >
                23 MIN
              </div>
            </div>
            <div
              style={{
                height: 4,
                background: "rgba(255,255,255,.1)",
                borderRadius: 999,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: "68%",
                  background: "linear-gradient(to right, var(--sky), white)",
                  borderRadius: 999,
                }}
              />
            </div>
          </div>
        </div>
        <div className="auth-trust">
          <div className="trust-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s-8-4-8-12a8 8 0 1116 0c0 8-8 12-8 12z" />
              <path d="M9 12l2 2 4-4" />
            </svg>
            Secure login with end-to-end encryption
          </div>
          <div className="trust-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="6" width="20" height="12" rx="2" />
              <path d="M2 10h20" />
            </svg>
            Encrypted payments via PCI-DSS partners
          </div>
          <div className="trust-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 21V8l9-5 9 5v13H3z" />
            </svg>
            Business-ready account &amp; billing tools
          </div>
        </div>
      </div>

      <div className="auth-form-wrap">
        <div className="auth-form">
          <h2>
            Log <em>in</em>.
          </h2>
          <p>Welcome back — let&apos;s get you moving.</p>
          <div className="input-block">
            <label>Email or phone</label>
            <input type="text" placeholder="you@example.com or +91 98000 00000" />
          </div>
          <div className="input-block">
            <label>Password</label>
            <input type="password" placeholder="••••••••••" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              margin: "8px 0 16px",
            }}
          >
            <label
              style={{
                display: "flex",
                gap: 8,
                alignItems: "center",
                fontSize: 13,
                color: "var(--slate-700)",
              }}
            >
              <input type="checkbox" /> Remember me
            </label>
            <Link
              href="/"
              style={{ fontSize: 13, color: "var(--royal)", fontWeight: 600 }}
            >
              Forgot password?
            </Link>
          </div>
          <Link href="/#download-app" className="btn btn-primary">
            Log In
            <ArrowRight />
          </Link>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              margin: "32px 0",
            }}
          >
            <div style={{ flex: 1, height: 1, background: "var(--slate-200)" }} />
            <span
              style={{
                fontSize: 12,
                color: "var(--slate-400)",
                letterSpacing: 1.5,
                textTransform: "uppercase",
              }}
            >
              or continue with
            </span>
            <div style={{ flex: 1, height: 1, background: "var(--slate-200)" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            <Link
              href="/"
              className="btn btn-secondary"
              style={{ justifyContent: "center", padding: "14px 20px" }}
            >
              <svg width="18" height="18" viewBox="0 0 48 48">
                <path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3c-1.6 4.7-6.1 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.8 1.2 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.7-.4-3.9z" />
                <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3 0 5.8 1.2 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
                <path fill="#4CAF50" d="M24 44c5.2 0 9.8-2 13.4-5.2l-6.2-5.2c-2 1.5-4.5 2.4-7.2 2.4-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z" />
                <path fill="#1976D2" d="M43.6 20.1H42V20H24v8h11.3c-.8 2.3-2.3 4.3-4.1 5.6l6.2 5.2C40.9 35.3 44 30 44 24c0-1.3-.1-2.7-.4-3.9z" />
              </svg>
              Google
            </Link>
            <Link
              href="/"
              className="btn btn-secondary"
              style={{ justifyContent: "center", padding: "14px 20px" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.4 2.1c-.7.8-1.1 1.8-1 2.9 1 .1 2-.3 2.7-1 .7-.8 1.1-1.8 1-2.9-1-.1-2 .3-2.7 1z" />
                    <path d="M20.6 17.2c-.4.9-.7 1.4-1.3 2.3-.8 1.2-1.8 2.7-3.1 2.7-1.2 0-1.5-.8-3.1-.8-1.6 0-2 .8-3.2.8-1.3 0-2.3-1.4-3.1-2.6-2.1-3.4-2.3-7.4-1-9.4.9-1.4 2.3-2.2 3.7-2.2 1.4 0 2.3.8 3.4.8 1.1 0 1.8-.8 3.4-.8 1.2 0 2.5.7 3.4 1.8-3 1.7-2.5 5.9.5 7.4z" />
              </svg>
              Apple
            </Link>
          </div>
          <p className="auth-foot">
            Don&apos;t have an account?{" "}
            <Link href="/signup">Create one</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
