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
                    <Row>
                        <Col className="banner-content" xs={24} lg={{span: 16}}>
                            <img src={logo} alt="LAVON"/>
                            <Typist><span className="subtitle">Concept to creation</span></Typist>
                            <p>Exploring services that expand beyond industry standards by bringing more value for the
                                right price.</p>
                            <PremiumButton to="/contact-us" text="Get In Touch"/>
                        </Col>
                    </Row>
                </div>
            </header>
        );
    }
}

export default HomeBanner;
