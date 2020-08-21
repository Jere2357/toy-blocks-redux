import {
    FETCH_LOWLANDS_SUCCESS,
    FETCH_LOWLANDS_FAIL
} from '../actions/types';

const initial_state = {
    lowlands: [],
    status: ''
};

export default function(state = initial_state, action){
    switch(action.type){
        case FETCH_LOWLANDS_SUCCESS:
            return{
                ...state,
                lowlands: action.payload.data,
                status: ''
            }
        case FETCH_LOWLANDS_FAIL:
            return{
                ...state,
                status: 'failed to retrieve'
            }    
        default:
            return state;    
    }
}