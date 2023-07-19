import styled, { css } from 'styled-components';
import CustomButton from './CustomButton';

const Box = styled.div`
    background: ${props => props.color || 'blue'};
    padding: 1rem;
    display: flex;
`;

const Button = styled.button`
    background : white;
    color : black;
    border-radius : 4px;
    padding : 0.5rem;
    display : flex;
    align-items : center;
    justify-content : center;
    box-sizing : border-box;
    font-size : 1rem;
    font-weight : 600;

    &:hover {
        background : rgba(255,255,255,0.8);
    }

    ${props => props.border && 
                    css`
                        background: none;
                        border : 2px solid white;
                        color : white;
                        &:hover {
                            background: white;
                            color: black;
                        }
                    `
    }
`;

// 직접 생성한 컴포넌트에 CSS 적용하기
const CButton = styled(CustomButton)`
    border : 2px solid green;
    color: orange;
`;

const StyledComponent = () => {
    
    return (
        <>
            <Box color="black">
                <Button border={true}>안녕하세요!</Button>
            </Box>
            <Box>
                <Button>안녕하세요!</Button>
                <CButton>안녕하세요!</CButton>
            </Box>
        </>
    )
    
};

export default StyledComponent;