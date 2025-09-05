import React, { useEffect, useMemo, useState } from 'react'

export default function ProjectModal({ open, onClose, project }) {
  const images = useMemo(() => project?.images?.length ? project.images : [project?.imageUrl].filter(Boolean), [project])
  const [index, setIndex] = useState(0)
  useEffect(() => { setIndex(0) }, [project])
  useEffect(() => {
    function onEsc(e) { if (e.key === 'Escape') onClose?.() }
    if (open) document.addEventListener('keydown', onEsc)
    return () => document.removeEventListener('keydown', onEsc)
  }, [open, onClose])

  if (!open || !project) return null

  const canPrev = index > 0
  const canNext = index < images.length - 1
  const goPrev = () => canPrev && setIndex((i) => i - 1)
  const goNext = () => canNext && setIndex((i) => i + 1)

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">×</button>
        <div className="modal-body">
          <div className="modal-media">
            <div className="carousel">
              <button className="carousel-btn left" onClick={goPrev} disabled={!canPrev} aria-label="Previous">‹</button>
              <img src={images[index]} alt={project.title} />
              <button className="carousel-btn right" onClick={goNext} disabled={!canNext} aria-label="Next">›</button>
            </div>
            {images.length > 1 && (
              <div className="carousel-dots">
                {images.map((_, i) => (
                  <button key={i} className={i === index ? 'dot active' : 'dot'} onClick={() => setIndex(i)} aria-label={`Go to image ${i + 1}`} />
                ))}
              </div>
            )}
          </div>
          <div className="modal-info">
            <h3>{project.title}</h3>
            <p className="modal-desc">{project.description}</p>
            <div className="card-tags">
              {project.tech.map((t) => (<span className="chip" key={t}>{t}</span>))}
            </div>
            <div className="modal-actions">
              {project.demoUrl && (
                <a className="btn primary" href={project.demoUrl} target="_blank" rel="noreferrer">Live Preview</a>
              )}
              {project.repoUrl && (
                <a className="btn" href={project.repoUrl} target="_blank" rel="noreferrer">GitHub Repo</a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


