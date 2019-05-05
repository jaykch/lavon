import React, {Component} from 'react';
import './Branding.css';
import {Col, Row} from "antd";

class BrandingSnippet extends Component {
    render() {
        return (
            <Row className="branding-snippet">
                <Col xs={24} lg={{span: 14, offset: 5}} className="snippet-content">
                    <h1>Branding</h1>
                    <span className="subtitle">Branding strategy and other bulshit</span>
                    <Col xs={24} lg={12}>
                        image
                    </Col>
                    <Col xs={24} lg={12}>
                        gif
                    </Col>
                </Col>
            </Row>
        );
    }
}

export default BrandingSnippet;