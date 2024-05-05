"use client"

import { createGlobalStyle } from 'styled-components';
import inter from 'next/font/google'

const GlobalStyle = createGlobalStyle`
html,
  body {
    font-family: 'Inter', __inter_Fallback_20b187, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    background-color: rgb(15 23 42);
    min-height: 100vh;
    box-sizing: border-box;
    scroll-behavior: smooth;
    position: relative;
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
    
    img, video {
      max-width: 100%;
      height: auto;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    audio, canvas, embed, iframe, img, object, svg, video {
      display: block;
      vertical-align: middle;
    }

    table {
      text-indent: 0;
      border-color: inherit;
      border-collapse: collapse;
    }

    .loading-icon {
      animation: spin 1s linear infinite;
    }
    
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
`;

export default GlobalStyle;