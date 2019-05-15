import React, {Component} from 'react';
import './Branding.css';
import {Col, Icon, Row} from "antd";
import web from "../../media/images/gif/web.gif";

class BrandingSnippet extends Component {
    render() {
        return (
            <Row className="branding-snippet">
                <Col lg={24} className="snippet-wrapper">
                    <Col xs={24} lg={{span: 12}} className="image-container">
                        <div className="image-wrapper"></div>
                    </Col>
                    <Col xs={24} lg={{span: 12}} className="snippet-content">
                        <h1>BRANDING
                        </h1>
                        <span className="subtitle">Branding strategy and other bulshit</span>
                        <p>The essence of what your brand aspires to be. We work with you to build your brand’s
                            personality from scratch. Your final brand design will be completely unique, void of cliché
                            and perfectly aligned with your vision.</p>
                        <span>Our branding services include:</span>
                        <ul>
                            <li>- Brand Design</li>
                            <li>- Brand Design</li>
                            <li>- Brand Design</li>
                            <li>- Brand Design</li>
                            <li>- Brand Design</li>
                            <li>- Brand Design</li>
                        </ul>
                    </Col>

                </Col>
            </Row>
        );
    }
}

export default BrandingSnippet;