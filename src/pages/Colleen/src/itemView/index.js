import React, { useState, useEffect } from 'react';
import { Menu, Input } from 'antd';
import moment from 'moment';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Layout from "../shared/layoutHF";
import './index.scss';

const { SubMenu } = Menu;

const { Search } = Input;


const DATA = [
  {
    title: '奶油',
    date: '2022-01-28',
    price: 200,
    box: '冰箱',
    src: 'https://i.imgur.com/ldoOAqH.jpg'
  },
  {
    title: 'Title 2itle 2',
    date: '2022-12-25',
    price: 100,
    box: '冰箱',
    src: 'https://i.imgur.com/ldoOAqH.jpg'
  },
  {
    title: '奶油4100',
    date: '2020-03-06',
    price: 100,
    box: '廚櫃',
    src: 'https://i.imgur.com/ldoOAqH.jpg'
  }, {
    title: '奶油41',
    date: '2022-01-28',
    price: 100,
    box: '廚櫃',
    src: 'https://i.imgur.com/ldoOAqH.jpg'
  }, {
    title: '奶油41',
    date: '2022-05-02',
    price: 100,
    box: '廚櫃',
    src: 'https://i.imgur.com/ldoOAqH.jpg'
  },
  {
    title: 'Title 3',
    date: '2023-04-22',
    price: 780,
    box: '廚櫃',
    src: 'https://i.imgur.com/ldoOAqH.jpg'
  },
  {
    title: 'Title 4',
    date: '2024-06-02',
    price: 25000,
    box: '廚櫃',
    src: 'https://i.imgur.com/ldoOAqH.jpg'
  },
  {
    title: 'Title 5',
    date: '2025-01-01',
    price: 250,
    box: '櫃子',
    src: 'https://i.imgur.com/ldoOAqH.jpg'
  },
];


const ItemView = () => {

  // the value of the search field 
  const [searchItem, setSearchItem] = useState('');

  // the search result
  const [foundItem, setFoundItem] = useState(DATA);

  const [box, setBox] = useState(DATA);



  useEffect(() => {
    isEpired();
  }, []);



  //物品是否過期
  const isEpired = () => {
    const newDate = DATA.map(function (data) {
      const date = data.date;
      const epired = moment().isBefore(date);
      //過期 isExpired=1，未過期 isExpired=0
      if (epired) { data.isExpired = 0; }
      else { data.isExpired = 1; }
      return data;
    })
    //日期排序遞增
    newDate.sort((a, b) => a.date.localeCompare(b.date));
    setFoundItem(newDate);
  };

  //類別篩選
  const filterBox = (e) => {
    const keyword = e;
    if (keyword !== '') {
      const results = DATA.filter((data) => {
        return data.box.toLowerCase().startsWith(keyword.toLowerCase())
      });
      setFoundItem(results);
      setBox(results);
    } else {
      setFoundItem(DATA);
      setBox(DATA);
    }
  };


  //input篩選
  const filter = (e) => {
    const keyword = e.target.value;
    if (keyword !== '') {
      const results = box.filter((data) => {
        return data.title.toLowerCase().startsWith(keyword.toLowerCase())
          || data.date.toLowerCase().startsWith(keyword.toLowerCase())
          || data.price.toString().toLowerCase().startsWith(keyword.toLowerCase())
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundItem(results);
    } else {
      setFoundItem(box);
    }
    setSearchItem(keyword);
  };





  return (
    <>
      <Layout>
        <div id='itemView'>
          <div className="con">
            <div className="sider">
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub2']}
                style={{ height: '100%' }}
              >
                <Menu.Item onClick={() => { filterBox("") }} key="1" >全部</Menu.Item>
                <SubMenu key="sub2" title="廚房">
                  <Menu.Item onClick={() => { filterBox("冰箱") }} key="2">冰箱</Menu.Item>
                  <Menu.Item onClick={() => { filterBox("廚櫃") }} key="3">廚櫃</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" title="客廳">
                  <Menu.Item onClick={() => { filterBox("櫃子") }} key="4">櫃子</Menu.Item>
                </SubMenu>
                <SubMenu key="sub4" title="餐廳">
                  <Menu.Item onClick={() => { filterBox("餐桌") }} key="5">餐桌</Menu.Item>
                </SubMenu>
                <SubMenu key="sub5" title="未分類">
                  <Menu.Item onClick={() => { filterBox("酒櫃") }} key="6">酒櫃</Menu.Item>
                </SubMenu>
              </Menu>
            </div>

            <div className="list" >
              <Search type="search"
                value={searchItem}
                onChange={filter}
                className="input"
                placeholder="Filter"
                enterButton />
              <div className="tab-scroll">
                <AnchorLink offset='135' href='#expired'>已過期</AnchorLink>
                <AnchorLink offset='135' href='#notExpired'>未過期</AnchorLink>
              </div>
              <div className="expired">
                <div id='expired'>已過期</div>
                {foundItem.filter(x => x.isExpired === 1).map((info, index) => {
                  return (
                    <div className="listItem" key={index + 1}>
                      <div className="photo"><img src={info.src} alt="" /></div>
                      <div className="txt">
                        <ul className="info">
                          <li>{info.date}</li>
                          <li>{info.title}</li>
                          <li>{info.price} 元</li>
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="notExpired">
                <div id='notExpired'>未過期</div>
                {/* <List
                  grid={{ gutter: 16, xs: 1, sm: 1, md: 2, lg: 3, xl: 4, xxl: 5, }}
                  dataSource={foundItem}
                  renderItem={item => (
                    <List.Item>
                      <Row justify="space-between" align="middle" >
                        <Col flex="80px" className="photo"><img src={item.src} alt="" /></Col>
                        <Col flex="auto" className="txt">
                          <ul className="info">
                            <li>{item.date}</li>
                            <li>{item.title}</li>
                            <li>{item.price} 元</li>
                          </ul>
                        </Col>
                      </Row>
                    </List.Item>
                  )}
                /> */}

                {foundItem.filter(x => x.isExpired === 0).map((info, index) => {
                  return (
                    <div className="listItem" key={index + 1}>
                      <div className="photo"><img src={info.src} alt="" /></div>
                      <div className="txt">
                        <ul className="info">
                          <li>{info.date}</li>
                          <li>{info.title}</li>
                          <li>{info.price} 元</li>
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Layout >
    </>

  );
};

export default ItemView;