import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './PremiumOutboundLink.css';
import {Icon} from "antd";

class PremiumOutboundLink extends Component {
    render() {
        return (
            <a href={this.props.to} target="_blank" rel="noopener" className="premium-outbound-link">
                {this.props.icon ? <Icon type={this.props.icon} theme="filled"/> : null}
                <span>{this.props.text} &nbsp;</span>
                <span className="arrow">→</span>
            </a>
        );
    }
}

PremiumOutboundLink.propTypes = {
    to: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    icon: PropTypes.string
};

export default PremiumOutboundLink;