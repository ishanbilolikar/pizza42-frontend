import { useEffect, useState } from 'react';

interface LoadingStep {
  text: string;
  complete: boolean;
}

interface OrderLoadingScreenProps {
  onComplete: () => void;
  pizzaName: string;
}

function OrderLoadingScreen({ onComplete, pizzaName }: OrderLoadingScreenProps) {
  const [loadingSteps, setLoadingSteps] = useState<LoadingStep[]>([
    { text: 'Retrieving Auth0 access token', complete: false },
    { text: 'Authorizing with Pizza42 Order API', complete: false },
    { text: `Placing your ${pizzaName} order`, complete: false }
  ]);

  const updateStep = (index: number) => {
    setLoadingSteps((prev) =>
      prev.map((step, i) =>
        i === index ? { ...step, complete: true } : step
      )
    );
  };

  useEffect(() => {
    // Get total duration from env variable (default: 3000ms = 3 seconds)
    const totalDuration = parseInt(import.meta.env.VITE_ORDER_LOADING_DELAY || '3000');
    const stepDuration = Math.floor((totalDuration - 500) / 3);

    const animateSteps = async () => {
      // Step 1: Get access token
      await new Promise(resolve => setTimeout(resolve, stepDuration));
      updateStep(0);

      // Step 2: Authorize with API
      await new Promise(resolve => setTimeout(resolve, stepDuration));
      updateStep(1);

      // Step 3: Place order
      await new Promise(resolve => setTimeout(resolve, stepDuration));
      updateStep(2);

      // Small pause
      await new Promise(resolve => setTimeout(resolve, 500));

      onComplete();
    };

    animateSteps();
  }, [onComplete]);

  return (
    <div className="order-loading-overlay">
      <div className="order-loading-card">
        {/* Pizza Icon */}
        <div className="order-loading-icon">🍕</div>

        {/* Title */}
        <h2 className="order-loading-title">Processing Your Order</h2>
        <p className="order-loading-message">
          Using Auth0 access token to securely authorize<br />
          your order with the Pizza42 API...
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
        <div className="order-loading-info">
          <p style={{ fontSize: '0.875rem', color: '#10b981' }}>
            🔐 Your order is protected by OAuth 2.0 authorization
          </p>
        </div>
      </div>
    </div>
  );
}

export default OrderLoadingScreen;
