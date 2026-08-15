import { services } from '../data/data'

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-head">
          <h2>What I build</h2>
          <p>End-to-end software for teams that need reliable products — not throwaway prototypes.</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <article className="service-card" key={service.title}>
              <span className="service-index">0{index + 1}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
