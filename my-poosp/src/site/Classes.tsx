import React, { FC, useState, useEffect } from 'react';
import { Typography, Button, Tooltip, Space, Breadcrumb, Layout, Card, Row, Col } from 'antd';
import { SearchOutlined, AppstoreOutlined,BarChartOutlined,CloudOutlined,
    ShopOutlined, TeamOutlined, UserOutlined, UploadOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Game } from '../components/game';
import { stringify } from 'querystring';
import { type } from 'os';
import { responsiveMap } from 'antd/lib/_util/responsiveObserve';

const { Title, Paragraph, Text, Link } = Typography;
const { Header, Content, Footer, Sider } = Layout;

type contentProps = {message: string, setMessage: (message:string) => void}

export class ActualContent extends React.Component<contentProps> {
    ButtonClick = async() => {
        const name = "manual";
        const age = "92";
        const response = await fetch('http://localhost:7000/' + name + '/' + age, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({tim: 5, varioustextandthings: "farts."})
        });
        let objects = await response.json();
        this.props.setMessage(objects.yourname + objects.yourage);
    }

    render() {
        return(
            <Typography className="site-layout-text" style={{padding: 24, textAlign:'left'}}>
                <Button type="primary" block size="large" onClick={this.ButtonClick}>Big Button</Button>
                <Button type="default" danger>Danger Default Button</Button>
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
                    <Text>{this.props.message}</Text>
                    <Text type="warning">Warning Text</Text>
                    <Text strong underline>{}</Text>
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
        )
    }
}

export class Demo extends React.Component {
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

type clickerState = {count: number}

export const Clicker: FC<{clickerState: any}> = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            You clicked {count} times
            <Button onClick={() => setCount(count + 1)}>
                Click here
            </Button>
        </div>
    )
}

type carState = {brand: string, model: string, color: string, transmission: string, year: string}

export class Car extends React.Component<{}, carState> {
    constructor(props: any) {
        super(props);
        
        this.state = {
            brand: "Ford",
            model: "Beans",
            color: "Brown",
            transmission: "Le Manuelle",
            year: "1779"
        };
    }
    render() {
        return <h3><Text underline>
            My Car is a {this.state.brand}. <br />
            It is a {this.state.year} {this.state.brand} {this.state.model}. <br />
            It is {this.state.color}. <br />
            It has a {this.state.transmission} transmission. <br />
        </Text></h3>;
    }
}

export class Garage extends React.Component {
    render() {
        return (
            <div>
                <h2>What Cars are in this Garage?</h2>
                <h3><Car /></h3>
            </div>
        );
    }
}


export class Cards extends React.Component {
    render() {
        return (
            <Space>
                <Row>
                    <Col span={12}>
                        <Card title="Card" style={{ width: 300, height: 300}}>
                            <Paragraph>
                                Content goes here.
                            </Paragraph>
                        </Card>
                    </Col>
                </Row>
                <Card title="Another Card" style={{ width: 200, height: 150 }}>
                    <Paragraph>
                        Here's some more content space.
                    </Paragraph>
                </Card>
                <Card title="Third Card" style={{ width: 300, height: 400}}>
                    <Paragraph>
                        More Card.
                    </Paragraph>
                </Card>
                <Card title="Third Card" style={{ width: 300, height: 400}}>
                    <Paragraph>
                        More Card.
                    </Paragraph>
                </Card>
                <Card title="Third Card" style={{ width: 300, height: 400}}>
                    <Paragraph>
                        More Card.
                    </Paragraph>
                </Card>
                <Card title="Third Card" style={{ width: 300, height: 400}}>
                    <Paragraph>
                        More Card.
                    </Paragraph>
                </Card>
                <Card title="Third Card" style={{ width: 300, height: 400}}>
                    <Paragraph>
                        More Card.
                    </Paragraph>
                </Card>
            </Space>
        )
    }
}

export class TestTab extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col span={24}>col</Col>
                </Row>
                <Row>
                    <Col span={12}>col-12</Col>
                    <Col span={12}>col-12</Col>
                </Row>
            </div>
        )
    }
}





