import styled from 'styled-components';

const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledBackgroundGradient = styled.div`
    background: linear-gradient(to right,#5e405c,#367095);
    filter: blur(10px);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
`;

const StyledInnerElement = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 450px;
    height: 565px;
    border-radius: 8px;
    padding: 32px;
    position: relative; 
`;

const StyledDetails = styled.div`
    display: flex;
    justify-content: space-between;
`

const StyledErrorContainer = styled.div`
    flex: 1;
`

const StyledText = styled.span`
  color: #aaa;
`

export { StyledContainer, StyledInnerElement, StyledDetails, StyledErrorContainer, StyledText, StyledBackgroundGradient };

