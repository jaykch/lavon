import React, {Component} from 'react';
import {Layout} from "antd";
import './Footer.css'

const {
    Footer
} = Layout;

class AppFooter extends Component {
    render() {
        return (
            <Footer>
                Lavon ©2019
            </Footer>
        );
    }
}

export default AppFooter;