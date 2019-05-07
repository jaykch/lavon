import React, {Component} from 'react';
import './DigitalMarketing.css';
import {Col, Icon, Row} from "antd";

class DigitalMarketingSnippet extends Component {
    render() {
        return (
            <Row className="digital-marketing-snippet">
                <Col xs={24} lg={{span: 15}} className="header">
                    <h1>Digital Marketing</h1>
                    <span className="subtitle">Marketing of digital stuff</span>
                    <br/>
                </Col>
                <Col xs={24} lg={15} className="snippet-content">
                    <Col xs={24} lg={8} className="service-container">
                        <Icon type="box-plot" theme="filled"/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </Col>
                    <Col xs={24} lg={8} className="service-container">
                        <Icon type="box-plot" theme="filled"/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </Col>
                    <Col xs={24} lg={8} className="service-container">
                        <Icon type="box-plot" theme="filled"/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </Col>
                </Col>
            </Row>
        );
    }
}

export default DigitalMarketingSnippet;