function TechnicalArchitecture() {
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
          <h1 className="auth0-slide-title">Technical Architecture</h1>
          <p className="auth0-slide-subtitle">Authorization Code Flow with PKCE</p>
        </div>

        {/* Content */}
        <div className="auth0-slide-content">
          {/* Flow Diagram */}
          <div className="auth0-grid-3" style={{ marginBottom: '2rem' }}>
            <div className="auth0-card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>📱</div>
              <div className="auth0-card-title">Pizza42 SPA</div>
              <div className="auth0-card-content">
                <p>React + Auth0 SDK</p>
                <p style={{ color: '#4CB7A3', marginTop: '0.5rem' }}>↓ PKCE Flow ↓</p>
              </div>
            </div>

            <div className="auth0-card" style={{ textAlign: 'center', background: 'rgba(63, 89, 228, 0.1)', borderColor: '#3F59E4' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🔐</div>
              <div className="auth0-card-title">Auth0</div>
              <div className="auth0-card-content">
                <p>Universal Login</p>
                <p style={{ marginTop: '0.5rem' }}>Token Exchange</p>
              </div>
            </div>

            <div className="auth0-card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>⚙️</div>
              <div className="auth0-card-title">Pizza42 API</div>
              <div className="auth0-card-content">
                <p>Next.js Backend</p>
                <p style={{ marginTop: '0.5rem' }}>Protected Resources</p>
              </div>
            </div>
          </div>

          {/* Key Security Features */}
          <div className="auth0-highlight" style={{ background: 'rgba(76, 183, 163, 0.15)', borderLeft: '4px solid #4CB7A3' }}>
            <h3 className="auth0-highlight-title">Why This Architecture?</h3>
            <ul className="auth0-list">
              <li><strong>SPA Security:</strong> PKCE flow - gold standard for single page apps</li>
              <li><strong>Stateless API:</strong> JWTs scale horizontally without session storage</li>
              <li><strong>Zero Trust:</strong> Every API call authenticated with cryptographic signatures</li>
            </ul>
          </div>

          {/* Technical Deep-Dive */}
          <details style={{ marginTop: '1.5rem' }}>
            <summary style={{ cursor: 'pointer', fontSize: '1.25rem', color: '#BBC9FF', fontWeight: 600, padding: '1rem 0' }}>
              ▶ Technical Deep-Dive
            </summary>
            <div className="auth0-grid-2" style={{ marginTop: '1rem' }}>
              <div className="auth0-card">
                <div className="auth0-card-title">🔧 PKCE Flow</div>
                <div className="auth0-card-content">
                  <ul className="auth0-list">
                    <li>Client generates <code style={{ color: '#4CB7A3' }}>code_verifier</code> + <code style={{ color: '#4CB7A3' }}>code_challenge</code></li>
                    <li>Challenge sent with authorization request</li>
                    <li>Verifier validated during token exchange</li>
                    <li>Prevents code injection attacks</li>
                  </ul>
                </div>
              </div>

              <div className="auth0-card">
                <div className="auth0-card-title">🎫 Token Strategy</div>
                <div className="auth0-card-content">
                  <ul className="auth0-list">
                    <li><strong>ID Token:</strong> User profile claims</li>
                    <li><strong>Access Token:</strong> API authorization (10 hours)</li>
                    <li><strong>Refresh Token:</strong> Rotating (30 days)</li>
                  </ul>
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

export default TechnicalArchitecture;
