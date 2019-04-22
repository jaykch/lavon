import React, {Component} from 'react';
import './Innovation.css';
import {Layout, Row, Col} from 'antd';
const {Content} = Layout;

class Innovation extends Component {
    render() {
        return (
            <Content style={{margin: '0 16px'}} className="innovation-snippet">
                <Row>
                    <Col span={7} offset={13} className="snippet-content">
                        <h1>Innovation</h1>
                        <span className="subtitle">Lorem ipsum dolor seti</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </Col>
                </Row>
            </Content>
        );
    }
}

export default Innovation;