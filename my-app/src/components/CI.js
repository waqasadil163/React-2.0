import React, { Component } from 'react';

class CI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 0
        }
    }
    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState((prevState) => ({
                time: prevState.time + 1
            }));
        }, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render() {
        return (
            <div>
                Class Time - {this.state.time}
                <button onClick={() => clearInterval(this.interval)}>Clear Interval</button>
            </div>
        );
    }
}

export default CI;