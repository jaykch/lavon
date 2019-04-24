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
                        <Col className="banner-content" span={12} offset={5}>
                            <img src={logo} alt="LAVON"/>
                            <Typist><span className="subtitle">Concept to creation</span></Typist>
                            <p>Launching in 2019, Lavon is a rapidly growing start-up that focuses on reshaping the
                                media and marketing space in Australia by June 2026. Lavon started up as an idea
                                that the founders bounced around and came to fruition on April 11th. Moving forward,
                                the team has explored services that expand beyond industry standards by offering
                                more for the right price. </p>
                            <PremiumButton to="/contact-us" text="Get In Touch"/>
                        </Col>
                    </Row>
                </div>
            </header>
        );
    }
}

export default HomeBanner;
