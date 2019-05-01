import React, {Component} from 'react';
import './Quotation.css';
import {Layout} from "antd";
import PageBanner from "../../components/banners/Page";

// Analytics Code
import ReactGA from 'react-ga';
import ReactPixel from 'react-facebook-pixel';

const trackPage = (page) => {
    ReactGA.set({
        page
    });
    ReactGA.pageview(page);
};

const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

class Quotation extends Component {

    componentDidMount() {
        const page = this.props.location.pathname;
        trackPage(page);
        ReactPixel.pageView();
    }

    render() {
        return (
            <Layout id="contact">
                <PageBanner title="Quotation" subtitle="Please connect with us!" text={text}/>
            </Layout>
        );
    }
}

export default Quotation;