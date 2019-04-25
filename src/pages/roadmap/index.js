import React, {Component} from 'react';
import './Roadmap.css';
import {Layout} from "antd";
import PageBanner from "../../components/banners/Page";

const text = "Lavon aims to create a team filled with colleagues that share the vision of an industry-changing agency. Rapidly growing to becoming the biggest media and marketing agency in Australia in 7 years. Join us in our roadmap from the Start of Lavon to the end of 2019.";

class Roadmap extends Component {
    render() {
        return (
            <Layout id="roadmap">
                <PageBanner title="Our Roadmap" subtitle="Please connect with us!" text={text}/>
            </Layout>
        );
    }
}

export default Roadmap;