import React, { Component } from 'react';
// import Helmet from 'react-helmet';
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom';
// import logo from '../logo.svg';
// import '../App.css';

// import About from './containers/About';

const links = ['https://cweb.canon.jp/eos/lineup/r/image/downloads/sample02.jpg', 'https://imgsv.nikon-image.com/products/mirrorless/lineup/z_50/img/sample/pic_02_l.jpg', 'http://wwwjp.kodak.com/JP/images/ja/digital/digitalcamera/performance/p880/sample/P880_02.jpg']

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: 'https://imgsv.nikon-image.com/products/slr/lineup/d5300/img/sample/pic_03_l.jpg',
        }
    }
    randomText = () => {
        const random = Math.floor(Math.random() * 3);
        this.setState({ text: links[random] });
        console.log(this.state)
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

                <div className="App-header">
                    {/* <img src={logo} className="App-logo" alt="logo" /> */}
                    <h2>Welcome to React</h2>
                </div>
                <div>
                    <button onClick={this.randomText}>
                        Link生成
        </button>
                    <button onClick={this.handleToAboutPage}>
                        aboutページへ遷移する
        </button>
                </div>
            </div >
        );
    }
}

export default withRouter(Home)