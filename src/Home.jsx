import React, { useEffect, useState } from 'react'
import {Route, Routes, useLocation, useNavigate} from "react-router-dom"
import './home.css'
import HeroSection from './HeroSection';

import AOS from 'aos';
import 'aos/dist/aos.css';
import About from './About';
import Skills from './Skills';
import Works from './Works';


function Home() {
  const navigate=useNavigate();
  const location = useLocation();
  const [active, setActive] = useState("");
  
  useEffect(() => {
    AOS.init({
      duration: 1000,   // animation duration in ms
      once: true,       // whether animation should happen only once - while scrolling down
    });
  }, []);
  
  // useEffect(() => {
  //   setActive(location.pathname);
  // }, [location.pathname]);

  // const clickEvent = (e, path) => {
  //   e.preventDefault();
  //   navigate(path);
  // };

  const clickEvent = (e, id) => {
  e.preventDefault();
  const element = document.getElementById(id);
  setActive(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

  useEffect(() => {
  const sections = ["home", "about", "skills", "works", "contact"];
  const setInitialSection = () => {
    for (let section of sections) {
      const el = document.getElementById(section);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActive(section);
          break;
        }
      }
    }
  };

  setInitialSection(); // run once on mount

  const handleScroll = () => {
    for (let section of sections) {
      const el = document.getElementById(section);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActive(section);
          break;
        }
      }
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);



  return (
    <>
    <section id="home">
    <div className="nav">
        <nav className="navbar">
            <ul className="nav-links" data-aos="fade-down">
      <li>
        <a onClick={(e) => clickEvent(e, "home")} className={active === "home" ? "active" : ""} style={{color:"rgba(59, 126, 73)"}}>
          Home
        </a>
      </li>
      <li>
        <a onClick={(e) => clickEvent(e, "about")} className={active === "about" ? "active" : ""} style={{color:"rgba(59, 126, 73)"}}>
          About
        </a>
      </li>
      <li>
        <a onClick={(e) => clickEvent(e, "skills")} className={active === "skills" ? "active" : ""} style={{color:"rgba(59, 126, 73)"}}>
          Skills
        </a>
      </li>
      <li>
        <a onClick={(e) => clickEvent(e, "works")} className={active === "works" ? "active" : ""} style={{color:"rgba(59, 126, 73)"}}>
          Works
        </a>
      </li>
      <li>
        <a onClick={(e) => clickEvent(e, "contact")} className={active === "contact" ? "active" : ""} style={{color:"rgba(59, 126, 73)"}}>
          Contact
        </a>
      </li>
    </ul>
        </nav>
      </div>
      <HeroSection/>
      </section>
      <section id="about">
        <About/>
      </section>
      <section id="skills">
        <Skills/>
      </section>
      <section id="works">
        <Works/>
      </section>
      <div style={{height:"500px"}}></div>
    </>
  )
}

export default Home
