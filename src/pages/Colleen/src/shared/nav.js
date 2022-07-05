import { Breadcrumb } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { getUserName } from "../utils";
import './nav.scss';


const Nav = () => {
    const userName = getUserName();
    return (
        <Breadcrumb id='nav'>
            <Breadcrumb.Item><HomeOutlined />{userName}的家</Breadcrumb.Item>
        </Breadcrumb>
    );

};

export default Nav;