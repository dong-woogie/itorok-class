import { createGlobalStyle } from "@styled-components";
import { reset } from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing : border-box;
  }
  html {
    font-size : 62.5%;
  }
  body {
    background-color : #fff;
    font-size : 1.6rem;
    color: "#495057";
    font-family: 'Grandstander', cursive;
    font-family: 'Noto Sans KR', sans-serif;
    font-family: 'Nanum Myeongjo', serif;
  }
  a {
    color : inherit;
    text-decoration : none;
    cursor : pointer;
  }
  input, button {
    background-color : transparent;
    outline : none;
    border : none;
    padding : 0;
  }

  button {
    cursor : pointer;
  }
  
  h1,h2,h3,h4,h5,h6 {
    font-family : 'Maven Pro', sans-serif;
  }

  h2{
    font-size : 2.1rem;
  }

  h4{
    font-size : 1.6rem;
  }

  img {
    display : block;
    width : 100%;
    height : 100%;
  }
`;

export default GlobalStyle;
