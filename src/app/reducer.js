'use strict';
import Immutable from 'immutable';
import { GET_DEPENDENCIES, ERROR } from './action';

const initialState = {
    items: [],
    error: {}
};
const appReducer = (state = initialState, action)=> {
    switch (action.type) {
        case GET_DEPENDENCIES:
            return Immutable.fromJS(state).merge({
                items: action.data
            }).toJS();
        case ERROR:
            return Immutable.fromJS(state).merge({
                error: action.error
            }).toJS();
        default:
            return state;
    }
};

export default appReducer;