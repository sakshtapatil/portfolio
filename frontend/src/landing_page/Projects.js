import React from "react";

function Projects() {
  return (
    <section id="projects" className="container py-5">

      <h1 className="text-center">Featured Projects</h1>
      <div className="hero-line"></div>

      <h6 className="text-center mb-5">
        Here are some of my recent projects that showcase my skills and passion
        for Web Development and AI/ML.
      </h6>

      <div className="row g-4">

        {/* Project 1 */}

        <div className="col-lg-4 col-md-6">
          <div className="project-card">

            <h3 className="project-title">
              Multi-Domain Support Triage Agent
            </h3>

            <p className="project-description">
              Built an AI-powered support ticket routing system that automates
              ticket classification and generates accurate, context-aware
              responses across multiple domains. Designed to reduce manual
              effort, improve response quality, and protect against prompt
              injection attacks.
            </p>

            <div className="tech-stack">
              <span>Python</span>
              <span>Groq API</span>
              <span>LLaMA 3.3</span>
              <span>TF-IDF</span>
              <span>RAG</span>
              <span>python-dotenv</span>
            </div>

            <hr />

            <div className="project-links">
              <a href="https://github.com/sakshtapatil/support-triage-agent" target="_blank" rel="noopener noreferrer">
                GitHub Link →
              </a>

              <a href="https://github.com/sakshtapatil/support-triage-agent" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-github fa-xl"></i>
              </a>
            </div>

          </div>
        </div>

        {/* Project 2 */}

        <div className="col-lg-4 col-md-6">
          <div className="project-card">

            <h3 className="project-title">
              MERN Trading Platform
            </h3>

            <p className="project-description">
              Developed a full-stack stock trading platform that enables users
              to securely manage portfolios, track holdings, and execute trades
              through an intuitive dashboard with real-time portfolio
              management.
            </p>

            <div className="tech-stack">
              <span>React</span>
              <span>Node.js</span>
              <span>Express</span>
              <span>MongoDB</span>
              <span>JWT</span>
              <span>bcrypt</span>
              <span>REST API</span>
              <span>Thunder Client</span>
            </div>

            <hr />

            <div className="project-links">
              <a href="https://mern-tradingplatform.netlify.app/" target="_blank" rel="noopener noreferrer">
                View Live →
              </a>

              <a href="https://github.com/sakshtapatil/mern-trading-platform" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-github fa-xl"></i>
              </a>
            </div>

          </div>
        </div>

        {/* Project 3 */}

        <div className="col-lg-4 col-md-6">
          <div className="project-card">

            <h3 className="project-title">
              Emergency Healthcare Management System
            </h3>

            <p className="project-description">
              Developed a real-time emergency response platform connecting users
              with nearby hospitals and ambulances for faster emergency
              assistance and live location tracking.
            </p>

            <div className="tech-stack">
              <span>React</span>
              <span>Node.js</span>
              <span>MongoDB</span>
              <span>Socket.io</span>
              <span>Google Maps API</span>
              <span>Express.js</span>
            </div>

            <hr />


          </div>
        </div>

      </div>

    </section>
  );
}

export default Projects;