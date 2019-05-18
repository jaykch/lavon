import React, {Component} from 'react';
import {Row, Col} from 'antd';
import {Card} from 'antd';
import './Services.css';
import UberButton from "../buttons/UberButton";

class ProductsSnippet extends Component {
    render() {
        return (
            <div className="services-snippet">
                <Row>
                    <Col xs={24} lg={{span: 15}} className="snippet-content">
                        <h1>Exclusive Services</h1>
                        <span
                            className="subtitle">Reshaping Australian businesses to stay relevant in the present</span>
                        <br/>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col xs={24} lg={15} className="cards-container">
                        <Col xs={24} lg={8} className="card-wrapper">
                            <Card title="Lavon Partnerships " bordered={false}>
                                <p>With auditing capabilities of a marketing agency coupled with the fine-tuned roadmap
                                    of our creative team, we bring new consumer insight driven paths to clients.</p>
                                <UberButton to="/services/partnerships" text="Learn More"/>
                            </Card>
                        </Col>
                        {/*<Col xs={24} lg={{span: 5}} className="card-wrapper">*/}
                        {/*    <Card title="Lavon Restart" bordered={false}>*/}
                        {/*        <p>We utilise resources to bring you a creative insight-driven branding that communicates*/}
                        {/*            your value proposition through new brand elements. Creating a new chance to recapture*/}
                        {/*            lost market share through the new value proposition.</p>*/}
                        {/*        <p><strong>This may include:</strong> Brand Logo, Social Identity, Website, Internal*/}
                        {/*            Messaging, and a new Brand Strategy. </p>*/}
                        {/*    </Card>*/}
                        {/*</Col>*/}
                        <Col xs={24} lg={8} className="card-wrapper">
                            <Card title="Cloud Management" bordered={false}>
                                <p>A complete virtual management system that helps you create a leveraged position by
                                    using our business resources against your competitors by focusing on day-to-day
                                    operations.</p>
                                <UberButton to="/services/cloud-management" text="Learn More"/>
                            </Card>
                        </Col>
                    </Col>
                </Row>
                {/*<Row>*/}
                {/*    <Col xs={24} lg={{span: 15}}>*/}
                {/*        <UberButton to="/services" text="Explore all our services"/>*/}
                {/*    </Col>*/}
                {/*</Row>*/}
            </div>
        );
    }
}

export default ProductsSnippet;