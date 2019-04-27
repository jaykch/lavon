import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Icon, Layout, Menu} from "antd";
import {withRouter} from 'react-router-dom';

import './Navbar.css';
import UberButton from "../buttons/UberButton";

const {
    Sider,
} = Layout;

const SubMenu = Menu.SubMenu;

// const MenuItemGroup = Menu.ItemGroup;

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
                       height: '100vh', position: 'fixed', right: 0
                   }}
            >
                <Menu theme="dark" mode="vertical" defaultSelectedKeys={['/']} defaultOpenKeys={['/']}
                      selectedKeys={[this.props.location.pathname]}
                >
                    <Menu.Item key="/">
                        <Link to="/">
                            <Icon type="home" theme="filled"/>
                            <span className="nav-text">Home</span>
                        </Link>
                    </Menu.Item>
                    <SubMenu key="/services"
                             title={<Link to="/services">
                                 <Icon type="idcard" theme="filled"/>
                                 <span className="nav-text">Our Services</span>
                             </Link>}>
                        <Menu.Item key="/services/partnerships">
                            <Link to="/services/partnerships">
                                <Icon type="idcard" theme="filled"/>
                                <span className="nav-text">Lavon Partnerships</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="/services/restart">
                            <Link to="/services/restart">
                                <Icon type="idcard" theme="filled"/>
                                <span className="nav-text">Lavon Restart</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="/services/saver">
                            <Link to="/services/saver">
                                <Icon type="idcard" theme="filled"/>
                                <span className="nav-text">Lavon Saver</span>
                            </Link>
                        </Menu.Item>
                    </SubMenu>
                    <Menu.Item key="/about-us">
                        <Link to="/about-us">
                            <Icon type="idcard" theme="filled"/>
                            <span className="nav-text">Life at Lavon</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="/contact-us">
                        <Link to="/contact-us">
                            <Icon type="contacts" theme="filled"/>
                            <span className="nav-text">Get Connected</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="/roadmap">
                        <Link to="/roadmap">
                            <Icon type="build" theme="filled"/>
                            <span className="nav-text">Our Roadmap</span>
                        </Link>
                    </Menu.Item>
                </Menu>
                <UberButton to="/contact-us" text="Free Audit"/>
            </Sider>
        );
    }
}

export default withRouter(Navbar);