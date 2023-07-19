import { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            number : 0
        };
    }

    render() {  /** 상태 변경 시 호출됨 */
        const { number } = this.state;

        return (
            <div>
                <h1>{number}</h1>
                <button onClick={() => this.setState({number : number-1})}>-</button>
                <button onClick={() => this.setState({number : number+1})}>+</button>
            </div>
        );
    }
};

export default Counter;