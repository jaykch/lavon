import React, {Component} from 'react';
import {Col, Row} from "antd";

class ContactSnippet extends Component {
    render() {
        return (
            <Row className="contact-snippet">
                <Col xs={24} lg={{span: 14, offset: 5}} className="snippet-content">
                    <h1>Contact Form</h1>
                </Col>
            </Row>
        );
    }
}

export default ContactSnippet;