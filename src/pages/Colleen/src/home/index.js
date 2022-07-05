import React, { useState } from 'react';

import { Tabs, Button, Modal, Input, Radio } from 'antd';
import Layout from "../shared/layoutHF";
import IconFont from "../shared/IconFont";
import Todo from '../components/Todo';
import './index.scss';


const { TabPane } = Tabs;

// 自定義type [0未分類] [1廚房] [2客廳] [3餐廳]
const data = [
    {
        type: 0,
        title: '酒櫃',
        icon: 'icon-ant-cabinet-winelist'
    },
    {
        type: 1,
        title: '冰箱',
        icon: 'icon-ant-refrigerator1'
    },
    {
        type: 1,
        title: '廚櫃',
        icon: 'icon-ant-shoe-cabinet-01'
    },
    {
        type: 2,
        title: '櫃子',
        icon: 'icon-ant-furcabinetclo'
    },
    {
        type: 3,
        title: '餐桌',
        icon: 'icon-ant-icons8-dining_table_light'
    }
];


const space = [
    {
        type: 1,
        title: "廚房",
        completed: true
    },
    {
        type: 2,
        title: "客廳",
        completed: true
    },
    {
        type: 3,
        title: "餐廳",
        completed: false
    },
    {
        type: 4,
        title: "陽台",
        completed: false
    },
    {
        type: 5,
        title: "臥房",
        completed: false
    }
]


const Home = () => {

    // 新增家具-彈窗
    const [isModalVisibleFurniture, setIsModalVisibleFurniture] = useState(false);
    const showModalFurniture = () => { setIsModalVisibleFurniture(true); };
    const handleOkFurniture = () => { setIsModalVisibleFurniture(false); };
    const handleCancelFurniture = () => { setIsModalVisibleFurniture(false); };

    // 編輯家具-彈窗
    const [isModalVisibleFurnitureEdit, setIsModalVisibleFurnitureEdit] = useState(false);
    const showModalFurnitureEdit = () => { setIsModalVisibleFurnitureEdit(true); };
    const handleOkFurnitureEdit = () => { setIsModalVisibleFurnitureEdit(false); };
    const handleCancelFurnitureEdit = () => { setIsModalVisibleFurnitureEdit(false); };

    // 編輯空間-彈窗
    const [isModalVisibleBox, setIsModalVisibleBox] = useState(false);
    const showModalBox = () => { setIsModalVisibleBox(true); };
    const handleOkBox = () => { setIsModalVisibleBox(false); };
    const handleCancelBox = () => { setIsModalVisibleBox(false); };

    const operations = <Button onClick={showModalBox}><IconFont type='icon-ant-edit1' /></Button>;

    // 空間數據
    const [tasks, setTasks] = useState(space);

    const callback = (tasks) => {
        setTasks(tasks);
    };

    return (
        <>
            <Layout>
                <div id='home'>
                    <Tabs tabBarExtraContent={operations}>
                        <TabPane tab="全部" key="-1">
                            {data.filter(x => x.type > -1).map((info, index) => {
                                return (
                                    <div className="icon-btn" key={info.title}>
                                        <Button shape="circle" icon={<IconFont type={info.icon} />}></Button>
                                        <div>{info.title}</div>
                                    </div>
                                );
                            })}
                            <div className="icon-btn" key='編輯' onClick={showModalFurnitureEdit}>
                                <Button shape="circle" icon={<IconFont type='icon-ant-edit1' />}></Button>
                                <div>編輯</div>
                            </div>
                            <div className="icon-btn" key='新增' onClick={showModalFurniture}>
                                <Button shape="circle" icon={<IconFont type='icon-ant-add' />}></Button>
                                <div>新增</div>
                            </div>
                        </TabPane>

                        {tasks.map((info, index) => {
                            return (
                                <TabPane tab={info.title} key={index + 1}>
                                    {data.filter(x => x.type === info.type).map((info, index) => {
                                        return (
                                            <div className="icon-btn" key={info.title}>
                                                <Button shape="circle" icon={<IconFont type={info.icon} />}></Button>
                                                <div>{info.title}</div>
                                            </div>
                                        );
                                    })}
                                    <div className="icon-btn" key='編輯' onClick={showModalFurnitureEdit}>
                                        <Button shape="circle" icon={<IconFont type='icon-ant-edit1' />}></Button>
                                        <div>編輯</div>
                                    </div>
                                    <div className="icon-btn" key='新增' onClick={showModalFurniture}>
                                        <Button shape="circle" icon={<IconFont type='icon-ant-add' />}></Button>
                                        <div>新增</div>
                                    </div>
                                </TabPane>
                            );
                        })}
                        <TabPane tab="未分類" key="0">
                            {data.filter(x => x.type < 0 || x.type === 0).map((info, index) => {
                                return (
                                    <div className="icon-btn" key={info.title}>
                                        <Button shape="circle" icon={<IconFont type={info.icon} />}></Button>
                                        <div>{info.title}</div>
                                    </div>
                                );
                            })}
                            <div className="icon-btn" key='編輯' onClick={showModalFurnitureEdit}>
                                <Button shape="circle" icon={<IconFont type='icon-ant-edit1' />}></Button>
                                <div>編輯</div>
                            </div>
                            <div className="icon-btn" key='新增' onClick={showModalFurniture}>
                                <Button shape="circle" icon={<IconFont type='icon-ant-add' />}></Button>
                                <div>新增</div>
                            </div>
                        </TabPane>
                    </Tabs>

                </div>
            </Layout >

            {/* 編輯空間-彈窗 */}
            <Modal title="編輯空間" className='boxPop' visible={isModalVisibleBox} onOk={handleOkBox} onCancel={handleCancelBox}>
                <Todo tasks={tasks} setTasks={setTasks} callback={callback}></Todo>
            </Modal>

            {/* 編輯家具-彈窗 */}
            <Modal title="編輯家具" className='furnitureEditPop' visible={isModalVisibleFurnitureEdit} onOk={handleOkFurnitureEdit} onCancel={handleCancelFurnitureEdit}>
                {data.filter(x => x.type > -1).map((info, index) => {
                    return (
                        <div className="icon-btn" key={info.title}>
                            <Button shape="circle" icon={<IconFont type={info.icon} />}></Button>
                            <Input allowClear placeholder="家具名稱" value={info.title} />
                        </div>
                    );
                })}
            </Modal>

            {/* 新增家具-彈窗 */}
            <Modal title="添加家具" className='furniturePop' visible={isModalVisibleFurniture} onOk={handleOkFurniture} onCancel={handleCancelFurniture}>
                <Radio.Group className='iconBlock' defaultValue="a">
                    <Radio.Button value="a"><IconFont type="icon-ant-living_room" /></Radio.Button>
                    <Radio.Button value="b"><IconFont type="icon-ant-dinning-room" /></Radio.Button>
                    <Radio.Button value="c"><IconFont type="icon-ant-251kitchen" /></Radio.Button>
                    <Radio.Button value="d"><IconFont type="icon-ant-cabinet-winelist" /></Radio.Button>
                    <Radio.Button value="e"><IconFont type="icon-ant-reception-cabinet" /></Radio.Button>
                    <Radio.Button value="f"><IconFont type="icon-ant-service_icon_cabinet" /></Radio.Button>
                    <Radio.Button value="g"><IconFont type="icon-ant-icons8-dining_table_light" /></Radio.Button>
                    <Radio.Button value="h"><IconFont type="icon-ant-furcabinetclo" /></Radio.Button>
                    <Radio.Button value="i"><IconFont type="icon-ant-shoe-cabinet-01" /></Radio.Button>
                    <Radio.Button value="j"><IconFont type="icon-ant-cabinet-filing" /></Radio.Button>
                    <Radio.Button value="k"><IconFont type="icon-ant-cabinet" /></Radio.Button>
                    <Radio.Button value="l"><IconFont type="icon-ant-wardrobe" /></Radio.Button>
                    <Radio.Button value="m"><IconFont type="icon-ant-wardrobe1" /></Radio.Button>
                    <Radio.Button value="n"><IconFont type="icon-ant-refrigerator1" /></Radio.Button>
                </Radio.Group>
                <Input allowClear placeholder="家具名稱" />
            </Modal>
        </>
    );
};

export default Home;