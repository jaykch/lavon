import React, {Component} from 'react';
import './Web.css';
import {Col, Row, Icon} from "antd";
import web from '../../media/images/gif/web.gif'

class WebSnippet extends Component {
    render() {
        return (
            <Row className="web-snippet">
                <Col xs={24} lg={{span: 15}}>
                    <h1>Web Services</h1>
                    <span className="subtitle">Bespoke Software Solutions</span>
                    <br/>
                </Col>
                <Col xs={24} lg={18} className="snippet-content">
                    <Col xs={24} lg={7} className="services">
                        <div className="service">
                            <div className="headline">
                                <Icon type="desktop"/>
                                <h3>Web development <Icon type="down" /></h3>
                            </div>
                            <ul>
                                <li>Lorem</li>
                                <li>Lorem</li>
                                <li>Lorem</li>
                                <li>Lorem</li>
                            </ul>
                        </div>
                        <div className="service">
                            <div className="headline">
                                <Icon type="desktop"/>
                                <h3>Updating existing <Icon type="down" /></h3>
                            </div>
                            <ul>
                                <li>Lorem</li>
                                <li>Lorem</li>
                                <li>Lorem</li>
                                <li>Lorem</li>
                            </ul>
                        </div>
                        <div className="service">
                            <div className="headline">
                                <Icon type="desktop"/>
                                <h3>Analytics <Icon type="down" /></h3>
                            </div>
                            <ul>
                                <li>Lorem</li>
                                <li>Lorem</li>
                                <li>Lorem</li>
                                <li>Lorem</li>
                            </ul>
                        </div>
                    </Col>
                    <Col xs={24} lg={10} className="image-container">
                        <img src={web} alt="Web Development"/>
                    </Col>
                    <Col xs={24} lg={7} className="services">
                        <div className="service">
                            <div className="headline">
                                <Icon type="desktop"/>
                                <h3>SEO <Icon type="down" /></h3>
                            </div>
                            <ul>
                                <li>Lorem</li>
                                <li>Lorem</li>
                                <li>Lorem</li>
                                <li>Lorem</li>
                            </ul>
                        </div>
                        <div className="service">
                            <div className="headline">
                                <Icon type="desktop"/>
                                <h3>eCommerce <Icon type="down" /></h3>
                            </div>
                            <ul>
                                <li>Lorem</li>
                                <li>Lorem</li>
                                <li>Lorem</li>
                                <li>Lorem</li>
                            </ul>
                        </div>
                        <div className="service">
                            <div className="headline">
                                <Icon type="desktop"/>
                                <h3>Backend and API <Icon type="down" /></h3>
                            </div>
                            <ul>
                                <li>Lorem</li>
                                <li>Lorem</li>
                                <li>Lorem</li>
                                <li>Lorem</li>
                            </ul>
                        </div>
                    </Col>
                </Col>
            </Row>
        );
    }
}

export default WebSnippet;