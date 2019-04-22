import React, {Component} from 'react';
import Typist from 'react-typist';
import './Home.css';

import Banner from "../../components/banners/Home"

import {Layout} from 'antd';
import Navbar from "../../components/layout/Navbar";
import About from "../../components/snippets/About";
import Clients from "../../components/snippets/Clients";
import Innovation from "../../components/snippets/Innovation";
import Location from "../../components/snippets/Location";
import Products from "../../components/snippets/Products";
import Work from "../../components/snippets/Work";

const {Footer} = Layout;

class Home extends Component {
    render() {
        return (
            <div id="home">
                <Layout>
                    <Layout>
                        <Banner/>
                        <About/>
                        <Products/>
                        <Innovation/>
                        <Clients/>
                        <Work/>
                        <Location/>
                        <Footer>
                            Lavon ©2019
                        </Footer>
                    </Layout>
                    <Navbar/>
                </Layout>
            </div>
        );
    }
}

export default Home;
