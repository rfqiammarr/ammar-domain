import { useState } from 'react'
import { projects } from '../data/data'
import ProjectModal from './ProjectModal'

export default function Projects() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(null)
  const openModal = (p) => { setActive(p); setOpen(true) }
  const closeModal = () => { setOpen(false); setActive(null) }

  return (
    <section id="work" className="section work-section">
      <div className="container">
        <div className="section-head">
          <h2>Selected work</h2>
          <p>Applications and systems delivered across frontend, backend, and data.</p>
        </div>
        <div className="work-grid">
          {projects.map((project, index) => (
            <article
              key={project.slug}
              className={`work-card${index === 0 ? ' work-card-featured' : ''}`}
              role="button"
              tabIndex={0}
              onClick={() => openModal(project)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  openModal(project)
                }
              }}
            >
              <div className="work-media">
                <img src={project.imageUrl} alt={project.title} loading="lazy" />
                <span className="work-view">View project</span>
              </div>
              <div className="work-body">
                <span className="work-index">0{index + 1}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="work-tags">
                  {project.tech.slice(0, 4).map((t) => (
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
