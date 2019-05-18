import React, {Component} from 'react';
import './Partnerships.css';
import {Col, Layout, Row, Steps, Icon, Card} from "antd";
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
const bannerText = "We provide auditing capabilities of a marketing agency coupled with the fine-tuned roadmap of our creative team; we bring new consumer insight driven paths to companies. With an addition of quarterly events to bring you closer to B2B Leaders.";
const text1 = "Watching your operations and understanding how you operate through an in-depth audit providing insight on how to strategically align your business. Taking a look at your strengths, weaknesses, your engagement to your community, and the execution of strategic activities.";
const text2 = "Designing a customised solution and implementation plan, we work closely with your management team to ensure the time-frame fits with realistic objectives and outcomes. Guiding the process of implementation through on-going review through a lean and agile approach. Focusing on your end-consumers first and ensuring their satisfaction is the priority of the project.";
const text3 = "Once connected, we provide long-term growth through B2B mentoring programs allowing you to build and gain with other businesses. Hosting quarterly events bringing keynote speakers and other B2B thought leaders to provide growth beyond the business operations.";

class Partnerships extends Component {

    componentDidMount() {
        const page = this.props.location.pathname;
        trackPage(page);
        ReactPixel.pageView();
    }

    render() {
        return (
            <Layout id="partnerships">
                <PageBanner title="Lavon Partnerships"
                            subtitle="Growing and connecting businesses with an insight driven agency" text={bannerText}
                            button={<PremiumHashButton to="content-wrapper" text="View Details"/>}/>
                <Content style={{margin: '0 16px'}}>
                    <Row className="content-wrapper">
                        <div className="card-image-container"></div>
                        <Col xs={24} lg={{span: 10}}>
                            <Card hoverable>
                                <Steps direction="vertical">
                                    <Step status="process" icon={<Icon type="loading"/>} title="First Stage"
                                          description={text1}/>
                                    <Step status="finish" title="Second Stage" description={text2}/>
                                    <Step status="finish" title="The Benefits" description={text3}/>
                                </Steps>
                            </Card>
                        </Col>
                    </Row>
                </Content>
            </Layout>
        );
    }
}

export default Partnerships;