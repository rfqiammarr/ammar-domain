import React from 'react'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container">
        <p>© {year} Rifqi Ammar Ramadhan. All Rights Reserved.</p>
      </div>
    </footer>
  )
}


