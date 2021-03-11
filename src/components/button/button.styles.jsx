import styled, {css} from 'styled-components';

const invertedButtonStyles = css`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
        background-color: black;
        color: white;
    }
`;

const buttonStyles = css`
    background-color: black;
    color: white;

    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }
  
    &:disabled {
        background-color: #ccc;
        color: white;
        border: none;
        cursor: not-allowed;
    }
`;

const googleSignInStyles = css`
    background-color: #4285e4;
      color: white;

      &:hover {
        background-color: #357ae8;
        border: none;
      }
`;

const getButtonStyles = props => {
    if(props.isGoogleSignIn) return googleSignInStyles;
    return props.inverted ? invertedButtonStyles : buttonStyles
}

export const CustomButtonContainer = styled.button`
    min-width: 125px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: bolder;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
`;
