'use strict';
import { GET_DEPENDENCIES, ERROR } from './action';

const initialState = {
    items: [],
    error: {}
};
const appReducer = (state = initialState, action)=> {
    switch (action.type) {
        case GET_DEPENDENCIES:
            return Object.assign({}, state, {items: action.data});
        case ERROR:
            return Object.assign({}, state, {error: action.error});
        default:
            return state;
    }
};

export default appReducer;