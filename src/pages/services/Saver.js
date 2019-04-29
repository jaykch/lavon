import React, {Component} from 'react';
import './Saver.css';
import {Card, Col, Icon, Layout, Row, Steps} from "antd";
import PageBanner from "../../components/banners/Page";
import SaverTabs from "./SaverTabs";
import PremiumHashButton from "../../components/buttons/PremiumHashButton";

const Step = Steps.Step;
const {Content} = Layout;
const bannerText = "Leveraging our skill sets to bring you a virtual team to assist with your strategic activities; alleviating valuable hours for you to focus on daily operations.";
const text1 = "Through your central idea we facilitate a lean approach towards long-term growth, maximising benefits through reducing over-heads.";
const text2 = "Becoming your complete virtual manager, saving you time to re-strategise your daily operations.";

class Saver extends Component {
    render() {
        return (
            <Layout id="saver">
                <PageBanner title="Lavon Saver" subtitle="Please connect with us!" text={bannerText}
                            button={<PremiumHashButton to="content-wrapper" text="View Details"/>}/>
                <Content style={{margin: '0 16px'}}>
                    <Row className="content-wrapper">
                        <div className="card-image-container"></div>
                        <Col xs={24} lg={{span: 10}}>
                            <Card hoverable>
                                <Steps direction="vertical">
                                    <Step status="process" icon={<Icon type="loading"/>} title="Value Focused"
                                          description={text1}/>
                                    <Step status="finish" title="Ahead of the Pack" description={text2}/>
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