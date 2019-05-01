import React, {Component} from 'react';
import {Row, Col, Card} from 'antd';
import './Lifeline.css';

class Lifeline extends Component {
    render() {
        return (
            <div id="lifeline">
                <Row>
                    <Col xs={24} lg={{span: 12, offset: 4}} className="content">
                        <h1>Our Lifeline</h1>
                        <span className="subtitle">
                            Our uniqueness in the field arises from the immensely talented and passionate people we build
                        </span>
                        <br/>
                    </Col>
                </Row>
                <Row className="cards-container" gutter={16}>
                    <Col xs={24} lg={{span: 7, offset: 4}} className="card-wrapper">
                        <Card title="Innovation" bordered={false}>
                            <p>We continually strive to redefine the standard of excellence in everything. Our focal
                                point in growing the ideas that challenge the conventional views and drive
                                innovation. </p>
                            <p>To stay relevant in a rapidly evolving society, we continually improve alongside the
                                changing needs of consumers.</p>
                        </Card>
                    </Col>
                    <Col xs={24} lg={{span: 7}} className="card-wrapper">
                        <Card title="Passion" bordered={false}>
                            <p>The satisfaction in providing work that transpires our story, fuels our team to drive
                                endlessly. Countless nights are met through creativity and optimising by pushing
                                ourselves beyond natural limits. Passion is the Lavon testimony of pure engagement and
                                dedication.</p>
                        </Card>
                    </Col>
                    <Col xs={24} lg={{span: 7, offset: 4}} className="card-wrapper">
                        <Card title="Integrity" bordered={false}>
                            <p>We are committed to conducting ourselves in a manner consistent with the highest
                                standards of integrity. We are honest, ethical and fair in all our activities. We keep
                                our word, deliver on our promises and acknowledge our mistakes. In all that we do, we
                                believe that our reputation is of outmost importance than any other short-term rewards —
                                focusing on complete transparency through all operations.</p>
                        </Card>
                    </Col>
                    <Col xs={24} lg={{span: 7}} className="card-wrapper">
                        <Card title="Perfection" bordered={false}>
                            <p>The complete focus on creating a product that exceeds the constant need for change.
                                Reshaping the core to be on an end product that removes all doubt. Building on an agile
                                need for improvement that allows growth through insight-driven results.</p>
                        </Card>
                    </Col>
                    <Col xs={24} lg={{span: 7, offset: 4}} className="card-wrapper">
                        <Card title="Compassion" bordered={false}>
                            <p>We are focusing on providing value through our journey. Acting on the knowledge of
                                consumers by benefitting them through positive intent. The fixation on building each
                                other to a new height that is self-sustainable through hard work.</p>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Lifeline;