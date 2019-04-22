import React, {Component} from 'react';
import "antd/dist/antd.css";
import './App.css';

import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from "./store";

import Home from "./pages/home"
import Navbar from "./components/layout/Navbar";
import About from "./pages/about";
import Contact from "./pages/contact";
import Roadmap from "./pages/roadmap";
import Footer from "./components/layout/Footer";


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Navbar/>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/about-us" component={About}/>
                    <Route exact path="/contact-us" component={Contact}/>
                    <Route exact path="/roadmap" component={Roadmap}/>
                    <Footer/>
                </Router>
            </Provider>
        );
    }
}

export default App;
