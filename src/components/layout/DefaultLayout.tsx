import { Layout, theme } from 'antd';
import AppContent from './AppContent';
import { NavBar } from '../header/Header';

const { Content, Footer } = Layout;

const DefaultLayout = () => {

    const {
        token: { colorBgContainer },
    } = theme.useToken();


    return (
        <Layout className="layout">
            <NavBar background={colorBgContainer}/>
            <Content style={{ padding: '0 50px' }}>
                Тут должны быть хлебные крошки
                {/* <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb> */}
                <div className="site-layout-content" style={{ background: colorBgContainer }}>
                    <AppContent />
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>PhotoAlbum ©2023 Created by lumiere</Footer>
        </Layout>
    )
}

export default DefaultLayout;