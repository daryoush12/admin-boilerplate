import React, { useState } from 'react'
import { Layout, Menu, Dropdown } from 'antd'
import {
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined,
} from '@ant-design/icons'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import CurrentPath from '@Components/CurrentPath'
import defaultUserIcon from '../Assets/Images/avatar.png'
import PageHead from '@Components/PageHead'
import UserMenu from '@Components/UserMenu'

const { SubMenu } = Menu
const { Header, Footer, Sider, Content } = Layout

export default function Default({ children }) {
    return (
        <Layout style={{ height: '100vh' }}>
            <Header className="header" primary>
                <div className="logo" />

                <UserMenu />
            </Header>
            <Layout>
                <Sider width={200} className="site-layout-background">
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        <SubMenu
                            key="sub1"
                            icon={<UserOutlined />}
                            title="Seasons"
                        >
                            <Menu.Item key="1">
                                <Link to="/events">Create season</Link>
                                <Link to="/events">Browse seasons</Link>
                            </Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <CurrentPath />

                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        <PageHead />
                        {children}
                    </Content>
                </Layout>
            </Layout>
            <Footer className="footerio">Copyright</Footer>
        </Layout>
    )
}
