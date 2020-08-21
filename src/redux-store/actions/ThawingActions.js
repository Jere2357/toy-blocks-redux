import axios from 'axios'
import { 
    THAWING_SERVER_ADDRESS, 
    FETCH_THAWING_SUCCESS, 
    FETCH_THAWING_FAIL 
} from './types';

const THAWING_URL = THAWING_SERVER_ADDRESS;

const HEADERS = {
    headers: {
        'Content-Type': 'application/json',
    }
};

export const fetchThawing = () => async dispatch => {
    try {
        const response = await axios.get(`${THAWING_URL}/blocks`, HEADERS);
        if(response.status === 200){
            dispatch({
                type: FETCH_THAWING_SUCCESS,
                payload: response.data
            })
        }
    } catch (e) {
        dispatch({
            type: FETCH_THAWING_FAIL,
            payload: 'Failed to retrieve thawing spring'
        })
    }
}
