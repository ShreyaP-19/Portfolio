import React from 'react'
import './education.css'

function Education() {
  return (
    <div id="about" className="about-section"  style={{marginTop:"20px"}} data-aos="fade-down">
      <h2 className="section-title" style={{marginBottom:"60px"}}>Education</h2>
      <div className="timeline">
  <div className="timeline-item right">
    <div className="content">
      <p className="role">Bachelor of Technology <span>📅 2022 - 2026</span></p>
      <h3 id="topic">Government College of Engineering, Kannur</h3>
      <p>Pursuing B.Tech at Government College of Engineering, Kannur (2022–2026), currently in the seventh semester under KTU with a CGPA of 9.2 (up to S6). Actively involved in various co-curricular activities including volunteering with NSS, mentoring at Actuator by ROBOCEK, and participating in events like the Nueva ISTE Convention and the Cyber Security Workshop at Dhruva '22.</p>
    </div>
  </div>

  <div className="timeline-item left">
    <div className="content">
      <p className="role">Higher Secondary education <span>📅 2020-2022 </span></p>
      <h3 id="topic"> Chattanchal Higher Secondary School </h3>
      <p>Completed Senior Higher Secondary education at Chattanchal HSS (2020–2022) with 97.9% in board exams. Volunteered with the NSS, actively participated in science fairs, and served as a Student Police Cadet..</p>
    </div>
  </div>
</div>

    </div>
  )
}

export default Education
