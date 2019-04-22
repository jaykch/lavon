import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Icon, Layout, Menu} from "antd";

import './Navbar.css';

const {
    Sider,
} = Layout;

class Navbar extends Component {
    render() {
        return (
            <Sider className="navbar" breakpoint="lg" collapsedWidth="0"
                   onBreakpoint={(broken) => {
                       console.log(broken);
                   }}
                   onCollapse={(collapsed, type) => {
                       console.log(collapsed, type);
                   }}
                   style={{
                       overflow: 'hidden', height: '100vh', position: 'fixed', right: 0
                   }}
            >
                <div className="logo"/>
                <Menu mode="inline" defaultSelectedKeys={['/']} defaultOpenKeys={['/']}
                      // selectedKeys={[this.props.location.pathname]}
                    >
                    <Menu.Item key="/">
                        <Link to="/">
                            <Icon type="home" theme="filled"/>
                            <span className="nav-text">Home</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="/about-us">
                        <Link to="/">
                            <Icon type="idcard" theme="filled"/>
                            <span className="nav-text">Life at Lavon</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="/contact-us">
                        <Link to="/">
                            <Icon type="contacts" theme="filled"/>
                            <span className="nav-text">Get Connected</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="/roadmap">
                        <Link to="/">
                            <Icon type="build" theme="filled"/>
                            <span className="nav-text">Our Roadmap</span>
                        </Link>
                    </Menu.Item>
                </Menu>
            </Sider>
        );
    }
}

export default Navbar;