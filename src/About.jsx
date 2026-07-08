// src/components/About.jsx
import React, { useEffect } from 'react';
import './About.css';
import profileImg from './assets/Me1.jpg'; // Replace with your image

import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,   // animation duration in ms
      once: true,       // whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <div id="about" className="about-section" data-aos="fade-down">
      <h2 className="section-title">About</h2>
      <div className="about-content">
        <img src={profileImg} alt="Profile" className="profile-img" />
        <div className="about-text">
          <h3>I’m Shreya</h3>
          <p>
            I am B.Tech Computer Science graduate with a CGPA of 9.27 and a qualification in GATE 2025. I am passionate about Artificial Intelligence, Machine Learning, Full-Stack Development, and Software Engineering. My project experience includes developing AI-powered solutions such as a BACE-1 Inhibitor Prediction System using GNNs and Transformers, and a Mental State Analyzer leveraging NLP techniques. I have also built MERN-stack applications with real-time functionality and role-based authentication.</p>

          <p>Beyond academics, I have actively contributed to technical events, student organizations, and community service through NSS and leadership roles. I enjoy solving real-world problems through technology and continuously expanding my skills in emerging technologies. I am currently seeking opportunities to learn, collaborate, and contribute as a Software Engineer or AI/ML professional.
          </p>
        </div>
      </div>
    </div>

  );
};

export default About;
