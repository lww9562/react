import { Component } from "react";

class ErrorComponent extends Component {
    state = {
        error : false  // 에러가 발생하면 상태값을 true로 변경
    };

    componentDidCatch(error, info) {
        console.log("error : ", error, info);
        this.setState({error : true});
    };

    render() {
        if(this.state.error) {
            return <div>에러 발생</div>;
        }

        return this.props.children;
    }
}

export default ErrorComponent;