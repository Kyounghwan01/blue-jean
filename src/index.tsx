import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "app/store";
import Router from "router";
import reportWebVitals from "./reportWebVitals";
import { MyWindow } from "types";
import "./firebase";

// Kakao Javascript SDK 초기화
(window as MyWindow & typeof globalThis).Kakao.init(
  process.env.REACT_APP_KAKAO_CLIENT_SECRET as string
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
