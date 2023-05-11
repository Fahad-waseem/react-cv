import React from 'react'
import Frontend from './Frontend'
import Backend from './Backend'
import  './skill.css'
import Graphics from './Graphics'

export default function Skill() {
  return (
    <div><section className="skills section" id="skills">
    <h2 className="section__title" data-aos="fade-up">
      Skills
    </h2>
    <span
      className="section__subtitle"
      data-aos="fade-up"
      data-aos-delay="250"
    >
      My technical level
    </span>

    <div className="skills__container container grid">
      <Frontend />
      <Backend />
      <Graphics/>
    </div>
  </section></div>
  )
}
