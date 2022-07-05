import { Layout, Row, Col, Form, Input, Button, Checkbox } from "antd";
import NavMenu from "../Components/Menu/Menu";
import CopyrightFooter from "../Components/Footer/Footer";
import "./Login.scss";
import "../Share/Share.scss";
const { Header, Content, Footer } = Layout;

function Login() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const [form] = Form.useForm();
  const onReset = () => {
    form.resetFields();
  };

  return (
    <Layout id="evelyn-login">
      <Header className="header">
        <NavMenu page="login"></NavMenu>
      </Header>
      <Content>
        <Row justify="space-around" align="middle">
          <Col xl={8} md={12} sm={20} className="form-box">
            <div>
              <Form
                form={form}
                name="basic"
                labelCol={{
                  span: 8,
                }}
                wrapperCol={{
                  span: 16,
                }}
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item
                  label="Username"
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item
                  name="remember"
                  valuePropName="checked"
                  wrapperCol={{
                    sm: {
                      offset: 8,
                      span: 16,
                    },
                  }}
                >
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item
                  wrapperCol={{
                    span: 24,
                  }}
                  align="center"
                  className="form-btn"
                >
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                  <Button htmlType="button" onClick={onReset}>
                    Reset
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </Col>
        </Row>
      </Content>
      <Footer>
        <CopyrightFooter></CopyrightFooter>
      </Footer>
    </Layout>
  );
}

export default Login;
