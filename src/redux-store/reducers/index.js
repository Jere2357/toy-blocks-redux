import { combineReducers } from 'redux';
import ThawingReducers from './ThawingReducers';
import LowLandsReducers from './LowlandsReducers';

export default combineReducers({
    thawing: ThawingReducers,
    lowland: LowLandsReducers
})