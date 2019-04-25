import React, {Component} from 'react';
import Typist from 'react-typist';
import {Row, Col} from 'antd';
import './Page.css';

import PropTypes from "prop-types";

class PageBanner extends Component {
    render() {
        return (
            <header>
                <div className="page-banner">
                    <Row style={{margin: '0 16px'}}>
                        <Col className="banner-content" span={12} offset={5}>
                            <h1>{this.props.title}</h1>
                            <Typist><span className="subtitle">{this.props.subtitle}</span></Typist>
                            <p>{this.props.text}</p>
                            {this.props.button}
                        </Col>
                    </Row>
                </div>
            </header>
        );
    }
}

PageBanner.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    button: PropTypes.node,
};

export default PageBanner;
