import React, {Component} from 'react';
import {Tabs, List} from "antd";

const TabPane = Tabs.TabPane;

const data1 = [
    'Business Operations',
    'Marketing Management',
    'Creative Department',
    'Finance Department',
    'Logistics Department',
    'Consulting Department',
    'Project Management',
    'Start-Up management',
    'Sales and Key Account Management'
];
const data2 = [
    'Business Solutions',
    'Outsourcing',
    'Market research',
    'Market analysis, selection and entry strategy ',
    'Feasibility study',
    'International lead generation and partner search',
    'New product and business development',
    'Leadership Development',
    'Quality management system implementation',
    'Operations management and optimization',
    'Trade show support service'
];


class SaverTabs extends Component {
    render() {
        return (
            <Tabs size="small">
                <TabPane tab="Business Areas" key="1">
                    {/*<h3 style={{margin: '16px 0'}}>A wide range of business solutions can be offered</h3>*/}
                    <List size="small" bordered dataSource={data1} renderItem={item => (<List.Item>{item}</List.Item>)}/>
                </TabPane>
                <TabPane tab="Additional Resources" key="2">
                    {/*<h3 style={{margin: '16px 0'}}>Your ‘OUTSOURCED’ team</h3>*/}
                    <List size="small" bordered dataSource={data2} renderItem={item => (<List.Item>{item}</List.Item>)}/>
                </TabPane>
            </Tabs>
        );
    }
}

export default SaverTabs;