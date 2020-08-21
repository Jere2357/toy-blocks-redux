import { 
    THAWING_SERVER_ADDRESS, 
    FETCH_THAWING_SUCCESS, 
    FETCH_THAWING_FAIL 
} from '../actions/types';

const initial_state = {
    blocks: [],
    status: ''
}


export default function(state = initial_state, action){
    switch(action.type){
        case FETCH_THAWING_SUCCESS:
            return{
                ...state,
                blocks: action.payload.data,
                status: ''
            };
        case FETCH_THAWING_FAIL:
            return{
                ...state,
                status: 'failed to retrieve'
            };    
        default:
            return state;
    }
}