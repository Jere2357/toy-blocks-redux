import axios from 'axios';
import {
    LOWLANDS_SERVER_ADDRESS,
    FETCH_LOWLANDS_SUCCESS,
    FETCH_LOWLANDS_FAIL
} from './types';

const LOWLANDS_URL = LOWLANDS_SERVER_ADDRESS;

const HEADERS = {
    headers: {
        'Content-Type': 'application/json',
    }
};

export const fetchLowlands = () => async dispatch => {
    try {
        const response = await axios.get(`${LOWLANDS_URL}/blocks`, HEADERS);
        if(response.status === 200){
            dispatch({
                type: FETCH_LOWLANDS_SUCCESS,
                payload: response.data
            });
        }
    } catch (e) {
        dispatch({
            type: FETCH_LOWLANDS_FAIL,
            payload: 'Failed to retrieve lowlands'
        });
    }
};