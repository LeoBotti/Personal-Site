import React from "react";
import { NavLink } from 'react-router-dom'

const Contact = (props) => {
  return(
    <div className="Contact">
      <h1>CONTACT</h1>
      EMAIL: nicholaschan1994@gmail.com <br/>
      GITHUB: <NavLink to='/github' target='_blank'>github.com/LeoBotti</NavLink> <br/>
      LINKEDIN: <NavLink to='/linkedin' target='_blank'>linkedin.com/in/nicholas-a-chan</NavLink>
    </div>
  )
}

export default Contact;