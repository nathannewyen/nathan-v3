"use client"

import { createGlobalStyle } from 'styled-components';
import inter from 'next/font/google'

const GlobalStyle = createGlobalStyle`
html,
  body {
    font-family: 'Inter', __inter_Fallback_20b187, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    background-color: #0F172A;
    color: #8296BD;
    min-height: 100vh;
    box-sizing: border-box;
  }

    menu, ol, ul {
      padding: 0;
      margin: 0;
      list-style: none;
    }

    h1 {
        margin: 0;
    }
    
    p {
        margin: 0;
    }

`;

export default GlobalStyle;