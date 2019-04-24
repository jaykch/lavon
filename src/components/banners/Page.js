import React, {Component} from 'react';
import Typist from 'react-typist';
import {Row, Col} from 'antd';
import './Page.css';

import PremiumButton from "../buttons/PremiumButton";
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
                            <PremiumButton to="/contact-us" text="Get In Touch"/>
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
    text: PropTypes.string,
};

export default PageBanner;
