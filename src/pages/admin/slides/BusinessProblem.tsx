function BusinessProblem() {
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
          <h1 className="auth0-slide-title">Business Problem</h1>
          <p className="auth0-slide-subtitle">Why CIAM matters for every stakeholder</p>
        </div>

        {/* Content */}
        <div className="auth0-slide-content">
          <div className="auth0-grid-3">
            {/* Security Team */}
            <div className="auth0-card">
              <div className="auth0-card-title">🔒 Security Team</div>
              <div className="auth0-card-content">
                <ul className="auth0-list">
                  <li>Drowning in compliance (GDPR, SOC2)</li>
                  <li>Password policy nightmares</li>
                  <li>Constant vulnerability patches</li>
                </ul>
                <div className="auth0-highlight" style={{ marginTop: '1.5rem' }}>
                  <p className="auth0-highlight-text">
                    <strong>Auth0 Solution:</strong> Enterprise security out of the box
                  </p>
                  <p style={{ marginTop: '0.75rem', fontSize: '0.95rem', color: '#4CB7A3', fontWeight: 600 }}>
                    5 breaches/year → 0 breaches
                  </p>
                </div>
              </div>
            </div>

            {/* Product Team */}
            <div className="auth0-card">
              <div className="auth0-card-title">⚡ Product Team</div>
              <div className="auth0-card-content">
                <ul className="auth0-list">
                  <li>40% time spent on auth flows</li>
                  <li>New auth methods take months</li>
                  <li>Technical debt compounds</li>
                </ul>
                <div className="auth0-highlight" style={{ marginTop: '1.5rem' }}>
                  <p className="auth0-highlight-text">
                    <strong>Auth0 Solution:</strong> Ship new features in hours, not months
                  </p>
                  <p style={{ marginTop: '0.75rem', fontSize: '0.95rem', color: '#4CB7A3', fontWeight: 600 }}>
                    30% login abandonment → 5%
                  </p>
                </div>
              </div>
            </div>

            {/* Marketing Team */}
            <div className="auth0-card">
              <div className="auth0-card-title">📊 Marketing Team</div>
              <div className="auth0-card-content">
                <ul className="auth0-list">
                  <li>No user data before purchase</li>
                  <li>35% signup drop-off rate</li>
                  <li>Fragmented user profiles</li>
                </ul>
                <div className="auth0-highlight" style={{ marginTop: '1.5rem' }}>
                  <p className="auth0-highlight-text">
                    <strong>Auth0 Solution:</strong> Identity data as growth engine
                  </p>
                  <p style={{ marginTop: '0.75rem', fontSize: '0.95rem', color: '#4CB7A3', fontWeight: 600 }}>
                    Fragmented data → Unified profiles
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Business Impact */}
          <div className="auth0-highlight" style={{ marginTop: '2rem', background: 'linear-gradient(135deg, rgba(76, 183, 163, 0.2) 0%, rgba(132, 152, 252, 0.2) 100%)', borderLeft: '4px solid #4CB7A3' }}>
            <h3 className="auth0-highlight-title">Business Impact</h3>
            <p className="auth0-highlight-text">
              <strong>6 months</strong> saved vs building in-house • <strong>22%</strong> increase in signups • <strong>Zero</strong> dedicated auth team needed
            </p>
          </div>
        </div>

        {/* Copyright text (subtle, bottom) */}
        <div className="auth0-copyright-bottom">
          © Okta, Inc. and/or its affiliates. All rights reserved. For Okta, Inc. internal use only.
        </div>
      </div>
    </div>
  );
}

export default BusinessProblem;
