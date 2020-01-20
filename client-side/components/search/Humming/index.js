import React from 'react';
import  HummingSearch from './HummingSearch';
import { connect } from 'react-redux';

import { actions } from 'store/search';

const mapDispathcToProps = dispatch => ({
    performSearch: humming => dispatch(actions.hummingSearch(humming)),
});
export default props => {
    const ConnectedHummingSearch = connect(
        null,
        mapDispathcToProps
    )(HummingSearch);
    return (
        <ConnectedHummingSearch {...props} />
    );
}