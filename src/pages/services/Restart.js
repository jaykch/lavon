import React, {Component} from 'react';
import './Restart.css';
import {Card, Col, Icon, Layout, Row, Steps} from "antd";
import PageBanner from "../../components/banners/Page";
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

const Step = Steps.Step;
const {Content} = Layout;
const bannerText = "Utilising resources to bring you a creative insight-driven branding that communicates your value proposition through new brand elements.";
const text1 = "Becoming personal with your company – jumping into the depths of your industry, interviewing your team, observing your consumers; forming your current brand perceptual map.";
const text2 = "With the analytical and, rational insight process allows the creative to leverage the new value proposition through a new voice. Giving you a second start to building attention through the new path that focuses purely on giving your consumers what they want.";
const text3 = "icCreating visuals that complement your brand voice, giving you a new path in communication. Transforming the channels to be representative ways to pull them to your quality and value your brand encompasses.";

class Restart extends Component {

    componentDidMount() {
        const page = this.props.location.pathname;
        trackPage(page);
        ReactPixel.pageView();
    }

    render() {
        return (
            <Layout id="restart">
                <PageBanner title="Lavon Restart" subtitle="Looking for a new direction?" text={bannerText}
                            button={<PremiumHashButton to="content-wrapper" text="View Details"/>}/>
                <Content style={{margin: '0 16px'}}>
                    <Row className="content-wrapper">
                        <div className="card-image-container"></div>
                        <Col xs={24} lg={{span: 10}}>
                            <Card hoverable>
                                <Steps direction="vertical">
                                    <Step status="process" icon={<Icon type="loading"/>} title="The Relationship"
                                          description={text1}/>
                                    <Step status="finish" title="Eyes on the 8-ball" description={text2}/>
                                    <Step status="finish" title="Bigger Picture" description={text3}/>
                                </Steps>
                            </Card>
                        </Col>
                    </Row>
                </Content>
            </Layout>
        );
    }
}

export default Restart;