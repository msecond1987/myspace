/* eslint-disable jsx-a11y/alt-text */
import { Layout, Row, Col } from "antd";
import { Link } from "react-router-dom";
import { RightCircleFilled } from "@ant-design/icons";
import NavMenu from "../Components/Menu/Menu";
import CopyrightFooter from "../Components/Footer/Footer";
import "./Home.scss";
import "../Share/Share.scss";
const { Header, Content, Footer } = Layout;

const Home = () => {
  return (
    <Layout id="evelyn-home">
      <Header className="header">
        <NavMenu page="home"></NavMenu>
      </Header>
      <Content>
        <div className="banner"></div>
        <section className="home-service-features">
          <div className="title">服務特色</div>
          <div className="sub-label">Simpany 提供最優良的服務品質</div>
          <Row className="col-3-1">
            <Col>
              <img src={"../../Img/Home/service-features_1.png"}></img>
              <h3>快速專業</h3>
              <div className="txt">
                <ul>
                  <li>設立線上辦，隨時隨地送出申請</li>
                  <li>手機可上傳，通通為您辦到好</li>
                  <li>快速完成公司設立</li>
                  <li>資料串接，輕鬆完成各式加值服務</li>
                  <li>會員專屬稅務實務分享</li>
                  <li>定期部落格、懶人包更新</li>
                </ul>
              </div>
            </Col>
            <Col>
              <img src={"../../Img/Home/service-features_2.png"}></img>
              <h3>透明價格</h3>
              <div className="txt">
                <ul>
                  <li>設立已包含所有辦到好的費用</li>
                  <li>記帳已包含所有政府申報項目</li>
                  <li>不用各種名目額外收費</li>
                  <li>系統工具會員免費使用</li>
                  <li>服務品質有保障</li>
                </ul>
              </div>
            </Col>
            <Col>
              <img src={"../../Img/Home/service-features_3.png"}></img>
              <h3>快速專業</h3>
              <div className="txt">
                <ul>
                  <li>服務與系統深度整合，輕鬆完成公司繁瑣的行政事務</li>
                  <li>自動化通知與代繳系統</li>
                  <li>檔案管理，隨時隨地立即下載</li>
                </ul>
              </div>
            </Col>
          </Row>
        </section>
        <section className="home-free-tool">
          <div className="title">免費貼心小工具</div>
          <div className="sub-label">Simpany 會員與非會員，通通佛心免費用</div>
          <Row className="col-2-1">
            <Col>
              <img
                src={"../../Img/Home/free-tool_1.png"}
                className="col-span-6"
              ></img>
              <div className="txt col-offset-18">
                <Link to="/">
                  <RightCircleFilled /> 手開發票小幫手
                </Link>
                不知道手開發票怎麼開？讓小幫手協助你簡單開出正確的發票！
              </div>
            </Col>
            <Col>
              <img
                src={"../../Img/Home/free-tool_2.png"}
                className="col-span-6"
              ></img>
              <div className="txt col-offset-18">
                <Link to="/">
                  <RightCircleFilled /> 租金扣繳計算機
                </Link>
                房租含稅不含稅，原來差很大？扣繳、二代是多少？承租前立即試算真正成本！
              </div>
            </Col>
            <Col>
              <img
                src={"../../Img/Home/free-tool_3.png"}
                className="col-span-6"
              ></img>
              <div className="txt col-offset-18">
                <Link to="/">
                  <RightCircleFilled /> 執行業務所得扣繳計算機
                </Link>
                SOHO 族不煩惱，輕鬆算出申報類別對所得的影響！
              </div>
            </Col>
            <Col>
              <img
                src={"../../Img/Home/free-tool_4.png"}
                className="col-span-6"
              ></img>
              <div className="txt col-offset-18">
                <Link to="/">
                  <RightCircleFilled /> 三分鐘聽稅務
                </Link>
                每集三分鐘，讓你快速理解稅務原理，更清楚掌握節稅技巧！
              </div>
            </Col>
          </Row>
        </section>
      </Content>
      <Footer>
        <CopyrightFooter></CopyrightFooter>
      </Footer>
    </Layout>
  );
};

export default Home;
