import React, {Component} from 'react';
import './About.css';

import {Layout, Row, Col} from 'antd';
const {Content} = Layout;

class About extends Component {
    render() {
        return (
            <Content style={{margin: '0 16px'}} className="about-snippet">
                <Row>
                    <Col span={13} offset={4} className="snippet-content">
                        <h1>About</h1>
                    </Col>
                </Row>
            </Content>
        );
    }
}

export default About;