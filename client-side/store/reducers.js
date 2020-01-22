import { combineReducers } from 'redux';

import search from './search';
import game from './game';

export default combineReducers({
    search,
    game
});