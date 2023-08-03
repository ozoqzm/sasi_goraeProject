import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@media (hover: hover) {
    html {
      width: 375px;
      margin: 0 auto;
    }
  }
  @font-face {
    font-family: ;
    font-weight: ;
    font-style: ;
    color: ;
  }
  body{
    margin: 0;
    font-family:;
  }
  .container {
    position: relative;
    height: 100%;
    margin: 0 auto;
    text-align: center;
    overflow: auto;
    -ms-overflow-style: none;
  }
  .container::-webkit-scrollbar {
    display: none;
  }
`;
