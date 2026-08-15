import { Link, NavLink } from 'react-router-dom'
import { company } from '../data/data'

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="brand">
          <Link to="/" className="logo">{company.name}</Link>
        </div>
        <nav className="nav">
          <Link to={{ pathname: '/', hash: 'services' }}>Services</Link>
          <Link to={{ pathname: '/', hash: 'work' }}>Work</Link>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-active' : undefined)}>
            About
          </NavLink>
          <Link to={{ pathname: '/', hash: 'contact' }}>Contact</Link>
        </nav>
      </div>
    </header>
  )
}
