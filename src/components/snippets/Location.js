import React, {Component} from 'react';
import {Row, Col} from 'antd';
import './Location.css';

class LocationSnippet extends Component {
    render() {
        return (
            <Row className="location-snippet">
                <iframe className="google-map"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d25216.275276720033!2d144.9602118!3d-37.812663!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4abeb36477%3A0xf41a264e33d2b15e!2sQueen+St%2C+Melbourne+VIC+3000!5e0!3m2!1sen!2sau!4v1555901993572!5m2!1sen!2sau"
                        frameBorder="0" allowFullScreen></iframe>
                {/*<Row>*/}
                {/*    <Col span={14} className="snippet-content">*/}
                {/*        <h1>Location</h1>*/}
                {/*        <span className="subtitle">Farenheight</span>*/}
                {/*        <hr/>*/}
                {/*        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut*/}
                {/*            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco*/}
                {/*            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in*/}
                {/*            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat*/}
                {/*            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>*/}
                {/*    </Col>*/}
                {/*</Row>*/}
            </Row>
        );
    }
}

export default LocationSnippet;