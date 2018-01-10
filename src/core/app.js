import ReactDOM from 'react-dom';
import React from 'react';

import { Provider } from 'react-redux';
import { Router } from 'react-router';

import routes from './routes';
import configureStore from '../modules/configure-store';

import 'typeface-roboto';
import '../styles/main.css';

const { store, history } = configureStore();

const App = () => (
  <Provider store={store}>
    <Router history={history}>{routes}</Router>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
