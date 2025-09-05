import React, { useState } from 'react'
import { projects } from '../data/data'
import ProjectModal from './ProjectModal'

export default function Projects() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(null)
  const openModal = (p) => { setActive(p); setOpen(true) }
  const closeModal = () => { setOpen(false); setActive(null) }
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2>Projects</h2>
        <div className="card-grid">
          {projects.map((project) => (
            <article key={project.slug} className="card" role="button" onClick={() => openModal(project)}>
              <img src={project.imageUrl} alt={project.title} loading="lazy" />
              <div className="card-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="card-tags">
                  {project.tech.map((t) => (
                    <span className="chip" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
        <ProjectModal open={open} onClose={closeModal} project={active} />
      </div>
    </section>
  )
}


