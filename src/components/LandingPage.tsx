import { useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react';

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

interface LandingPageProps {
  onLoginClick: () => void;
}

function LandingPage({ onLoginClick }: LandingPageProps) {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const handleLoginClick = () => {
    if (onLoginClick) {
      onLoginClick(); // Trigger the pre-auth loading screen
    } else {
      loginWithRedirect();
    }
  };

  const handleOrderClick = () => {
    if (!isAuthenticated) {
      handleLoginClick();
    }
  };

  return (
    <main className="main">
      <div className="container">
        {/* Hero Section */}
        <div className="hero">
          <h1>Welcome to Pizza42! 🍕</h1>
          <p>Delicious pizza with modern, secure authentication</p>
          <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>🔒 Protected by Auth0</span>
          </div>
        </div>

        {/* Stakeholder Benefits Section */}
        <section style={{ marginBottom: '3rem' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem',
            maxWidth: '900px',
            margin: '0 auto'
          }}>
            {/* Security Card */}
            <div style={{
              background: 'white',
              borderRadius: '0.75rem',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              padding: '2rem',
              textAlign: 'center',
              transition: 'transform 0.2s',
            }} className="benefit-card">
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔐</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '0.5rem' }}>Secure</h3>
              <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>Bank-level encryption for your account with enterprise-grade security</p>
            </div>

            {/* Convenience Card */}
            <div style={{
              background: 'white',
              borderRadius: '0.75rem',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              padding: '2rem',
              textAlign: 'center',
              transition: 'transform 0.2s',
            }} className="benefit-card">
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⚡</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '0.5rem' }}>Fast</h3>
              <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>Frictionless login with social accounts and passkeys</p>
            </div>

            {/* Rewards Card */}
            <div style={{
              background: 'white',
              borderRadius: '0.75rem',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              padding: '2rem',
              textAlign: 'center',
              transition: 'transform 0.2s',
            }} className="benefit-card">
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎁</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '0.5rem' }}>Smart</h3>
              <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>Profile enrichment and personalized offers based on your favorites</p>
            </div>
          </div>
        </section>

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
                    onClick={handleOrderClick}
                    className="btn btn-order"
                  >
                    {isAuthenticated ? 'Order Now' : 'Login to Order'}
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
    </main>
  );
}

export default LandingPage;
