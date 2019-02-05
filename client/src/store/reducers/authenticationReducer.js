import {
    SIGN_UP_START,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILURE,
    LOG_IN_START,
    LOG_IN_SUCCESS,
    LOG_IN_FAILURE
} from '../actions';

const initialState = {
    token: '',
    isLoggingIn: false,
    isSigningUp: false,
    error: ''
}

export const authenticationReducer = (state = initialState, action) => {
    switch(action.type){
        case SIGN_UP_START:
            return{
                ...state,
                token: '',
                isSigningUp: true,
                error: '',
            }
        case SIGN_UP_SUCCESS:
            return{
                ...state,
                token: action.payload.token,
                isSigningUp: false,
                error: ''
            }
        case SIGN_UP_FAILURE:
            return{
                ...state,
                token: '',
                isSigningUp: false,
                error: action.payload
            }
        case LOG_IN_START:
            return{
                ...state,
                token: '',
                isLoggingIn: true,
                error: ''
            }
        case LOG_IN_SUCCESS:
            return{
                ...state,
                token: action.payload.token,
                isLoggingIn: false,
                error: ''
            }
        case LOG_IN_FAILURE:
            return{
                ...state,
                token: '',
                isLoggingIn: false,
                error: ''
            }
        default:
            return state;
    }
}