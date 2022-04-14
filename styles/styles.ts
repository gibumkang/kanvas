//serves as a master scss file if you will
import { createGlobalStyle } from 'styled-components'
const GlobalStyle = createGlobalStyle`

    ::selection {
        background: ${(props) => props.theme.colors.primary};
        color: #fff;
    }
    html {
        font-size: 62.5%;
        scroll-behavior: smooth;
    }
    body, html {
        padding: 0;
        margin: 0;
        transition: background .25s ease-in-out;
        background: ${(props) => props.theme.colors.background};
    }
    h1, h2, h3, h4, h5 {
        margin: 0;
        color: ${(props) => props.theme.colors.text};
        letter-spacing: -.05rem;
        font-family: ${(props) => props.theme.fonts.header};
        padding: .75rem 0rem;
        color: #fff;
    }
    h1 {
        font-size: 8rem;
        transition: font-size .25s ease-in-out;
        font-family: ${(props) => props.theme.fonts.header};
        @media screen and (max-width: ${(props) => props.theme.maxWidth}){
            font-size: 5.5rem;
        };
    }
    h2 {
        font-size: 6rem;
        font-family: ${(props) => props.theme.fonts.header};
        @media screen and (max-width: ${(props) => props.theme.maxWidth}){
            font-size: 4rem;
        };
    }
    h3 {
        font-size: 4rem;
        font-family: ${(props) => props.theme.fonts.header};
    }
    h4 {
        font-size: 3.5rem;
        font-family: ${(props) => props.theme.fonts.header};
    }
    ul {
        margin: 0;
        padding: 0;
    }
    p, div, li, a, span, input, textarea, form {
        color: ${(props) => props.theme.colors.text};
        font-size: 1.6rem;
        font-family: ${(props) => props.theme.fonts.main};
    }
    p {
        margin-bottom: 2rem;
    }
    .popover-header {
        background: ${(props) => props.theme.colors.background};
    }
    .bs-popover-bottom > .arrow::after, .bs-popover-bottom .popover-header::before {
        border-bottom-color: ${(props) => props.theme.colors.background};
    }
    pre {
        white-space: pre-wrap;
    }
    input {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
    }
    .text-center {
        text-align: center;
    }
`

export default GlobalStyle
