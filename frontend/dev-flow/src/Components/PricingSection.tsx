const plans = [
  {
    name: 'Free',
    subtitle: 'Perfect for individuals',
    price: '$0',
    period: '/month',
    features: [
      'Up to 3 projects',
      'Basic features',
      'Community support'
    ],
    button: 'Get Started'
  },
  {
    name: 'Pro',
    subtitle: 'For growing teams',
    price: '$12',
    period: '/month per user',
    popular: true,
    features: [
      'Unlimited projects',
      'AI assistant',
      'Advanced analytics',
      'Priority support'
    ],
    button: 'Get Started'
  },
  {
    name: 'Enterprise',
    subtitle: 'For large organizations',
    price: 'Custom',
    period: 'pricing',
    features: [
      'Everything in Pro',
      'SSO & advanced security',
      'Dedicated support',
      'Custom integrations'
    ],
    button: 'Contact Sales'
  }
]

const PricingSection = () => {
  return (
    <section className="landing-section pricing-section">

      <div className="section-header">

        <span className="section-label">
          PRICING
        </span>

        <h2>
          Simple, transparent pricing
        </h2>

        <p>
          Choose the plan that fits your team.
        </p>

      </div>


      <div className="pricing-grid">

        {plans.map((plan) => (

          <div
            className={`pricing-card ${
              plan.popular ? 'popular-plan' : ''
            }`}
            key={plan.name}
          >

            {plan.popular && (
              <div className="popular-badge">
                Most Popular
              </div>
            )}


            <h3>
              {plan.name}
            </h3>

            <p className="pricing-subtitle">
              {plan.subtitle}
            </p>


            <div className="price">

              <strong>
                {plan.price}
              </strong>

              <span>
                {plan.period}
              </span>

            </div>


            <div className="pricing-features">

              {plan.features.map((feature) => (

                <div
                  className="pricing-feature"
                  key={feature}
                >
                  <span>✓</span>

                  {feature}
                </div>

              ))}

            </div>


            <button
              className={
                plan.popular
                  ? 'pricing-button primary'
                  : 'pricing-button'
              }
            >
              {plan.button}
            </button>

          </div>

        ))}

      </div>

    </section>
  )
}

export default PricingSection