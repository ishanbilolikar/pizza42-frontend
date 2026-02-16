import { useEffect, useState } from 'react';

interface PreAuthLoadingProps {
  onComplete: () => void;
}

function PreAuthLoading({ onComplete }: PreAuthLoadingProps) {
  const [progress, setProgress] = useState(0);

  // Get delay from environment variable (default: 3000ms = 3 seconds)
  const delay = parseInt(import.meta.env.VITE_PRE_AUTH_DELAY || '3000');

  useEffect(() => {
    // Animate progress bar from 0% to 100%
    const interval = 50; // Update every 50ms
    const totalSteps = delay / interval;
    const increment = 100 / totalSteps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          // Trigger redirect to Auth0
          setTimeout(onComplete, 100); // Small delay for visual completion
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [delay, onComplete]);

  return (
    <div className="pre-auth-loading">
      <div className="pre-auth-loading-content">
        {/* Animated Pizza Icon */}
        <div className="pizza-icon-animated">🍕</div>

        {/* Educational Message */}
        <h2 className="pre-auth-title">🔐 Secure Login in Progress</h2>
        <p className="pre-auth-message">
          Pizza42 uses Auth0 to protect your credentials—<br />
          so we can focus on making great pizza, not managing passwords.
        </p>

        {/* Additional Info */}
        <div className="pre-auth-info">
          <p style={{ fontSize: '0.875rem', color: '#6b7280', marginTop: '1.5rem' }}>
            💡 <strong>What's happening:</strong> We're redirecting you to Auth0's
            encrypted login page. Your password never touches Pizza42's servers.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="progress-bar-container">
          <div
            className="progress-bar-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <p className="progress-text">{Math.round(progress)}%</p>
      </div>
    </div>
  );
}

export default PreAuthLoading;
