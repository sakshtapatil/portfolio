import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';
import About from './About';
import Contact from './Contact';
import ParticleBackground from "../components/ParticleBackground";
 function Homepage() {
    return ( 
        <>
            <ParticleBackground />
            <Navbar />
            <Home />
            <Experience />
            <Projects />
            <Skills />
            <About />
            <Contact />
        </>
     );
 }
 
 

export default Homepage;
