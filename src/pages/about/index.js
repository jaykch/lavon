import React, {Component} from 'react';
import PageBanner from "../../components/banners/Page";
import {Layout} from "antd";
import './About.css';

const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

class About extends Component {
    render() {
        return (
            <Layout id="about">
                <PageBanner title="Get Connected" subtitle="Please connect with us!" text={text}/>
            </Layout>
        );
    }
}

export default About;