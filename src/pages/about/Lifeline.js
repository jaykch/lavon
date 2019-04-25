import React, {Component} from 'react';
import {Row, Col, Card} from 'antd';
import './Lifeline.css';

class Lifeline extends Component {
    render() {
        return (
            <div id="lifeline">
                <Row>
                    <Col span={12} offset={4} className="content">
                        <h1>Our Lifeline</h1>
                        <span className="subtitle">
                            One of the things that makes us unique is the incredibly talented, smart and passionate people we employ
                        </span>
                        <br/>
                    </Col>
                </Row>
                <Row className="cards-container" gutter={16}>
                    <Col span={5} offset={4} className="card-wrapper">
                        <Card title="Innovation" bordered={false}>
                            <p>Becoming agile and moving away from a rigid strategy and creating adaptable business
                                practices through quick thinking. Thinking outside the box and creating solutions and
                                processes that stray from the norm.</p>
                        </Card>
                    </Col>
                    <Col span={5} className="card-wrapper">
                        <Card title="Passion" bordered={false}>
                            <p>That burning sensation that you can't itch and develops into motivation that makes you
                                persistently work. This sensation, this passion manifests into the work we produce and
                                transpires our story.</p>
                        </Card>
                    </Col>
                    <Col offset={4} span={5} className="card-wrapper">
                        <Card title="Integrity" bordered={false}>
                            <p>Live true to who you are, be happy with the growth you are on – don’t feel compelled to
                                be someone you are not. You are you and will always be you.</p>
                        </Card>
                    </Col>
                    <Col span={5} className="card-wrapper">
                        <Card title="Perfection" bordered={false}>
                            <p>The satisfaction of our outcome. That internal acknowledge that removes all doubt from
                                our minds when we deliver.</p>
                        </Card>
                    </Col>
                    <Col offset={4} span={5} className="card-wrapper">
                        <Card title="Compassion" bordered={false}>
                            <p>If you want others to be happy, practice compassion. If you want to be happy, practice
                                compassion. – Dalai Lama </p>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Lifeline;