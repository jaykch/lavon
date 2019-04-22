import React, {Component} from 'react';
import './Clients.css';
import {Layout, Row, Col} from 'antd';

const {Content} = Layout;

class Clients extends Component {
    render() {
        return (
            <Content style={{margin: '0 16px'}} className="clients-snippet">
                <Row>
                    <Col span={14} className="snippet-content">
                        <h1>Clients</h1>
                        <span className="subtitle">Lorem ipsum dolor seti</span>
                        <hr/>
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

export default Clients;