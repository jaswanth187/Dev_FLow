const features = [
  {
    icon: '☷',
    title: 'Project Management',
    description:
      'Organize your work with intuitive boards, lists and timelines.',
    color: 'blue'
  },
  {
    icon: '♧',
    title: 'Team Collaboration',
    description:
      'Work together seamlessly with real-time updates and comments.',
    color: 'blue'
  },
  {
    icon: '▥',
    title: 'Powerful Analytics',
    description:
      "Get insights into your team's productivity and project progress.",
    color: 'blue'
  },
  {
    icon: '✦',
    title: 'AI-Powered Insights',
    description:
      'Let AI help you plan, prioritize and break down complex tasks.',
    color: 'purple'
  }
]

const FeaturesSection = () => {
  return (
    <section className="landing-section features-section">

      <div className="section-header">

        <span className="section-label">
          FEATURES
        </span>

        <h2>
          Everything you need to ship faster
        </h2>

        <p>
          Powerful tools to plan, collaborate and deliver amazing products.
        </p>

      </div>


      <div className="features-grid">

        {features.map((feature) => (

          <div
            className="feature-card"
            key={feature.title}
          >

            <div className={`feature-icon ${feature.color}`}>
              {feature.icon}
            </div>

            <h3>
              {feature.title}
            </h3>

            <p>
              {feature.description}
            </p>

          </div>

        ))}

      </div>

    </section>
  )
}

export default FeaturesSection