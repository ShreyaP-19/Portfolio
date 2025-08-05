import React from 'react'
import './skills.css'
import c from './assets/c.png'
import java from './assets/java.png'
import python from './assets/python.png'
import js from './assets/js.png'
import html from './assets/html.png'
import css from './assets/css.png'
import express from './assets/express.png'
import mongo from './assets/mongo.webp'
import mysql from './assets/mysql.png'
import node from './assets/node.png'
import react from './assets/react.png'

function Skills() {
  return (
    <div id="about" className="about-section" data-aos="fade-down" style={{marginTop:"80px",marginBottom:"0"}}>
    <h2 className="section-title">Skills</h2>
    <section className="skills" id="skills">
    <div className="skills-content">
    <div className="skills-icons">
      <div className="skill-card">
        <img src={c} alt="C"/>
        {/* <h3>98%</h3> */}
        <p>C Programming</p>
      </div>
      <div className="skill-card">
        <img src={java} alt="Java"/>
        {/* <h3>95%</h3> */}
        <p>Java</p>
      </div>
      <div className="skill-card">
        <img src={python} alt="Python"/>
        {/* <h3>87%</h3> */}
        <p>Python</p>
      </div>
      <div className="skill-card">
        <img src={js} alt="JS"/>
        {/* <h3>75%</h3> */}
        <p>JavaScript</p>
      </div>
      <div className="skill-card">
        <img src={html} alt="html"/>
        {/* <h3>67%</h3> */}
        <p>HTML</p>
      </div>
      <div className="skill-card">
        <img src={css} alt="Css"/>
        {/* <h3>98%</h3> */}
        <p>CSS</p>
      </div>
      <div className="skill-card">
        <img src={react} alt="React"/>
        {/* <h3>98%</h3> */}
        <p>React</p>
      </div>
      <div className="skill-card">
        <img src={node} alt="Node"/>
        {/* <h3>98%</h3> */}
        <p>Node JS</p>
      </div>
      <div className="skill-card">
        <img src={express} alt="express"/>
        {/* <h3>98%</h3> */}
        <p>Express JS</p>
      </div>
      <div className="skill-card">
        <img src={mongo} alt="Mongo"/>
        {/* <h3>98%</h3> */}
        <p>MongoDB</p>
      </div>
      <div className="skill-card">
        <img src={mysql} alt="Mysql"/>
        {/* <h3>98%</h3> */}
        <p>MySQL</p>
      </div>
    </div>
    </div>
    </section>
    </div>
  )
}

export default Skills
