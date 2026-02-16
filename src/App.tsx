import { useAuth0 } from '@auth0/auth0-react';
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import './App.css';

// Components
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import PreAuthLoading from './components/PreAuthLoading';
import PostAuthLoading from './components/PostAuthLoading';
import ProtectedRoute from './components/ProtectedRoute';
import AdminDashboard from './pages/AdminDashboard';
import PresentationMode from './pages/PresentationMode';

function App() {
  const { loginWithRedirect, isLoading, isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  const location = useLocation();

  const [showPreAuthLoading, setShowPreAuthLoading] = useState(false);
  const [showPostAuthLoading, setShowPostAuthLoading] = useState(false);
  const [postAuthShown, setPostAuthShown] = useState(false);

  // Handle login click with pre-auth loading screen
  const handleLoginClick = () => {
    setShowPreAuthLoading(true);
  };

  // Trigger actual Auth0 redirect after pre-auth loading
  const handlePreAuthComplete = () => {
    setShowPreAuthLoading(false);
    loginWithRedirect();
  };

  // Handle post-auth loading completion
  const handlePostAuthComplete = () => {
    setShowPostAuthLoading(false);
    navigate('/dashboard');
  };

  // Detect successful authentication callback and show post-auth loading
  useEffect(() => {
    const hasAuthParams = location.search.includes('code=') && location.search.includes('state=');

    // If we just completed authentication (URL has code/state and user is now authenticated)
    // and we haven't shown the post-auth loading yet
    if (hasAuthParams && isAuthenticated && !isLoading && !postAuthShown) {
      setShowPostAuthLoading(true);
      setPostAuthShown(true);

      // Clean up URL after a short delay (remove code/state params)
      setTimeout(() => {
        window.history.replaceState({}, document.title, '/');
      }, 100);
    }
  }, [isAuthenticated, isLoading, location.search, postAuthShown]);

  // Show initial Auth0 loading
  if (isLoading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  // Show pre-auth loading screen
  if (showPreAuthLoading) {
    return <PreAuthLoading onComplete={handlePreAuthComplete} />;
  }

  // Show post-auth loading screen
  if (showPostAuthLoading) {
    return <PostAuthLoading onComplete={handlePostAuthComplete} />;
  }

  // Hide header on presentation route
  const showHeader = location.pathname !== '/admin/presentation';

  return (
    <div className="app">
      {showHeader && <Header onLoginClick={handleLoginClick} />}
      <Routes>
        {/* Public route - Landing Page */}
        <Route
          path="/"
          element={
            isAuthenticated ?
              <Dashboard /> :
              <LandingPage onLoginClick={handleLoginClick} />
          }
        />

        {/* Protected route - Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Protected route - Profile */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* Protected route - Admin Dashboard (accessible to all, but shows access denied if not admin) */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        {/* Protected route - Presentation Mode (requires admin role) */}
        <Route
          path="/admin/presentation"
          element={
            <ProtectedRoute requireAdmin={true}>
              <PresentationMode />
            </ProtectedRoute>
          }
        />

        {/* Catch-all - redirect to home */}
        <Route path="*" element={<LandingPage onLoginClick={handleLoginClick} />} />
      </Routes>
    </div>
  );
}

export default App;
