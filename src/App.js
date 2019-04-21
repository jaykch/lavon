import React, {Component} from 'react';
import './App.css';
import "antd/dist/antd.css";

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from "./store";

import Home from "./pages/home"

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Route exact path="/" component={Home}/>
                </Router>
            </Provider>
        );
    }
}

export default App;
