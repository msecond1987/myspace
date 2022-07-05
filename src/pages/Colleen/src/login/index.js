import React, { useState, useContext } from 'react';
import { message, Button, Form, Input, Space, Divider, Layout, Spin } from 'antd';
import { Link, useNavigate } from "react-router-dom";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import FooterC from "../shared/footer";
import IconFont from "../shared/IconFont";
import { login, getMe } from "../WebAPI";
import { setAuthToken, rmAuthToken, setUserName, rmUserName } from "../utils";
import AuthContext from "../contexts";
import './index.scss';

const NormalLoginForm = () => {

    const { setUser } = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState();
    const [state, setState] = useState(false);
    const navigate = useNavigate();

    // { "username": "user01", "password": "Lidemy" }
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        login(values.username, values.password).then((data) => {
            // 若 ok 為 0 代表錯誤
            if (data.ok === 0) {
                message.success(data.message);
                return setErrorMessage(data.message);
            }
            // 成功的話就把 token 存到 localStorage
            setAuthToken(data.token);
            setUserName(values.username);
            getMe().then((response) => {
                if (data.ok !== 1) {
                    console.log(response);
                    // 在 getMe() 出錯代表還沒成功登入，因此要把 token 清空
                    rmAuthToken();
                    rmUserName();
                    setErrorMessage(response.toString());
                }
                setUser(response.data);
            });

            (async () => {
                const delay = (s) => {
                    return new Promise(function (resolve) {  // 回傳一個 promise
                        setTimeout(resolve, s);  // 等待多少秒之後 resolve()
                    });
                };
                message.success('success', .3);
                await delay(800);
                setState(true);
                await delay(800);
                navigate('/Colleen'); // 並導回首頁
            })();


        });
    };

    return (

        <Layout>

            <div id="login">
                <Spin spinning={state} />
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}

                >    <Form.Item className="logo"></Form.Item>
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Username!',
                            },
                        ]}
                    >
                        <Input
                            allowClear
                            size="large"
                            prefix={<UserOutlined className="site-form-item-icon" />}
                            placeholder="帳號"
                        />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                        ]}
                    >
                        <Input
                            allowClear
                            size="large"
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="密碼"
                        />
                    </Form.Item>
                    <Form.Item className="login-icon">
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Space>
                                <IconFont type="icon-ant-facebookfacebook52" />
                                <IconFont type="icon-ant-google-circle-fill" />
                            </Space>
                        </Form.Item>
                        <Link to="/Colleen" className="login-form-forgot">
                            忘記密碼?
                        </Link>
                    </Form.Item>

                    <Form.Item className="button-block">
                        <Button size="large" type="primary" htmlType="submit" className="login-form-button">
                            登入
                        </Button>
                        <Divider />
                        <Button href="/Colleen/Register" size="large" htmlType="button" className="register-form-button" >
                            建立新帳號
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            <FooterC />
        </Layout>

    );
};

export default NormalLoginForm;