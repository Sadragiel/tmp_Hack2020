import React from 'react';
import  HummingSearch from './HummingSearch';
import { connect } from 'react-redux';

import { actions, selectors } from 'store/search';

const mapStateToProps = state => ({
    isHumming: selectors.isHumming(state),
});

const mapDispathcToProps = dispatch => ({
    performSearch: humming => dispatch(actions.hummingSearch(humming)),
    startHumming: () => dispatch(actions.hummingStarted()),
});
export default props => {
    const ConnectedHummingSearch = connect(
        mapStateToProps,
        mapDispathcToProps
    )(HummingSearch);
    return (
        <ConnectedHummingSearch {...props} />
    );
}