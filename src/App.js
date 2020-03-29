import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './containers/Home';
import About from './containers/About';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: 'https://imgsv.nikon-image.com/products/slr/lineup/d5300/img/sample/pic_03_l.jpg',
    }
  }


  handleToAboutPage = () => {
    this.props.history.push({
      pathname: '/about:cd',
      state: { text: this.state.text }
    });
  }

  render() {
    return (
      <div className="App">
        <Helmet title="Default title" />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path={'/'} component={Home} />
              <Route path={'/about'} component={About} />
            </Switch>
          </div>
        </BrowserRouter>
        <div>
          <button onClick={this.handleToAboutPage}>
            aboutページへ遷移する
        </button>
        </div>
      </div>
    );
  }
}

export default withRouter(App);