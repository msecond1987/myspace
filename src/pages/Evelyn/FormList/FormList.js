import {
  Layout,
  Row,
  Col,
  Form,
  Input,
  Checkbox,
  Radio,
  Collapse,
  Select,
} from "antd";
import React, { useState, useEffect } from "react";
import NavMenu from "../Components/Menu/Menu";
import CopyrightFooter from "../Components/Footer/Footer";
import "./FormList.scss";
import "../Share/Share.scss";
const { Header, Content, Footer } = Layout;

function FormList() {
  // 選擇器
  const { Option } = Select;
  // 折疊面板
  const { Panel } = Collapse;

  // 是否有統編
  const [OptionId, setOptionId] = useState(0);
  // 欲成立之公司組織形式
  const [CreatCompanyStructure, setCreatCompanyStructure] = useState(0);
  // 負責人資訊
  const [CreatCompany, setCreatCompany] = useState({
    name: "",
    phone: "",
  });
  // 聯絡人資訊
  const [CreatContact, setCreatContact] = useState({
    name: "",
    phone: "",
  });

  useEffect(() => {
    // 如果同負責人按鈕有勾
    if (DittoChackBox) {
      setCreatContact(CreatCompany);
    }
  }, [CreatCompany]);

  // 負責人資訊變更
  const onChangeCreatCompany = (e) => {
    setCreatCompany({
      ...CreatCompany,
      [e.target.getAttribute("data-state")]: e.target.value,
    });
  };

  // 聯絡人資訊變更
  const onChangeCreatContact = (e) => {
    if (!DittoChackBox) {
      setCreatContact({
        ...CreatContact,
        [e.target.getAttribute("data-state")]: e.target.value,
      });
    }
  };

  // 是否同負責人
  const [DittoChackBox, setDittoChackBox] = useState(false);
  const onChangeDittoChackBox = (e) => {
    if (e.target.checked) {
      setCreatContact(CreatCompany);
    } else {
      setCreatContact({});
    }
    setDittoChackBox(e.target.checked);
  };

  return (
    <Layout id="evelyn-form-list">
      <Header className="header">
        <NavMenu page="form-list"></NavMenu>
      </Header>
      <Content>
        <Row>
          <Col sm={24} className="form-box">
            <h3>是否有統編</h3>
            <Radio.Group
              name="option_id"
              onChange={(e) => setOptionId(e.target.value)}
              value={OptionId}
            >
              <Radio value={0}>尚無統編，需要成立新公司</Radio>
              <Radio value={1}>已有統編，僅需記帳服務</Radio>
            </Radio.Group>
          </Col>
          {/* 無統編顯示此區 */}
          {OptionId === 0 ? (
            <Col sm={24} className="form-box">
              <h3>公司組織形式</h3>
              <h4>欲成立之公司組織形式</h4>
              <Radio.Group
                name="creat_company_structure"
                onChange={(e) => setCreatCompanyStructure(e.target.value)}
                value={CreatCompanyStructure}
              >
                <Radio value={0}>股份有限公司</Radio>
                <Radio value={1}>有限公司</Radio>
                <Radio value={2}>行號</Radio>
              </Radio.Group>
              <Collapse>
                <Panel header="什麼情況適合成立「股份有限公司」?" key="1">
                  <p>
                    股份有限公司適合股東人數多、股權大小不一、或已有投資人的公司。最大特色是股份可以自由轉讓，不需要經過他人同意。
                  </p>
                </Panel>
                <Panel header="什麼情況適合成立「有限公司」?" key="2">
                  <p>
                    有限公司較適合公司創辦人1~3人、股份較平均、且成員內「沒有小股東、投資人」的團隊，因若要做任何重大變更皆需要股東簽名。但由於具有規定單純、手續快、名稱的保護範圍為全國、股東責任為「以出資額為限」的特性。人數少的團隊常先成立「有限公司」，等投資人入股要做變更時，才一同變更為股份有限公司。
                  </p>
                </Panel>
                <Panel header="什麼情況適合成立「行號」?" key="3">
                  <p>
                    無開立發票需求、每月營業額 20
                    萬以下的小型餐飲業或零售業，可申請「免用統一發票」的「小規模營業人」，稅務上較為優惠、且不需記帳費。
                    如果有開發票的需求，可以選擇設立「有限公司」或「開發票的行號」。設立記帳費兩者差異不大。稅務上，若年營業額小於
                    500 萬，且負責人個人綜合所得稅屬於級距 5%
                    或以下的族群，「開發票的行號」稅務上較節省。
                    但須注意，行號的名稱保護受限於「登記縣市」、股東責任為「無限清償責任」，申請政府補助可能受限制。
                  </p>
                </Panel>
              </Collapse>
              <h3>負責人基本資料</h3>
              <Input
                name="creat_company_owner"
                data-state="name"
                size="large"
                placeholder="負責人姓名"
                value={CreatCompany.name}
                onChange={onChangeCreatCompany}
              />
              <Input
                name="creat_company_phone"
                data-state="phone"
                size="large"
                placeholder="負責人電話"
                value={CreatCompany.phone}
                onChange={onChangeCreatCompany}
              />
              <h3>聯絡人資訊</h3>
              <Checkbox
                className="ditto-chack-box"
                onChange={onChangeDittoChackBox}
              >
                同負責人
              </Checkbox>
              <Input
                name="creat_contact_name"
                data-state="name"
                size="large"
                placeholder="聯絡人姓名"
                value={CreatContact.name}
                onChange={onChangeCreatContact}
              />
              <Input
                name="creat_contact_phone"
                data-state="phone"
                size="large"
                placeholder="聯絡人電話"
                value={CreatContact.phone}
                onChange={onChangeCreatContact}
              />
            </Col>
          ) : null}
          {/* 有統編顯示此區 */}
          {OptionId === 1 ? (
            <Col sm={24} className="form-box">
              <h3>基本資訊</h3>
              <Select
                showSearch
                name="company_structure"
                size="large"
                placeholder="公司組織形式"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
                filterSort={(optionA, optionB) =>
                  optionA.children
                    .toLowerCase()
                    .localeCompare(optionB.children.toLowerCase())
                }
              >
                <Option value={0}>股份有限公司</Option>
                <Option value={1}>有限公司</Option>
                <Option value={2}>行號</Option>
              </Select>
              <Input
                name="company_owner"
                size="large"
                placeholder="負責人姓名"
              />
              <Input name="company_name" size="large" placeholder="公司名稱" />
              <Input name="owner_id" size="large" placeholder="身分證字號" />
              <Input name="company_vat" size="large" placeholder="統一編號" />
            </Col>
          ) : null}
        </Row>
      </Content>
      <Footer>
        <CopyrightFooter></CopyrightFooter>
      </Footer>
    </Layout>
  );
}

export default FormList;
