import React from 'react';
import About from './About';
import Contact from './Contact'

const Home = (props) => {
  return(
    <div className="Home">
      <h1>Nicholas A. Chan</h1>
      <About/>

      <Contact />
    </div>
  )
}

export default Home;