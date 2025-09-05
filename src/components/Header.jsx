import React from 'react'

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="brand">
          <a href="#home" className="logo">Ammar.dev</a>
        </div>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}


