import React, { Component } from 'react';
import HelloWorld from './HelloWorld'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NavBar from './NavBar'
import Home from './Home'
import Projects from './Projects'
import Skills from './Skills'

class App extends Component {
  render() {
    return (
    <div className="App">
      <BrowserRouter>
        <NavBar />

        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/skills' exact component={Skills}></Route>
          <Route path='/projects' exact component={Projects}></Route>
          <Route path='/github' component={ () => window.location = 'https://github.com/LeoBotti' }></Route>
          <Route path='/linkedin' component={ () => window.location = 'https://linkedin.com/in/nicholas-a-chan' }></Route>
        </Switch>
      </BrowserRouter>      
      </div>
    );
  }
}

export default App;
