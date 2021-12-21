import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "assets/styles/global-styles";
import { theme } from "assets/styles/theme";
import { store } from "app/store";
import Router from "router";
import reportWebVitals from "./reportWebVitals";
import { ModalProvider, ModalRoot } from "context";
import { MyWindow } from "types";
import "api/firebase";

// Kakao Javascript SDK 초기화
(window as MyWindow & typeof globalThis).Kakao.init(
  process.env.REACT_APP_KAKAO_CLIENT_SECRET as string
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ModalProvider>
          <GlobalStyle />
          <ModalRoot />
          <div id="portal" />
          <Router />
        </ModalProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
