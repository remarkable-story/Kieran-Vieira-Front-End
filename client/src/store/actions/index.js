import axios from 'axios';

//---------------------------------------CRUD for stories----------------------------

export const FETCHING_STORIES_START = 'FETCHING_STORIES_START';
export const FETCHING_STORIES_SUCCESS = 'FETCHING_STORIES_SUCCESS';
export const FETCHING_STORIES_FAILURE = 'FETCHING_STORIES_FAILURE';

export const fetchStories = () => dispatch => {
    dispatch({ type: FETCHING_STORIES_START })
    axios.get('https://remarkable-story-backend.herokuapp.com/api/stories')
        .then(res => dispatch({ type:FETCHING_STORIES_SUCCESS , payload:res.data }))
        .catch(err => dispatch({ type:FETCHING_STORIES_FAILURE , payload:err }))
}

export const CREATE_STORY_START = 'CREATE_STORY_START';
export const CREATE_STORY_SUCCESS = 'CREATE_STORY_SUCCESS';
export const CREATE_STORY_FAILURE = 'CREATE_STORY_FAILURE';

export const createStory = storyInfo => dispatch => {
    dispatch({ type:CREATE_STORY_START })
    axios.post('https://remarkable-story-backend.herokuapp.com/api/story', storyInfo)
        .then(res => console.log(res))
        .catch(err => console.log(err))
}

//---------------------------------------Authentication----------------------------

export const SIGN_UP_START = 'SIGN_UP_START';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const signUp = userInfo => dispatch => {
    dispatch({ type:SIGN_UP_START })
    axios.post('https://remarkable-story-backend.herokuapp.com/api/register', userInfo)
        .then(res => console.log(res))
        .catch(err => console.log(err))
}

export const LOG_IN_START = 'LOG_IN_START';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const login = userInfo => dispatch => {
    dispatch({ type:LOG_IN_START })
    axios.post('https://remarkable-story-backend.herokuapp.com/api/register', userInfo)
        .then(res => console.log(res))
        .catch(err => console.log(err))
}