import React, { useState } from 'react';
import { Breadcrumb, Layout, Menu, theme, Typography } from 'antd';
import logo from './assets/logo.svg';
import About from './components/about/About';

const { Header, Content, Footer } = Layout;
const { Link } = Typography;

function App() {
    const [state, setState] = useState('Sobre');
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
                        // @ts-ignore
                        setState(target.innerText)
                    }
                    items={['Sobre', 'Títulos', 'contato'].map(
                        (item, index) => ({
                            key: index + 1,
                            label: `${item}`,
                        })
                    )}
                />
            </Header>
            <Content className="app-content">
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>{state}</Breadcrumb.Item>
                </Breadcrumb>
                <div>{state === 'Sobre' ? <About /> : false}</div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                <Link
                    href="https://wa.me/5568981231484"
                    target="_blank"
                    rel="noreferrer"
                >
                    ©2023 Created by igson Felix
                </Link>
            </Footer>
        </Layout>
    );
}

export default App;
