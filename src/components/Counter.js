import React, { Component, } from 'react';

class Counter extends Component {

    state = {
        Count: 0
    }

    Increment = () => {
        const { Count } = this.state
        const { onChange } = this.props
        this.setState({ Count: Count + 1 })
        onChange('increment', Count + 1)
    }
    Decrement = () => {
        const { Count } = this.state
        const { onChange } = this.props
        this.setState({ Count: Count - 1 })
        onChange('decrement', Count - 1)
    }

    render() {
        const { Count } = this.state
        const { GetTittle } = this.props
        return (
            <React.Fragment>
                <div>
                    <h1>{GetTittle}</h1>
                    <button onClick={this.Increment}>Increment</button>
                    <span>&nbsp; {Count} &nbsp;</span>
                    <button onClick={this.Decrement}>Decrement</button>
                </div>
            </React.Fragment>
        );
    }
}

export default Counter;