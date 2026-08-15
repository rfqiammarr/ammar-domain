import { approach } from '../data/data'

export default function Approach() {
  return (
    <section id="approach" className="section alt">
      <div className="container">
        <div className="section-head">
          <h2>How I work</h2>
          <p>A simple process that keeps quality high and delivery clear.</p>
        </div>
        <div className="approach-list">
          {approach.map((item) => (
            <article className="approach-item" key={item.step}>
              <span className="approach-step">{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
