import React, {Component} from 'react';
import {Row, Col, Card} from 'antd';
import './Clients.css';
import UberButton from "../buttons/UberButton";

class ClientsSnippet extends Component {
    render() {
        return (
            <Row className="clients-snippet">
                <Col xs={24} lg={{span: 14, offset: 5}} className="snippet-content">
                    <Card bordered={false}>
                        <h1>Our Clients</h1>
                        <span className="subtitle">The extensions of Lavon</span>
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
                            <p><em>"Lavon is everything you can ask for from an agency! Working with them was great –
                                every stage of development was clearly laid out, they made sure the company was a part
                                of the entire process"</em></p>
                            <footer><cite>Dynopower Systems</cite>
                            </footer>
                        </blockquote>
                        <UberButton to="/about-us" text="Learn More"/>
                    </Card>
                </Col>
            </Row>
        );
    }
}

export default ClientsSnippet;