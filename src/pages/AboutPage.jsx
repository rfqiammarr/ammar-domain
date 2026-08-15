import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { founder, skillGroups } from '../data/data'

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className="section about-page">
      <div className="container">
        <div className="about-page-hero">
          <div className="about-page-copy">
            <p className="hero-eyebrow">About</p>
            <h1>Hi, I'm Ammar</h1>
            <p className="about-lead">
              {founder.bio}
            </p>
            <div className="cta">
              <Link to={{ pathname: '/', hash: 'contact' }} className="btn primary">Get in touch</Link>
              <Link to="/" className="btn">Back to home</Link>
            </div>
          </div>
          <div className="about-page-photo">
            <div className="about-photo-frame">
              <div className="about-photo-glow" aria-hidden="true" />
              <img src={founder.photo} alt={founder.name} loading="eager" />
            </div>
            <div className="about-photo-caption">
              <strong>{founder.name}</strong>
              <span>{founder.role}</span>
            </div>
          </div>
        </div>

        <div className="about-focus">
          <div className="section-head">
            <h2>How I work</h2>
            <p>A simple approach focused on clarity, quality, and shipping.</p>
          </div>
          <div className="focus-grid">
            {founder.highlights.map((item) => (
              <article className="focus-card" key={item.step}>
                <span className="focus-step">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="about-skills">
          <div className="section-head">
            <h2>Capabilities</h2>
            <p>The stack I use to ship reliable products under Radantix.</p>
          </div>
          <div className="skill-panel-grid">
            {skillGroups.map((group) => (
              <div className="skill-panel" key={group.title}>
                <h3>{group.title}</h3>
                <div className="chip-group">
                  {group.items.map((skill) => (
                    <span className="chip" key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
