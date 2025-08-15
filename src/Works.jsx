import React from 'react'
import './works.css'; // Make sure this file exists
import logo from './assets/find-my-dr.png';
import logo1 from './assets/ibm.jpg'
import logo2 from './assets/e-commerce.png'
import logo3 from './assets/tic-tac-toe.png'

function Works() {
  return (
    <div id="about" className="about-section"  style={{marginTop:"20px"}} data-aos="fade-down">
      <h2 className="section-title" data-aos="fade-down">Works</h2>
      <div className="works-container" > 

        <div className="work-card" data-aos="fade-down">
          <div className="work-image">
            <img src={logo} alt="Project 1" />
          </div>
          <div className="work-content">
            <h3 className="work-title">Find-My-Dr</h3>
            <p className="work-description">
               Developed a full-stack doctor-patient appointment platform using the MERN stack with secure, role-based authentication for patients, doctors, and hospital admins. Implemented real-time scheduling features, including per-slot limits and booking restrictions. Designed dynamic admin dashboards to manage doctors, departments, and appointments. Utilized MongoDB for backend storage and React for building a responsive and user-friendly frontend interface.
               <br></br>
               GitHub: <a href='https://github.com/ShreyaP-19/Find-My-Dr '>Find-My-Dr </a>
            </p>
          </div>
        </div>
        <div className="work-card" data-aos="fade-down">
          <div className="work-image">
            <img src={logo1} alt="Project 2" />
          </div>
          <div className="work-content">
            <h3 className="work-title">Mental State Analyzer</h3>
            <p className="work-description">
              Developed an AI-powered mental health detection platform using NLP to analyze social media-style posts. Integrated IBM Watson NLU for real-time mood classification into categories such as Positive and Negative. Enabled personalized content recommendations to support user well-being and early intervention. Designed a streamlined, user-friendly interface for quick text input and instant emotional feedback.
              <br></br>
              GitHub: <a href='https://github.com/ShreyaP-19/redit-post-sentiment-analysis'>Mental State Analyzer</a>
            </p>
          </div>
        </div>

        <div className="work-card" data-aos="fade-down">
          <div className="work-image">
            <img src={logo2} alt="Project 2" />
          </div>
          <div className="work-content">
            <h3 className="work-title">E-Commerce Platform</h3>
            <p className="work-description">
              A full-stack e-commerce application built with the MERN stack, allowing users to browse and purchase products. Includes secure user authentication, cart management, and order processing. Users can also register as sellers to add products and manage their own store or business through a dedicated dashboard.
              <br></br>
              GitHub: <a href='https://github.com/ShreyaP-19/E-Commerce-Platform'>E-Commerce-Platform</a>
            </p>
          </div>
        </div>
        <div className="work-card" data-aos="fade-down">
          <div className="work-image">
            <img src={logo3} alt="Project 2" />
          </div>
          <div className="work-content">
            <h3 className="work-title">Tic-Tac-Toe</h3>
            <p className="work-description">
              A simple browser-based Tic Tac Toe game built using vanilla JavaScript, HTML, and CSS. It allows two users to take alternate turns on the same device. The game detects winning combinations, disables boxes after a win, and includes reset and new game options with a clean UI.
              <br></br>
              GitHub: <a href='https://github.com/ShreyaP-19/TicTacToe/blob/main/tic.js'>TicTacToe</a>
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Works
