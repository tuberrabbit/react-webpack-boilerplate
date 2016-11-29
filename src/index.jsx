'use strict';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {Router, Route, browserHistory} from 'react-router';
import reducers from './reducers';
import App from './app';

render(
    <Provider store={createStore(reducers)}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>

            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);