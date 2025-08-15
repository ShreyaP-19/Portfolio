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
         Enthusiastic and driven fourth-year Computer Science student with a CGPA of 9.2, passionate about full stack web development, software engineering. Eager to contribute to real-world projects and continue learning cutting-edge technologies.
      </p>
    </div>
  </div>
</div>

  );
};

export default About;
