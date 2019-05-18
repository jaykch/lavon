import React, {Component} from 'react';
import './Branding.css';
import {Col, Icon, Row} from "antd";

class BrandingSnippet extends Component {
    render() {
        return (
            <Row className="branding-snippet">
                <Col span={24} className="snippet-wrapper">
                    <Col md={0} lg={{span: 12}} className="image-container">
                        <div className="image-wrapper"></div>
                    </Col>
                    <Col xs={24} lg={{span: 12}} className="snippet-content">
                        <h1>BRANDING
                        </h1>
                        <span className="subtitle">Our branding services include:</span>
                        <ul className="services">
                            <li className="service"><Icon type="form"/>
                                <h3>Identity Creation</h3>
                                <span>The launching pad that helps you build the perfect brand.</span>
                            </li>
                            <li className="service"><Icon type="global"/>
                                <h3>Social Frameworks</h3>
                                <span>Showcase your brand’s look and personality through social media.</span>
                            </li>
                            <li className="service"><Icon type="read"/>
                                <h3>Story Telling</h3>
                                <span>Tell your audiences who you are, what you do, and why you do it.</span>
                            </li>
                            <li className="service"><Icon type="cluster"/>
                                <h3>Collateral</h3>
                                <span>Extension of your brand identity to all tangible assets</span>
                            </li>
                        </ul>
                    </Col>

                </Col>
            </Row>
        );
    }
}

export default BrandingSnippet;