import * as actionTypes from './types';


export const userAction = (data) => {
    return { 
        type: actionTypes.ADD_USER,
        data
    }
}