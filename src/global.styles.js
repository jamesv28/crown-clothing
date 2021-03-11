import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    body {
        font-family: 'Fira Sans Condensed', sans-serif;
        padding: 10px 60px;
        background-color: #f3f3f3;

        @media screen and (max-width: 800px) {
            padding: 10px;
        }
    }

    a {
        text-decoration: none;
        color: black;
    }

    * {
        box-sizing: border-box;
    }
`;