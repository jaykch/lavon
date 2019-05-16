import React, {Component} from 'react';
import './Branding.css';
import {Col, Icon, Row} from "antd";

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
                        <span className="subtitle">Our branding services include:</span>
                        <ul className="services">
                            <li className="service"><Icon type="box-plot" theme="filled"/>
                            <h3>Brand Design</h3>
                                <span>Capture the essence of what your brand aspires to be.</span>
                            </li>
                            <li className="service"><Icon type="box-plot" theme="filled"/>
                                <h3>Brand Design</h3>
                                <span>Capture the essence of what your brand aspires to be.</span>
                            </li>
                            <li className="service"><Icon type="box-plot" theme="filled"/>
                                <h3>Brand Design</h3>
                                <span>Capture the essence of what your brand aspires to be.</span>
                            </li>
                            <li className="service"><Icon type="box-plot" theme="filled"/>
                                <h3>Brand Design</h3>
                                <span>Capture the essence of what your brand aspires to be.</span>
                            </li>
                        </ul>
                    </Col>

                </Col>
            </Row>
        );
    }
}

export default BrandingSnippet;