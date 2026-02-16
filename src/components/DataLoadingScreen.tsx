import { useEffect, useState } from 'react';

interface LoadingStep {
  text: string;
  complete: boolean;
}

interface DataLoadingScreenProps {
  onComplete: () => void;
}

function DataLoadingScreen({ onComplete }: DataLoadingScreenProps) {
  const [loadingSteps, setLoadingSteps] = useState<LoadingStep[]>([
    { text: 'Fetching your order history', complete: false },
    { text: 'Verifying secure API token', complete: false },
    { text: 'Decrypting your data', complete: false }
  ]);

  const updateStep = (index: number) => {
    setLoadingSteps((prev) =>
      prev.map((step, i) =>
        i === index ? { ...step, complete: true } : step
      )
    );
  };

  useEffect(() => {
    // Get total duration from env variable (default: 5000ms = 5 seconds)
    const totalDuration = parseInt(import.meta.env.VITE_DATA_LOADING_DELAY || '5000');
    const stepDuration = Math.floor((totalDuration - 500) / 3); // Subtract 500ms for final pause, divide by 3 steps

    const animateSteps = async () => {
      // Step 1
      await new Promise(resolve => setTimeout(resolve, stepDuration));
      updateStep(0);

      // Step 2
      await new Promise(resolve => setTimeout(resolve, stepDuration));
      updateStep(1);

      // Step 3
      await new Promise(resolve => setTimeout(resolve, stepDuration));
      updateStep(2);

      // Small pause
      await new Promise(resolve => setTimeout(resolve, 500));

      onComplete();
    };

    animateSteps();
  }, [onComplete]);

  return (
    <div className="post-auth-loading">
      <div className="post-auth-loading-content">
        {/* Lock Icon */}
        <div className="success-icon-animated">🔒</div>

        {/* Title */}
        <h2 className="post-auth-title">Your Orders Are Protected</h2>
        <p className="post-auth-message">
          Fetching your order history using a secure API token.<br />
          Only YOU can see this data—guaranteed by Auth0.
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
            🛡️ Zero-trust security: Every request is authenticated
          </p>
        </div>
      </div>
    </div>
  );
}

export default DataLoadingScreen;
