import React from 'react';

function About() {
    return ( 
        <section id="about">
        <div className="container">
            <div className="row">
            <div className="col-4">
                <img src="/me.jpeg" alt="About Me" className="img-fluid "  style={{
    width: "300px",
    height: "300px",
    borderRadius: "50%",
    objectFit: "cover",
    marginTop: "40px",
   
  }}/>
            </div>
            <div className="col-8">
                <h1 style={{textAlign:'center'}}>About Me</h1>
                <div className='hero-line'></div>
                <p className="center">I'm an AI & ML undergraduate with a passion for building intelligent and scalable software solutions. I enjoy developing full-stack web applications and AI-powered systems that solve real-world problems, from cloud-deployed MERN applications to LLM-based assistants. I'm always eager to learn new technologies, improve my problem-solving skills, and create impactful products.</p>
            </div>
            </div>
            
        </div>
        </section>
     );
}

export default About;