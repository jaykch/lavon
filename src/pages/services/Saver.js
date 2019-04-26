import React, {Component} from 'react';
import './Saver.css';
import {Card, Col, Icon, Layout, Row, Steps} from "antd";
import PageBanner from "../../components/banners/Page";
import SaverTabs from "./SaverTabs";

const Step = Steps.Step;
const {Content} = Layout;
const bannerText = "The virtual management agency. Taking into account what you stand for and what you represent, our team will extend the virtual assistance by organising your marketing, production costs, cost reductions, and giving you time to focus on improving your day to day operations.";
const text1 = "Understanding what your business embodies, looking at the communication and how you are portraying your self. Following through with your vision and our resources we create a strategy that benefits your long-term growth.";
const text2 = "Becoming your complete virtual manager saving you time to re strategise in your daily operations.";

class Saver extends Component {
    render() {
        return (
            <Layout id="saver">
                <PageBanner title="Lavon Saver" subtitle="Please connect with us!" text={bannerText}/>
                <Content style={{margin: '0 16px'}}>
                    <Row className="content-wrapper">
                        <div className="card-image-container"></div>
                        <Col span={10}>
                            <Card hoverable>
                                <Steps direction="vertical">
                                    <Step status="process" icon={<Icon type="loading"/>} title="Value Focused"
                                          description={text1}/>
                                    <Step status="finish" title="Ahead of the Pack " description={text2}/>
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