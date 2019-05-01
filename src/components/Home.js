import React from 'react';
import About from './About';
import Contact from './Contact'
import WebDev from './WebDev';

const Home = (props) => {
  return(
    <div className="Home">
      <h1 id='home_name'>NICHOLAS A. CHAN</h1>
      <About/>

      <WebDev />

      <Contact />
    </div>
  )
}

export default Home;