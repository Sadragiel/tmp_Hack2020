import { put, takeEvery, takeLatest, select, delay } from 'redux-saga/effects'
import { actions, selectors, types } from './';

import httpClient from 'utils/httpClient';
import escapeCors from 'utils/escapeCors';

const auddioUrl = 'https://api.audd.io/';
const hummingTimeout = 5000;

const formatResult = result => JSON.stringify(result, null, 2);

function* lyricsSearch({ payload: { lyrics } }) {
    yield delay(500);
    const url = new URL(auddioUrl + 'findLyrics');
    url.searchParams.set('q', lyrics);
    url.searchParams.set('api_token', 'fde56d97d8c215316c1ba9f264e86c59');
    url.searchParams.set('return', 'timecode,apple_music,deezer,spotify');

    const response = yield httpClient.get(escapeCors(url.toString()));

    yield put(actions.applyResults( formatResult(response) ));
}

function* wathcLyricsSearch() {
    yield takeLatest(types.LYRICS_SEARCH, lyricsSearch);
}

function* hummingSearch({ payload: { basedAudio } }) {
    const url = new URL(auddioUrl);
    url.searchParams.set('api_token', 'fde56d97d8c215316c1ba9f264e86c59');
    url.searchParams.set('return', 'timecode,apple_music,deezer,spotify');

    console.log('basedAudio', basedAudio);

    const a = new Audio(basedAudio);

    a.play();

    const response = yield httpClient.post(escapeCors(url.toString()), {
        audio: basedAudio
    });

    yield put(actions.applyResults( formatResult(response) ));
}

function* wathcHummingSearch() {
    yield takeLatest(types.HUMMING_SEARCH, hummingSearch);
}

export default [
    wathcLyricsSearch(),
    wathcHummingSearch(),
];