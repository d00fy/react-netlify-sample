import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './containers/Home';
import About from './containers/About';

class App extends Component {

  render() {
    return (
      <>
        <Helmet title="Default title" />
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path={'/'} component={Home} />
              <Route path={'/about'} component={About} />
            </Switch>
          </div>
        </BrowserRouter>
      </>
    );
  }
}

export default App