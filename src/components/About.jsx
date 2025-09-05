import React from 'react'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container about-wrap">
        <div className="about-copy">
          <h2>About Me</h2>
          <p>
            I'm a software developer focused on building clean, scalable web apps with React and .NET.
            I love turning complex problems into simple, delightful experiences while keeping performance
            and accessibility front and center.
          </p>
          <ul className="about-list">
            <li>Clean architecture and testing mindset</li>
            <li>Strong collaboration with designers and product</li>
            <li>Continuous learning: cloud, performance, and DX</li>
          </ul>
          <div className="about-stats">
            <div className="stat"><strong>3+ yrs</strong><span>Experience</span></div>
            <div className="stat"><strong>20+</strong><span>Projects</span></div>
            <div className="stat"><strong>100%</strong><span>Ownership</span></div>
          </div>
        </div>
        <aside className="about-aside">
          <div className="about-photo">
            <img src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=1200&auto=format&fit=crop" alt="Portrait placeholder" loading="lazy" />
          </div>
          <div className="about-meta">
            <div className="meta-row"><span>Location</span><strong>Jakarta, Indonesia</strong></div>
            <div className="meta-row"><span>Role</span><strong>Full-Stack Developer</strong></div>
            <div className="meta-row"><span>Stack</span><strong>.NET, C#, VB.NET, MS SQL Server, Azure, Blazor, Javascript</strong></div>
            <div className="meta-row"><span>Current</span><strong>Software Engineer @ Acme Tech</strong></div>
            <div className="meta-row"><span>Education</span><strong>Bachelor of Computer Science</strong></div>
          </div>
        </aside>
      </div>
    </section>
  )
}


