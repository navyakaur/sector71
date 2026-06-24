import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="header">
      <Link to="/home" className="logo">
        Sector 71
      </Link>
      <nav className="nav">
        <NavLink to="/about">about me</NavLink>
        <span className="divider">|</span>
        <NavLink to="/about-sector71">about Sector 71</NavLink>
        <span className="divider">|</span>
        <Link to="https://sector71.substack.com/" target="_blank" rel="noopener noreferrer">
          read my work
        </Link>
        <span className="divider">|</span>
        <Link to="https://buy.stripe.com/3cIaEXdPl9JUcYjdjl8ww00" target="_blank" rel="noopener noreferrer">
          want some mail?
        </Link>
      </nav>
    </header>
  )
}
