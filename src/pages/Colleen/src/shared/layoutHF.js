import { Layout } from 'antd';
import HeaderC from "./header";
import FooterC from "./footer";
import Nav from "./nav";

const LayoutHF = ({ children }) => {

    return (
        <Layout>
            <HeaderC />
            <Nav />
            <Layout style={{ minHeight: 'calc(100vh - 300px)' }}>
                <Layout>
                    {children}
                </Layout>
            </Layout>
            <FooterC />
        </Layout >
    )
}


export default LayoutHF;