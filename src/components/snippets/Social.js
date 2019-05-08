import React, {Component} from 'react';
import './Social.css';
import {Col, Row} from "antd";
import PremiumOutboundLink from "../buttons/PremiumOutboundLink";

class SocialSnippet extends Component {
    render() {
        return (
            <Row className="social-snippet">
                <Col xs={24} lg={14}>
                    <h1>Social Media</h1>
                    <span className="subtitle">Contact us on our social media</span>
                    <br/>
                    <div className="snippet-content">
                        <PremiumOutboundLink to="https://www.facebook.com/lavonau" icon="facebook" text="Facebook"/>
                        <PremiumOutboundLink to="https://www.instagram.com/lavonaus" icon="instagram" text="Instagram"/>
                        <PremiumOutboundLink to="https://www.linkedin.com/company/lavonmelb" icon="linkedin"
                                             text="LinkedIn"/>
                    </div>
                </Col>
            </Row>
        );
    }
}

export default SocialSnippet;