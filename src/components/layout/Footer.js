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
                <Row className="site-map">
                    <Col xs={24} lg={{span: 6}}>
                        <h2>Navigation</h2>
                        <ul>
                            <li><Link to="/" className="footer-link">Home</Link></li>
                            <li><Link to="/services" className="footer-link">Our Services</Link></li>
                            <li><Link to="/about-us" className="footer-link">Life At Lavon</Link></li>
                            <li><Link to="/contact-us" className="footer-link">Get Connected</Link></li>
                            <li><Link to="/roadmap" className="footer-link">Our Roadmap</Link></li>
                        </ul>
                    </Col>
                    <Col xs={24} lg={{span: 6}}>
                        <h2>Services</h2>
                        <ul>
                            <li><Link to="/services/partnerships" className="footer-link">Partnerships</Link></li>
                            <li><Link to="/services/restart" className="footer-link">Restart</Link></li>
                            <li><Link to="/services/saver" className="footer-link">Saver</Link></li>
                        </ul>
                    </Col>
                    <Col xs={24} lg={{span: 3}}>
                        <h2>&nbsp;</h2>
                        <span>+61 3 9068 6180</span><br/><br/>
                        <span>Suite 54/135  </span><br/>
                        <span>Cardigan St, Carlton</span><br/>
                        <span>Vic, Australia 3053</span>
                        <PremiumButton to="/contact-us" text="Get A Quote"/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={24} lg={{span: 20}} className="footer-wrapper">
                        <div className="social-icons">
                            <a href="https://www.facebook.com/lavonau/" target="_blank" rel="noopener noreferrer">
                                <Icon type="facebook" theme="filled"/>
                            </a>
                            <a href="https://www.instagram.com/lavonaus/" target="_blank" rel="noopener noreferrer">
                                <Icon type="instagram" theme="filled"/>
                            </a>
                            <a href="https://www.linkedin.com/company/lavonmelb/" target="_blank"
                               rel="noopener noreferrer">
                                <Icon type="linkedin" theme="filled"/>
                            </a>
                            <a href="https://www.linkedin.com/company/lavonmelb/" target="_blank"
                               rel="noopener noreferrer">
                                <Icon type="youtube" theme="filled"/>
                            </a>
                        </div>
                        <div>
                            <span className="copyright">&copy;2019 Lavon | Concept To Creation</span>
                        </div>
                    </Col>
                </Row>
            </Footer>
        );
    }
}

export default AppFooter;