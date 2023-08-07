import React, { useState, useEffect } from 'react';
import { Breadcrumb, Layout, Menu, theme, Typography, Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import logo from './assets/logov2.png';
import About from './components/about/About';
import { Titulos } from './components/titulos/Titulos';
import Contatos from './components/contato/Contato';

const { Header, Content, Footer } = Layout;
const { Link } = Typography;

function App() {
    const [state, setState] = useState('Sobre');
    const [drawerVisible, setDrawerVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    
    const handleMenuClick = ({ key }: { key: React.Key }) => {
        setState(key.toString());
        setDrawerVisible(false);
    };

    const toggleDrawer = () => {
        setDrawerVisible(!drawerVisible);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Layout className="layout">
            <Header>
                <div
                    style={{
                        width: '55px',
                        height: '55px',
                        float: 'left',
                        marginRight: '60px',
                        marginTop: "4px",
                    }}
                >
                    <picture>
                        <img
                            src={logo}
                            alt="Logo Jose Roberto"
                            style={{ width: '100%', height: '100%' }}
                        />
                    </picture>
                </div>
                {isMobile ? (
                    <Button
                        className="menu-button"
                        type="primary"
                        onClick={toggleDrawer}
                        icon={<MenuOutlined />}
                        style={{ position: 'absolute', top: 15, right: 10 }}
                    />
                ) : (
                    <Menu
                        style={{ alignItems: 'end' }}
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['1']}
                        onClick={handleMenuClick}
                        items={['Sobre', 'Títulos', 'Informações'].map(
                            (item: string, index: number) => ({
                                key: `${index + 1}`,
                                label: `${item}`,
                            })
                        )}
                    />
                )}
            </Header>
            {isMobile && (
                <Drawer
                    title="Menu"
                    placement="left"
                    onClose={toggleDrawer}
                    visible={drawerVisible}
                    bodyStyle={{ padding: 0 }}
                >
                    <Menu
                        theme="dark"
                        mode="vertical"
                        defaultSelectedKeys={['Sobre']}
                        onClick={handleMenuClick}
                    >
                        <Menu.Item key="Sobre">Sobre</Menu.Item>
                        <Menu.Item key="Títulos">Títulos</Menu.Item>
                        <Menu.Item key="Informações">Informações</Menu.Item>
                    </Menu>
                </Drawer>
            )}
            <Content className="app-content">
                <div>{state === 'Sobre' ? <About /> : state === 'Títulos' ? <Titulos/> : <Contatos/>}</div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                <Link
                    href="https://wa.me/5568981231484"
                    target="_blank"
                    rel="noreferrer"
                >
                    ©2023 Created by igson Felix  & Andreysson Araujo
                </Link>
            </Footer>
        </Layout>
    );
}

export default App;
