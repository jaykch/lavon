import React, {Component} from 'react';
import {Row, Col} from 'antd';
import './Work.css';

class WorkSnippet extends Component {
    render() {
        return (
            <Row className="work-snippet">
                <Col xs={24} lg={12} className="snippet-content">
                    <h1>Our Work</h1>
                    <span className="subtitle">Delivering Perfection</span>
                    <hr/>
                    <div className="works-container">
                        <a href="http://jovian-technologies.com/" target="_blank" rel="noopener noreferrer"
                           className="work-showcase">
                            VIP Rides
                        </a>
                        <a href="https://www.the16yearoldmaoriboy.co.nz/" target="_blank" rel="noopener noreferrer"
                           className="work-showcase">
                            16yomb
                        </a>
                        <a href="http://www.dynopowersystems.com/" target="_blank" rel="noopener noreferrer"
                           className="work-showcase">
                            Dynopower
                        </a>
                        <a href="https://yugentechnologies.github.io/" target="_blank" rel="noopener noreferrer"
                           className="work-showcase">
                            Yugen
                        </a>
                        <a href="http://www.mukisports.com/" target="_blank" rel="noopener noreferrer"
                           className="work-showcase">
                            Muki
                        </a>
                        <a href="http://www.dynamechelectropower.com/" target="_blank" rel="noopener noreferrer"
                           className="work-showcase">
                            Dynamech
                        </a>
                        <a href="http://conferroheritae.com/" target="_blank" rel="noopener noreferrer"
                           className="work-showcase">
                            Conferro
                        </a>
                    </div>
                </Col>
            </Row>
        );
    }
}

export default WorkSnippet;