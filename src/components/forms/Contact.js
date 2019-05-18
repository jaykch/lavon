import React, {Component} from 'react';
import $ from 'jquery';
import {Form, Input, Tooltip, Icon, Select, message} from 'antd';
import './Contact.css';

const FormItem = Form.Item;
const Option = Select.Option;
// const AutoCompleteOption = AutoComplete.Option;
const {TextArea} = Input;

class ContactForm extends Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const hide = message.loading('Your message is being sent', 0);
                setTimeout(hide, 2500);
                const form = $('.contact-form');
                form.append(function () {
                    // Add selection data as ant design doesnt use html select fields
                    $('<input />').attr('type', 'hidden')
                        .attr('name', "Services Requested")
                        .attr('value', values.services.join(', '))
                        .appendTo('.contact-form');
                    $('<input />').attr('type', 'hidden')
                        .attr('name', "Number of Employees")
                        .attr('value', values.employees)
                        .appendTo('.contact-form');
                    return true;
                });
                form.submit();
            } else if (err) {
                console.log(values.services.join(', '));
                console.log(values.employees);
                message.error('Please enter the required fields!');
            }
        });
    };

    //on submit function for ajax
    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     this.props.form.validateFieldsAndScroll((err, values) => {
    //         if (!err) {
    //             $.ajax({
    //                 url: "https://formspree.io/support@lavon.com.au",
    //                 method: "POST",
    //                 data: {
    //                     name: values.name,
    //                     organisation: values.organisation,
    //                     email: values.email,
    //                     phone: values.countryCode + " " + values.phone,
    //                     message: values.message,
    //                     website: values.website
    //                 },
    //                 dataType: 'json',
    //                 beforeSend: function () {
    //                     const hide = message.loading('Your message is being sent', 0);
    //                     setTimeout(hide, 2500);
    //                 },
    //                 success: function () {
    //                     message.success('Your message was sent');
    //                 },
    //                 error: function (err) {
    //                     console.log(err);
    //                     message.error('We could not receive your message, please send it manually to the email listed below');
    //                 }
    //             });
    //         }
    //     });
    // };

    //confirm email field check
    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({confirmDirty: this.state.confirmDirty || !!value});
    };
    checkEmail = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('email')) {
            callback("The E-mail you entered before doesn't match with this E-mail!");
        } else {
            callback();
        }
    };

    //prevent from entering anything other than numbers in phone input
    preventAlphabets(e) {
        const re = /[0-9]+/g;
        if (!re.test(e.key)) {
            e.preventDefault();
        }
    };

    //handle website suffix change
    // handleWebsiteChange = (value) => {
    //     let autoCompleteResult;
    //     if (!value) {
    //         autoCompleteResult = [];
    //     } else {
    //         autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    //     }
    //     this.setState({autoCompleteResult});
    // };

    //create options for country codes for phone numbers
    createOptions = () => {
        const options = [];
        for (let i = 1; i < 100; i++) {
            options.push(<Option key={i} value={i}>+{i}</Option>)
        }
        return options
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        // const {autoCompleteResult} = this.state;

        const formItemLayout = {
            labelCol: {
                xs: {span: 24},
                sm: {span: 8},
                md: {span: 24},
                lg: {span: 12, offset:1},
                xl: {span: 8},
                xxl: {span: 4, offset:6}
            },
            wrapperCol: {
                xs: {span: 24},
                sm: {span: 12},
                md: {span: 24},
                lg: {span: 12},
                xl: {span: 8},
                xxl: {span: 8}
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 9,
                },
            },
        };

        const prefixSelector = getFieldDecorator('countryCode', {
            initialValue: '+61',
        })(
            <Select style={{width: 70}}>
                {this.createOptions()}
            </Select>
        );

        // Website field code
        // const websiteOptions = autoCompleteResult.map(website => (
        //     <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
        // ));

        return (
            <form onSubmit={this.handleSubmit} action="https://formspree.io/support@lavon.com.au" method="POST"
                  className="contact-form">
                {/*<Form onSubmit={this.handleSubmit}>*/}
                <FormItem {...formItemLayout} label="What services are you interested in">
                    {getFieldDecorator('services', {
                        rules: [
                            {required: true, message: 'No service selected!', type: 'array'},
                        ],
                    })(
                        <Select mode="multiple" placeholder="Please select the services you are interested in">
                            <Option value="Web Services">Lavon Restart</Option>
                            <Option value="Branding Services">Smaller Services</Option>
                            <Option value="Lavon Partnerships">Lavon Partnerships</Option>
                            <Option value="Cloud Management">Lavon Saver</Option>
                            <Option value="Get a quote">Get a quote</Option>
                            <Option value="Free Audit">Free Audit</Option>
                        </Select>
                    )}
                </FormItem>
                <FormItem {...formItemLayout} label="Name">
                    {getFieldDecorator('name', {
                        rules: [{
                            required: true,
                            message: 'No name entered!',
                        }],
                    })(
                        <Input name="Name" placeholder="Please input your name"/>
                    )}
                </FormItem>
                <FormItem {...formItemLayout} label="Organisation Name">
                    {getFieldDecorator('organisation', {
                        rules: [{
                            required: true,
                            message: 'Letting us know your organisation will help us understand your query better!',
                        }],
                    })(
                        <Input name="Organisation" placeholder="Please enter your company name"/>
                    )}
                </FormItem>
                <FormItem {...formItemLayout} label="E-mail">
                    {getFieldDecorator('email', {
                        rules: [{
                            type: 'email', message: 'The email you entered is not valid!',
                        }, {
                            required: true, message: 'Please input your E-mail!',
                        }],
                    })(
                        <Input name="Email" placeholder="example@example.com"/>
                    )}
                </FormItem>
                <FormItem {...formItemLayout}
                          label={(
                              <span>
                            Confirm E-mail&nbsp;
                                  <Tooltip title="Please confirm your E-mail">
                                <Icon type="question-circle-o"/>
                            </Tooltip>
                         </span>
                          )}>
                    {getFieldDecorator('confirm', {
                        rules: [{
                            required: true, message: 'The emails you entered do not match!',
                        }, {
                            validator: this.checkEmail,
                        }],
                    })(
                        <Input type="email" onBlur={this.handleConfirmBlur}/>
                    )}
                </FormItem>
                <FormItem {...formItemLayout} label="What can we do for you?">
                    {getFieldDecorator('message', {
                        rules: [{required: true, message: 'We need to know what your query is please!'}],
                    })(
                        <TextArea name="Message" placeholder="Please type your query here...."
                                  autosize={{minRows: 2, maxRows: 6}}/>
                    )}
                </FormItem>
                <FormItem {...formItemLayout} label="Phone Number">
                    {getFieldDecorator('phone', {
                        rules: [{
                            message: 'Giving us your telephone number will help us assist you!'
                        }],
                    })(
                        <Input name="Phone Number" addonBefore={prefixSelector} style={{width: '100%'}}
                               placeholder="0444444444" maxLength="10" onKeyPress={(e) => this.preventAlphabets(e)}/>
                    )}
                </FormItem>
                <FormItem {...formItemLayout} label="Number of employees" hasFeedback>
                    {getFieldDecorator('employees', {
                        rules: [
                            {message: 'Please select how many employees you have!'},
                        ],
                    })(
                        <Select placeholder="How many employees do you have?">
                            <Option value="1-9">1-9</Option>
                            <Option value="10-24">10-24</Option>
                            <Option value="24-100">24-100</Option>
                            <Option value="Over 100">Over 100</Option>
                        </Select>
                    )}
                </FormItem>
                <FormItem {...formItemLayout} label="Budget">
                    {getFieldDecorator('budget', {
                        rules: [{
                            message: 'What is your budget?'
                        }],
                    })(
                        <Input name="Budget" prefix={<Icon type="dollar" style={{color: 'rgba(0,0,0,.25)'}}/>}
                               style={{width: '100%'}} placeholder="10000"
                               onKeyPress={(e) => this.preventAlphabets(e)}/>
                    )}
                </FormItem>

                {/*Website Field Code*/}
                {/*<FormItem {...formItemLayout} label="Website">*/}
                {/*    {getFieldDecorator('website', {*/}
                {/*        rules: [{required: false, message: 'Please input website!'}],*/}
                {/*    })(<AutoComplete dataSource={websiteOptions} onChange={this.handleWebsiteChange}*/}
                {/*                     placeholder="website">*/}
                {/*            <Input addonBefore="Http://"/>*/}
                {/*        </AutoComplete>*/}
                {/*    )}*/}
                {/*</FormItem>*/}

                <FormItem {...tailFormItemLayout}>
                    <button type="submit" className="submit-button">Submit</button>
                </FormItem>
            </form>
        );
    }
}

export const WrappedContactForm = Form.create()(ContactForm);