import React, { FC, useState } from 'react';
import { Typography, Button, Tooltip, Space, Breadcrumb, Layout } from 'antd';
import { SearchOutlined, AppstoreOutlined,BarChartOutlined,CloudOutlined,
    ShopOutlined, TeamOutlined, UserOutlined, UploadOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Demo } from './Assembly';
import { Game } from './components/game';

const { Title, Paragraph, Text, Link } = Typography;
const { Header, Content, Footer, Sider } = Layout;

export const BodyContent: FC<{tab:string}> = (props) => {
    const tab1 =  <Typography className="site-layout-text" style={{padding: 24, textAlign:'left'}}>
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
    const tab2 = <Game />
    const tab3 = <Button type="primary" block size="large">Big Button</Button>

    if(props.tab == "1")
        return tab1
    else if(props.tab == "2")
        return tab2
    else if(props.tab == "3")
        return tab3
    else 
        return tab1

}