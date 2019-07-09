import React from 'react';
import { NavLink } from 'react-router-dom'
import { NavHashLink as NavHash } from 'react-router-hash-link'
import { Navbar, NavbarBrand, Nav } from 'react-bootstrap'

const NavBar = (props) => {
  return(
    <Navbar bg='dark' variant='dark'>
      <NavbarBrand className='nav-initials' style={{marginRight: 0}} href="/">N.</NavbarBrand>
      <NavbarBrand style={{marginRight: 0, color: "#343a40"}} target="_blank" href='http://www.nyan.cat/index.php?cat=technyancolor'>Y</NavbarBrand>
      <NavbarBrand className='nav-initials' style={{marginRight: 0}} href="/">A.</NavbarBrand>
      <NavbarBrand style={{marginRight: 0, color: "#343a40"}} target="_blank" href='http://www.nyan.cat/index.php?cat=technyancolor'>N</NavbarBrand>
      <NavbarBrand className='nav-initials' style={{marginRight: 0}} href="/">C.</NavbarBrand>
      <NavbarBrand style={{marginRight: 0, color: "#343a40"}} target="_blank" href='http://www.nyan.cat/index.php?cat=technyancolor'>A</NavbarBrand>
      <NavbarBrand style={{color: "#343a40"}}className='mr-auto' target="_blank" href='http://www.nyan.cat/index.php?cat=technyancolor'>T</NavbarBrand>

      <Nav className='mr-sm-2'>
        <NavLink className='navlink' to="/">Home</NavLink>
        {/* <NavHash className='navlink' to='/#about'>About</NavHash>
        <NavHash className='navlink' to="/#webdev">Web Dev</NavHash> */}
        <NavLink className='navlink' to="/projects">Projects</NavLink>
      </Nav>
    </Navbar>
  )
}

export default NavBar;