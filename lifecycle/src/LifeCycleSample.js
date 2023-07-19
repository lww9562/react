import { Component } from 'react';
import ErrorComponent from './ErrorComponent';

class LifeCycleSample extends Component {
    state = {
        count : 0,
        color: null
    };
    constructor(props) {
        super(props);
        console.log(props);
        console.log("constructor");
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if(nextProps.color !== prevState.color) {
            console.log("색상 상태값 변경!");
            return { color : nextProps.color, count : prevState.count+1 }; // 지정된 값이 state의 값에서 변경
        } 
        
        return null;
    }

    componentDidMount() {
        console.log("componentDidMount");
        console.log("------------------------");
    }

    
    shouldComponentUpdate(nextProps, nextState) {
        return nextState.count %4 !== 0;    // 4의 배수이면 렌더링 갱신 안함!
    }

    getSnapshotBeforeUpdate(props, prevState) {
        return "before";
    }

    componentDidUpdate(props, state, snapshot) {
        console.log("componentDidUpdate");
        console.log(props, state);
        console.log("snapshot", snapshot);
    }

    render() {
        return (
            <div>    
                <ErrorComponent>
                    {this.props.missing.value};
                    <h1 style={{color: this.state.color}}>라이프사이클</h1>
                    <h2>변경 횟수 : {this.state.count}</h2>
                </ErrorComponent>
            </div>
        )
    }
}

export default LifeCycleSample;