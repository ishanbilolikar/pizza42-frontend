import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

interface EmailVerificationPromptProps {
  onDismiss: () => void;
}

function EmailVerificationPrompt({ onDismiss }: EmailVerificationPromptProps) {
  const { user, loginWithRedirect } = useAuth0();
  const [isResending, setIsResending] = useState(false);
  const [resendSuccess, setResendSuccess] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleResendEmail = async () => {
    setIsResending(true);

    // Simulate API call to resend verification email
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsResending(false);
    setResendSuccess(true);

    // Auto-hide success message after 3 seconds
    setTimeout(() => {
      setResendSuccess(false);
    }, 3000);
  };

  const handleRefreshVerification = async () => {
    setIsRefreshing(true);
    try {
      // Silent re-authentication to get fresh tokens with updated email_verified status
      // prompt: 'none' means it won't show login screen if session exists
      console.log('🔄 Triggering silent re-authentication to check email verification...');

      await loginWithRedirect({
        authorizationParams: {
          prompt: 'none', // Silent authentication - no UI if session exists
          redirect_uri: window.location.origin
        }
      });

      // If we reach here, re-authentication is in progress
      // User will be redirected back with fresh tokens
    } catch (error) {
      console.error('Failed to refresh authentication:', error);
      setIsRefreshing(false);
      alert('Failed to check verification status. Please try logging out and back in.');
    }
  };

  return (
    <div className="verification-prompt-overlay">
      <div className="verification-prompt-card">
        {/* Icon */}
        <div className="verification-icon">📧</div>

        {/* Title */}
        <h2 className="verification-title">One More Step!</h2>

        {/* Message */}
        <p className="verification-message">
          To place an order, please verify your email address.<br />
          We sent a verification link to <strong>{user?.email}</strong>.
        </p>

        {/* Reason */}
        <div className="verification-reason">
          <p><strong>Why?</strong> It helps us prevent fraud and keep your account secure.</p>
        </div>

        {/* Success Message */}
        {resendSuccess && (
          <div className="verification-success">
            ✅ Verification email sent! Check your inbox.
          </div>
        )}

        {/* Actions */}
        <div className="verification-actions">
          <button
            onClick={handleResendEmail}
            disabled={isResending || resendSuccess}
            className="btn-resend"
          >
            {isResending ? 'Sending...' : resendSuccess ? 'Sent ✓' : 'Resend Email'}
          </button>
          <button onClick={onDismiss} className="btn-later">
            I'll Do It Later
          </button>
        </div>

        {/* Additional Info */}
        <p className="verification-footer">
          Already verified? <button
            onClick={handleRefreshVerification}
            disabled={isRefreshing}
            className="link-button"
          >
            {isRefreshing ? 'Checking...' : 'Refresh page'}
          </button>
        </p>
      </div>
    </div>
  );
}

export default EmailVerificationPrompt;
