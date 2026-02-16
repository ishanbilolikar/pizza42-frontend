import { useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  onProfileClick?: () => void;
  onLoginClick?: () => void;
}

function Header({ onProfileClick, onLoginClick }: HeaderProps) {
  const { loginWithRedirect, logout, user, isAuthenticated, getIdTokenClaims, getAccessTokenSilently } = useAuth0();
  const navigate = useNavigate();
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [tokens, setTokens] = useState<{
    idToken: any;
    accessToken: string | null;
    accessTokenDecoded: any;
  }>({ idToken: null, accessToken: null, accessTokenDecoded: null });

  const isAdmin = user?.role === 'admin';

  // Helper function to decode JWT token
  const decodeJWT = (token: string) => {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      );
      return JSON.parse(jsonPayload);
    } catch (error) {
      console.error('Error decoding JWT:', error);
      return null;
    }
  };

  const handleProfileClick = async () => {
    setShowProfileDropdown(!showProfileDropdown);

    if (!showProfileDropdown && isAuthenticated) {
      try {
        // Get ID token claims
        const idTokenClaims = await getIdTokenClaims();

        // Get access token
        const accessToken = await getAccessTokenSilently({
          authorizationParams: {
            audience: 'https://pizza42-api',
            scope: 'place:order'
          }
        });

        // Decode access token
        const accessTokenDecoded = decodeJWT(accessToken);

        setTokens({
          idToken: idTokenClaims,
          accessToken: accessToken,
          accessTokenDecoded: accessTokenDecoded
        });
      } catch (error) {
        console.error('Error fetching tokens:', error);
      }
    }

    if (onProfileClick) {
      onProfileClick();
    }
  };

  return (
    <>
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <span className="logo-icon">🍕</span>
            <span className="logo-text">Pizza42</span>
          </div>
          <nav>
            {isAuthenticated ? (
              <div className="user-menu">
                <button
                  onClick={() => navigate('/dashboard')}
                  className="btn btn-link"
                >
                  Dashboard
                </button>
                <button
                  onClick={() => navigate('/profile')}
                  className="btn btn-link"
                >
                  Profile
                </button>
                {isAdmin && (
                  <button
                    onClick={() => navigate('/admin')}
                    className="btn btn-link"
                    style={{ color: '#f59e0b', fontWeight: 600 }}
                  >
                    👑 Admin
                  </button>
                )}
                <button
                  onClick={handleProfileClick}
                  className="btn btn-icon"
                  title="View Profile & Tokens"
                >
                  👤
                </button>
                <button
                  onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                  className="btn btn-secondary"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  if (onLoginClick) {
                    onLoginClick();
                  } else {
                    loginWithRedirect();
                  }
                }}
                className="btn btn-primary"
              >
                Login
              </button>
            )}
          </nav>
        </div>

        {/* Profile Dropdown Modal */}
        {showProfileDropdown && isAuthenticated && (
          <div className="profile-dropdown">
            <div className="profile-dropdown-header">
              <h3>Profile & Tokens</h3>
              <button
                onClick={() => setShowProfileDropdown(false)}
                className="close-btn"
              >
                ✕
              </button>
            </div>

            <div className="profile-info">
              <p><strong>Email:</strong> {user?.email}</p>
              <p><strong>Name:</strong> {user?.name || 'N/A'}</p>
              <p><strong>Email Verified:</strong> {user?.email_verified ? '✅ Yes' : '❌ No'}</p>
            </div>

            {tokens.idToken && (
              <div className="token-section">
                <h4>🆔 ID Token (Decoded)</h4>
                <pre className="token-display">
                  {JSON.stringify(tokens.idToken, null, 2)}
                </pre>
              </div>
            )}

            {tokens.accessTokenDecoded && (
              <div className="token-section">
                <h4>🔑 Access Token (Decoded)</h4>
                <pre className="token-display">
                  {JSON.stringify(tokens.accessTokenDecoded, null, 2)}
                </pre>
              </div>
            )}

            {tokens.accessToken && (
              <div className="token-section">
                <h4>📜 Access Token (Raw JWT)</h4>
                <details>
                  <summary style={{ cursor: 'pointer', fontWeight: 600, padding: '0.5rem 0', color: '#e5e7eb' }}>
                    Show Raw JWT
                  </summary>
                  <pre className="token-display" style={{ wordBreak: 'break-all', whiteSpace: 'pre-wrap' }}>
                    {tokens.accessToken}
                  </pre>
                </details>
              </div>
            )}
          </div>
        )}
      </header>

      {/* Overlay for dropdown */}
      {showProfileDropdown && (
        <div
          className="dropdown-overlay"
          onClick={() => setShowProfileDropdown(false)}
        ></div>
      )}
    </>
  );
}

export default Header;
