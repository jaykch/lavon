import React, {Component} from 'react';
import './Contact.css';
import {Layout} from "antd";
import PageBanner from "../../components/banners/Page";
import {WrappedContactForm} from "../../components/forms/Contact";
import PremiumHashButton from "../../components/buttons/PremiumHashButton";

const {Content} = Layout;
const text = "Lavon is focused on bringing our values into the work we produce, and we are thrilled to work with businesses who share the vision of a new reshaped industry. Fill in the fields below and we will get back to you within 12 hours!";

class Contact extends Component {
    render() {
        return (
            <Layout id="contact">
                <PageBanner title="Get Connected" subtitle="Ready for the next step?" text={text}
                            button={<PremiumHashButton to="contact-form" text="Get in touch"/>}/>
                <Content style={{margin: '0 16px'}}>
                    <WrappedContactForm/>
                </Content>
            </Layout>
        );
    }
}

export default Contact;