import React, {Component} from 'react';
import {BackTop} from 'antd';
import "antd/dist/antd.css";
import './App.css';

import {HashRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from "./store";
import {Preloader, Placeholder} from 'react-preloading-screen';
import 'react-preloading-screen/raf-polyfill';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import Home from "./pages/home"
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
import ScrollToTop from "./components/functionality/ScrollToTop";


//Analytics Code
import ReactGA from 'react-ga';
import ReactPixel from 'react-facebook-pixel';

ReactGA.initialize('UA-82200184-2');
ReactGA.pageview(window.location.pathname + window.location.search);

// Facebook Pixel Code
const advancedMatching = {em: 'marketing@lavon.com.au'}; // optional, more info: https://developers.facebook.com/docs/facebook-pixel/pixel-with-ads/conversion-tracking#advanced_match
const options = {
    autoConfig: true, 	// set pixel's autoConfig
    debug: false, 		// enable logs
};

ReactPixel.init('2016750905297457', advancedMatching, options);
ReactPixel.pageView();


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Preloader fadeDuration={500} className="loader">
                    <MessengerCustomerChat
                        pageId="<PAGE_ID>"
                        appId="<APP_ID>"
                        htmlRef="<REF_STRING>"
                    />
                    <Router>
                        <ScrollToTop>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/services" component={Services}/>
                            <Route exact path="/services/partnerships" component={Partnerships}/>
                            <Route exact path="/services/restart" component={Restart}/>
                            <Route exact path="/services/cloud-management" component={Saver}/>
                            <Route exact path="/about-us" component={About}/>
                            <Route exact path="/contact-us" component={Contact}/>
                            <Route exact path="/quotation" component={Quotation}/>
                            <Route exact path="/audit" component={Audit}/>
                            <Route exact path="/roadmap" component={Roadmap}/>
                            <Footer/>
                        </ScrollToTop>
                        <BackTop/>
                    </Router>
                    <Placeholder>
                        <h1 className="animate">LAVON</h1>
                        <p>Please wait while the website loads</p>
                    </Placeholder>
                </Preloader>
            </Provider>
        );
    }
}

export default App;
