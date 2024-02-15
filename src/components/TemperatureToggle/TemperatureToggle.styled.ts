import styled from 'styled-components';

const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledSpan = styled.span`
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 40px;
`;

const StyledLabel = styled.label`
    position: relative;
    display: inline-block;
    width: 46px;
    height: 24px;
    margin-left: 10px;
`;

 const StyledInput = styled.input`
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + .slider {
        background-color: #a2e0a2;
    }

    &:focus + .slider {
        box-shadow: 0 0 1px #a2e0a2;
    }

    &:checked + .slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    }
`;

const StyledDiv = styled.span`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #19aaae;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 34px;
    font-size: 12px;

    display: flex;
    justify-content: space-around;
    align-items: center;
    
    &::before {
        position: absolute;
        content: "";
        height: 24px;
        width: 24px;
        left: 0px;
        bottom: 0px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
        border-radius: 50%;
    }
`;  

export { StyledContainer, StyledSpan, StyledLabel, StyledInput, StyledDiv };