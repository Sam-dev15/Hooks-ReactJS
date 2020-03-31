import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Cities from './Components/Cities';
import Aircrafts from './Components/Aircrafts';
import AirPorts from './Components/AirPorts';


ReactDOM.render(
  <React.StrictMode>
    <Cities />
    <Aircrafts />
    <AirPorts />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
