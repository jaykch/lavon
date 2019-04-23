import React, {Component} from 'react';
import {Row, Col, Card} from 'antd';
import './Clients.css';
import UberButton from "../buttons/UberButton";

class ClientsSnippet extends Component {
    render() {
        return (
            <Row className="clients-snippet">
                <Col span={14} offset={5} className="snippet-content">
                    <Card bordered={false}>
                        <h1>Our Clients</h1>
                        <span className="subtitle">Who we work with</span>
                        <hr/>
                        <div className="client-list">
                            <span>EAGLE PIZZAS</span>
                            <span>Conferro Auctions</span>
                            <span>Muki Sports</span>
                            <span>Yugen Technologies</span>
                            <span>Murray Sam Holdings</span>
                            <span>DYNAMECH ELECTRO POWER</span>
                        </div>
                        <blockquote>
                            <p><em>"Lavon is everything you can ask for from an agency: experts, reliable, agile and
                                with technology and knowledge that make the difficult easy. What would we do without
                                them!"</em></p>
                            <footer><cite>Dynopower Systems</cite>
                            </footer>
                        </blockquote>
                        <UberButton to="/clients" text="Our clients"/>
                    </Card>
                </Col>
            </Row>
        );
    }
}

export default ClientsSnippet;