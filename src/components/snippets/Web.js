import React, {Component} from 'react';
import './Web.css';
import {Col, Row} from "antd";

class WebSnippet extends Component {
    render() {
        return (
            <Row className="web-snippet">
                <Col xs={24} lg={{span: 14, offset: 6}} className="snippet-content">
                    <h1>Web Services</h1>
                    <span className="subtitle">Bespoke Software Solutions</span>
                    <Col xs={24} lg={8}>
                        <h4>Web development</h4>
                        <ul>
                            <li>Lorem</li>
                            <li>Lorem</li>
                            <li>Lorem</li>
                            <li>Lorem</li>
                        </ul>
                        <h4>updating existing sites</h4>
                        <ul>
                            <li>Lorem</li>
                            <li>Lorem</li>
                            <li>Lorem</li>
                            <li>Lorem</li>
                        </ul>
                        <h4>Analytics</h4>
                        <ul>
                            <li>Lorem</li>
                            <li>Lorem</li>
                            <li>Lorem</li>
                            <li>Lorem</li>
                        </ul>
                    </Col>
                    <Col xs={24} lg={8}>
                        gif
                    </Col>
                    <Col xs={24} lg={8}>
                        <h4>SEO</h4>
                        <ul>
                            <li>Lorem</li>
                            <li>Lorem</li>
                            <li>Lorem</li>
                            <li>Lorem</li>
                        </ul>
                        <h4>eCommerce</h4>
                        <ul>
                            <li>Lorem</li>
                            <li>Lorem</li>
                            <li>Lorem</li>
                            <li>Lorem</li>
                        </ul>
                        <h4>Backend and API</h4>
                        <ul>
                            <li>Lorem</li>
                            <li>Lorem</li>
                            <li>Lorem</li>
                            <li>Lorem</li>
                        </ul>
                    </Col>
                </Col>
            </Row>
        );
    }
}

export default WebSnippet;