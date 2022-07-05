import React, { useState, useEffect } from 'react';
import { Form, Upload, message, List, Drawer, Avatar, Input, Cascader, DatePicker, Button } from 'antd';
import { Link, useNavigate, useMatch } from "react-router-dom";
import { UserOutlined, SettingOutlined, CustomerServiceOutlined, QuestionOutlined, LogoutOutlined, LoadingOutlined, PlusOutlined, DollarOutlined, ShoppingCartOutlined, GoldOutlined } from '@ant-design/icons';
import classnames from 'classnames';
import IconFont from "./IconFont";
import { getUserName, rmAuthToken, rmUserName } from "../utils";
import Quagga from '@ericblade/quagga2'; // ES6
import './menu.scss';

const Menu = () => {
    const Quagga = require('@ericblade/quagga2').default; // Common JS (important: default)
    const userName = getUserName();
    const [visibleMine, setVisibleMine] = useState(false);
    const [visibleAddItem, setVisibleAddItem] = useState(false);
    const root = '/Colleen';
    const itemView = useMatch(root + '/itemView') !== null;
    const remind = useMatch(root + '/remind') !== null;
    useEffect(() => {
        //menu
        if (itemView) { return setCurrentActive(2); }
        if (remind) { return setCurrentActive(3); }

    }, []);// eslint-disable-line react-hooks/exhaustive-deps


    Quagga.decodeSingle({
        src: "image-abc-123.jpg",
        numOfWorkers: 0,  // Needs to be 0 when used within node
        inputStream: {
            size: 800  // restrict input-size to be 800px in width (long-side)
        },
        decoder: {
            readers: ["code_128_reader"] // List of active readers
        },
    }, function (result) {
        if (result.codeResult) {
            console.log("result", result.codeResult.code);
        } else {
            console.log("not detected");
        }
    });

    const showDrawerMine = () => {
        setVisibleMine(true);
    };
    const onCloseMine = () => {
        setVisibleMine(false);
    };
    const showDrawerAddItem = () => {
        setVisibleAddItem(true);
    };
    const onCloseAddItem = () => {
        setVisibleAddItem(false);
    };

    const [currentActive, setCurrentActive] = useState(1);

    const navigate = useNavigate();

    // 登出
    const handleLogout = () => {
        rmAuthToken();
        rmUserName();
        navigate('/Colleen/login'); // 並導回登入頁
    };

    function getBase64(img, callback) {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }

    function beforeUpload(file) {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }
        return isJpgOrPng && isLt2M;
    }


    const state = {
        loading: false,
    };

    const handleChange = (info) => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl =>
                this.setState({
                    imageUrl,
                    loading: false,
                }),
            );
        }
    };
    const { loading, imageUrl } = () => state;

    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );


    const options = [
        {
            value: '廚房',
            label: '廚房',
            children: [
                {
                    value: '冰箱',
                    label: '冰箱',
                }, {
                    value: '廚櫃',
                    label: '廚櫃',
                },
            ],
        },
        {
            value: '客廳',
            label: '客廳',
            children: [
                {
                    value: '櫃子',
                    label: '櫃子',
                },
            ],
        },
    ];


    const { TextArea } = Input;
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (

        <div id="menu" >
            <ul>
                <li onClick={() => { setCurrentActive(1) }} className={classnames({ 'active': currentActive === 1 })}><Link to="/Colleen"><IconFont type='icon-ant-box' /><span>空間</span></Link></li>
                <li onClick={() => { setCurrentActive(2) }} className={classnames({ 'active': currentActive === 2 })}><Link to="/Colleen/itemView"><IconFont type='icon-ant-tubiaozhizuomoban_fenlei' /><span>分類</span></Link></li>
                <li onClick={() => { setCurrentActive(3) }} className={classnames({ 'active': currentActive === 3 })}><Link to="/Colleen/remind"><IconFont type='icon-ant-bell' /><span>提醒</span></Link></li>
                <li onClick={showDrawerMine}><div><IconFont type='icon-ant-people' /><span>我的</span></div></li>
            </ul>
            <span onClick={showDrawerAddItem} className="add"><IconFont type='icon-ant-add1' /></span>
            {/* 我的-彈窗 */}
            <Drawer className='minePop' placement="right" width='70vw' onClose={onCloseMine} visible={visibleMine}>
                <div className='memberInfo'>
                    <Avatar style={{ backgroundColor: '#665dc3' }}
                        size={{ xs: 55, sm: 60, md: 65, lg: 70, xl: 75, xxl: 80 }}
                        icon={<UserOutlined />}
                    />
                    <ul>
                        <li>{userName}</li>
                        <li>ID:12345678</li>
                    </ul>
                </div>
                <List className='list' bordered>
                    <List.Item><SettingOutlined />設定</List.Item>
                    <List.Item><UserOutlined />帳戶</List.Item>
                    <List.Item><CustomerServiceOutlined />幫助中心</List.Item>
                    <List.Item><QuestionOutlined />常見問題</List.Item>
                    <List.Item onClick={handleLogout}><LogoutOutlined />登出</List.Item>
                </List>
            </Drawer>
            {/* 添加物品-彈窗 */}
            <Drawer className='addItemPop' placement="right" width='100vw' onClose={onCloseAddItem} visible={visibleAddItem}>
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <div className='itemInfo'>
                        <Form.Item className='itemPhoto'>
                            <Form.Item>
                                <Upload
                                    name="avatar"
                                    listType="picture-card"
                                    className="avatar-uploader"
                                    showUploadList={false}
                                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                    beforeUpload={beforeUpload}
                                    onChange={() => handleChange}
                                >
                                    {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                                </Upload>
                            </Form.Item>
                            <Form.Item>
                                <Input allowClear placeholder="名稱" />
                            </Form.Item>
                        </Form.Item>
                        <Form.Item>
                            <Cascader options={options} placeholder="空間 / 分類" />
                        </Form.Item>
                        <Form.Item>
                            <Input allowClear placeholder="數量" suffix={<GoldOutlined className="site-form-item-icon" />} />
                        </Form.Item>
                        <Form.Item>
                            <DatePicker placeholder="購買時間" style={{ width: '100%' }} />
                        </Form.Item>
                        <Form.Item>
                            <DatePicker placeholder="過期時間" style={{ width: '100%' }} />
                        </Form.Item>
                        <Form.Item>
                            <Input allowClear placeholder="購入價格" suffix={<DollarOutlined className="site-form-item-icon" />} />
                        </Form.Item>
                        <Form.Item>
                            <Input allowClear placeholder="購買地點" suffix={<ShoppingCartOutlined className="site-form-item-icon" />} />
                        </Form.Item>
                        <Form.Item> <TextArea placeholder="備註" allowClear /></Form.Item>
                        <Form.Item><Button type="primary" block>儲存</Button></Form.Item>
                    </div>
                </Form>
            </Drawer >
        </div >

    );
};
export default Menu;