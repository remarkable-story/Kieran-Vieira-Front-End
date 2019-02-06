import {
    FETCHING_STORIES_START,
    FETCHING_STORIES_SUCCESS,
    FETCHING_STORIES_FAILURE,
} from '../actions'

const initialState = {
    stories: [],
    isFetchingStories: false,
    error: ''
}

export const storyFetcher = (state = initialState, action) => {
    switch(action.type){
        case FETCHING_STORIES_START:
            return{
                ...state,
                isFetchingStories: true,
                error: ''
            }
        case FETCHING_STORIES_SUCCESS:
            return{
                ...state,
                isFetchingStories: false,
                stories: action.payload,
                error: ''
            }
        case FETCHING_STORIES_FAILURE:
            return{
                ...state,
                isFetchingStories: false,
                error: action.payload
            }
        default:
            return state
    }
}