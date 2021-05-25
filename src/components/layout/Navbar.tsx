import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav id="navbar">
            <div className="nav-brand">
                <NavLink to="/" className="nav-brand-link">React Shows</NavLink>
            </div>
            <ul className="nav-menu-container">
                <NavLink exact to="/" className="nav-menu-item" activeClassName="active">Home</NavLink>
                <NavLink exact to="/movie-list" className="nav-menu-item">Movie List</NavLink>
            </ul>
        </nav>
    )
}

export default Navbar
