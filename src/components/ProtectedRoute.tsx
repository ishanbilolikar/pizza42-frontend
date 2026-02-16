import { useAuth0 } from '@auth0/auth0-react';
import { type ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: ReactNode;
  requireAdmin?: boolean;
}

function ProtectedRoute({ children, requireAdmin = false }: ProtectedRouteProps) {
  const { isAuthenticated, isLoading, user } = useAuth0();

  // Show loading state while Auth0 initializes
  if (isLoading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  // Redirect to home if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  // Check for admin role if required
  if (requireAdmin) {
    const role = user?.role;

    if (role !== 'admin') {
      return (
        <div className="access-denied">
          <div className="access-denied-content">
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🚫</div>
            <h2>Admin Access Required</h2>
            <p>This dashboard is only available to Pizza42 administrators.</p>
            <p style={{ marginTop: '1rem' }}>
              <strong>Your current role:</strong> {role || 'customer'}
            </p>
            <p style={{ marginTop: '2rem', color: '#6b7280', fontSize: '0.875rem' }}>
              Contact your system administrator if you believe this is an error.
            </p>
            <button
              onClick={() => window.location.href = '/dashboard'}
              className="btn btn-primary"
              style={{ marginTop: '2rem' }}
            >
              Return to Dashboard
            </button>
          </div>
        </div>
      );
    }
  }

  // Render protected content
  return <>{children}</>;
}

export default ProtectedRoute;
