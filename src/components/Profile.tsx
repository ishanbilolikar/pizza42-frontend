import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import DataLoadingScreen from './DataLoadingScreen';

interface Order {
  orderId: string;
  pizzaName: string;
  price: number;
  timestamp: string;
}

function Profile() {
  const { user, isLoading, getAccessTokenSilently } = useAuth0();
  const navigate = useNavigate();
  const [showDataLoading, setShowDataLoading] = useState(true);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [orders, setOrders] = useState<Order[]>([]);
  const [ordersExpanded, setOrdersExpanded] = useState(false);
  const [freshUserData, setFreshUserData] = useState<{totalOrders?: number, lastOrderDate?: string} | null>(null);

  // Show data loading screen on first load
  useEffect(() => {
    if (!isLoading && user && showDataLoading) {
      // Data loading screen will handle its own timing
    }
  }, [isLoading, user]);

  // Fetch orders after data loading completes
  // Orders are the source of truth for totalOrders and lastOrderDate
  useEffect(() => {
    if (dataLoaded && user) {
      fetchOrders();
    }
  }, [dataLoaded, user]);

  const fetchOrders = async () => {
    try {
      const token = await getAccessTokenSilently({
        authorizationParams: {
          audience: 'https://pizza42-api',
        }
      });

      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/user-orders`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        const fetchedOrders = data.orders || [];
        setOrders(fetchedOrders);

        // Calculate fresh order data from the actual orders (source of truth)
        if (fetchedOrders.length > 0) {
          setFreshUserData({
            totalOrders: fetchedOrders.length,
            lastOrderDate: fetchedOrders[0]?.timestamp // Orders are sorted by most recent first
          });
          console.log('✅ Fresh order data calculated:', {
            totalOrders: fetchedOrders.length,
            lastOrderDate: fetchedOrders[0]?.timestamp
          });
        }
      }
    } catch (error) {
      console.error('Failed to fetch orders:', error);
    }
  };

  if (isLoading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Loading profile...</p>
      </div>
    );
  }

  // Show data loading screen
  if (showDataLoading && !dataLoaded) {
    return (
      <DataLoadingScreen
        onComplete={() => {
          setShowDataLoading(false);
          setDataLoaded(true);
        }}
      />
    );
  }

  if (!user) {
    return <div>Not authenticated</div>;
  }

  const isAdmin = user.role === 'admin';

  return (
    <main className="main">
      <div className="container">
        <div className="profile-section">
          <h1>Your Profile</h1>

          {/* User Info Card */}
          <div className="profile-card">
            <div className="profile-avatar">
              {user.picture ? (
                <img src={user.picture} alt={user.name || 'User'} />
              ) : (
                <div className="avatar-placeholder">
                  {user.name?.charAt(0) || user.email?.charAt(0) || '?'}
                </div>
              )}
            </div>
            <div className="profile-info">
              <h2>{user.name || user.email}</h2>
              <p className="profile-email">{user.email}</p>
              <div className="profile-badges">
                {user.email_verified && (
                  <span className="badge badge-success">✓ Email Verified</span>
                )}
                <span className={`badge ${isAdmin ? 'badge-admin' : 'badge-default'}`}>
                  {isAdmin ? '👑 Admin' : '👤 Customer'}
                </span>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="profile-card">
            <h3>Order Summary</h3>
            <div className="order-stats">
              <div className="stat-item">
                <div className="stat-icon">📦</div>
                <div className="stat-info">
                  <div className="stat-value">
                    {freshUserData?.totalOrders ?? user.totalOrders ?? 0}
                  </div>
                  <div className="stat-label">Total Orders</div>
                </div>
              </div>
              {(freshUserData?.lastOrderDate || user.lastOrderDate) && (
                <div className="stat-item">
                  <div className="stat-icon">📅</div>
                  <div className="stat-info">
                    <div className="stat-value">
                      {new Date(freshUserData?.lastOrderDate || user.lastOrderDate).toLocaleDateString()}
                    </div>
                    <div className="stat-label">Last Order</div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Order History - Collapsible */}
          {orders.length > 0 && (
            <div className="profile-card order-history-card">
              <div
                className="order-history-header"
                onClick={() => setOrdersExpanded(!ordersExpanded)}
              >
                <h3>📋 Order History ({orders.length})</h3>
                <span className="collapse-icon">{ordersExpanded ? '▼' : '▶'}</span>
              </div>

              {ordersExpanded && (
                <div className="order-history-content">
                  <p style={{ marginBottom: '1rem', color: '#6b7280', fontSize: '0.95rem' }}>
                    Your last {orders.length} orders (most recent first)
                  </p>
                  <div className="orders-list">
                    {orders.map((order, index) => (
                      <div key={order.orderId} className="order-item">
                        <div className="order-item-header">
                          <div className="order-item-title">
                            <span className="order-number">#{index + 1}</span>
                            <span className="order-pizza-name">{order.pizzaName}</span>
                          </div>
                          <span className="order-price">${order.price.toFixed(2)}</span>
                        </div>
                        <div className="order-item-details">
                          <span className="order-id">Order ID: {order.orderId}</span>
                          <span className="order-date">
                            {new Date(order.timestamp).toLocaleString()}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Admin Access */}
          {isAdmin && (
            <div className="profile-card admin-access-card">
              <h3>🔐 Admin Access</h3>
              <p>You have administrator privileges. Access the admin dashboard to view the presentation.</p>
              <button
                onClick={() => navigate('/admin')}
                className="btn btn-primary"
                style={{ marginTop: '1rem' }}
              >
                Go to Admin Dashboard →
              </button>
            </div>
          )}

          {/* Token Claims */}
          <div className="profile-card">
            <h3>ID Token Claims</h3>
            <details>
              <summary style={{ cursor: 'pointer', fontWeight: 600, padding: '0.5rem 0' }}>
                View Token Data (for debugging)
              </summary>
              <pre className="token-display">
                {JSON.stringify(user, null, 2)}
              </pre>
            </details>
          </div>

          {/* Actions */}
          <div className="profile-actions">
            <button
              onClick={() => navigate('/dashboard')}
              className="btn btn-secondary"
            >
              ← Back to Dashboard
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Profile;
