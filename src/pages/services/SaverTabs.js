import React, {Component} from 'react';
import {Tabs, List} from "antd";

const TabPane = Tabs.TabPane;

const data1 = [
    'Market research',
    'Market analysis, selection and entry strategy ',
    'Feasibility study',
    'International lead generation and partner search',
    'New product and business development',
    'Project Management',
    'Leadership Development',
    'Start Up management',
    'Quality management system implementation',
    'Operations management and optimization',
    'Sales and Key Account Management',
    'Trade show support service',
];
const data2 = [
    'Management for Social Media',
    'Management for Rostering',
    'Marketing Management'
];


class SaverTabs extends Component {
    render() {
        return (
            <Tabs size="small">
                <TabPane tab="Business Solutions" key="1">
                    <h3 style={{margin: '16px 0'}}>A wide range of business solutions can be offered</h3>
                    <List size="small" bordered dataSource={data1} renderItem={item => (<List.Item>{item}</List.Item>)}/>
                </TabPane>
                <TabPane tab="Outsourcing" key="2">
                    <h3 style={{margin: '16px 0'}}>Your ‘OUTSOURCED’ team</h3>
                    <List size="small" bordered dataSource={data2} renderItem={item => (<List.Item>{item}</List.Item>)}/>
                </TabPane>
            </Tabs>
        );
    }
}

export default SaverTabs;