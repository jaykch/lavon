import React, {Component} from 'react';
import Typist from 'react-typist';
import {Row, Col} from 'antd';
import './Home.css';

import logo from '../../media/images/logos/logo-inverted.png';
import PremiumButton from "../buttons/PremiumButton";

class HomeBanner extends Component {
    render() {
        return (
            <header>
                <div className="home-banner">
                    <Row style={{margin: '0 16px'}}>
                        <Col className="banner-content" xs={24} lg={{span: 12, offset: 5}}>
                            <img src={logo} alt="LAVON"/>
                            <Typist><span className="subtitle">Concept to creation</span></Typist>
                            <p>Lavon is rapidly growing into a Media giant that is reshaping the industry. We Explore
                                services that expand beyond the industry standards by offering more for the right
                                price.</p>
                            <PremiumButton to="/contact-us" text="Get In Touch"/>
                        </Col>
                    </Row>
                </div>
            </header>
        );
    }
}

export default HomeBanner;
