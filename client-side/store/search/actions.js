import types from './types';
import { createAction } from 'redux-actions';

export default storeName => {
    const storeTypes = types(storeName);

    return {
        hummingStarted: createAction(storeTypes.HUMMING_STARTED),
        hummingSearch: createAction(storeTypes.HUMMING_SEARCH, basedAudio => ({basedAudio}) ),
        lyricsSearch: createAction(storeTypes.LYRICS_SEARCH, lyrics => ({lyrics}) ),
        applyResults: createAction(storeTypes.APPLY_RESULTS, formattedResult => ({formattedResult}) ),
    }
}