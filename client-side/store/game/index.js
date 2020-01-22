import searchActions from './actions';
import searchReducers from './reducers';
import searchTypes from './types';
import searchSelectors from './selectors';

const storeName = 'game';

export const actions = searchActions(storeName);
export const types = searchTypes(storeName);
export const selectors = searchSelectors(storeName);

export default searchReducers(storeName);