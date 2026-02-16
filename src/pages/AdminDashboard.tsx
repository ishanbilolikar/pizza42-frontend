import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import AccessDenied from '../components/AccessDenied';

function AdminDashboard() {
  const navigate = useNavigate();
  const { user } = useAuth0();

  const enterPresenterMode = () => {
    navigate('/admin/presentation');
  };

  // Check if user is admin
  const userRole = user?.role;
  const isAdmin = userRole === 'admin';

  // If not admin, show access denied
  if (!isAdmin) {
    return <AccessDenied />;
  }

  return (
    <main className="main">
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 'calc(100vh - 200px)' }}>
        <div className="admin-landing" style={{ textAlign: 'center', maxWidth: '600px' }}>
          <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>👑</div>
          <h1 style={{ marginBottom: '1rem' }}>Admin Dashboard</h1>
          <p className="admin-description" style={{ fontSize: '1.1rem', marginBottom: '2.5rem', color: '#6b7280' }}>
            You have administrator privileges. Access the Pizza42 CIAM presentation.
          </p>

          <button onClick={enterPresenterMode} className="btn-presenter-mode">
            Enter Presenter Mode →
          </button>
        </div>
      </div>
    </main>
  );
}

export default AdminDashboard;
