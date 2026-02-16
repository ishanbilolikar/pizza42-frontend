function EmailVerification() {
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
          <h1 className="auth0-slide-title">Email Verification</h1>
          <p className="auth0-slide-subtitle">Smart access control at the identity layer</p>
        </div>

        {/* Content */}
        <div className="auth0-slide-content">
          {/* Strategy Cards */}
          <div className="auth0-grid-2" style={{ marginBottom: '2rem' }}>
            <div className="auth0-card">
              <div className="auth0-card-title">🎯 Product Team Goal</div>
              <div className="auth0-card-content">
                <p style={{ fontSize: '1.25rem', color: '#BBC9FF' }}>Zero friction at login</p>
                <p style={{ marginTop: '1rem', opacity: 0.8 }}>Users should be able to browse and explore immediately - no barriers to entry.</p>
              </div>
            </div>

            <div className="auth0-card">
              <div className="auth0-card-title">🔒 Security Team Requirement</div>
              <div className="auth0-card-content">
                <p style={{ fontSize: '1.25rem', color: '#BBC9FF' }}>Verified identities for transactions</p>
                <p style={{ marginTop: '1rem', opacity: 0.8 }}>Orders require verified email for fraud prevention and compliance.</p>
              </div>
            </div>
          </div>

          {/* The Solution */}
          <div className="auth0-highlight" style={{ background: 'linear-gradient(135deg, rgba(61, 16, 166, 0.2) 0%, rgba(63, 89, 228, 0.2) 100%)', borderLeft: '4px solid #3F59E4' }}>
            <h3 className="auth0-highlight-title">Auth0 Solution: Progressive Access Control</h3>
            <p className="auth0-highlight-text">
              <strong>Unverified users:</strong> Browse menu, view pricing, explore features<br/>
              <strong>Verified users:</strong> Place orders, save favorites, earn rewards
            </p>
          </div>

          {/* Implementation */}
          <details style={{ marginTop: '1.5rem' }}>
            <summary style={{ cursor: 'pointer', fontSize: '1.25rem', color: '#BBC9FF', fontWeight: 600, padding: '1rem 0' }}>
              ▶ View Implementation (Auth0 Action)
            </summary>
            <div className="auth0-code-block" style={{ marginTop: '1rem' }}>
{`// Auth0 Post-Login Action
exports.onExecutePostLogin = async (event, api) => {
  const emailVerified = event.user.email_verified;

  if (!emailVerified) {
    // Don't block login - just restrict ordering
    api.accessToken.setCustomClaim('can_order', false);
    return;
  }

  // User can place orders
  api.accessToken.setCustomClaim('can_order', true);
};`}
            </div>
          </details>

          {/* Business Impact */}
          <div className="auth0-grid-3" style={{ marginTop: '2rem' }}>
            <div className="auth0-card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', color: '#4CB7A3' }}>0%</div>
              <p style={{ marginTop: '0.5rem', opacity: 0.8 }}>Login abandonment</p>
            </div>
            <div className="auth0-card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', color: '#4CB7A3' }}>95%</div>
              <p style={{ marginTop: '0.5rem', opacity: 0.8 }}>Verification rate (24h)</p>
            </div>
            <div className="auth0-card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', color: '#4CB7A3' }}>40%</div>
              <p style={{ marginTop: '0.5rem', opacity: 0.8 }}>Fraud reduction</p>
            </div>
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

export default EmailVerification;
