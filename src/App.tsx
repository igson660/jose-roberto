import React, { useState } from 'react';
import { Breadcrumb, Layout, Menu, theme, Typography } from 'antd';
import logo from './assets/logov2.png';
import About from './components/about/About';
import { Titulos } from './components/titulos/Titulos';
import Contatos from './components/contato/Contato';

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
                <Menu
                    style={{ alignItems: 'end' }}
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    onClick={({ domEvent: { target } }) =>
                        // @ts-ignore
                        setState(target.innerText)
                    }
                    items={['Sobre', 'Títulos', 'Contato'].map(
                        (item, index) => ({
                            key: index + 1,
                            label: `${item}`,
                        })
                    )}
                />
            </Header>
            <Content className="app-content">
                {/* <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>{state}</Breadcrumb.Item>
                </Breadcrumb> */}
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
