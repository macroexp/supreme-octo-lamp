import React, { FC } from 'react';
import { Typography, Divider, Space, Button, Tooltip, Layout, Menu, Breadcrumb } from 'antd';
import { SearchOutlined, AppstoreOutlined,BarChartOutlined,CloudOutlined,
    ShopOutlined, TeamOutlined, UserOutlined, UploadOutlined, VideoCameraOutlined } from '@ant-design/icons';
import App from './App';

const { Title, Paragraph, Text, Link } = Typography;
const { Header, Content, Footer, Sider } = Layout

class Demo extends React.Component {
    state = {
        str: 'This is an editable text.',
    };

    onChange = (str: any) => {
        console.log('Content change:', str);
        this.setState({ str });
    };

    render() {
        return (
            <div>
                <Text editable={{ onChange: this.onChange }}>{this.state.str}</Text>
                <br></br>
                <Text copyable>This is a copyable text.</Text>
                <br></br>
            </div>
        )
    }
}

const Format: FC = () => (
    <Layout>
        <Header style={{position:'fixed', zIndex: 1, width:'100%'}}>
            <div className = "Logo"></div>
            <Menu theme="dark" mode="horizontal" style={{paddingLeft:150}} defaultSelectedKeys={['2']}>
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
            <Menu theme="dark" mode="inline" style={{paddingTop: 80}} defaultSelectedKeys={['3']}>
                <Menu.Item key="1" icon={<UserOutlined />}>Option 1</Menu.Item>
                <Menu.Item key="2" icon={<VideoCameraOutlined />}>Option 2</Menu.Item>
                <Menu.Item key="3" icon={<UploadOutlined />}>Option 3</Menu.Item>
                <Menu.Item key="4" icon={<TeamOutlined />}>Option 4</Menu.Item>
            </Menu>
        </Sider>
        <Layout className="site-layout" style={{marginLeft: 200}}>
            <Header className="site-layout-background" style={{padding: 0}}></Header>
            <Content style={{margin:'24px 16px 0', overflow: 'initial'}}>
                <Typography className="site-layout-text" style={{padding: 24, textAlign:'left'}}>
                    <Button type="primary" block size="large">Big Button</Button>
                    <Button type="default" danger>Default Button</Button>
                    <Button type="dashed" disabled>
                        DisabledDashed
                    </Button>

                    <Tooltip title="search">
                        <Button type="primary" shape="round" icon={<SearchOutlined />}></Button>
                    </Tooltip>

                    <Title>Default Title.</Title>
                    <Title level={2}>Level 2 Title. Goes down to 4.</Title>
                    <Title>
                        <br></br>
                        
                        Introduction
                    </Title>
                    <Paragraph>
                        This is a paragraph. The COVID-19 pandemic, also known as the coronavirus pandemic, is an ong
                        oing global pandemic of coronavirus disease 2019 (COVID‑19), caused by severe acute respirato
                        ry syndrome coronavirus 2 (SARS‑CoV‑2).[1] 
                        <Text strong>
                            The outbreak was first identified in Wuhan, China,in December 2019.[4][6] The World Health Or
                            ganization declared the outbreak a Public Health Emergency of International Concern on 30 Ja
                        </Text>
                    </Paragraph>
                    <Space direction="vertical">
                        <Text>Text</Text>
                        <Text type="warning">Warning Text</Text>
                        <Text strong underline>Strong Underlined Text</Text>
                        <Link href="https://ant.design/components/typography/">
                            For all text varieties click here.
                        </Link>
                    </Space>
                    <Demo />
                    <Breadcrumb style={{margin:'16px 0', padding:'0 50px'}}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <a href="">Thing</a>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="site-layout-content">

                    <br></br><br></br>

                    </div>
                    <Footer style={{margin:'24px -50px 0'}}>
                        Antd copyright 2020
                        Press <Text keyboard>Poop?</Text> to exit...
                    </Footer>
                </Typography>
            </Content>
        </Layout>
    </Layout>
);

export default Format;

