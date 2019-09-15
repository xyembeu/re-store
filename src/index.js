import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';

import App from './app';

import {customHistory} from './history';

import store from './store';


ReactDOM.render(
    <Provider store={store}>
        <Router history={customHistory}>
            <App/>
        </Router>
    </Provider>,
    document.getElementById('root')
);

