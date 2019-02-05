import { combineReducers } from 'redux';
import { storyReducer } from './storyReducer';
import { authenticationReducer } from './authenticationReducer';

export default combineReducers({
    storyReducer,
    authenticationReducer
})