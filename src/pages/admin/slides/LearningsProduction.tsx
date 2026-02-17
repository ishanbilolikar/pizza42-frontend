import { useState } from 'react';
import SlideModal from '../../../components/admin/SlideModal';

function LearningsProduction() {
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
          <h1 className="auth0-slide-title">Learnings & Production Readiness</h1>
          <p className="auth0-slide-subtitle">Configuration as code and operational excellence</p>
        </div>

        {/* Content */}
        <div className="auth0-slide-content">
          {/* Auth0 Deploy CLI Summary */}
          <div className="auth0-card" style={{ marginBottom: '1.5rem', borderColor: '#3F59E4', background: 'rgba(63, 89, 228, 0.05)' }}>
            <div className="auth0-card-title">🚀 Auth0 Configuration as Code</div>
            <div className="auth0-card-content">
              <p style={{ marginBottom: '1rem' }}>
                All Auth0 configuration managed via <strong>Deploy CLI</strong> - version controlled, repeatable, and automated.
              </p>
              <div
                className="modal-trigger-card"
                onClick={() => setActiveModal('deploy-cli')}
                style={{ margin: 0 }}
              >
                <p>📄 View Deploy CLI Example & Benefits →</p>
              </div>
            </div>
          </div>

          {/* Technical Learnings Trigger Card */}
          <div
            className="modal-trigger-card"
            onClick={() => setActiveModal('learnings')}
          >
            <p>💡 View Technical Learnings & Implementation Details →</p>
          </div>

          {/* Production Ready */}
          <div className="auth0-grid-2">
            <div className="auth0-card" style={{ borderColor: '#4CB7A3', background: 'rgba(76, 183, 163, 0.05)' }}>
              <div className="auth0-card-title">✅ Production Ready</div>
              <div className="auth0-card-content">
                <ul className="auth0-list" style={{ fontSize: '0.9rem' }}>
                  <li>Rotating refresh tokens (30 days, 15 idle)</li>
                  <li>PKCE flow (no secrets in SPA)</li>
                  <li>Email verification enforcement</li>
                  <li>Auth0 99.99% uptime SLA inherited</li>
                  <li>Deployed on Vercel with HTTPS</li>
                </ul>
              </div>
            </div>

            <div className="auth0-card" style={{ borderColor: '#BBC9FF' }}>
              <div className="auth0-card-title">🔜 Next for Production</div>
              <div className="auth0-card-content">
                <ul className="auth0-list" style={{ fontSize: '0.9rem' }}>
                  <li>Rate limiting on API endpoints</li>
                  <li>Comprehensive error handling</li>
                  <li>Monitoring & alerting dashboards</li>
                  <li>Automated testing of auth flows</li>
                  <li>Security headers (CSP, HSTS)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright text */}
        <div className="auth0-copyright-bottom">
          © Okta, Inc. and/or its affiliates. All rights reserved. For Okta, Inc. internal use only.
        </div>
      </div>

      {/* Deploy CLI Modal */}
      <SlideModal
        isOpen={activeModal === 'deploy-cli'}
        onClose={() => setActiveModal(null)}
        title="Auth0 Deploy CLI: Configuration as Code"
      >
        <p style={{ marginBottom: '1.5rem' }}>
          All Auth0 configuration managed via <strong>Deploy CLI</strong> - no manual dashboard clicks for production
        </p>

        <div className="auth0-code-block" style={{ marginBottom: '1.5rem' }}>
{`# Deploy Auth0 configuration
a0deploy import --config_file config/dev.json \\
                --input_file tenant.yaml

# What gets deployed:
- Profile Enrichment Action (Node.js 22)
- Client callbacks (localhost + Vercel production)
- Token lifetimes & rotation policies
- Database connections & enabled clients`}
        </div>

        <h3 style={{ color: '#4CB7A3', marginBottom: '1rem' }}>Benefits:</h3>
        <ul className="auth0-list">
          <li><strong>Version Control:</strong> Identity config tracked in Git</li>
          <li><strong>Repeatability:</strong> Deploy to dev/staging/prod consistently</li>
          <li><strong>Rollback:</strong> Easy recovery if something breaks</li>
          <li><strong>Automation:</strong> No manual dashboard changes in production</li>
        </ul>
      </SlideModal>

      {/* Technical Learnings Modal */}
      <SlideModal
        isOpen={activeModal === 'learnings'}
        onClose={() => setActiveModal(null)}
        title="Technical Learnings & Implementation Details"
      >
        <div className="auth0-grid-2">
          <div className="auth0-card">
            <div className="auth0-card-title">Progressive Disclosure</div>
            <div className="auth0-card-content">
              <p>Educational loading screens (3-5 sec, configurable)</p>
              <p style={{ marginTop: '0.5rem', opacity: 0.8 }}>
                Shows Auth0 working behind the scenes - token retrieval, profile enrichment, etc.
              </p>
            </div>
          </div>

          <div className="auth0-card">
            <div className="auth0-card-title">Silent Token Refresh</div>
            <div className="auth0-card-content">
              <p>After placing orders, refresh to get updated claims</p>
              <p style={{ marginTop: '0.5rem', opacity: 0.8 }}>
                Uses <code style={{ color: '#4CB7A3' }}>cacheMode: 'off'</code> to ensure fresh token data
              </p>
            </div>
          </div>

          <div className="auth0-card">
            <div className="auth0-card-title">Order History UX</div>
            <div className="auth0-card-content">
              <p>Collapsible section (collapsed by default)</p>
              <p style={{ marginTop: '0.5rem', opacity: 0.8 }}>
                Fetches only when expanded - lazy loading for better performance
              </p>
            </div>
          </div>

          <div className="auth0-card">
            <div className="auth0-card-title">Admin Role Management</div>
            <div className="auth0-card-content">
              <p>Manual via <code style={{ color: '#4CB7A3' }}>app_metadata.role</code></p>
              <p style={{ marginTop: '0.5rem', opacity: 0.8 }}>
                Production recommendation: Use Auth0 Organizations or RBAC for better scalability
              </p>
            </div>
          </div>
        </div>
      </SlideModal>
    </div>
  );
}

export default LearningsProduction;
