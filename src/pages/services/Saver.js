import React, {Component} from 'react';
import './Saver.css';
import {Card, Col, Icon, Layout, Row, Steps} from "antd";
import PageBanner from "../../components/banners/Page";
import SaverTabs from "./SaverTabs";
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
const bannerText = "Leveraging our skill sets to bring you a virtual team to assist with your strategic activities; alleviating valuable hours for you to focus on daily operations.";
const text1 = "A two-hour consulting session, where you showcase your current operations for the first half, and the second half is focusing on evaluating and creating the foundation of the execution for your virtual management.";
const text2 = "Consistently giving you a platform of communication and providing you insight on how your day-to-day operations need to go. Providing a roadmap that you can follow that prioritises your end user.  With the ability to get advice on how to proceed.";

class Saver extends Component {

    componentDidMount() {
        const page = this.props.location.pathname;
        trackPage(page);
        ReactPixel.pageView();
    }

    render() {
        return (
            <Layout id="saver">
                <PageBanner title="Cloud Management" subtitle="Virtual Management" text={bannerText}
                            button={<PremiumHashButton to="content-wrapper" text="View Details"/>}/>
                <Content style={{margin: '0 16px'}}>
                    <Row className="content-wrapper">
                        <div className="card-image-container"></div>
                        <Col xs={24} lg={{span: 10}}>
                            <Card hoverable>
                                <Steps direction="vertical">
                                    <Step status="process" icon={<Icon type="loading"/>} title="Onboarding"
                                          description={text1}/>
                                    <Step status="finish" title="On-Call" description={text2}/>
                                    <Step status="finish" title="The Benefits" description={<SaverTabs/>}/>
                                </Steps>
                            </Card>
                        </Col>
                    </Row>
                </Content>
            </Layout>
        );
    }
}

export default Saver;