import React, {Component} from 'react';
import {Statistic, Row, Col} from 'antd';
import './Countdown.css';

const Counter = Statistic.Countdown;
const deadline = new Date("June 30, 2019");

class Countdown extends Component {
    render() {
        return (
            <div id="countdown">
                <Row gutter={16} className="text-center">
                    <Col xs={24} lg={{span: 12, offset: 5}}>
                        <h1>Next Milestone</h1>
                        <Counter value={deadline} format="D day H:m:s"/>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Countdown;