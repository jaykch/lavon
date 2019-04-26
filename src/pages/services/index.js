import React, {Component} from 'react';
import './Services.css';
import {Layout} from "antd";
import PageBanner from "../../components/banners/Page";
import WorkSnippet from "../../components/snippets/Work";
import ClientsSnippet from "../../components/snippets/Clients";
import Summary from "./Summary";

const {Content} = Layout;
const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

class Services extends Component {
    render() {
        return (
            <Layout id="services">
                <PageBanner title="Our Services" subtitle="Please connect with us!" text={text}/>
                <Content style={{margin: '0 16px'}}>
                    <Summary/>
                    <WorkSnippet/>
                    <ClientsSnippet/>
                </Content>
            </Layout>
        );
    }
}

export default Services;