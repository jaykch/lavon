import React, {Component} from 'react';
import './Web.css';
import {Col, Row, Icon} from "antd";

class WebSnippet extends Component {
    render() {
        return (
            <Row className="web-snippet">
                <Col lg={24} className="snippet-wrapper">
                    <Col xs={24} lg={{span: 12}} className="snippet-content">
                        <h1>Web Services</h1>
                        <span className="subtitle">Bespoke Software Solutions</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.</p>
                        <br/>
                        <div className="services">
                            <div className="service">
                                <div className="headline">
                                    <Icon type="desktop"/>
                                    <h3>Web development <Icon type="down"/></h3>
                                </div>
                                <ul>
                                    <li>Lorem</li>
                                    <li>Lorem</li>
                                    <li>Lorem</li>
                                    <li>Lorem</li>
                                </ul>
                            </div>
                            <div className="service">
                                <div className="headline">
                                    <Icon type="desktop"/>
                                    <h3>Updating existing <Icon type="down"/></h3>
                                </div>
                                <ul>
                                    <li>Lorem</li>
                                    <li>Lorem</li>
                                    <li>Lorem</li>
                                    <li>Lorem</li>
                                </ul>
                            </div>
                            <div className="service">
                                <div className="headline">
                                    <Icon type="desktop"/>
                                    <h3>Analytics <Icon type="down"/></h3>
                                </div>
                                <ul>
                                    <li>Lorem</li>
                                    <li>Lorem</li>
                                    <li>Lorem</li>
                                    <li>Lorem</li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col xs={24} lg={{span: 12}} className="image-container">
                        <div className="image-wrapper"></div>
                    </Col>
                </Col>
            </Row>
        );
    }
}

export default WebSnippet;