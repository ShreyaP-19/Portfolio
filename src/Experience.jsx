import React from 'react'
import './experience.css'

function Experience() {
  return (
    <div id="experience" className="about-section" style={{ marginTop: "80px" }} data-aos="fade-down">
      <h2 className="section-title" style={{ marginBottom: "60px" }}>Experience</h2>
      <div className="experience-container">
        <div className="experience-card">
          <div className="experience-content">
            <p className="experience-role">
              Software Developer Intern
              <span>📅 February 5, 2026 - April 3, 2026</span>
            </p>
            <h3 id="experience-topic">Infosys Springboard (Virtual Internship)</h3>
            <p>
              Designed and developed a full-stack YouTube Analytics Dashboard using Python, Streamlit, SQLite, Plotly, and the YouTube Data API v3. Implemented modules for data extraction, storage, visualization, channel comparison, and automated PDF report generation. Built interactive dashboards to analyze channel performance, engagement metrics, and growth trends, enabling data-driven decision-making for content creators.
              <br /><br />
              <strong>Credential:</strong> <a href="https://drive.google.com/file/d/1Tg5EgcYr5c4llT6Dxp8piXHyC-eYCuwf/view?usp=drive_link" target="_blank" rel="noopener noreferrer" style={{ color: "green", textDecoration: "underline" }}>See the credential</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
