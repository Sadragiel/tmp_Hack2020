import React from 'react';
import  SearchResults from './SearchResults';
import { connect } from 'react-redux';

import { selectors } from 'store/search';

const mapStateToProps = state => ({
    formattedResult: selectors.getFormattedResult(state),
});

export default props => {
    const ConnectedSearchResults = connect(
        mapStateToProps
    )(SearchResults);
    return (
        <ConnectedSearchResults {...props} />
    );
}