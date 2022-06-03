import { colors } from './colors'

import 'react-toastify/dist/ReactToastify.css'
import { darken } from 'polished'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  ::-webkit-scrollbar {
    width: 1rem;
    background: ${colors.white};
  }

  ::-webkit-scrollbar-thumb {
    -webkit-border-radius: 1rem;
    border-radius: 1rem;
    background: ${colors.gold};
    border: 3px solid ${colors.white};

    &:hover {
      background: ${darken(0.07, colors.gold)}
    }
  }

  html, body, #root {
    height: 100%;
  }

  html {
    scroll-behavior: smooth;

    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: ${colors.white};
    -webkit-font-smoothing: antialiased !important;
    text-rendering: optimizeLegibility !important;
  }

  body, input, button, textarea, select {
    font-family: commuters-sans, sans-serif;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  :root {
    --toastify-color-success: ${colors.green};
    --toastify-color-error: ${colors.red};
  }

  .modal-overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .modal-content {
    width: 100%;
    max-height: calc(100vh - 12rem);
    max-width: 1100px;
    position: relative;
    background-color: ${colors.white};
    overflow-y: auto;
    margin: 0 1rem;
  }

  .modal-close {
    position: absolute;
    right: 1rem;
    top: 1rem;
    border: 0;
    background: transparent;

    svg {
      height: 1rem;
      width: 1rem;
      color: ${colors.black};
    }
  }
`
