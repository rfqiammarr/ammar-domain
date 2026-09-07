import { Link, NavLink } from "react-router-dom";
import { company } from "../data/data";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="brand">
          <Link to="/" className="logo">
            {company.name}
          </Link>
        </div>
        <nav className="nav">
          <Link to={{ pathname: "/", hash: "services" }}>Services</Link>
          <NavLink to="/projects" className={({ isActive }) => (isActive ? "nav-active" : undefined)}>
            Work
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "nav-active" : undefined)}>
            About
          </NavLink>
          <Link to={{ pathname: "/", hash: "contact" }}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}
