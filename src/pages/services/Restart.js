import React, {Component} from 'react';
import './Restart.css';
import {Card, Col, Icon, Layout, Row, Steps} from "antd";
import PageBanner from "../../components/banners/Page";
import PremiumHashButton from "../../components/buttons/PremiumHashButton";

const Step = Steps.Step;
const {Content} = Layout;
const bannerText = "Providing a new opportunity to help realign to a new direction for your brand. Allowing a full strategic realignment on your unique selling proposition, with visuals to complement. " +
    "All Included: Brand Logo, Social Identity, Website, Internal Messaging, and Brand Strategy. ";
const text1 = "We get to know your business, your industry, your competition and your customers. This involves meeting with your team, conducting some research, doing customer interviews and really drilling down to the core of how people see you now and how you want them to see you moving forward.";
const text2 = "Defining your target audience; understanding their needs and motivations; being clear about the occasions and channels through which your brand will influence them. This is an analytical, rational, insight-led process. Giving you the creative leverage providing added value through your brand strategy.";
const text3 = "Creating visuals that complement your brand voice, giving you a new path in communication. Transforming the channels to be representative ways to pull them to your quality and value your brand encompasses.";

class Restart extends Component {
    render() {
        return (
            <Layout id="restart">
                <PageBanner title="Lavon Restart" subtitle="Please connect with us!" text={bannerText}
                            button={<PremiumHashButton to="content-wrapper" text="View Details"/>}/>
                <Content style={{margin: '0 16px'}}>
                    <Row className="content-wrapper">
                        <div className="card-image-container"></div>
                        <Col xs={24} lg={{span: 10}}>
                            <Card hoverable>
                                <Steps direction="vertical">
                                    <Step status="process" icon={<Icon type="loading"/>} title="Getting Married"
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