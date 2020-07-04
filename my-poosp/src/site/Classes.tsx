import React, { FC, useState, useEffect } from 'react';
import { Typography, Button, Tooltip, Space, Breadcrumb, Layout, Card, Row, Col } from 'antd';
import { SearchOutlined, AppstoreOutlined,BarChartOutlined,CloudOutlined,
    ShopOutlined, TeamOutlined, UserOutlined, UploadOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Game } from '../components/game';
import { ReactComponent } from '*.svg';
import { stringify } from 'querystring';
import { type } from 'os';

const { Title, Paragraph, Text, Link } = Typography;
const { Header, Content, Footer, Sider } = Layout;

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



