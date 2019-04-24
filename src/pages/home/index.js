import React, {Component} from 'react';
import {Layout} from 'antd';
import './Home.css';

import HomeBanner from "../../components/banners/Home"

import ClientsSnippet from "../../components/snippets/Clients";
import LocationSnippet from "../../components/snippets/Location";
import ProductsSnippet from "../../components/snippets/Services";
import WorkSnippet from "../../components/snippets/Work";
import ContactSnippet from "../../components/snippets/Contact";

const {Content} = Layout;

class Home extends Component {
    render() {
        return (
            <Layout id="home">
                <HomeBanner/>
                <Content style={{margin: '0 16px'}}>
                    <ProductsSnippet/>
                    <WorkSnippet/>
                    <ClientsSnippet/>
                    <LocationSnippet/>
                    <ContactSnippet/>
                </Content>
            </Layout>
        );
    }
}

export default Home;
