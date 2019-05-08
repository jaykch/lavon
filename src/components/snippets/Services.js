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
                <Row className="cards-container" gutter={16}>
                    <Col xs={24} lg={{span: 5}} className="card-wrapper">
                        <Card title="Lavon Partnerships " bordered={false} hoverable>
                            <p>With auditing capabilities of a marketing agency coupled with the fine-tuned roadmap of
                                our creative team, we bring new consumer insight driven paths to clients. With an
                                addition of quarterly events to bring you closer to B2B Leaders.</p>
                        </Card>
                    </Col>
                    {/*<Col xs={24} lg={{span: 5}} className="card-wrapper">*/}
                    {/*    <Card title="Lavon Restart" bordered={false} hoverable>*/}
                    {/*        <p>We utilise resources to bring you a creative insight-driven branding that communicates*/}
                    {/*            your value proposition through new brand elements. Creating a new chance to recapture*/}
                    {/*            lost market share through the new value proposition.</p>*/}
                    {/*        <p><strong>This may include:</strong> Brand Logo, Social Identity, Website, Internal*/}
                    {/*            Messaging, and a new Brand Strategy. </p>*/}
                    {/*    </Card>*/}
                    {/*</Col>*/}
                    <Col xs={24} lg={{span: 5}} className="card-wrapper">
                        <Card title="Lavon Saver" bordered={false} hoverable>
                            <p>Leveraging our skill sets bringing you a virtual team that capitalises on lost market
                                share growth with a new shift towards strategically focused activities. Alleviating
                                resources to allow you to shift towards training and bringing your team to a new
                                level.</p>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xs={24} lg={{span: 15}}>
                        <UberButton to="/services" text="Explore all our services"/>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default ProductsSnippet;