import './App.css';
import Header from './Components/Header/Header.jsx';
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import Projects from './Components/Projects/Projects.jsx';
import Skills from './Components/Skills/Skills.jsx';
import Contact from './Components/Contact/Contact.jsx';
import { useRef } from 'react';

import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

function App() {
  
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const skillRef = useRef(null);
  const contactRef = useRef(null);


  return(
    <main className="mainBody">
      <Header homeRef={homeRef} aboutRef={aboutRef} projectRef={projectRef} skillRef={skillRef} contactRef={contactRef}/>
      <div className='content'>
        <div ref={homeRef}>
          <Home />
        </div>

        <div ref={aboutRef}>
          <About />
        </div>

        <div ref={projectRef}>
          <Projects />
        </div>

        <div ref={skillRef}>
          <Skills />
        </div>

        <div ref={contactRef}>
          <Contact />
        </div>
      </div>

      <footer>
        <div className='footerContent'>
          <div className='connect'>
            <span>Connect With Me</span>
            <div>
              <a href="https://github.com/supasreymark-dev" target='_blank'> <FaGithub/></a>
              <a href="https://www.linkedin.com/in/reymark-supas-550a1232b/" target='_blank'> <FaLinkedin/></a>
              <a href="https://www.facebook.com/reymark.nawagas" target='_blank'> <FaFacebook/></a>
              <a href="mailto:supasreymark@gmail.com" target='_blank'> <TfiEmail/></a>
            </div>
          </div>

          <div className='quickLinks'>
            <p>Quick navigation</p>
            <div className="links">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#skills">Skills</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          <div className='copyRight'>
            <span>&copy; 2026 Reymark Nawagas Supas</span>
          </div>
        </div>

        <div className='quote'>
          <p>"An expert is just a beginner who keeps learning."</p>
          <span>- Someone on Internet</span>
        </div>
      </footer>
    </main>
  );

}

export default App
