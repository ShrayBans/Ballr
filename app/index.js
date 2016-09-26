import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import style from './styles/main.scss';
import App from './containers/app';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('.container'));
