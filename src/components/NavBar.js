import React from 'react';
import { NavLink } from 'react-router-dom'

const NavBar = (props) => {
  return(
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/">About</NavLink>
      <NavLink to="/skills">Skills</NavLink>
      <NavLink to="/projects">Projects</NavLink>
    </nav>
  )
}

export default NavBar