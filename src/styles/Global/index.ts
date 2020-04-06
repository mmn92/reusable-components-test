import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    html, body {
        font-family: 'Roboto', sans-serif;
        margin: 0;
        padding: 0;
        outline: none;
    }

    .App {
        padding: 20px;
    }

    .btn-container {
        width: 500px;
        margin: 0 auto;
    }
`;
