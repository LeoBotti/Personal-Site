import React from "react";
import { Tabs, Tab } from 'react-bootstrap';
import {ProjectItem} from "./ProjectItem"

const feederObject = {
  header: "Feeder",
  githubLink: "https://github.com/NicAChan/FEEDER",
  appLink: "",
  images: [
    
  ]
}

const quizzBuzzObject = {
  header: "QuizzBuzz",
  githubLink: "https://github.com/chrischu5/Team_Salmon",
  images: [
    '/images/qbWelcome.png',
    'images/qbIndex.png',
    '/images/qbShow.png',
    '/images/qbResult.png'
  ]
}

class Projects extends React.Component {
  render(){
    return (
    <div className='Projects'>
      <h1>Projects</h1>
      <Tabs defaultActiveKey='feeder' id='projects-tabs'>
        <Tab eventKey='feeder' title='Feeder'>
          <ProjectItem object={ feederObject } />
        </Tab>

        <Tab eventKey='quizzbuzz' title='QuizzBuzz'>
          <ProjectItem object={ quizzBuzzObject } />
        </Tab>
        
      </Tabs>

    </div>
    )
  }
}


export default Projects;