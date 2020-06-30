import React, { FC } from 'react';
import { Typography, Divider, Space, Button, Tooltip, Layout, Menu, Breadcrumb } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
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

const Body: FC = () => (
    <div className="Body">
        <Button type="primary" block size="large">Big Button</Button>

        <br></br>

        <Button type="default" danger>Default Button</Button>
        <Button type="dashed" disabled>
            DisabledDashed
        </Button>

        <Tooltip title="search">
            <Button type="primary" shape="round" icon={<SearchOutlined />}></Button>
        </Tooltip>

        <Title>Default Title.</Title>
        <Title level={2}>Level 2 Title. Goes down to 4.</Title>

        <Typography>
            
            <Space direction="vertical">
                <Text>Text</Text>
                <Text type="warning">Warning Text</Text>
                <Text strong underline>Strong Underlined Text</Text>
                <Link href="https://ant.design/components/typography/">
                    For all text varieties click here.
                </Link>
            </Space>

            <br></br><br></br>

            {/*<Text editable={{ onChange: this.onChange }}>{this.state.str}</Text>*/}

            <br></br><br></br>

            Press <Text keyboard>Poop?</Text> to exit...
        </Typography>
        <Demo></Demo>
    </div>
);

const Format: FC = () => (
    <Layout>
        <Header style={{position:'fixed', zIndex: 1, width:'100%'}}>
            <div className = "Logo"></div>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
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

        </Sider>
        <Content style={{padding:'0 50px'}}>
            <Breadcrumb style={{margin:'16px 0'}}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-content">
                <Typography>
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
                </Typography>
            <br></br><br></br>

            </div>
        </Content>
        <Footer style={{textAlign:'left'}}>Antd copyright 2020</Footer>
    </Layout>
);

export default Body;
export {Format}