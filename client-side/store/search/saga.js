import { put, takeLatest} from 'redux-saga/effects'
import { actions, types } from './';

import httpClient from 'utils/httpClient';
import audio from 'utils/audio';

const formatResult = result => JSON.stringify(result, null, 2);

function* lyricsSearch({ payload: { lyrics } }) {
    
    const url = new URL(httpClient.auddioUrl + 'findLyrics');
    url.searchParams.set('q', lyrics);

    const response = yield httpClient.get(url);

    yield put(actions.applyResults( formatResult(response) ));
}

function* wathcLyricsSearch() {
    yield takeLatest(types.LYRICS_SEARCH, lyricsSearch);
}

function* hummingSearch({ payload: { basedAudio } }) {
    const url = new URL(httpClient.auddioUrl);

    const file = yield audio.base64ToFile(basedAudio);
    const formData = new FormData();
    formData.append('file', file);

    const response = yield httpClient.post(url, formData);

    yield put(actions.applyResults( formatResult(response) ));
}

function* wathcHummingSearch() {
    yield takeLatest(types.HUMMING_SEARCH, hummingSearch);
}

export default [
    wathcLyricsSearch(),
    wathcHummingSearch(),
];