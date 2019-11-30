import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import Reactotron from 'reactotron-react-js'
// Reactotron
//     .configure({ host: '10.110.6.165' }) // controls connection & communication settings
//     // .useReactNative() // add all built-in react native plugins
//     .connect() // let's connect!

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
