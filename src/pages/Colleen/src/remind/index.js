import React, { useEffect, useState } from 'react';
import { List, Row, Col } from 'antd';
import Layout from "../shared/layoutHF";
import './index.scss';

//state 狀態完成0；進行中1
const DATA = [
  {
    title: '奶油',
    date: '2022/01/28',
    remark: '過期搂該丟了',
    box: '冰箱',
    src: 'https://i.imgur.com/ldoOAqH.jpg',
    state: 0,
  },
  {
    title: '牙刷',
    date: '2022/01/05',
    remark: '3個月換一次',
    box: '冰箱',
    src: 'https://i.imgur.com/ldoOAqH.jpg',
    state: 0,
  },
  {
    title: 'Title 3',
    date: '2023/05/02',
    remark: '過期搂該丟了',
    box: '廚櫃',
    src: 'https://i.imgur.com/ldoOAqH.jpg',
    state: 1,
  },
  {
    title: 'Title 4',
    date: '2024/01/05',
    remark: '過期搂該丟了',
    box: '餐桌',
    src: 'https://i.imgur.com/ldoOAqH.jpg',
    state: 1,
  },
  {
    title: 'Title 5',
    date: '2021/10/20',
    remark: '過期搂該丟了',
    box: '冰箱',
    src: 'https://i.imgur.com/ldoOAqH.jpg',
    state: 1,
  },
];


const Remind = () => {

  //已完成
  const [finishItem, setFinishItem] = useState(DATA);
  const [finishNum, setFinishNum] = useState(0);
  //進行中
  const [undoneItem, setUndoneItem] = useState(DATA);
  const [undoneNum, setUndonehNum] = useState(0);

  const [isActive, setActive] = useState(false);
  const [isActiveCompleted, setActiveCompleted] = useState(true);


  useEffect(() => {
    //事件進行篩選
    const finish = DATA.filter((data) => { return data.state === 0; });
    const undone = DATA.filter((data) => { return data.state === 1; });
    finish.sort((a, b) => a.date.localeCompare(b.date));
    undone.sort((a, b) => a.date.localeCompare(b.date));
    setFinishItem(finish);
    setUndoneItem(undone);
    setFinishNum(finish.length);
    setUndonehNum(undone.length);
  }, []);


  const handleToggle = () => {
    setActive(!isActive);
  };
  const handleToggleCompleted = () => {
    setActiveCompleted(!isActiveCompleted);
  };


  return (
    <Layout>
      <div id='remind'>
        <div className="con">
          <div className="list">
            <div className="inProgress">
              <div onClick={handleToggle}>進行中<span className="amount">{undoneNum}</span></div>
              <List className={isActive ? "active" : null}
                grid={{ gutter: 16, xs: 1, sm: 1, md: 2, lg: 3, xl: 4, xxl: 5, }}
                dataSource={undoneItem}
                renderItem={item => (
                  <List.Item>
                    <Row justify="space-between" align="top" >
                      <Col flex="80px" className="photo"><img src={item.src} alt="" /></Col>
                      <Col flex="auto">
                        <ul className="info">
                          <li>{item.date}</li>
                          <li>{item.title}</li>
                          <li>{item.remark}</li>
                        </ul>
                      </Col>
                      <Col flex="30px" className="box" >{item.box}</Col>
                    </Row>
                  </List.Item>
                )}
              />
            </div>
            <div className="completed">
              <div onClick={handleToggleCompleted}>已完成<span className="amount">{finishNum}</span></div>
              <List className={isActiveCompleted ? "active" : null}
                grid={{ gutter: 16, xs: 1, sm: 1, md: 2, lg: 3, xl: 4, xxl: 5, }}
                dataSource={finishItem}
                renderItem={item => (
                  <List.Item>
                    <Row justify="space-between" align="top" >
                      <Col flex="80px" className="photo"><img src={item.src} alt="" /></Col>
                      <Col flex="auto">
                        <ul className="info">
                          <li>{item.date}</li>
                          <li>{item.title}</li>
                          <li>{item.remark}</li>
                        </ul>
                      </Col>
                      <Col flex="30px" className="box" >{item.box}</Col>
                    </Row>
                  </List.Item>
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout >
  );
};

export default Remind;