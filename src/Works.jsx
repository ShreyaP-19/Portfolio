import React from 'react'
import './works.css'; // Make sure this file exists
import logo from './assets/find-my-dr.png';

function Works() {
  return (
    <div id="about" className="about-section" data-aos="fade-down" style={{marginTop:"20px"}}>
      <h2 className="section-title">Works</h2>
      <div className="works-container">

        <div className="work-card">
          <div className="work-image">
            <img src={logo} alt="Project 1" />
          </div>
          <div className="work-content">
            <h3 className="work-title">Find-My-Dr</h3>
            <p className="work-description">
               Developed a full-stack doctor-patient appointment platform using the MERN stack with secure, role-based authentication for patients, doctors, and hospital admins. Implemented real-time scheduling features, including per-slot limits and booking restrictions. Designed dynamic admin dashboards to manage doctors, departments, and appointments. Utilized MongoDB for backend storage and React for building a responsive and user-friendly frontend interface.
            </p>
          </div>
        </div>

        <div className="work-card">
          <div className="work-image">
            <img src={logo} alt="Project 2" />
          </div>
          <div className="work-content">
            <h3 className="work-title">E-Commerce Platform</h3>
            <p className="work-description">
              Another detailed project overview. Make sure to include specific tools or libraries (e.g., React, Node.js, MongoDB) and outcomes (e.g., improved performance, user growth).
            </p>
          </div>
        </div>
        <div className="work-card">
          <div className="work-image">
            <img src={logo} alt="Project 2" />
          </div>
          <div className="work-content">
            <h3 className="work-title">Tic-Tac-Toe</h3>
            <p className="work-description">
              Another detailed project overview. Make sure to include specific tools or libraries (e.g., React, Node.js, MongoDB) and outcomes (e.g., improved performance, user growth).
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Works
