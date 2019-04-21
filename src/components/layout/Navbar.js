import React, {Component} from 'react';
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
                       overflow: 'auto', height: '100vh', position: 'fixed', right: 0
                   }}
            >
                <div className="logo"/>
                <Menu mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">
                        <Icon type="user"/>
                        <span className="nav-text">Home</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="video-camera"/>
                        <span className="nav-text">About Us</span>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Icon type="upload"/>
                        <span className="nav-text">Contact Us</span>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Icon type="upload"/>
                        <span className="nav-text">Roadmap</span>
                    </Menu.Item>
                </Menu>
            </Sider>
        );
    }
}

export default Navbar;