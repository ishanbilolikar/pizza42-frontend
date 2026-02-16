function Passkeys() {
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
          <h1 className="auth0-slide-title">Passkeys & Social Login</h1>
          <p className="auth0-slide-subtitle">Removing friction while improving security</p>
        </div>

        {/* Content */}
        <div className="auth0-slide-content">
          {/* Comparison */}
          <div className="auth0-grid-2" style={{ marginBottom: '2rem' }}>
            <div className="auth0-card">
              <div className="auth0-card-title">⏱️ Traditional Login</div>
              <div className="auth0-card-content">
                <ul className="auth0-list">
                  <li>Enter email</li>
                  <li>Type password</li>
                  <li>Solve CAPTCHA</li>
                  <li>Enter MFA code</li>
                </ul>
                <p style={{ marginTop: '1rem', fontSize: '1.5rem', color: '#E27133' }}>~45 seconds</p>
              </div>
            </div>

            <div className="auth0-card" style={{ background: 'rgba(76, 183, 163, 0.1)', borderColor: '#4CB7A3' }}>
              <div className="auth0-card-title">✨ Passkeys</div>
              <div className="auth0-card-content">
                <ul className="auth0-list">
                  <li>Touch Face ID / Touch ID</li>
                  <li style={{ color: '#4CB7A3', fontWeight: 600 }}>✓ Done!</li>
                </ul>
                <p style={{ marginTop: '1rem', fontSize: '1.5rem', color: '#4CB7A3' }}>~2 seconds</p>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="auth0-highlight" style={{ background: 'rgba(76, 183, 163, 0.15)', borderLeft: '4px solid #4CB7A3' }}>
            <h3 className="auth0-highlight-title">Key Benefits</h3>
            <div className="auth0-grid-3" style={{ marginTop: '1rem' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem' }}>🎣</div>
                <p style={{ fontWeight: 600, marginTop: '0.5rem' }}>Phishing-Resistant</p>
                <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>Domain-bound credentials</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem' }}>🔄</div>
                <p style={{ fontWeight: 600, marginTop: '0.5rem' }}>No Password Resets</p>
                <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>78% fewer support tickets</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem' }}>📱</div>
                <p style={{ fontWeight: 600, marginTop: '0.5rem' }}>Cross-Device Sync</p>
                <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>iCloud / Google sync</p>
              </div>
            </div>
          </div>

          {/* Progressive Enrollment */}
          <details style={{ marginTop: '1.5rem' }}>
            <summary style={{ cursor: 'pointer', fontSize: '1.25rem', color: '#BBC9FF', fontWeight: 600, padding: '1rem 0' }}>
              ▶ Progressive Enrollment Strategy
            </summary>
            <div className="auth0-grid-3" style={{ marginTop: '1rem' }}>
              <div className="auth0-card">
                <div className="auth0-card-title">Phase 1</div>
                <div className="auth0-card-content">
                  <p><strong>Months 1-3:</strong> Opt-in after login</p>
                  <p style={{ marginTop: '0.5rem', opacity: 0.8 }}>Target: 20% adoption</p>
                </div>
              </div>
              <div className="auth0-card">
                <div className="auth0-card-title">Phase 2</div>
                <div className="auth0-card-content">
                  <p><strong>Months 4-6:</strong> Prompt power users</p>
                  <p style={{ marginTop: '0.5rem', opacity: 0.8 }}>Target: 40% adoption</p>
                </div>
              </div>
              <div className="auth0-card">
                <div className="auth0-card-title">Phase 3</div>
                <div className="auth0-card-content">
                  <p><strong>Months 7-12:</strong> Default for new signups</p>
                  <p style={{ marginTop: '0.5rem', opacity: 0.8 }}>Target: 60% adoption</p>
                </div>
              </div>
            </div>
          </details>
        </div>

        {/* Copyright text */}
        <div className="auth0-copyright-bottom">
          © Okta, Inc. and/or its affiliates. All rights reserved. For Okta, Inc. internal use only.
        </div>
      </div>
    </div>
  );
}

export default Passkeys;
