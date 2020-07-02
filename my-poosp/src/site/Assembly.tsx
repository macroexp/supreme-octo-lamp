import React, { FC, useState } from 'react';
import './Assembly.css'
import { Typography, Divider, Space, Button, Tooltip, Layout, Menu, Breadcrumb } from 'antd';
import { SearchOutlined, AppstoreOutlined,BarChartOutlined,CloudOutlined,
    ShopOutlined, TeamOutlined, UserOutlined, UploadOutlined, VideoCameraOutlined } from '@ant-design/icons';
import App from '../App';
import { SelectParam } from 'antd/lib/menu';
import { Game } from '../components/game';
import { BodyContent } from './content';

const { Title, Paragraph, Text, Link } = Typography;
const { Header, Content, Footer, Sider } = Layout;

const Format: FC = () => {
    const [CurrentTab, SetCurrentTab] = useState("1");
    const SelectTab = (param: SelectParam) => {
        SetCurrentTab(param.key)
    }
    return <Layout>
        <Header style={{position:'fixed', zIndex: 1, width:'100%'}}>
            <div className = "Logo"></div>
            <Menu theme="dark" mode="horizontal" style={{paddingLeft:150}} defaultSelectedKeys={['1']}>
                <Menu.Item key="1">About 1</Menu.Item>
                <Menu.Item key="2">About 2</Menu.Item>
                <Menu.Item key="3">About 3</Menu.Item>
            </Menu>
        </Header>
        <Sider style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
        }}>
            <Menu onSelect={SelectTab} theme="dark" mode="inline" style={{paddingTop: 80}} defaultSelectedKeys={['1']}>
                <Menu.Item key="1" icon={<UserOutlined />}>Home</Menu.Item>
                <Menu.Item key="2" icon={<VideoCameraOutlined />}>TicTacToe</Menu.Item>
                <Menu.Item key="3" icon={<UploadOutlined />}>Big Button</Menu.Item>
                <Menu.Item key="4" icon={<TeamOutlined />}>Option 4</Menu.Item>
            </Menu>
        </Sider>
        <Layout className="site-layout" style={{marginLeft: 200}}>
            <Header className="site-layout-background" style={{padding: 0}}></Header>
            <Content style={{margin:'24px 16px 0', overflow: 'initial'}}>
                <BodyContent tab={CurrentTab}/>
            </Content>
        </Layout>
    </Layout>

};

export default Format;

