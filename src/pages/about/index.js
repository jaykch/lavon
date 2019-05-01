import React, {Component} from 'react';
import PageBanner from "../../components/banners/Page";
import {Layout} from "antd";
import './About.css';
import Lifeline from "./Lifeline";
import PremiumHashButton from "../../components/buttons/PremiumHashButton";
import LocationSnippet from "../../components/snippets/Location";
import ClientsSnippet from "../../components/snippets/Clients";

// Analytics Code
import ReactGA from 'react-ga';
import ReactPixel from 'react-facebook-pixel';

const trackPage = (page) => {
    ReactGA.set({
        page
    });
    ReactGA.pageview(page);
};

const {Content} = Layout;
const text = "We focus on changing the work culture by creating an environment where every individual has the opportunity to work, learn and thrive. Fuelled with friendly and bright colleagues that are more than happy to collaborate across all business units.";

class About extends Component {

    componentDidMount() {
        const page = this.props.location.pathname;
        trackPage(page);
        ReactPixel.pageView();
    }

    render() {
        return (
            <Layout id="about">
                <PageBanner title="Life at Lavon" subtitle="Reshaping Australian Work Culture" text={text}
                            button={<PremiumHashButton to="lifeline" text="Who we are"/>}/>
                <Content style={{margin: '0 16px'}}>
                    <Lifeline/>
                    <ClientsSnippet/>
                    <LocationSnippet/>
                </Content>
            </Layout>
        );
    }
}

export default About;