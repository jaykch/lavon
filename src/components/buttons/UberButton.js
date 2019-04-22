import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './UberButton.css';

class UberButton extends Component {
    render() {
        return (
            <Link to={this.props.to} className="uber-button">
                <span>{this.props.text} &nbsp;</span>
                <span className="arrow">→</span>
            </Link>
        );
    }
}

export default UberButton;