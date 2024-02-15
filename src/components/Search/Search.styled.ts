import styled from 'styled-components';

const StyledInput = styled.input`
    background-color: white;
    width: 315px;
    height: 45px;
    border: 1px solid white;
    color: #555;
    padding: 8px 16px;
    font-size: 16px;
    border-radius: 50px;
    box-shadow: 0 4px 16px -2px #000;

    &:focus, &:active {
        outline: #0e907d;
        border: 1px solid #00ecff;
    }
`;

const StyledButton = styled.button`
    display: block;
    background-color: #555;
    border: 1px solid #555;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    padding: 8px 16px;
    background-image: url(/search.svg);
    background-repeat: no-repeat;
    background-size: 24px;
    background-position: center;
    width: 50px;
    position: absolute;
    height: 45px;
    right: -1px;
    cursor: pointer;
`;

// add box shadow
const StyledForm = styled.form`
    display: flex;
    border-radius: 50px;
`;

const StyledOptionList = styled.ul`
    background-color: #ffffff80;
    position: absolute; 
    list-style: none;
    top: 45px;
    left: 20px;
    width: calc(100% - 75px);
    text-align: left;
`;

const StyledOption = styled.li`
    padding: 8px 16px;
    border-bottom: 1px solid #555;
    &:hover {
        cursor: pointer;
    }
`;

const StyledSearchBox = styled.div`
   position: relative;
`;

export { StyledInput, StyledButton, StyledForm, StyledOptionList, StyledOption, StyledSearchBox };

