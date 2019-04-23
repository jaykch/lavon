import React, {Component} from 'react';
import {Layout, Row, Col, Icon} from "antd";
import './Footer.css'
import logo from "../../media/images/logos/logo-inverted.png";
import {Link} from "react-router-dom";
import PremiumButton from "../buttons/PremiumButton";

const {
    Footer
} = Layout;

class AppFooter extends Component {
    render() {
        return (
            <Footer id="footer">
                <Row className="logo">
                    <img src={logo} alt="LAVON"/><span> | Concept to Creation</span>
                </Row>
                <Row>
                    <Col span={6}>
                        <h2>Navigation</h2>
                        <ul>
                            <li><Link to="/" className="footer-link">Home</Link></li>
                            <li><Link to="/services" className="footer-link">Our Services</Link></li>
                            <li><Link to="/about-us" className="footer-link">Life At Lavon</Link></li>
                            <li><Link to="/contact-us" className="footer-link">Get Connected</Link></li>
                            <li><Link to="/roadmamp" className="footer-link">Our Roadmap</Link></li>
                        </ul>
                    </Col>
                    <Col span={6}>
                        <h2>Services</h2>
                        <ul>
                            <li><Link to="/services/partnerships" className="footer-link">Partnerships</Link></li>
                            <li><Link to="/services/restart" className="footer-link">Restart</Link></li>
                            <li><Link to="/services/saver" className="footer-link">Saver</Link></li>
                        </ul>
                    </Col>
                    <Col span={3} className="text-right">
                        <h2>&nbsp;</h2>
                        <span>512-206-xxxx | 512-777-xxxx</span><br/><br/>
                        <span>Queen St, Melbourne </span><br/>
                        <span>VIC, Australia 3004</span>
                        <PremiumButton to="#" text="Get A Quote"/>
                    </Col>
                </Row>
                <hr/>
                <Row >
                    <Col span={12} className="social-icons">
                        <a href="https://www.facebook.com/lavonau/" target="_blank">
                            <Icon type="facebook" theme="filled"/>
                        </a>
                        <a href="https://www.instagram.com/lavonaus/" target="_blank">
                            <Icon type="instagram" theme="filled"/>
                        </a>
                        <a href="https://www.linkedin.com/company/lavonmelb/" target="_blank">
                            <Icon type="linkedin" theme="filled"/>
                        </a>
                        <a href="https://www.linkedin.com/company/lavonmelb/" target="_blank">
                            <Icon type="youtube" theme="filled"/>
                        </a>
                    </Col>
                    <Col span={3}>
                        <span className="copyright">&copy;2019 Lavon | Concept To Creation</span>
                    </Col>
                </Row>
            </Footer>
        );
    }
}

export default AppFooter;