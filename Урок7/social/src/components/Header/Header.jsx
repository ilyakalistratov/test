import React from 'react';
import {Layout, Row, Col} from "antd";
import {Modal, Button, Form, Input} from 'antd';
import classNames from 'classnames/bind';

const {Header} = Layout;
const formItemLayout = {
    labelCol: {
        xs: { span: 5 },
        sm: { span: 20 },
    },
    wrapperCol: {
        xs: { span: 5 },
        sm: { span:24 },
    },
};

class HeaderBlock extends React.Component {
    state = {modal: false, form: true, layout: 'inline'};

    showModal = () => {
        this.setState({
            modal: true,
            form: false,
            layout: 'vertical'
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            modal: false,
            form: true,
            layout: 'inline'
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            modal: false,
            form: true,
            layout: 'inline'
        });
    };
    Form = (props) => {
        return (
            <Form layout={this.state.layout} {...formItemLayout} className='form'>
                <Form.Item   {...formItemLayout}><Input placeholder='Фамилия Имя'/></Form.Item>
                <Form.Item {...formItemLayout}><Input placeholder='тел' className={props.tel}/></Form.Item>
                <Form.Item {...formItemLayout}><Input placeholder='email' className={props.tel}/></Form.Item>
                <Form.Item {...formItemLayout}><Input placeholder='email' className={props.tel}/></Form.Item>
            </Form>
        )
    }

    render() {
        const modal = this.state;
        var btnClass = classNames({
            tel: !this.state.modal,
        });
        return (
            <Header className='header'>

                {modal && <Modal title="Basic Modal"
                                 style={{ top: 5 }}
                                 visible={this.state.modal}
                                 onOk={this.handleOk}
                                 onCancel={this.handleCancel}>

                    <this.Form tel={btnClass}/>
                </Modal>}
                {this.state.form && <this.Form tel={btnClass}/>}
                <Button type="primary" className='menu' onClick={this.showModal}>Menu</Button>
            </Header>
        )
    }

}

export default HeaderBlock