import React, {Component} from 'react';
import { Statistic, Row } from 'antd';
import './Countdown.css';

const Counter = Statistic.Countdown;
const deadline = new Date("June 30, 2019");

class Countdown extends Component {
    render() {
        return (
            <div id="countdown">
                <Row gutter={16} className="text-center">
                        <h1>Next Milestone</h1>
                        <Counter value={deadline} format="D day H:m:s"/>
                </Row>
            </div>
        );
    }
}

export default Countdown;