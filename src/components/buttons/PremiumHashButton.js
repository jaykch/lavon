import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import {Link} from "react-router-dom";
import {Link} from "react-scroll";

import './PremiumButton.css';

class PremiumHashButton extends Component {
    render() {
        return (
            <Link activeClass="active"
                  to={this.props.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="premium-hash-button premium-button"
            >
                <span>{this.props.text} &nbsp;</span>
                <span className="arrow">↓</span>
            </Link>
        );
    }
}

PremiumHashButton.propTypes = {
    to: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default PremiumHashButton;