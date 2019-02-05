import axios from 'axios';

export const FETCHING_STORIES_START = 'FETCHING_STORIES_START';
export const FETCHING_STORIES_SUCCESS = 'FETCHING_STORIES_SUCCESS';
export const FETCHING_STORIES_FAILURE = 'FETCHING_STORIES_FAILURE';

export const FETCHING_STORY_START = 'FETCHING_STORY_START';
export const FETCHING_STORY_SUCCESS = 'FETCHING_STORY_SUCCESS';
export const FETCHING_STORY_FAILURE = 'FETCHING_STORY_FAILURE';

export const fetchStories = () => dispatch => {
    dispatch({ type: FETCHING_STORIES_START })
    axios.get('https://remarkable-story-backend.herokuapp.com/api/stories')
        .then(res => dispatch({ type:FETCHING_STORIES_SUCCESS , payload:res.data }))
        .catch(err => dispatch({ type:FETCHING_STORIES_FAILURE , payload:err }))
}

export const fetchStory = id => dispatch => {
    dispatch({ type: FETCHING_STORY_START })
    axios.get(`https://remarkable-story-backend.herokuapp.com/api/story/${id}`)
        .then(res => dispatch({ type:FETCHING_STORY_SUCCESS , payload:res.data }))
        .catch(err => dispatch({ type:FETCHING_STORY_FAILURE , payload:err }))
}