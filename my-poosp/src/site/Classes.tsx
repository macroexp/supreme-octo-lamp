import React, { FC, useState, useEffect } from 'react';
import { Typography, Button, Tooltip, Space, Breadcrumb, Layout } from 'antd';
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

export const Clicker: FC<{poop: any}> = () => {
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

type clockState = {timerID: any, date: any}

export class Clock extends React.Component<{}, clockState> {
    constructor(props: any) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => {
                return this.tick();
            },
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h3>It is {this.state.date.toLocaleTimeString()}.</h3>
            </div>
        )
    }
}


