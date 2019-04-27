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
                        <h1>Our Services</h1>
                        <span
                            className="subtitle">Reshaping Australian businesses to stay relevant in the present</span>
                        <br/>
                    </Col>
                </Row>
                <Row className="cards-container" gutter={16}>
                    <Col xs={24} lg={{span: 5}} className="card-wrapper">
                        <Card title="Lavon Partnerships " bordered={false} hoverable>
                            <p>Lavon Partners have exclusive access to our internal auditing team that looks into your
                                business operations and find the leaks of resources. Providing insight into the
                                strategic alignment moving forward while utilising our library of expertise. </p>
                            <p>All Lavon Partnerships include all expenses paid quarterly events. </p>
                        </Card>
                    </Col>
                    <Col xs={24} lg={{span: 5}} className="card-wrapper">
                        <Card title="Lavon Restart" bordered={false} hoverable>
                            <p>Providing a new opportunity to help realign to a new direction for your brand. Allowing a
                                full strategic realignment on your unique selling proposition, with visuals to
                                complement. </p>
                            <p><strong>All Included:</strong> Brand Logo, Social Identity, Website, Internal Messaging,
                                and a new Brand Strategy. </p>
                        </Card>
                    </Col>
                    <Col xs={24} lg={{span: 5}} className="card-wrapper">
                        <Card title="Lavon Saver" bordered={false} hoverable>
                            <p>The virtual management agency. Taking into account what you stand for and what you
                                represent, our team will extend the virtual assistance by organising your marketing,
                                production costs, cost reductions, and giving you time to focus on improving your day to
                                day operations.</p>
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