/*type clockState = {timerID: any, date: any}*/

type Props = {
    date: number
};

type State = {
    timerID: any
}



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
