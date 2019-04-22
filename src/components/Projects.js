import React from "react";
import { Tabs, Tab } from 'react-bootstrap';
import {ProjectItem} from "./ProjectItem"

const feederObject = {
  header: "Feeder",
  projectInfo1: 'Feeder is an esports web app that allows users to follow their favourite esports teams and view the teams’ match history and upcoming matches. The app also features team profiles which lets users view a team’s current roster and their recent match results. Feeder currently only supports League of Legends teams, specifically teams from the League of Legends Championship Series (LCS) and the League of Legends European Championship.',
  projectInfo2: 'The app is built using Ruby on Rails and uses PandaScore API for esports data.',
  githubLink: "https://github.com/NicAChan/FEEDER",
  images: [
    '/images/fdrWelcome.png',
    '/images/fdrFollow.png',
    '/images/fdrHome.png',
    '/images/fdrTeam.png',
    '/images/fdrMatch.png'
  ]
}

const quizzBuzzObject = {
  header: "QuizzBuzz",
  projectInfo1: `QuizzBuzz is a web app that lets users sign up to create and take community-generated quizzes. Some features of  the app include a quiz index that allows users to browse and select quizzes to take, a leaderboard, and a user profile detailing personal info and achievements.`,
  projectInfo2: 'The app is built using Ruby on Rails by 6 CodeCore Full-Stack Web Development Bootcamp students over an intensive 2.5 day hackathon-like weekend.',
  githubLink: "https://github.com/chrischu5/Team_Salmon",
  appLink: "https://quizzbuzzsalmon.herokuapp.com/",
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