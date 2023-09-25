import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import store from "./store/store";
const root = ReactDOM.createRoot(document.getElementById('root'));

// 페이지가 로드되면 body에 loaded 클래스를 추가
// 화면 최초 깜빡임 제어
window.onload = () => {
    document.body.classList.add('loaded');
}

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
