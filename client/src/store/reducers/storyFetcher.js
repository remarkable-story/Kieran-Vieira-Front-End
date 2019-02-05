import {
    FETCHING_STORIES_START,
    FETCHING_STORIES_SUCCESS,
    FETCHING_STORIES_FAILURE,
    FETCHING_STORY_START,
    FETCHING_STORY_SUCCESS,
    FETCHING_STORY_FAILURE
} from '../actions'

const initialState = {
    stories: [],
    story:[],
    isFetchingStories: false,
    isFetchingStory: false,
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
        case FETCHING_STORY_START:
            return{
                ...state,
                isFetchingStory: true,
                error: ''
            }
        case FETCHING_STORY_SUCCESS:
            return{
                ...state,
                story: action.payload,
                isFetchingStory: false,
                error: ''
            }
        case FETCHING_STORY_FAILURE:
            return{
                ...state,
                isFetchingStory: false,
                error: '',
            }
        default:
            return state
    }
}