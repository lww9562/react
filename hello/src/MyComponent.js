import PropTypes from 'prop-types';

const MyComponent = ({name, age, children}) => {
    //const {name, age} = props;  // {name : "이름", age : 40}

    return (
        <>
            <div>나의 컴포넌트!</div>
            <div>이름 : {name}</div>
            <div>나이 : {age}</div>
            <div>내용 : {children}</div>
        </>
    );
};

MyComponent.defaultProps = {
    name : '기본 이름'
};

MyComponent.propTypes = {
    name : PropTypes.string.isRequired,
    age : PropTypes.number.isRequired
}

export default MyComponent;