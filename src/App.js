import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import './scss/index.scss';
import Navbar from './components/Navbar'
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Skills from './components/Skills';

class App extends Component {
  render() {
    return (
      <div>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/portfolio" component={Home}/>
          <Route path="/About" component={About} />
          <Route path="/Project" component={Project} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Skills" component={Skills} />
        </div>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
