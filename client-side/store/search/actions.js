import types from './types';
import { createAction } from 'redux-actions';

export default storeName => {
    const storeTypes = types(storeName);

    return {
        lyricsSearch: createAction(storeTypes.LYRICS_SEARCH, lyrics => ({lyrics}) ),
        hummingSearch: createAction(storeTypes.HUMMING_SEARCH, basedAudio => ({basedAudio}) ),
        applyResults: createAction(storeTypes.APPLY_RESULTS, formattedResult => ({formattedResult}) ),
    }
}