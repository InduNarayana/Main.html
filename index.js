import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
//import ResLogin from './components/ResLogin.component';
import CoorLogin from './components/CoorLogin.component';
//ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<ResLogin/>,document.getElementById("root"));
ReactDOM.render(<CoorLogin/>,document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
