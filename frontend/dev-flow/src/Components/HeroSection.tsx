const HeroSection = () => {
  return (
    <main className="hero">

      {/* Hero Content */}
      <section className="hero-content">

        <h1>
          Build Better
          <br />
          Software Together
        </h1>

        <p>
          Plan, track and ship your projects with AI-powered
          <br className="desktop-break" />
          insights. Designed for modern teams.
        </p>

        <div className="hero-buttons">

          <button className="primary-btn">
            Get Started
          </button>

          <button className="secondary-btn">
            <span className="play-icon">▶</span>
            Watch Demo
          </button>

        </div>

      </section>


      {/* Dashboard Preview */}
      <section className="dashboard-wrapper">

        <div className="dashboard">

          {/* Sidebar */}
          <aside className="dashboard-sidebar">

            <div className="dashboard-brand">
              <div className="dashboard-logo">
                D
              </div>

              <span>DevFlow</span>

              <span className="arrow">
                ›
              </span>
            </div>


            <div className="sidebar-menu">

              <div className="sidebar-item active">
                <span>⌂</span>
                Home
              </div>

              <div className="sidebar-item">
                <span>□</span>
                Projects
              </div>

              <div className="sidebar-item">
                <span>☑</span>
                My Tasks
              </div>

              <div className="sidebar-item">
                <span>▣</span>
                Calendar
              </div>

              <div className="sidebar-item">
                <span>♧</span>
                Analytics
              </div>

            </div>

          </aside>


          {/* Dashboard Main */}
          <div className="dashboard-main">

            <div className="dashboard-heading">

              <span>Good morning,</span>

              <h2>
                Website Redesign
              </h2>

            </div>


            <div className="kanban">

              {/* TO DO */}
              <div className="kanban-column">

                <div className="column-title">
                  <span>To Do</span>
                  <span>4</span>
                </div>

                <div className="task-card">

                  <h3>
                    Design new homepage
                  </h3>

                  <div className="task-meta">
                    <span className="avatar blue">
                      ●
                    </span>

                    <span className="tag blue-tag">
                      Design
                    </span>
                  </div>

                </div>


                <div className="task-card">

                  <h3>
                    Implement header
                  </h3>

                  <div className="task-meta">
                    <span className="avatar purple">
                      ●
                    </span>

                    <span className="tag purple-tag">
                      Development
                    </span>
                  </div>

                </div>

              </div>


              {/* IN PROGRESS */}
              <div className="kanban-column">

                <div className="column-title">
                  <span>In Progress</span>
                  <span>2</span>
                </div>

                <div className="task-card">

                  <h3>
                    Implement footer
                  </h3>

                  <div className="task-meta">
                    <span className="avatar pink">
                      ●
                    </span>

                    <span className="tag pink-tag">
                      Dev
                    </span>
                  </div>

                  <div className="progress">
                    <div></div>
                  </div>

                </div>


                <div className="task-card">

                  <h3>
                    Update frontend
                  </h3>

                  <div className="task-meta">
                    <span className="avatar purple">
                      ●
                    </span>

                    <span className="tag purple-tag">
                      Development
                    </span>
                  </div>

                </div>

              </div>


              {/* DONE */}
              <div className="kanban-column">

                <div className="column-title">
                  <span>Done</span>
                  <span>1</span>
                </div>

                <div className="task-card">

                  <h3>
                    Update API
                  </h3>

                  <div className="task-meta">
                    <span className="avatar green">
                      ✓
                    </span>

                    <span className="tag green-tag">
                      Backend
                    </span>
                  </div>

                </div>

              </div>

            </div>

          </div>


          {/* AI Assistant */}
          <div className="ai-assistant">

            <div className="ai-icon">
              ✦
            </div>

            <div>
              <strong>AI Assistant</strong>

              <span>
                Break down tasks with AI
              </span>
            </div>

          </div>

        </div>

      </section>

    </main>
  )
}

export default HeroSection