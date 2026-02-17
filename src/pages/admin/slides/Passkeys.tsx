import { useState } from 'react';
import SlideModal from '../../../components/admin/SlideModal';

function Passkeys() {
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

          {/* Progressive Enrollment Trigger Card */}
          <div
            className="modal-trigger-card"
            onClick={() => setActiveModal('enrollment')}
            style={{ marginTop: '1.5rem' }}
          >
            <p>📈 View Progressive Enrollment Strategy →</p>
          </div>
        </div>

        {/* Copyright text */}
        <div className="auth0-copyright-bottom">
          © Okta, Inc. and/or its affiliates. All rights reserved. For Okta, Inc. internal use only.
        </div>
      </div>

      {/* Progressive Enrollment Modal */}
      <SlideModal
        isOpen={activeModal === 'enrollment'}
        onClose={() => setActiveModal(null)}
        title="Progressive Enrollment Strategy"
      >
        <p style={{ marginBottom: '1.5rem', fontSize: '1.05rem' }}>
          Phased rollout approach to maximize passkey adoption without forcing users
        </p>

        <div className="auth0-grid-3">
          <div className="auth0-card">
            <div className="auth0-card-title">Phase 1: Months 1-3</div>
            <div className="auth0-card-content">
              <p style={{ marginBottom: '0.75rem' }}><strong>Strategy:</strong> Opt-in after login</p>
              <p style={{ opacity: 0.8, marginBottom: '0.5rem' }}>Show passkey enrollment prompt to interested users</p>
              <p style={{ color: '#4CB7A3', fontWeight: 600 }}>Target: 20% adoption</p>
            </div>
          </div>

          <div className="auth0-card">
            <div className="auth0-card-title">Phase 2: Months 4-6</div>
            <div className="auth0-card-content">
              <p style={{ marginBottom: '0.75rem' }}><strong>Strategy:</strong> Prompt power users</p>
              <p style={{ opacity: 0.8, marginBottom: '0.5rem' }}>Target users with 5+ logins per month</p>
              <p style={{ color: '#4CB7A3', fontWeight: 600 }}>Target: 40% adoption</p>
            </div>
          </div>

          <div className="auth0-card">
            <div className="auth0-card-title">Phase 3: Months 7-12</div>
            <div className="auth0-card-content">
              <p style={{ marginBottom: '0.75rem' }}><strong>Strategy:</strong> Default for new signups</p>
              <p style={{ opacity: 0.8, marginBottom: '0.5rem' }}>Offer passkey setup during registration flow</p>
              <p style={{ color: '#4CB7A3', fontWeight: 600 }}>Target: 60% adoption</p>
            </div>
          </div>
        </div>

        <div className="auth0-card" style={{ marginTop: '1.5rem', background: 'rgba(76, 183, 163, 0.1)' }}>
          <div className="auth0-card-title">Key Principles</div>
          <div className="auth0-card-content">
            <ul className="auth0-list">
              <li><strong>Never force:</strong> Always provide fallback to password/social login</li>
              <li><strong>Educate:</strong> Explain benefits (faster login, more secure, no passwords)</li>
              <li><strong>Incentivize:</strong> Offer perks like priority support or loyalty points</li>
              <li><strong>Monitor:</strong> Track adoption rates and user feedback to adjust strategy</li>
            </ul>
          </div>
        </div>
      </SlideModal>
    </div>
  );
}

export default Passkeys;
