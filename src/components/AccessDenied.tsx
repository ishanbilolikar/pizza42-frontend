import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

function AccessDenied() {
  const { user } = useAuth0();
  const navigate = useNavigate();
  const userRole = user?.role || 'customer';

  return (
    <div className="access-denied-container">
      <div className="access-denied-card">
        {/* Icon */}
        <div className="access-denied-icon">⛔</div>

        {/* Title */}
        <h1 className="access-denied-title">Admin Access Required</h1>

        {/* Message */}
        <p className="access-denied-message">
          This dashboard is only available to Pizza42 administrators.
        </p>

        {/* Role Info */}
        <div className="access-denied-role">
          <p>
            <strong>Your current role:</strong>{' '}
            <span className="role-badge">{userRole.charAt(0).toUpperCase() + userRole.slice(1)}</span>
          </p>
        </div>

        {/* Help Text */}
        <p className="access-denied-help">
          Need access? Contact your IT admin.
        </p>

        {/* Actions */}
        <div className="access-denied-actions">
          <button onClick={() => navigate('/dashboard')} className="btn-primary">
            Go to Dashboard
          </button>
          <button onClick={() => navigate('/')} className="btn-secondary">
            Go to Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default AccessDenied;
