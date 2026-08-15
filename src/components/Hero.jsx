import { company } from '../data/data'

export default function Hero() {
  return (
    <section id="home" className="hero hero-marketing">
      <div className="hero-atmosphere" aria-hidden="true" />
      <div className="container hero-marketing-copy">
        <p className="hero-eyebrow">{company.name}</p>
        <h1>{company.tagline}</h1>
        <p className="description">{company.description}</p>
        <div className="cta">
          <a href="#contact" className="btn primary">Get in touch</a>
          <a href="#work" className="btn">See my work</a>
        </div>
      </div>
    </section>
  )
}
