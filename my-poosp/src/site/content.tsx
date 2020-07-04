import React, { FC, useState, useEffect } from 'react';
import { Typography, Button, Tooltip, Space, Breadcrumb, Layout } from 'antd';
import { SearchOutlined, AppstoreOutlined,BarChartOutlined,CloudOutlined,
    ShopOutlined, TeamOutlined, UserOutlined, UploadOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Demo, Clicker, Garage, Cards, TestTab, } from './Classes';
import { Game } from '../components/game';

const { Title, Paragraph, Text, Link } = Typography;
const { Header, Content, Footer, Sider } = Layout;

export const BodyContent: FC<{tab:string}> = (props) => {
    const tab1 = <Typography className="site-layout-text" style={{padding: 24, textAlign:'left'}}>
        <Button type="primary" block size="large">Big Button</Button>
        <Button type="default" danger>Default Button</Button>
        <Button type="dashed" disabled>
            DisabledDashed
        </Button>

        <Tooltip title="search">
            <Button type="primary" shape="round" icon={<SearchOutlined />}></Button>
        </Tooltip>

        <Title>Welcome!</Title>
        <Title level={2}>This is a website.
            <br /><br />
        </Title>
        <Paragraph>
            Welcome to the paragraph. The text can do many things, like
            <Text type="warning">
                 warn, and can also 
            </Text> 
            <Text copyable underline>
                be copied. The underlined text will be copied to your clipboard when clicked.
            </Text>
            <Text editable underline>
                This is editable text. Feel free to edit this text.
            </Text>
            Enjoy this text in bold: 
            <Text strong>
                TypeScript is an open-source programming language developed and maintained by 
                Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing 
                to the language. TypeScript is designed for development of large applications and transcompiles 
                to JavaScript.[4] As TypeScript is a superset of JavaScript, existing JavaScript programs are 
                also valid TypeScript programs.
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
    const tab2 = <Game />
    const tab3 = <Garage />
    const tab4 = <Cards />
    const tab5 = <TestTab />



    if(props.tab == "1")
        return tab1
    else if(props.tab == "2")
        return tab2
    else if(props.tab == "3")
        return tab3
    else if(props.tab == "4")
        return tab4
    else
        return tab5

}