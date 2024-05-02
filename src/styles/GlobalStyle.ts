"use client"

import { createGlobalStyle } from 'styled-components';
import inter from 'next/font/google'

const GlobalStyle = createGlobalStyle`
html,
  body {
    font-family: 'Inter', __inter_Fallback_20b187, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    background-color: rgb(15 23 42);
    //color: #8296BD;
    min-height: 100vh;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

    menu, ol, ul {
      padding: 0;
      margin: 0;
      list-style: none;
    }

    blockquote, dd, dl, figure, h1, h2, h3, h4, h5, h6, hr, p, pre{
        margin: 0;
    }
    
    p {
        margin: 0;
    }

`;

export default GlobalStyle;