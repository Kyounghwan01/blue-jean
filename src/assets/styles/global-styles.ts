import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
    touch-action: manipulation;
  }
  html,
  body {
    width: 100%;
    word-break: keep-all;
    //overflow-x: hidden;
  }
  body {
    height: 100vh;
    font-family: 'Noto Sans KR', 'Apple SD Gothic Neo', sans-serif;
    font-size: 14px;
    color: $hue-s;
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: -0.03em;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: none;
    -moz-osx-font-smoothing: grayscale;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    background: #ffffff;
  }
  //body:before {
  //  content: '';
  //  position: fixed;
  //  left: 0;
  //  top: 0;
  //  width: 100%;
  //  height: 0;
  //}
  /* fix webkit bug(scroll event delay) */
  body,
  div,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  form,
  fieldset,
  p,
  button,
  iframe,
  tr,
  tbody,
  thead,
  table,
  th,
  td,
  b,
  i,
  a,
  span,
  strong,
  em,
  label {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  dl,
  dt,
  dd,
  ul,
  ol,
  li {
    box-sizing: border-box;
    list-style: none;
    padding: 0;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  dt {
    font-weight: normal;
  }
  img,
  fieldset,
  iframe,
  button {
    border: 0 none;
  }
  dl,
  dt,
  dd,
  ul,
  ol,
  li {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  th,
  td {
    border-collapse: collapse;
  }
  caption {
    height: 0;
    overflow: hidden;
    opacity: 0;
    filter: alpha(opacity=0);
  }
  hr {
    border: 0;
    border-top: 1px solid #ccc;
    margin: 40px 0;
  }
  em,
  u,
  cite,
  i,
  abbr {
    font-style: normal;
    text-decoration: none;
  }
  strong,
  b {
    font-weight: normal;
  }
  a {
    color: rgb(16, 79, 252);
    outline-offset: 1px;
    cursor: pointer;
  }
  button {
    border: 0 none;
    font-family: 'Noto Sans KR', 'Apple SD Gothic Neo', sans-serif;
    cursor: pointer;
    background: transparent;
    color: #666;
  }
  input,
  textarea,
  select {
    box-sizing: border-box;
    font-family: 'Noto Sans KR', 'Apple SD Gothic Neo', sans-serif;
    font-size: 14px;
  }
  [class*="inp-"]::-webkit-search-cancel-button {
    display: none;
  }
  label {
    cursor: pointer;
  }
  /* html5 */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  main,
  hgroup,
  nav,
  section,
  summary {
    display: block;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  /* common */
  caption {
    position: relative !important;
    width: 1px !important;
    height: 1px !important;
    z-index: -1 !important;
    color: transparent !important;
    overflow: hidden !important;
    font-size: xx-small !important;
    line-height: 1px !important;
    min-height: 1px !important;
    max-height: 1px !important;
    clip: rect(1px, 1px, 1px, 1px);
  }
`;

export default GlobalStyle;
