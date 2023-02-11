import React, { useState } from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import logo from './assets/logo.svg';

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
    const [state, setState] = useState('Home');
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout className="layout">
            <Header>
                <div
                    style={{
                        background: colorBgContainer,
                        width: '50px',
                        height: '65px',
                        float: 'left',
                        marginRight: '60px',
                    }}
                >
                    <picture>
                        <img
                            src={logo}
                            alt="Logo Jose Roberto"
                            style={{ width: '50px', height: '65px' }}
                        />
                    </picture>
                </div>
                <Menu
                    style={{ alignItems: 'end' }}
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    onClick={({ domEvent: { target } }) =>
                        setState(target.innerText)
                    }
                    items={[
                        'Home',
                        'Sobre',
                        'Histórico',
                        'Títulos',
                        'contato',
                    ].map((item, index) => ({
                        key: index + 1,
                        label: `${item}`,
                    }))}
                />
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>{state}</Breadcrumb.Item>
                </Breadcrumb>
                <div
                    className="site-layout-content"
                    style={{ background: colorBgContainer }}
                >
                    Content
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                <a href="https://wa.me/5568981231484" target="_blank">
                    ©2023 Created by igson Felix
                </a>
            </Footer>
        </Layout>
    );
};

export default App;
