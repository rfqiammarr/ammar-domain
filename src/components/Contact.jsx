import { contact } from '../data/data'

export default function Contact() {
  return (
    <section id="contact" className="section alt">
      <div className="container">
        <div className="section-head">
          <h2>Let's work together</h2>
          <p className="contact-intro">
            Got an idea or a product to ship? Let's talk.
          </p>
        </div>
        <div className="contact-links">
          {contact.email && (
            <a className="contact-link" href={`mailto:${contact.email}`}>
              <span>Email</span>
              <strong>{contact.email}</strong>
            </a>
          )}
          {contact.linkedin && (
            <a className="contact-link" href={contact.linkedin} target="_blank" rel="noreferrer">
              <span>LinkedIn</span>
              <strong>/in/rifqi-ammar-r</strong>
            </a>
          )}
          {contact.github && (
            <a className="contact-link" href={contact.github} target="_blank" rel="noreferrer">
              <span>GitHub</span>
              <strong>@rfqiammarr</strong>
            </a>
          )}
          {contact.instagram && (
            <a className="contact-link" href={contact.instagram} target="_blank" rel="noreferrer">
              <span>Instagram</span>
              <strong>@rfqiammarr</strong>
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
