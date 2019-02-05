import {
    SIGN_UP_START,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILURE,
    LOG_IN_START,
    LOG_IN_SUCCESS,
    LOG_IN_FAILURE
} from '../actions';

const initialState = {
    //token data here?
}

export const authenticationReducer = (state = initialState, action) => {
    switch(action.type){
        default:
            return state;
    }
}