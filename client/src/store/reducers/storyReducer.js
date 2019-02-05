import {
    FETCHING_STORIES_START,
    FETCHING_STORIES_SUCCESS,
    FETCHING_STORIES_FAILURE,
    CREATE_STORY_START,
    CREATE_STORY_SUCCESS,
    CREATE_STORY_FAILURE
} from '../actions'

const initialState = {
    stories: [],
    story:[],
    isFetchingStories: false,
    isFetchingStory: false,
    isAddingStory: false,
    error: ''
}

export const storyReducer = (state = initialState, action) => {
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
        case CREATE_STORY_START:
            return{
                ...state,
                isAddingStory: true,
                error: ''
            }
        case CREATE_STORY_SUCCESS:
            return{
                ...state,
                stories: action.payload,
                isAddingStory: false,
                error: ''
            }
        case CREATE_STORY_FAILURE:
            return{
                ...state,
                isAddingStory: false,
                error: ''
            }
        default:
            return state
    }
}