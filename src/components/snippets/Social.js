import React, {Component} from 'react';
import './Social.css';
import {Col, Row} from "antd";

class SocialSnippet extends Component {
    render() {
        return (
            <Row className="social-snippet">
                <Col xs={24} lg={{span: 14, offset: 5}} className="snippet-content">
                    <h1>Social Media</h1>
                </Col>
            </Row>
        );
    }
}

export default SocialSnippet;