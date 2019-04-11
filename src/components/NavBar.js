import React from 'react';
import { NavLink } from 'react-router-dom'
import { NavHashLink as NavHash } from 'react-router-hash-link'
import { Navbar, NavbarBrand, Nav } from 'react-bootstrap'
import '../styles/NavBar.css'

const NavBar = (props) => {
  return(
    <Navbar bg='dark' variant='dark'>
      <NavbarBrand className='mr-auto' href='/'>Nicholas A. Chan</NavbarBrand>

      <Nav className='mr-sm-2'>
        <NavLink className='navlink' to="/">Home</NavLink>
        <NavHash className='navlink' to='/#about'>About</NavHash>
        <NavLink className='navlink' to="/webdev">Web Dev</NavLink>
        <NavLink className='navlink' to="/projects">Projects</NavLink>
      </Nav>

    </Navbar>
  )
}

export default NavBar;