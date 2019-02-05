import { combineReducers } from 'redux';
import { storyFetcher } from './storyFetcher';
import { authenticationReducer } from './authenticationReducer';

export default combineReducers({
    storyFetcher,
    authenticationReducer
})