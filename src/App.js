import React, {Component} from 'react';
import "antd/dist/antd.css";
import './App.css';

import {HashRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from "./store";

import Home from "./pages/home"
import Navbar from "./components/layout/Navbar";
import About from "./pages/about";
import Contact from "./pages/contact";
import Roadmap from "./pages/roadmap";
import Footer from "./components/layout/Footer";
import Services from "./pages/services";
import Partnerships from "./pages/services/Partnerships";
import Restart from "./pages/services/Restart";
import Saver from "./pages/services/Saver";
import Quotation from "./pages/quotation";
import Audit from "./pages/audit";

//Drift Bot
import Drift from 'react-driftjs';

//Analytics Code

import ReactGA from 'react-ga';
import ScrollToTop from "./components/functionality/ScrollToTop";
ReactGA.initialize('UA-82200184-2');
ReactGA.pageview(window.location.pathname + window.location.search);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <ScrollToTop>
                        <Navbar/>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/services" component={Services}/>
                        <Route exact path="/services/partnerships" component={Partnerships}/>
                        <Route exact path="/services/restart" component={Restart}/>
                        <Route exact path="/services/saver" component={Saver}/>
                        <Route exact path="/about-us" component={About}/>
                        <Route exact path="/contact-us" component={Contact}/>
                        <Route exact path="/quotation" component={Quotation}/>
                        <Route exact path="/audit" component={Audit}/>
                        <Route exact path="/roadmap" component={Roadmap}/>
                        <Drift appId="cziwywgmh3bn" />
                        <Footer/>
                    </ScrollToTop>
                </Router>
            </Provider>
        );
    }
}

export default App;
