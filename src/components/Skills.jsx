import React from 'react'
import { skills } from '../data/data'

export default function Skills() {
  return (
    <section id="skills" className="section alt">
      <div className="container">
        <h2>Skills</h2>
        <div className="chip-group">
          {skills.map((skill) => (
            <span className="chip" key={skill}>{skill}</span>
          ))}
        </div>
      </div>
    </section>
  )
}


