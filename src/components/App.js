import React, { Component } from 'react';
import HelloWorld from './HelloWorld'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NavBar from './NavBar'
import Home from './Home'
import Projects from './Projects'
import WebDev from './WebDev'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true
    }
  }

  componentDidMount(){
    this.setState({ loading: false })
  }

  render() {
    const { loading } = this.state;

    if(loading){
      return(
        <main>
          <h3>Loading...</h3>
        </main>
      )
    }

    return (
    <div className="App">
      <BrowserRouter>
        <NavBar />

        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/webdev' exact component={WebDev}></Route>
          <Route path='/projects' exact component={Projects}></Route>
        </Switch>
      </BrowserRouter> 
      </div>
    );
  }
}

export default App;
