import React, { Component } from 'react';
import Helmet from 'react-helmet';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Home from './containers/Home';
import About from './containers/About';

const members = [
  { id: 1, name: 'Hisashi', info: 'リードギター' },
  { id: 2, name: 'TERU', info: 'ボーカル' },
  { id: 3, name: 'TAKURO', info: 'ギター' },
  { id: 4, name: 'JIRO', info: 'ベース' },
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet title="Default title" />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <Router>
            <div>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
              </ul>
              <hr />
              <Route exact path="/:cd" component={Home} />
              <Route path="/about" component={About} />
            </div>
          </Router>
        </p>
      </div>
    );
  }
}

export default App;