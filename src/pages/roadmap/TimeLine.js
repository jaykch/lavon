import React, {Component} from 'react';
import {Row, Col, Timeline, Icon} from 'antd';
import './TimeLine.css';

const successIcon = <Icon className="success" type="check-circle" theme="filled"/>;
const failIcon = <Icon className="fail" type="stop" theme="filled"/>;
const loadingIcon = <Icon className="loading" type="sync" spin/>;
const warningIcon = <Icon className="warning" type="warning" theme="filled"/>;
const progressIcon = <Icon className="progress" type="fund" theme="filled"/>;
const experimentIcon = <Icon className="experiment" type="experiment" theme="filled"/>;
const notifyIcon = <Icon className="notify" type="notification" theme="filled"/>;
const scheduleIcon = <Icon className="schedule" type="schedule" theme="filled"/>;
const launchIcon = <Icon className="launch" type="plus-square" theme="filled"/>;
const financeIcon = <Icon className="finance" type="credit-card" theme="filled"/>;
const bankIcon = <Icon className="bank" type="bank" theme="filled"/>;
const securityIcon = <Icon className="security" type="safety-certificate" theme="filled"/>;
const fixIcon = <Icon className="fix" type="tool" theme="filled"/>;
const auditIcon = <Icon className="audit" type="reconciliation" theme="filled"/>;
const achievementIcon = <Icon className="achievement" type="star" theme="filled"/>;

class TimeLine extends Component {
    render() {
        return (
            <div id="timeline">
                <Row>
                    <Col xs={24} lg={{span: 12, offset: 5}}>
                        <Timeline mode="alternate">
                            <Timeline.Item dot={failIcon}>
                                <strong>April 1: Eagle Pizza Deadline </strong><br/> First deadline for previous
                                team of developers and designers
                            </Timeline.Item>
                            <Timeline.Item dot={progressIcon}>
                                <strong>April 3: First Meeting of Jay and Amir</strong><br/> In a dire need of a
                                functioning website due to the lack of experience of the old developers, Amir was
                                fortunate enough to cross paths with Jay. Discussing if Jay is able to help with the
                                editing of the website
                            </Timeline.Item>
                            <Timeline.Item dot={fixIcon}>
                                <strong>April 5: Revamp of Eagle Pizzas</strong><br/> Jay was able to fulfil the request
                                in record time by climbing mountains of useless codes which were either not being used
                                or not functioning</Timeline.Item>
                            <Timeline.Item dot={successIcon}>
                                <strong>April 8: Delivery of Eagle Pizzas 2.0</strong><br/>Deployment of Eagle Pizzas
                                website on www.eaglepizzas.com.au
                            </Timeline.Item>
                            <Timeline.Item dot={achievementIcon}>
                                <strong>April 11: Lavon is Formed </strong><br/>The day Amir and Jay decided to move
                                forward together forming an agency reshaping how businesses operate
                            </Timeline.Item>
                            <Timeline.Item dot={launchIcon}>
                                <strong>April 26: Launch of Lavon Partnerships</strong><br/>
                            </Timeline.Item>
                            <Timeline.Item dot={notifyIcon}>
                                <strong>May 1: Lavon's 60 day promise</strong><br/>The first day of Lavon’s
                                60 days communication strategy of focusing conversions and building brand engagement
                            </Timeline.Item>
                            <Timeline.Item dot={loadingIcon}>
                                <strong>May 5: Launch of Lavon Restart</strong><br/>
                            </Timeline.Item>
                            <Timeline.Item dot={financeIcon}>
                                <strong>May 5: Launch of Lavon Saver</strong><br/>A new product to help clients reduce
                                overheads and streamline processes for more efficiency
                            </Timeline.Item>
                            <Timeline.Item dot={experimentIcon}>
                                <strong>May 9: Live-Streaming on Twitch</strong><br/>All operational content to be
                                recorded live on Twitch to document the transparency of Lavon’s growth
                            </Timeline.Item>
                            <Timeline.Item dot={scheduleIcon}>
                                <strong>May 12: Celebration Event</strong><br/>The first employee event to celebrate the
                                signing of Lavon’s first yearly contract
                            </Timeline.Item>
                            <Timeline.Item dot={loadingIcon}>
                                <strong>May 15: Research on New Product</strong><br/>Innovations are crucial in a
                                success disruption. Focusing on reshaping business through improving the current
                                standard of practices
                            </Timeline.Item>
                            <Timeline.Item dot={scheduleIcon}>
                                <strong>May 30: First Client Event</strong><br/>To celebrate the success of the past
                                month. A planned B2B leadership meeting inviting people to get connected with the brand
                                of Lavon and receive marketing value
                            </Timeline.Item>
                            <Timeline.Item dot={experimentIcon}>
                                <strong>June 15: Launch of Podcast</strong><br/>Launch of podcast with weekly talks
                                about technology and common issues in marketing and development
                            </Timeline.Item>
                            <Timeline.Item dot={achievementIcon}>
                                <strong>June 30: New Office</strong><br/> First major milestone since
                                formation of the company
                            </Timeline.Item>
                            <Timeline.Item dot={auditIcon}>
                                <strong>July 30: Quarterly Review</strong><br/> Learning from past mistakes is crucial
                                to success. Monitoring business performance, creating solutions for more ROI, and
                                providing our partners more value
                            </Timeline.Item>
                            <Timeline.Item dot={notifyIcon}>
                                <strong>July 31: Industry Presence</strong><br/>Loudest in the Media and Marketing
                                Industry in Australia
                            </Timeline.Item>
                            <Timeline.Item dot={securityIcon}>
                                <strong>September 1: Update Cloud Security</strong><br/>
                            </Timeline.Item>
                            <Timeline.Item dot={launchIcon}>
                                <strong>September 30th: New Product Reveal</strong><br/>The reveal event of our next
                                innovative Product
                            </Timeline.Item>
                            <Timeline.Item dot={bankIcon}>
                                <strong>October 15:</strong><br/>Leading live streamed Agency in Australia
                            </Timeline.Item>
                            <Timeline.Item dot={achievementIcon}>
                                <strong>December 31: First New Year Event</strong><br/>
                            </Timeline.Item>
                        </Timeline>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default TimeLine;