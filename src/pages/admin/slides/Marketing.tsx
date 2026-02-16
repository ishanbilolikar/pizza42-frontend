function Marketing() {
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
          <h1 className="auth0-slide-title">Marketing Data Engine</h1>
          <p className="auth0-slide-subtitle">Identity as a growth engine - turning authentication into revenue</p>
        </div>

        {/* Content */}
        <div className="auth0-slide-content">
          {/* Enriched Profile Card */}
          <div className="auth0-card" style={{ marginBottom: '2rem' }}>
            <div className="auth0-card-title">👤 Enriched Customer Profile</div>
            <div className="auth0-card-content">
              <div className="auth0-grid-2">
                <div>
                  <p><strong style={{ color: '#BBC9FF' }}>Sarah Johnson</strong></p>
                  <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>sarah@example.com</p>
                </div>
                <div style={{ textAlign: 'right', color: '#4CB7A3' }}>
                  <div style={{ fontSize: '1.25rem', fontWeight: 600 }}>Gold Tier</div>
                </div>
              </div>

              <div className="auth0-grid-2" style={{ marginTop: '1.5rem', gap: '1rem' }}>
                <div>
                  <p style={{ opacity: 0.7, fontSize: '0.9rem' }}>🍕 Favorite Topping</p>
                  <p style={{ fontWeight: 600 }}>Pepperoni</p>
                </div>
                <div>
                  <p style={{ opacity: 0.7, fontSize: '0.9rem' }}>📍 Location</p>
                  <p style={{ fontWeight: 600 }}>Chicago, IL</p>
                </div>
                <div>
                  <p style={{ opacity: 0.7, fontSize: '0.9rem' }}>📅 Last Order</p>
                  <p style={{ fontWeight: 600 }}>2 days ago</p>
                </div>
                <div>
                  <p style={{ opacity: 0.7, fontSize: '0.9rem' }}>💰 Total Spent</p>
                  <p style={{ fontWeight: 600 }}>$247</p>
                </div>
              </div>

              <p style={{ marginTop: '1.5rem', fontSize: '0.9rem', opacity: 0.7, fontStyle: 'italic' }}>
                <strong>Data Sources:</strong> Auth0 Identity + Profile Enrichment + Order History
              </p>
            </div>
          </div>

          {/* Progressive Profiling Timeline */}
          <div className="auth0-highlight" style={{ background: 'rgba(76, 183, 163, 0.15)', borderLeft: '4px solid #4CB7A3', marginBottom: '2rem' }}>
            <h3 className="auth0-highlight-title">🔄 Progressive Profiling Strategy</h3>
            <div className="auth0-grid-3" style={{ marginTop: '1rem' }}>
              <div className="auth0-card">
                <div className="auth0-card-title">Day 1: Signup</div>
                <div className="auth0-card-content">
                  <p><strong>Collect:</strong> Email only</p>
                  <p style={{ marginTop: '0.5rem', opacity: 0.8 }}>Data: Email, IP location</p>
                </div>
              </div>

              <div className="auth0-card">
                <div className="auth0-card-title">Week 1: 3rd Login</div>
                <div className="auth0-card-content">
                  <p><strong>Prompt:</strong> "Favorite topping?"</p>
                  <p style={{ marginTop: '0.5rem', opacity: 0.8 }}>Incentive: Pizza raffle entry</p>
                </div>
              </div>

              <div className="auth0-card">
                <div className="auth0-card-title">Month 1: 5th Login</div>
                <div className="auth0-card-content">
                  <p><strong>Prompt:</strong> "Save address?"</p>
                  <p style={{ marginTop: '0.5rem', opacity: 0.8 }}>Incentive: 1-click ordering</p>
                </div>
              </div>
            </div>
            <p style={{ marginTop: '1rem', textAlign: 'center', color: '#4CB7A3', fontWeight: 600 }}>
              Result: 80% profile completion without upfront friction
            </p>
          </div>

          {/* Identity Stitching */}
          <details style={{ marginTop: '1.5rem' }}>
            <summary style={{ cursor: 'pointer', fontSize: '1.25rem', color: '#BBC9FF', fontWeight: 600, padding: '1rem 0' }}>
              ▶ Identity Stitching: Unifying Cross-Platform Users
            </summary>
            <div className="auth0-grid-2" style={{ marginTop: '1rem' }}>
              <div className="auth0-card" style={{ borderColor: '#E27133' }}>
                <div className="auth0-card-title">❌ Before Auth0</div>
                <div className="auth0-card-content">
                  <p style={{ marginBottom: '0.5rem' }}>Web signup: sarah@example.com (ID: 123)</p>
                  <p style={{ marginBottom: '1rem' }}>Mobile: Google Sign-In (ID: 456)</p>
                  <p style={{ color: '#E27133', fontWeight: 600 }}>Marketing sees: 2 separate customers</p>
                </div>
              </div>

              <div className="auth0-card" style={{ borderColor: '#4CB7A3', background: 'rgba(76, 183, 163, 0.05)' }}>
                <div className="auth0-card-title">✅ After Auth0 Account Linking</div>
                <div className="auth0-card-content">
                  <p style={{ marginBottom: '1rem' }}>Both accounts linked to sarah@example.com</p>
                  <ul className="auth0-list">
                    <li style={{ color: '#4CB7A3' }}>Single loyalty point balance</li>
                    <li style={{ color: '#4CB7A3' }}>Unified order history</li>
                    <li style={{ color: '#4CB7A3' }}>Cross-device passkeys</li>
                  </ul>
                  <p style={{ color: '#4CB7A3', fontWeight: 600, marginTop: '1rem' }}>Marketing sees: 1 customer, 2 login methods</p>
                </div>
              </div>
            </div>
          </details>

          {/* Marketing Advantage */}
          <div className="auth0-highlight" style={{ background: 'linear-gradient(135deg, rgba(61, 16, 166, 0.2) 0%, rgba(63, 89, 228, 0.2) 100%)', borderLeft: '4px solid #3F59E4', marginTop: '2rem' }}>
            <h3 className="auth0-highlight-title">💡 The Marketing Advantage</h3>
            <ul className="auth0-list">
              <li><strong>Rich Profiles:</strong> No annoying 20-field signup forms</li>
              <li><strong>Progressive Data:</strong> Build intelligence over time</li>
              <li><strong>Unified Identity:</strong> Web + mobile + social = 1 customer</li>
              <li><strong>Real-Time Segmentation:</strong> Target campaigns instantly</li>
            </ul>
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

export default Marketing;
