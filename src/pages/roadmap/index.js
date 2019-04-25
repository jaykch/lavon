import React, {Component} from 'react';
import './Roadmap.css';
import {Layout} from "antd";
import PageBanner from "../../components/banners/Page";
import TimeLine from "./TimeLine";
import Countdown from "./Countdown";

const {Content} = Layout;

const text = "Lavon aims to create a team filled with colleagues that share the vision of an industry-changing agency. Rapidly growing to becoming the biggest media and marketing agency in Australia in 7 years. Join us in our roadmap from the Start of Lavon to the end of 2019.";

class Roadmap extends Component {
    render() {
        return (
            <Layout id="roadmap">
                <PageBanner title="Our Roadmap" subtitle="The path is set" text={text}/>
                <Content style={{margin: '0 16px'}}>
                    <Countdown/>
                    <TimeLine/>
                </Content>
            </Layout>
        );
    }
}

export default Roadmap;