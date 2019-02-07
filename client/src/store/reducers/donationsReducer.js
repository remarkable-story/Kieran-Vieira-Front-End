import {
    ADD_DONATION_START,
    ADD_DONATION_SUCCESS,
    ADD_DONATION_FAILURE,
    FETCH_DONATION_START,
    FETCH_DONATION_SUCCESS,
    FETCH_DONATION_FAILURE
} from '../actions'

const initialState = {
    donations:{},
    isAddingDonation: false,
    isFetchingDonations: false,
    error: '',
}

export const donationsReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_DONATION_START:
            return{
                ...state,
                isAddingDonation:true,
                error:''
            }
        case ADD_DONATION_SUCCESS:
            return{
                ...state,
                donations: action.payload,
                isAddingDonation: false,
                error: ''
            }
        case ADD_DONATION_FAILURE:
            return{
                ...state,
                isAddingDonation: false,
                error: action.payload
            }
        case FETCH_DONATION_START:
            return{
                ...state,
                isFetchingDonations: true,
                error: '',
            }
        case FETCH_DONATION_SUCCESS:
            return{
                ...state,
                donations: action.payload,
                isFetchingDonations: false,
                error: ''
            }
        case FETCH_DONATION_FAILURE:
            return{
                ...state,
                isFetchingDonations: false,
                error: action.payload
            }
        default:
            return state;
    }
}