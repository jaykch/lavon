import React, {Component} from 'react';
import PageBanner from "../../components/banners/Page";
import {Layout} from "antd";
import './About.css';
import Lifeline from "./Lifeline";
import PremiumHashButton from "../../components/buttons/PremiumHashButton";
import LocationSnippet from "../../components/snippets/Location";
import ClientsSnippet from "../../components/snippets/Clients";

const {Content} = Layout;

const text = "Lavon is filled with friendly, bright colleagues that are more than happy to collaborate across business units.  We have a clear vision and plan to change the Australian business industry. We believe Lavon is a special place where our employees have an opportunity to do great work and thrive.";

class About extends Component {
    render() {
        return (
            <Layout id="about">
                <PageBanner title="Life at Lavon" subtitle="Reshaping Australian Work Culture" text={text}
                            button={<PremiumHashButton to="lifeline" text="Who we are"/>}/>
                <Content style={{margin: '0 16px'}}>
                    <Lifeline/>
                    <ClientsSnippet/>
                    <LocationSnippet/>
                </Content>
            </Layout>
        );
    }
}

export default About;