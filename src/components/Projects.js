import React from "react";

const Projects = (props) => {
  return(
  <div className='Projects'>
    <h1>Projects</h1>

    <strong>Feeder</strong>
    <p>View 
      <a href="https://github.com/LeoBotti/FEEDER" target='_blank' rel="noopener noreferrer">
      Github Repository
      </a>
    </p>

    <strong>QuizzBuzz</strong>
    <p>View 
      <a href="https://github.com/chrischu5/Team_Salmon" target='_blank' rel="noopener noreferrer">
      Github Repository</a>
    </p>
    <p>View 
      <a href="https://quizzbuzzsalmon.herokuapp.com/" target='_blank' rel="noopener noreferrer">
      App deployed to Heroku</a>
    </p>
  </div>
  )
}

export default Projects;