'use strict';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';
import Router from './router.jsx';

render(
    <Provider store={createStore(reducers)}>
        <Router></Router>
    </Provider>,
    document.getElementById('root')
);