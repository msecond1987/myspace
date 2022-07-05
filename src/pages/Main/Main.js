import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LaptopOutlined
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./Main.css";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function Main() {
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1">沒東西</Menu.Item>
          <Menu.Item key="2">不要點我</Menu.Item>
          <Menu.Item key="3">哈哈哈</Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <SubMenu key="sub1" icon={<UserOutlined />} title="開發中">
              <Menu.Item key="1">
                {" "}
                <Link to="/Register">Register</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/Colleen">Colleen開發的頁面</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/Evelyn/Home">Evelyn開發的頁面</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<LaptopOutlined />} title="有什麼困難的">
              <Menu.Item key="5">React很簡單</Menu.Item>
              <Menu.Item key="6">Js不難啦</Menu.Item>
              <Menu.Item key="7">Html我阿媽都會</Menu.Item>
              <Menu.Item key="8">Css連狗都難不倒</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 750,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default Main;
