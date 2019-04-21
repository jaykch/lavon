import React, {Component} from 'react';
import Typist from 'react-typist';
import './Home.css'

import {Layout, Row, Col} from 'antd';
const {Content} = Layout;

class Home extends Component {
    render() {
        return (
            <header>
                <div className="home-banner">
                    <Content style={{margin: '0 16px'}}>
                        <Row>
                            <Col className="banner-content" span={13} offset={4}>
                                <h1>LAVON</h1>
                                <Typist><span className="subtitle">Concept to creation</span></Typist>
                                <p>Opening in 2019, The Market Line is an expansive, bazaar-like marketplace running
                                    three city blocks along Broome Street as part of the Essex Crossing project on the
                                    Lower East Side. The Market Line will bring together an eclectic mix of more than
                                    100 locally-sourced food, art, music, and fashion vendors reflecting the character
                                    and culture of the LES. When complete, the 150,000-square foot Market Line will be
                                    the largest market in New York City and one of the largest in the world.</p>
                                <a href="#" className="button">Get in touch</a>
                            </Col>
                        </Row>
                    </Content>

                </div>
            </header>
        );
    }
}

export default Home;
