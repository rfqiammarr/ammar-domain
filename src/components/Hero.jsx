import React from 'react'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <div className="hero-text">
          <h1>Hi, I'm Ammar</h1>
          <p className="subtitle">Software Developer • .NET • Blazor • TypeScript • ML.NET • DevOps</p>
          <p className="description" style={{lineHeight: '1.5' }}>I'm building scalable, efficient, and secure applications with cutting-edge technologies. Combining expertise in .NET, TypeScript, NextJs, Python, Blazor, VB.NET, Postgre and MS SQL Server to create innovative and impactful solutions.</p>
          <div className="cta">
            <a href="#projects" className="btn primary">View Projects</a>
            <a href="#contact" className="btn">Contact Me</a>
          </div>
        </div>
        <div className="hero-image">
          <img src="/img/Hero/photo_Ammar.jpg" alt="Person" loading="lazy" 
            style={{ width: '400px', height: 'auto', borderRadius: '12px', border: '1px solid #e5e7eb' }}
          />
        </div>
      </div>
    </section>
  )
}


