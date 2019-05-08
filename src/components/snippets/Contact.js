import React, {Component} from 'react';
import {Col, Row} from "antd";
import './Contact.css';
import PremiumButton from "../buttons/PremiumButton";

class ContactSnippet extends Component {
    render() {
        return (
            <Row className="contact-snippet">
                <Col xs={24} lg={{span: 10, offset: 5}} className="snippet-content">
                    <h1>Let's Chat</h1>
                </Col>
                <Col xs={24} lg={6} className="snippet-content">
                    <PremiumButton to="/contact-us" text="Click Here!"/>
                </Col>
            </Row>
        );
    }
}

export default ContactSnippet;