const AISection = () => {
  return (
    <section className="ai-section">

      <div className="ai-section-inner">

        {/* LEFT */}
        <div className="ai-content">

          <span className="section-label">
            AI ASSISTANT
          </span>

          <h2>
            Your AI teammate
            <br />
            for better productivity
          </h2>

          <p>
            Automatically break down tasks, suggest next steps,
            identify blockers and keep your projects on track.
          </p>

          <button className="primary-btn small-btn">
            Try AI Assistant
            <span>→</span>
          </button>

        </div>


        {/* RIGHT */}
        <div className="ai-demo-wrapper">

          <div className="ai-glow"></div>

          <div className="ai-demo">

            {/* AI Header */}
            <div className="ai-demo-header">

              <div className="ai-demo-logo">
                ✦
              </div>

              <span>
                DevFlow AI
              </span>

            </div>


            {/* User message */}
            <div className="ai-message user-message">
              Break down the task "Build authentication
              system" into smaller tasks.
            </div>


            {/* AI response */}
            <div className="ai-response">

              <strong>
                Here's a breakdown:
              </strong>

              <div className="ai-task">
                <span>✓</span>
                Set up authentication library
              </div>

              <div className="ai-task">
                <span>✓</span>
                Implement login endpoint
              </div>

              <div className="ai-task">
                <span>✓</span>
                Add user session management
              </div>

              <div className="ai-task">
                <span>✓</span>
                Create protected routes
              </div>

              <div className="ai-task">
                <span>✓</span>
                Write tests
              </div>

            </div>


            {/* Input */}
            <div className="ai-input">

              <span>
                Ask anything...
              </span>

              <span className="send-icon">
                ↗
              </span>

            </div>

          </div>


          <div className="ai-floating-star star-one">
            ✦
          </div>

          <div className="ai-floating-star star-two">
            ✦
          </div>

        </div>

      </div>

    </section>
  )
}

export default AISection