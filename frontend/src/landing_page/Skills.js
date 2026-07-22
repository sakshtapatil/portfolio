import React from "react";

function Skills() {
  return (
    <>
      <section id="skills">
        <h1
          style={{
            textAlign: "center",
            marginTop: "40px",
            marginBottom: "10px",
          }}
        >
          Skills
        </h1>

        <div className="hero-line"></div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "30px",
            marginTop: "40px",
            padding: "0 40px",
            justifyItems: "center",
          }}
        >
          {/* Languages */}
          <div className="card" style={{ width: "20rem" }}>
            <div className="card-body">
              <h5 className="card-title">Languages</h5>

              <div className="Skill-buttons">
                <button
                  className="Skill-button1 p-2"
                  style={{
                    marginRight: "10px",
                    marginTop: "10px",
                    borderRadius: "15px",
                    color: "#8FEBDD",
                    background: "transparent",
                  }}
                >
                  Python
                </button>

                <button
                  className="Skill-button2 p-2"
                  style={{
                    marginRight: "10px",
                    marginTop: "10px",
                    borderRadius: "15px",
                    color: "#8FEBDD",
                    background: "transparent",
                  }}
                >
                  JavaScript
                </button>

                <button
                  className="Skill-button3 p-2"
                  style={{
                    marginRight: "10px",
                    marginTop: "10px",
                    borderRadius: "15px",
                    color: "#8FEBDD",
                    background: "transparent",
                  }}
                >
                  Java
                </button>

                <button
                  className="Skill-button4 p-2"
                  style={{
                    marginRight: "10px",
                    marginTop: "10px",
                    borderRadius: "15px",
                    color: "#8FEBDD",
                    background: "transparent",
                  }}
                >
                  C++
                </button>
              </div>
            </div>
          </div>

          {/* Frontend */}
          <div className="card" style={{ width: "20rem" }}>
            <div className="card-body">
              <h5 className="card-title">Frontend</h5>

              <div className="Skill-buttons">
                <button
                  className="Skill-button1 p-2"
                  style={{
                    marginRight: "10px",
                    marginTop: "10px",
                    borderRadius: "15px",
                    color: "#8FEBDD",
                    background: "transparent",
                  }}
                >
                  React
                </button>

                <button
                  className="Skill-button2 p-2"
                  style={{
                    marginRight: "10px",
                    marginTop: "10px",
                    borderRadius: "15px",
                    color: "#8FEBDD",
                    background: "transparent",
                  }}
                >
                  HTML5
                </button>

                <button
                  className="Skill-button3 p-2"
                  style={{
                    marginRight: "10px",
                    marginTop: "10px",
                    borderRadius: "15px",
                    color: "#8FEBDD",
                    background: "transparent",
                  }}
                >
                  CSS3
                </button>

                <button
                  className="Skill-button4 p-2"
                  style={{
                    marginRight: "10px",
                    marginTop: "10px",
                    borderRadius: "15px",
                    color: "#8FEBDD",
                    background: "transparent",
                  }}
                >
                  Bootstrap
                </button>
              </div>
            </div>
          </div>

          {/* Backend */}
          <div className="card" style={{ width: "20rem" }}>
            <div className="card-body">
              <h5 className="card-title">Backend</h5>

              <div className="Skill-buttons">
                <button className="Skill-button1 p-2" style={{ marginRight: "10px", marginTop: "10px", borderRadius: "15px", color: "#8FEBDD", background: "transparent" }}>Node.js</button>
                <button className="Skill-button2 p-2" style={{ marginRight: "10px", marginTop: "10px", borderRadius: "15px", color: "#8FEBDD", background: "transparent" }}>Express.js</button>
                <button className="Skill-button3 p-2" style={{ marginRight: "10px", marginTop: "10px", borderRadius: "15px", color: "#8FEBDD", background: "transparent" }}>REST API</button>
                <button className="Skill-button4 p-2" style={{ marginRight: "10px", marginTop: "10px", borderRadius: "15px", color: "#8FEBDD", background: "transparent" }}>Socket.io</button>
                <button className="Skill-button5 p-2" style={{ marginRight: "10px", marginTop: "10px", borderRadius: "15px", color: "#8FEBDD", background: "transparent" }}>MVC Architecture</button>
              </div>
            </div>
          </div>

          {/* Databases */}
          <div className="card" style={{ width: "20rem" }}>
            <div className="card-body">
              <h5 className="card-title">Databases</h5>

              <div className="Skill-buttons">
                <button className="Skill-button1 p-2" style={{ marginRight: "10px", marginTop: "10px", borderRadius: "15px", color: "#8FEBDD", background: "transparent" }}>MongoDB</button>
                <button className="Skill-button3 p-2" style={{ marginRight: "10px", marginTop: "10px", borderRadius: "15px", color: "#8FEBDD", background: "transparent" }}>SQL</button>
              </div>
            </div>
          </div>

          {/* Cloud & Deployment */}
          <div className="card" style={{ width: "20rem" }}>
            <div className="card-body">
              <h5 className="card-title">Cloud & Deployment</h5>

              <div className="Skill-buttons">
                <button className="Skill-button1 p-2" style={{ marginRight: "10px", marginTop: "10px", borderRadius: "15px", color: "#8FEBDD", background: "transparent" }}>Netlify</button>
                <button className="Skill-button3 p-2" style={{ marginRight: "10px", marginTop: "10px", borderRadius: "15px", color: "#8FEBDD", background: "transparent" }}>Render</button>
              </div>
            </div>
          </div>

          {/* AI/ML */}
          <div className="card" style={{ width: "20rem" }}>
            <div className="card-body">
              <h5 className="card-title">AI/ML</h5>

              <div className="Skill-buttons">
                <button className="Skill-button1 p-2" style={{ marginRight: "10px", marginTop: "10px", borderRadius: "15px", color: "#8FEBDD", background: "transparent" }}>LLM Integration</button>
                <button className="Skill-button2 p-2" style={{ marginRight: "10px", marginTop: "10px", borderRadius: "15px", color: "#8FEBDD", background: "transparent" }}>RAG</button>
                <button className="Skill-button3 p-2" style={{ marginRight: "10px", marginTop: "10px", borderRadius: "15px", color: "#8FEBDD", background: "transparent" }}>TF-IDF</button>
                <button className="Skill-button4 p-2" style={{ marginRight: "10px", marginTop: "10px", borderRadius: "15px", color: "#8FEBDD", background: "transparent" }}>Groq API</button>
                <button className="Skill-button5 p-2" style={{ marginRight: "10px", marginTop: "10px", borderRadius: "15px", color: "#8FEBDD", background: "transparent" }}>LLaMA 3.3</button>
              </div>
            </div>
          </div>

          {/* Tools */}
          <div className="card" style={{ width: "20rem" }}>
            <div className="card-body">
              <h5 className="card-title">Tools & Testing</h5>

              <div className="Skill-buttons">
                <button className="Skill-button1 p-2" style={{ marginRight: "10px", marginTop: "10px", borderRadius: "15px", color: "#8FEBDD", background: "transparent" }}>Git</button>
                <button className="Skill-button2 p-2" style={{ marginRight: "10px", marginTop: "10px", borderRadius: "15px", color: "#8FEBDD", background: "transparent" }}>GitHub</button>
                <button className="Skill-button3 p-2" style={{ marginRight: "10px", marginTop: "10px", borderRadius: "15px", color: "#8FEBDD", background: "transparent" }}>VS Code</button>
                <button className="Skill-button4 p-2" style={{ marginRight: "10px", marginTop: "10px", borderRadius: "15px", color: "#8FEBDD", background: "transparent" }}>Thunder Client</button>
                <button className="Skill-button5 p-2" style={{ marginRight: "10px", marginTop: "10px", borderRadius: "15px", color: "#8FEBDD", background: "transparent" }}>JWT</button>
                <button className="Skill-button6 p-2" style={{ marginRight: "10px", marginTop: "10px", borderRadius: "15px", color: "#8FEBDD", background: "transparent" }}>Google Maps API</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;