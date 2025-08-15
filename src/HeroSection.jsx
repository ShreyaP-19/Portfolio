import React, { useEffect } from 'react';
import './herosection.css';
import me from './assets/Me1.jpg'

import AOS from 'aos';
import 'aos/dist/aos.css';

function HeroSection() {
  useEffect(() => {
      AOS.init({
        duration: 1000,   // animation duration in ms
        once: true,       // whether animation should happen only once - while scrolling down
      });
    }, []);
  return (
    <section className="hero">
      <div className="hero-text" data-aos="fade-down">
        <h1>Hi,</h1>
        <h1>I’m <span className="highlight">Shreya P</span></h1>
        <h2>Student</h2>
        <a href={process.env.PUBLIC_URL + '/resume.pdf'} download="Shreya_Resume.pdf">
        <button className="hero-button">Download My Resume</button>
        </a>
      </div>
      <div className="hero-image" >
        <img src={me} alt="Profile" className="profile-blob" data-aos="fade-down"/>
      </div>
    </section>
  );
}

export default HeroSection;
