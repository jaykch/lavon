import React, {Component} from 'react';
import './Branding.css';
import {Col, Row} from "antd";
import web from "../../media/images/gif/web.gif";

class BrandingSnippet extends Component {
    render() {
        return (
            <Row className="branding-snippet">
                <Col xs={24} lg={{span: 15}}>
                    <h1>Branding</h1>
                    <span className="subtitle">Branding strategy and other bulshit</span>
                    <br/>
                </Col>
                <Col xs={24} lg={15} className="snippet-content">
                    <Col xs={24} lg={12}>
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
                    <Col xs={24} lg={12} className="image-container">
                        <img src={web} alt="Branding Services"/>
                    </Col>
                </Col>
            </Row>
        );
    }
}

export default BrandingSnippet;