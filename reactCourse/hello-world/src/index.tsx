import React, { ReactElement } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// const p1: ReactElement = React.createElement("p", null, "Hello world")
// const p2: ReactElement = React.createElement("p", null, "Hello world 2nd para")

// const div: ReactElement =  React.createElement("div",null, [p1,p2]);
// root.render(div); //only 1 can be returned or passed to render

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); // app here means a function called app in importApp from './app'


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
