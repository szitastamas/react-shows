import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <ul>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/movie-list">Movie List</NavLink>
            </ul>
        </nav>
    )
}

export default Navbar
