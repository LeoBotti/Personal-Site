import React from "react";

const Projects = (props) => {
  return(
  <div className='Projects'>
    <h1>Projects</h1>

    <strong>Feeder</strong><br/>
    View {" "}
      <a href="https://github.com/LeoBotti/FEEDER" target='_blank' rel="noopener noreferrer">
      Github Repository
      </a> <br/> <br/>

    <strong>QuizzBuzz</strong><br/>
    View {" "}
      <a href="https://github.com/chrischu5/Team_Salmon" target='_blank' rel="noopener noreferrer">
      Github Repository</a> <br/>
    
    View {" "}
      <a href="https://quizzbuzzsalmon.herokuapp.com/" target='_blank' rel="noopener noreferrer">
      App deployed to Heroku</a>
  </div>
  )
}

export default Projects;