const integrations = [
  {
    name: 'GitHub',
    icon: '●',
    description: 'Sync commits and pull requests',
    color: 'github'
  },
  {
    name: 'Figma',
    icon: '◆',
    description: 'Turn designs into tasks',
    color: 'figma'
  },
  {
    name: 'Slack',
    icon: '✦',
    description: 'Get notified in real time',
    color: 'slack'
  },
  {
    name: 'Linear',
    icon: '◒',
    description: 'Keep issues in sync',
    color: 'linear'
  },
  {
    name: 'Jira',
    icon: '◆',
    description: 'Connect your workflows',
    color: 'jira'
  },
  {
    name: 'Notion',
    icon: 'N',
    description: 'Bring docs and knowledge',
    color: 'notion'
  }
]

const IntegrationsSection = () => {
  return (
    <section className="landing-section integrations-section">

      <div className="section-header">

        <span className="section-label">
          INTEGRATIONS
        </span>

        <h2>
          Works with your favorite tools
        </h2>

        <p>
          Seamlessly integrate with the tools your team already uses.
        </p>

      </div>


      <div className="integrations-grid">

        {integrations.map((integration) => (

          <div
            className="integration-item"
            key={integration.name}
          >

            <div
              className={`integration-icon ${integration.color}`}
            >
              {integration.icon}
            </div>

            <h3>
              {integration.name}
            </h3>

            <p>
              {integration.description}
            </p>

          </div>

        ))}

      </div>

    </section>
  )
}

export default IntegrationsSection