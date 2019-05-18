import React, {Component} from 'react';
import {Row, Col} from 'antd';
import './ClientQuote.css';
import UberButton from "../buttons/UberButton";

class ClientQuoteSnippet extends Component {
    render() {
        return (
            <Row className="client-quote-snippet">
                <Col xs={24}  className="snippet-content ocean">
                    <blockquote>
                        <p><em>"Lavon is everything you can ask for from an agency! Working with them was great –
                            every stage of development was clearly laid out, they made sure the company was a part
                            of the entire process"</em></p>
                        <footer><cite>Dynopower Systems</cite>
                        </footer>
                    </blockquote>
                    <div className="wave"></div>
                    <div className="wave"></div>
                </Col>
            </Row>
        );
    }
}

export default ClientQuoteSnippet;