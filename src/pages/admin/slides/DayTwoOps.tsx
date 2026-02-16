function DayTwoOps() {
  return (
    <div className="auth0-slide">
      {/* Vertical accent lines */}
      <div className="auth0-accent-line auth0-accent-line-left"></div>
      <div className="auth0-accent-line auth0-accent-line-right"></div>

      {/* Top branding bar */}
      <div className="auth0-top-bar">
        <div className="auth0-logo-top">
          <img src="/auth0-logo.png" alt="Auth0" className="auth0-logo-image-top" />
        </div>
        <div className="auth0-classification-top">
          DATA CLASSIFICATION: OKTA, INC. RESTRICTED
        </div>
      </div>

      {/* Content Container */}
      <div className="auth0-slide-container">
        {/* Header */}
        <div className="auth0-slide-header">
          <h1 className="auth0-slide-title">Day 2 Operations</h1>
          <p className="auth0-slide-subtitle">Operational excellence at scale - the real test begins</p>
        </div>

        {/* Content */}
        <div className="auth0-slide-content">
          {/* Identity Platform Health Metrics */}
          <div className="auth0-highlight" style={{ background: 'rgba(76, 183, 163, 0.15)', borderLeft: '4px solid #4CB7A3', marginBottom: '2rem' }}>
            <h3 className="auth0-highlight-title">📊 Pizza42 Identity Platform Health</h3>
            <div className="auth0-grid-3" style={{ marginTop: '1rem' }}>
              <div className="auth0-card" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', color: '#4CB7A3' }}>99.7%</div>
                <p style={{ marginTop: '0.5rem', opacity: 0.8 }}>Auth Success Rate</p>
              </div>
              <div className="auth0-card" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', color: '#4CB7A3' }}>1.2s</div>
                <p style={{ marginTop: '0.5rem', opacity: 0.8 }}>Avg Login Time</p>
              </div>
              <div className="auth0-card" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', color: '#4CB7A3' }}>↓ 65%</div>
                <p style={{ marginTop: '0.5rem', opacity: 0.8 }}>Password Resets</p>
              </div>
              <div className="auth0-card" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', color: '#BBC9FF' }}>45%</div>
                <p style={{ marginTop: '0.5rem', opacity: 0.8 }}>MFA Adoption</p>
              </div>
              <div className="auth0-card" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', color: '#BBC9FF' }}>1,200</div>
                <p style={{ marginTop: '0.5rem', opacity: 0.8 }}>Passkey Users (12%)</p>
              </div>
              <div className="auth0-card" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', color: '#4CB7A3' }}>0</div>
                <p style={{ marginTop: '0.5rem', opacity: 0.8 }}>Security Incidents</p>
              </div>
            </div>
            <p style={{ marginTop: '1rem', textAlign: 'center', fontStyle: 'italic' }}>
              <strong>Auth0 Platform Uptime:</strong> 100% (inherited from Okta infrastructure)
            </p>
          </div>

          {/* Roadmap */}
          <div className="auth0-card" style={{ marginBottom: '2rem' }}>
            <div className="auth0-card-title">🚀 Roadmap: Next 6-12 Months</div>
            <div className="auth0-card-content">
              <div className="auth0-grid-3">
                <div>
                  <p style={{ color: '#BBC9FF', fontWeight: 600, marginBottom: '0.5rem' }}>Q2 2024</p>
                  <ul className="auth0-list" style={{ fontSize: '0.9rem' }}>
                    <li>AI-powered fraud detection</li>
                    <li>Impossible travel protection</li>
                    <li>Breached password detection</li>
                  </ul>
                </div>
                <div>
                  <p style={{ color: '#BBC9FF', fontWeight: 600, marginBottom: '0.5rem' }}>Q3 2024</p>
                  <ul className="auth0-list" style={{ fontSize: '0.9rem' }}>
                    <li>GDPR compliance automation</li>
                    <li>Consent management dashboard</li>
                    <li>Data portability API</li>
                  </ul>
                </div>
                <div>
                  <p style={{ color: '#BBC9FF', fontWeight: 600, marginBottom: '0.5rem' }}>Q4 2024</p>
                  <ul className="auth0-list" style={{ fontSize: '0.9rem' }}>
                    <li>Biometric enrollment optimization</li>
                    <li>Advanced risk scoring</li>
                    <li>Real-time user segmentation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Common Pitfalls Avoided */}
          <details style={{ marginTop: '1.5rem' }}>
            <summary style={{ cursor: 'pointer', fontSize: '1.25rem', color: '#BBC9FF', fontWeight: 600, padding: '1rem 0' }}>
              ▶ Common Pitfalls We Avoided
            </summary>
            <div className="auth0-grid-2" style={{ marginTop: '1rem' }}>
              <div className="auth0-card">
                <div className="auth0-card-title">1. Token Bloat</div>
                <div className="auth0-card-content">
                  <p style={{ color: '#E27133', marginBottom: '0.5rem' }}>❌ Storing full order history in ID token</p>
                  <p style={{ color: '#4CB7A3' }}>✅ Storing only order count + last order date</p>
                </div>
              </div>

              <div className="auth0-card">
                <div className="auth0-card-title">2. Management API Rate Limits</div>
                <div className="auth0-card-content">
                  <p style={{ color: '#E27133', marginBottom: '0.5rem' }}>❌ Calling Management API on every login</p>
                  <p style={{ color: '#4CB7A3' }}>✅ Using cached event.user data in Actions</p>
                </div>
              </div>

              <div className="auth0-card">
                <div className="auth0-card-title">3. Passkey Abandonment</div>
                <div className="auth0-card-content">
                  <p style={{ color: '#E27133', marginBottom: '0.5rem' }}>❌ Forcing immediate passkey enrollment</p>
                  <p style={{ color: '#4CB7A3' }}>✅ Progressive enrollment with incentives</p>
                </div>
              </div>

              <div className="auth0-card">
                <div className="auth0-card-title">4. Technical Debt</div>
                <div className="auth0-card-content">
                  <p style={{ color: '#E27133', marginBottom: '0.5rem' }}>❌ Hard-coding business logic in frontend</p>
                  <p style={{ color: '#4CB7A3' }}>✅ Centralizing rules in Auth0 Actions</p>
                </div>
              </div>
            </div>
          </details>

          {/* Key Takeaway */}
          <div className="auth0-highlight" style={{ background: 'linear-gradient(135deg, rgba(61, 16, 166, 0.2) 0%, rgba(63, 89, 228, 0.2) 100%)', borderLeft: '4px solid #3F59E4', marginTop: '2rem' }}>
            <h3 className="auth0-highlight-title">💡 Key Takeaway</h3>
            <p className="auth0-highlight-text">
              The real value of Auth0 CIAM isn't just Day 1 implementation—it's the <strong>operational excellence, scalability, and peace of mind</strong> on Day 2 and beyond. By offloading identity to Auth0, Pizza42 can focus on what they do best: making great pizza.
            </p>
          </div>
        </div>

        {/* Copyright text */}
        <div className="auth0-copyright-bottom">
          © Okta, Inc. and/or its affiliates. All rights reserved. For Okta, Inc. internal use only.
        </div>
      </div>
    </div>
  );
}

export default DayTwoOps;
