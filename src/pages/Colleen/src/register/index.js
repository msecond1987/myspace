import { Button, Form, Input, Layout, Divider } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import FooterC from "../shared/footer";
import './index.scss';

const NormalLoginForm = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        <Layout>
            <div id="register">
                <Form
                    name="normal_register"
                    className="register-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                >    <Form.Item className="logo"></Form.Item>
                    <Form.Item style={{ margin: '0' }} >
                        <Form.Item
                            name="year"
                            rules={[{ required: true, message: '請輸入姓氏!' }]}
                            style={{ display: 'inline-block', width: 'calc(50% - 8px)', marginRight: '8px' }}
                        >
                            <Input size="large" placeholder="姓氏" />
                        </Form.Item>
                        <Form.Item
                            name="month"
                            rules={[{ required: true, message: '請輸入名字!' }]}
                            style={{ display: 'inline-block', width: 'calc(50% - 8px)', marginLeft: '8px' }}
                        >
                            <Input size="large" placeholder="名字" />
                        </Form.Item>
                    </Form.Item>
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: '請輸入帳號!',
                            },
                        ]}
                    >
                        <Input size="large" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="帳號" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: '請輸入密碼!',
                            },
                        ]}
                    >
                        <Input size="large"
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="密碼"
                        />
                    </Form.Item>

                    <Form.Item >
                        <Button size="large" type="primary" htmlType="submit" className="register-form-button">
                            註冊
                        </Button>
                        <Divider />
                        <Button href="/Colleen/login" size="large" htmlType="button" className="login-form-button" >
                            登入
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            <FooterC />
        </Layout >

    );
};

export default NormalLoginForm;