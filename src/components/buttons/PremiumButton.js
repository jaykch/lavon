import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import './PremiumButton.css';

class PremiumButton extends Component {
    render() {
        return (
            <Link to={this.props.to} className="premium-button">
                <span>{this.props.text} &nbsp;</span>
                <span className="arrow">→</span>
            </Link>
        );
    }
}

PremiumButton.propTypes = {
    to: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default PremiumButton;