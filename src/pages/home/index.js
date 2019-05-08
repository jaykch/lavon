import React, {Component} from 'react';
import {Layout} from 'antd';
import './Home.css';

import HomeBanner from "../../components/banners/Home"
import ClientsSnippet from "../../components/snippets/Clients";
import ProductsSnippet from "../../components/snippets/Services";
import WorkSnippet from "../../components/snippets/Work";
import ContactSnippet from "../../components/snippets/Contact";
import WebSnippet from "../../components/snippets/Web";
import BrandingSnippet from "../../components/snippets/Branding";
import SocialSnippet from "../../components/snippets/Social";

const {Content} = Layout;

class Home extends Component {
    render() {
        return (
            <Layout id="home">
                <HomeBanner/>
                <Content style={{margin: '0 16px'}}>
                    <WebSnippet/>
                    <BrandingSnippet/>
                    <WorkSnippet/>
                    <ContactSnippet/>
                    <ClientsSnippet/>
                    <ProductsSnippet/>
                    <SocialSnippet/>
                </Content>
            </Layout>
        );
    }
}

export default Home;
