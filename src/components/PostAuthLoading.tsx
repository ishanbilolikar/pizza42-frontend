import { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

interface LoadingStep {
  text: string;
  complete: boolean;
}

interface PostAuthLoadingProps {
  onComplete: () => void;
}

function PostAuthLoading({ onComplete }: PostAuthLoadingProps) {
  const { user } = useAuth0();
  const [loadingSteps, setLoadingSteps] = useState<LoadingStep[]>([
    { text: 'Securely fetching your order history', complete: false },
    { text: 'Loading your favorite toppings', complete: false },
    { text: 'Preparing your personalized dashboard', complete: false }
  ]);

  const updateStep = (index: number) => {
    setLoadingSteps((prev) =>
      prev.map((step, i) =>
        i === index ? { ...step, complete: true } : step
      )
    );
  };

  useEffect(() => {
    console.log('PostAuthLoading: Starting animation sequence (token exchange already complete)...');

    // Get total duration from env variable (default: 5000ms = 5 seconds)
    const totalDuration = parseInt(import.meta.env.VITE_POST_AUTH_DELAY || '5000');
    const stepDuration = Math.floor((totalDuration - 500) / 3); // Subtract 500ms for final pause, divide by 3 steps

    const animateSteps = async () => {
      // Step 1: Token verification (visual animation - Auth0 already completed this)
      await new Promise(resolve => setTimeout(resolve, stepDuration));
      updateStep(0);

      // Step 2: Profile loading (visual animation)
      await new Promise(resolve => setTimeout(resolve, stepDuration));
      updateStep(1);

      // Step 3: Dashboard preparation (visual animation)
      await new Promise(resolve => setTimeout(resolve, stepDuration));
      updateStep(2);

      // Small pause to show completion
      await new Promise(resolve => setTimeout(resolve, 500));

      // Call completion callback
      console.log('PostAuthLoading: Animation complete, calling onComplete...');
      onComplete();
    };

    animateSteps();
  }, [onComplete]);

  return (
    <div className="post-auth-loading">
      <div className="post-auth-loading-content">
        {/* Success Icon */}
        <div className="success-icon-animated">✅</div>

        {/* Welcome Message */}
        <h2 className="post-auth-title">⚡ Welcome Back{user?.name ? `, ${user.name.split(' ')[0]}` : ''}!</h2>
        <p className="post-auth-message">
          We're securely fetching your order history and favorite toppings<br />
          using Auth0's encrypted tokens...
        </p>

        {/* Loading Steps */}
        <div className="loading-steps">
          {loadingSteps.map((step, index) => (
            <div key={index} className={`loading-step ${step.complete ? 'complete' : ''}`}>
              <div className="step-icon">
                {step.complete ? '✓' : <div className="step-spinner"></div>}
              </div>
              <div className="step-text">{step.text}...</div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="post-auth-info">
          <p style={{ fontSize: '0.875rem', color: '#059669' }}>
            🔒 All data transferred using encrypted Auth0 tokens
          </p>
        </div>
      </div>
    </div>
  );
}

export default PostAuthLoading;
