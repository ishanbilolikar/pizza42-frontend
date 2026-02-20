import { useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react';
import EmailVerificationPrompt from './EmailVerificationPrompt';
import OrderLoadingScreen from './OrderLoadingScreen';

const pizzas = [
  {
    id: 1,
    name: 'Margherita',
    description: 'Classic tomato sauce, fresh mozzarella, and basil',
    price: 12.99,
    emoji: '🍕'
  },
  {
    id: 2,
    name: 'Pepperoni',
    description: 'Tomato sauce, mozzarella, and lots of pepperoni',
    price: 14.99,
    emoji: '🍕'
  },
  {
    id: 3,
    name: 'Vegetarian',
    description: 'Bell peppers, onions, mushrooms, and olives',
    price: 13.99,
    emoji: '🥗'
  },
  {
    id: 4,
    name: 'Hawaiian',
    description: 'Ham, pineapple, and extra cheese',
    price: 13.99,
    emoji: '🍍'
  },
];

function Dashboard() {
  const { user, getAccessTokenSilently, getIdTokenClaims } = useAuth0();
  const [orderStatus, setOrderStatus] = useState<string | null>(null);
  const [isOrdering, setIsOrdering] = useState(false);
  const [showAuthBanner, setShowAuthBanner] = useState(true);
  const [showEmailVerification, setShowEmailVerification] = useState(false);
  const [showOrderLoading, setShowOrderLoading] = useState(false);
  const [pendingOrder, setPendingOrder] = useState<typeof pizzas[0] | null>(null);

  const handleOrder = async (pizza: typeof pizzas[0]) => {
    // Check if email is verified
    if (!user?.email_verified) {
      setShowEmailVerification(true);
      return;
    }

    // Show order loading screen
    setPendingOrder(pizza);
    setShowOrderLoading(true);
  };

  const processOrder = async () => {
    if (!pendingOrder) return;

    setIsOrdering(true);
    setOrderStatus(null);

    try {
      // Get access token with the place:order scope
      const token = await getAccessTokenSilently({
        authorizationParams: {
          audience: 'https://pizza42-api',
          scope: 'place:order'
        }
      });

      // Call Next.js backend API
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          pizzaId: pendingOrder.id,
          pizzaName: pendingOrder.name,
          price: pendingOrder.price,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setOrderStatus(`✅ Order placed successfully! Order ID: ${data.orderId}`);

        // Silently refresh the token to get updated user profile with new order data
        console.log('🔄 Refreshing token to get updated order data...');
        try {
          // Refresh both access token and ID token claims
          await Promise.all([
            getAccessTokenSilently({
              authorizationParams: {
                audience: 'https://pizza42-api',
              },
              cacheMode: 'off' // Force fresh token from Auth0
            }),
            getIdTokenClaims({
              cacheMode: 'off' // Force fresh ID token to update user object
            })
          ]);
          console.log('✅ Token refreshed successfully with updated order data');

          // Force a small delay to ensure SDK updates the user object
          await new Promise(resolve => setTimeout(resolve, 100));
        } catch (refreshError) {
          console.error('Failed to refresh token:', refreshError);
          // Don't show error to user - order was successful, token refresh is optional
        }
      } else {
        // Display the error message from the API
        setOrderStatus(`❌ ${data.error || 'Failed to place order'}`);
      }
    } catch (error: any) {
      console.error('Order error:', error);
      setOrderStatus('❌ Network error. Please try again.');
    } finally {
      setIsOrdering(false);
      setPendingOrder(null);
    }
  };

  return (
    <main className="main">
      <div className="container">
        {/* Hero Section */}
        <div className="hero">
          <h1>Welcome to Pizza42! 🍕</h1>
          <p>Delicious pizza with modern, secure authentication</p>
          {user && showAuthBanner && (
            <div className="authenticated-banner">
              ✅ <strong>Logged in as:</strong> {user.email}
              <button
                onClick={() => setShowAuthBanner(false)}
                className="banner-close-btn"
                aria-label="Close"
              >
                ✕
              </button>
            </div>
          )}
        </div>

        {/* Order Status */}
        {orderStatus && (
          <div className={`alert ${orderStatus.includes('✅') ? 'alert-success' : 'alert-error'}`}>
            <span>{orderStatus}</span>
            <button
              onClick={() => setOrderStatus(null)}
              className="alert-close-btn"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        )}

        {/* Pizza Menu */}
        <section className="menu-section">
          <h2>Our Menu</h2>
          <div className="pizza-grid">
            {pizzas.map((pizza) => (
              <div key={pizza.id} className="pizza-card">
                <div className="pizza-emoji">{pizza.emoji}</div>
                <h3>{pizza.name}</h3>
                <p className="pizza-description">{pizza.description}</p>
                <div className="pizza-footer">
                  <span className="pizza-price">${pizza.price}</span>
                  <button
                    onClick={() => handleOrder(pizza)}
                    disabled={isOrdering}
                    className="btn btn-order"
                  >
                    {isOrdering ? 'Ordering...' : 'Order Now'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Feature Highlights */}
        <section className="features">
          <h2>Powered by Auth0 CIAM</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Secure</h3>
              <p>Enterprise-grade security with PKCE flow</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Fast</h3>
              <p>Frictionless login with social and passkeys</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Smart</h3>
              <p>Profile enrichment and custom claims</p>
            </div>
          </div>
        </section>
      </div>

      {/* Email Verification Prompt */}
      {showEmailVerification && (
        <EmailVerificationPrompt onDismiss={() => setShowEmailVerification(false)} />
      )}

      {/* Order Loading Screen */}
      {showOrderLoading && pendingOrder && (
        <OrderLoadingScreen
          pizzaName={pendingOrder.name}
          onComplete={() => {
            setShowOrderLoading(false);
            processOrder();
          }}
        />
      )}
    </main>
  );
}

export default Dashboard;
