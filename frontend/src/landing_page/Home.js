


import React from "react";

function Home() {
  return (
    <section  id="home" className="hero">

      {/* Glow */}
      <div className="hero-glow"></div>

      {/* Content */}
      <div className="hero-content">
        <div className="Details">
          <h6 className="hello">Hello! I'm</h6>

          <h1 className="name">Sakshta Chandurepatil</h1>

          <p>Software Developer & AI/ML Enthusiast</p>
        </div>

        <div className="hero-line"></div>

        <div className="buttons">
          <span className="button1">
            <button onClick={() => window.open("/Sakshta_Chandurepatil.pdf", "_blank")}>
  <i className="fa-regular fa-file-lines"></i> View Resume
</button>
          </span>

          <span className="button2">
            <button onClick={() => {
              const contactSection = document.getElementById("contact");
              contactSection.scrollIntoView({ behavior: "smooth" });
            }}>
              <i className="fa-regular fa-envelope" ></i> Get in Touch
            </button>
          </span>
        </div>
      </div>

    </section>
  );
}

export default Home;