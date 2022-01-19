import { combineReducers } from 'redux';

import movieReducer from './movieReducer';
import favReducer from './favoritesReducer';
const rootReducer = combineReducers({
    movieReducer,
    favReducer
})

export default rootReducer;