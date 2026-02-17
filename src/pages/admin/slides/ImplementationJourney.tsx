import { useState } from 'react';
import SlideModal from '../../../components/admin/SlideModal';

function ImplementationJourney() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

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
          <h1 className="auth0-slide-title">Implementation Journey</h1>
          <p className="auth0-slide-subtitle">Architecture decisions and challenges overcome</p>
        </div>

        {/* Content */}
        <div className="auth0-slide-content">
          {/* Architecture Decisions */}
          <div className="auth0-card" style={{ marginBottom: '2rem' }}>
            <div className="auth0-card-title">🏗️ Architecture Decisions</div>
            <div className="auth0-card-content">
              <div className="auth0-grid-2">
                <div>
                  <p style={{ fontWeight: 600, color: '#BBC9FF', marginBottom: '0.5rem' }}>Separated Frontend/Backend</p>
                  <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>React SPA (Vite) + Next.js API as independent services</p>
                  <p style={{ fontSize: '0.85rem', marginTop: '0.5rem', color: '#4CB7A3' }}>
                    <strong>Why:</strong> Frontend never sees secrets, backend validates tokens
                  </p>
                </div>

                <div>
                  <p style={{ fontWeight: 600, color: '#BBC9FF', marginBottom: '0.5rem' }}>Token Storage Strategy</p>
                  <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>localStorage (not memory) for session persistence</p>
                  <p style={{ fontSize: '0.85rem', marginTop: '0.5rem', color: '#f59e0b' }}>
                    <strong>Trade-off:</strong> Convenience vs XSS risk
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Order Storage Design Trigger Card */}
          <div
            className="modal-trigger-card"
            onClick={() => setActiveModal('order-storage')}
          >
            <p>📦 View Order Storage Design Details →</p>
          </div>

          {/* Key Challenges */}
          <div className="auth0-card">
            <div className="auth0-card-title">🎯 Key Challenges Solved</div>
            <div className="auth0-card-content">
              <div className="auth0-grid-2">
                <div>
                  <p style={{ fontWeight: 600, color: '#E27133', marginBottom: '0.5rem' }}>Challenge: Session Persistence</p>
                  <p style={{ fontSize: '0.85rem', opacity: 0.8, marginBottom: '0.5rem' }}>Users lost session on page refresh</p>
                  <p style={{ fontSize: '0.85rem', color: '#4CB7A3' }}>
                    ✅ Changed <code>cacheLocation</code> from memory to localStorage
                  </p>
                </div>

                <div>
                  <p style={{ fontWeight: 600, color: '#E27133', marginBottom: '0.5rem' }}>Challenge: Email Verification</p>
                  <p style={{ fontSize: '0.85rem', opacity: 0.8, marginBottom: '0.5rem' }}>Where to enforce? Frontend, backend, or Auth0?</p>
                  <p style={{ fontSize: '0.85rem', color: '#4CB7A3' }}>
                    ✅ Multi-layered: API validates, Action adds claim, UI shows prompt
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright text */}
        <div className="auth0-copyright-bottom">
          © Okta, Inc. and/or its affiliates. All rights reserved. For Okta, Inc. internal use only.
        </div>
      </div>

      {/* Order Storage Design Modal */}
      <SlideModal
        isOpen={activeModal === 'order-storage'}
        onClose={() => setActiveModal(null)}
        title="Order Storage Design"
      >
        <div className="auth0-grid-3" style={{ marginBottom: '2rem' }}>
          <div className="auth0-card">
            <div className="auth0-card-title">Storage</div>
            <div className="auth0-card-content">
              <p style={{ fontSize: '0.9rem' }}>Last 4 orders in <code style={{ color: '#4CB7A3' }}>app_metadata</code></p>
              <p style={{ fontSize: '0.85rem', marginTop: '0.5rem', opacity: 0.8 }}>Auto-removes oldest when 5th order placed</p>
            </div>
          </div>

          <div className="auth0-card">
            <div className="auth0-card-title">Token Claims</div>
            <div className="auth0-card-content">
              <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>Summary only:</p>
              <p style={{ fontSize: '0.85rem', opacity: 0.8 }}>
                <code style={{ color: '#4CB7A3' }}>totalOrders</code> - Count of all orders<br />
                <code style={{ color: '#4CB7A3' }}>lastOrderDate</code> - Most recent order timestamp
              </p>
            </div>
          </div>

          <div className="auth0-card">
            <div className="auth0-card-title">Full History</div>
            <div className="auth0-card-content">
              <p style={{ fontSize: '0.9rem' }}>Fetched on-demand via Management API</p>
              <p style={{ fontSize: '0.85rem', marginTop: '0.5rem', opacity: 0.8 }}>Only loads when user expands Order History in Profile page</p>
            </div>
          </div>
        </div>

        <div className="auth0-card" style={{ background: 'rgba(76, 183, 163, 0.1)' }}>
          <div className="auth0-card-title">Why This Approach?</div>
          <div className="auth0-card-content">
            <ul className="auth0-list">
              <li><strong>Avoids Token Bloat:</strong> Full order history in token would be 5-10KB+ per user</li>
              <li><strong>Faster Auth:</strong> Smaller tokens = faster login and token refresh</li>
              <li><strong>Scalable:</strong> Works with 4 orders or 4,000 orders without impacting token size</li>
              <li><strong>Privacy:</strong> Only authenticated API calls can fetch full history</li>
            </ul>
          </div>
        </div>
      </SlideModal>
    </div>
  );
}

export default ImplementationJourney;
