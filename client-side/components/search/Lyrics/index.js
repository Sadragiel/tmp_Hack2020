import React from 'react';
import  LyricsSearch from './LyricsSearch';
import { connect } from 'react-redux';

import { actions } from 'store/search';

const mapDispathcToProps = dispatch => ({
    performSearch: lyrics => dispatch(actions.lyricsSearch(lyrics)),
});
export default props => {
    const ConnectedLyricsSearch = connect(
        null,
        mapDispathcToProps
    )(LyricsSearch);
    return (
        <ConnectedLyricsSearch {...props} />
    );
}