import React, {Component} from 'react';
import './Roadmap.css';
import {Layout} from "antd";
import PageBanner from "../../components/banners/Page";
import TimeLine from "./TimeLine";
import Countdown from "./Countdown";
import PremiumHashButton from "../../components/buttons/PremiumHashButton";

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

const text = "Lavon aims to create a team filled with colleagues that share the vision of an industry-changing agency. Rapidly growing to becoming the biggest media and marketing agency in Australia in 7 years. Join us in our roadmap from the Start of Lavon to the end of 2019.";

class Roadmap extends Component {

    componentDidMount() {
        const page = this.props.location.pathname;
        trackPage(page);
        ReactPixel.pageView();
    }

    render() {
        return (
            <Layout id="roadmap">
                <PageBanner title="Our Roadmap" subtitle="The path is set" text={text}
                            button={<PremiumHashButton to="timeline" text="View timeline"/>}/>
                <Content style={{margin: '0 16px'}}>
                    <Countdown/>
                    <TimeLine/>
                </Content>
            </Layout>
        );
    }
}

export default Roadmap;