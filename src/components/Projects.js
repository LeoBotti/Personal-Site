import React from "react";
import { NavLink } from 'react-router-dom'

const Projects = (props) => {
  return(
  <div className='Projects'>
    <h1>Projects</h1>
    <strong>Feeder</strong>
    <p>View <NavLink to='/feeder' target='_blank'>Github Repository</NavLink> </p><br/>
    <strong>QuizzBuzz</strong>
    <p>View <NavLink to='/quizzbuzz/git' target='_blank'>Github Repository</NavLink> </p>
    <p>View <NavLink to='/quizzbuzz/heroku' target='_blank'>App deployed to Heroku</NavLink></p>
  </div>
  )
}

export default Projects;