import React from 'react';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom';
import './assets/styles/style.scss';
import App from './App';

render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.querySelector('#app'),
);
