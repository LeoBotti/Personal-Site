import React from 'react';
import { NavLink } from 'react-router-dom'
// import "../styles/NavBar.css"
import { Navbar } from 'react-bootstrap'

const NavBar = (props) => {
  return(
    <Navbar bg='dark'>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/">About</NavLink>
      <NavLink to="/webdev">Web Dev</NavLink>
      <NavLink to="/projects">Projects</NavLink>
    </Navbar>
  )
}

export default NavBar;