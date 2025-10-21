import styled from 'styled-components';

export const MyButton = styled.button`
    
    background: ${(props) => {
        switch (props.$variant) {
        case 'primary':
            return 'linear-gradient(180deg, #fe7e5d 0%, #ff6378 100%)';
        case 'secondary':
            return 'transparent';
        default:
            return 'transparent';
    }
    }};
    border: ${(props) => props.$variant === 'primary' ? 'none' : '1px solid #fff'};
    font-size: 16px;
    color: #fff;
    padding: 16px 32px;
    width: fit-content;
    cursor: pointer;
    border-radius: 30px;

    &:hover {
        opacity: 0.8;

    }

    &:active {
        opacity: 0.5;
    }

`