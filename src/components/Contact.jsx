import React from 'react'
import { contact } from '../data/data'

export default function Contact() {
  return (
    <section id="contact" className="section alt">
      <div className="container">
        <h2>Contact</h2>
        <p>I'm open to freelance, full-time opportunities, or just a friendly chat.</p>
        <div className="contact-grid">
          {contact.email && (
            <a className="contact-card" href={`mailto:${contact.email}`}>
              <span>Email</span>
              <strong>{contact.email}</strong>
            </a>
          )}
          {contact.linkedin && (
            <a className="contact-card" href={contact.linkedin} target="_blank" rel="noreferrer">
              <span>LinkedIn</span>
              <strong>/in/rifqi-ammar-r</strong>
            </a>
          )}
          {contact.github && (
            <a className="contact-card" href={contact.github} target="_blank" rel="noreferrer">
              <span>GitHub</span>
              <strong>@rfqiammarr</strong>
            </a>
          )}
          {contact.instagram && (
            <a className="contact-card" href={contact.instagram} target="_blank" rel="noreferrer">
              <span>Instagram</span>
              <strong>@rfqiammarr</strong>
            </a>
          )}
        </div>
      </div>
    </section>
  )
}


