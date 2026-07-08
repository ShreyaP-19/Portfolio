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
      <p>Graduated with a CGPA of 9.27. Volunteered in social service activities as part of the National Service Scheme. Actively participated in the Nueva 21st Annual ISTE Students’ Convention hosted by GEC Thrissur. Provided mentorship at Actuator, organized by GCEK ROBOCEK (Robotics Club), and attended the Cyber Security Workshop organized as part of the state-level tech fest, Dhruva '22.</p>
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
