import React, {Component} from 'react';
import {Col, Row} from "antd";
import './Contact.css';
import PremiumOutboundLink from "../buttons/PremiumOutboundLink";

class ContactSnippet extends Component {
    render() {
        return (
            <Row className="contact-snippet">
                <Col xs={24} lg={12} className="snippet-content">
                    <h1>Let's Chat</h1>
                    <PremiumOutboundLink to="https://m.me/lavonau" text="Chat Now!"/>
                </Col>
            </Row>
        );
    }
}

export default ContactSnippet;