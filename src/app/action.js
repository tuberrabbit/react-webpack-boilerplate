'use strict';
import xhr from '../utils/xhr';
export const GET_DEPENDENCIES = 'GET_DEPENDENCIES';
export const ERROR = 'ERROR';

let flag = true;
export const getDependencies = (dispatch)=> {
    if (flag) {
        xhr.get('/dependencies')
            .then(data=> dispatch({
                type: GET_DEPENDENCIES,
                data
            }), error=> dispatch({
                type: ERROR,
                error
            }));
        flag = false;
    }
};