import React, {Component} from 'react';
import './Partnerships.css';
import {Col, Layout, Row, Steps, Icon, Card} from "antd";
import PageBanner from "../../components/banners/Page";
import PremiumHashButton from "../../components/buttons/PremiumHashButton";

const Step = Steps.Step;
const {Content} = Layout;
const bannerText = "We provide auditing capabilities of a marketing agency coupled with the fine-tuned roadmap of our creative team; we bring new consumer insight driven paths to companies. With an addition of quarterly events to bring you closer to B2B Leaders.";
const text1 = "We will watch your operations and understand how it lives and breathes on a day to day bases. This builds on the knowledge of how you are, performing an audit and understanding how we can strategically align you for the future.  We get to know you - your strengths, challenges, history, and current needs - and we get to know your market. Together with your project lead and senior management team, we define the problem and create goals to solve it.";
const text2 = "Our team designs a customized solution and implementation plan to meet your objectives within the time frame required. We work closely with your project lead and management team to make sure the plan is a good fit with realistic objectives and outcomes. We stay with you every step of the way while your solution is rolling out, guiding implementation, tweaking elements of the plan as we get feedback from employees and customers, and measuring success using custom analytics.";
const text3 = "Once you are a part of our partnership team, we connect you through our B2B mentoring platform that allows you to build and gain with each other. Hosting quarterly events that bring you keynote speakers and other B2B thought leaders that bring you exceptional value. ";

class Partnerships extends Component {
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
                                    <Step status="process" icon={<Icon type="loading"/>} title="Needle in a Haystack "
                                          description={text1}/>
                                    <Step status="finish" title="Ahead of the Pack " description={text2}/>
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