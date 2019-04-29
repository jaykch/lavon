import React, {Component} from 'react';
import {Row, Col} from 'antd';
import './Work.css';

class WorkSnippet extends Component {
    render() {
        return (
            <Row className="work-snippet">
                <Col xs={24} lg={{span: 7, offset: 5}} className="works-container">
                    <a href="http://www.dynamechelectropower.com/" target="_blank" rel="noopener noreferrer"
                       className="work-showcase">
                        Dynamech
                    </a>
                    <a href="http://eaglepizzas.com.au/" target="_blank" rel="noopener noreferrer"
                       className="work-showcase">
                        Eagle Pizza
                    </a>
                    <a href="http://www.dynopowersystems.com/" target="_blank" rel="noopener noreferrer"
                       className="work-showcase">
                        Dynopower
                    </a>
                    <a href="https://yugentechnologies.github.io/" target="_blank" rel="noopener noreferrer"
                       className="work-showcase">
                        Yugen
                    </a>
                    <a href="https://www.the16yearoldmaoriboy.co.nz/" target="_blank" rel="noopener noreferrer"
                       className="work-showcase">
                        16yomb
                    </a>
                    <a href="http://www.mukisports.com/" target="_blank" rel="noopener noreferrer"
                       className="work-showcase">
                        Muki
                    </a>
                    <a href="http://conferroheritae.com/" target="_blank" rel="noopener noreferrer"
                       className="work-showcase">
                        Conferro
                    </a>
                    <a href="https://www.xrpaustralia.com.au" target="_blank" rel="noopener noreferrer"
                       className="work-showcase">
                        XRP Au
                    </a>
                </Col>
                <Col xs={24} lg={{span: 7}} className="snippet-content">
                    <h1>Our Work</h1>
                    <span className="subtitle">Delivering Perfection</span>
                    <hr/>
                    <p>It is possible to have a website where it obtains results and being an integral part of your
                        commercial strategy. It is feasible in creating a product bespoke to your brand/company while
                        merging innovation, profitability and growth. We are never happy to settle with “it can work”;
                        the work at Lavon has to be ‘perfect’.
                    </p>
                    <p>Great work comes from great ideas, great strategy and great people.</p>
                </Col>
            </Row>
        );
    }
}

export default WorkSnippet;