import React, {Component} from 'react';
import './Web.css';
import {Col, Row, Icon} from "antd";

class WebSnippet extends Component {
    render() {
        return (
            <Row className="web-snippet">
                <Col span={24} className="snippet-wrapper">
                    <Col xs={24} lg={{span: 12}} className="snippet-content">
                        <h1>Digital Services</h1>
                        <span className="subtitle">Websites for the future</span>
                        <br/>
                        <div className="services">
                            <div className="service">
                                <div className="headline">
                                    <Icon type="coffee"/>
                                    <h3>Getting started<Icon type="down"/></h3>
                                </div>
                                <ul>
                                    <li>Customized Squarespace Site</li>
                                    <li>Logo and Elements</li>
                                    <li>Basic Bootstrap Site</li>
                                    <li>Creating around Idea</li>
                                </ul>
                            </div>
                            <div className="service">
                                <div className="headline">
                                    <Icon type="shop"/>
                                    <h3>Improved performance<Icon type="down"/></h3>
                                </div>
                                <ul>
                                    <li>Analytics &amp; Strategy</li>
                                    <li>SEO Optimisation</li>
                                    <li>UI/UX Design</li>
                                    <li>Development from Scratch</li>
                                </ul>
                            </div>
                            <div className="service">
                                <div className="headline">
                                    <Icon type="bank"/>
                                    <h3>Enterprise ready<Icon type="down"/></h3>
                                </div>
                                <ul>
                                    <li>Custom E-commerce</li>
                                    <li>Backend &amp; REST API</li>
                                    <li>Hybrid App Development</li>
                                    <li>Administrative Dashboards</li>
                                    <li>Data Management</li>
                                    <li>Automation through Software</li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col md={0} lg={{span: 12}} className="image-container">
                        <div className="image-wrapper"></div>
                    </Col>
                </Col>
            </Row>
        );
    }
}

export default WebSnippet;