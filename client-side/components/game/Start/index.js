import React from 'react';
import  Start from './Start';
import { connect } from 'react-redux';

import { actions, selectors } from 'store/game';

const mapStateToProps = state => ({
    attemptQuantity: selectors.attemptQuantity(state),
});


const mapDispathcToProps = dispatch => ({
    setAttemptQuantity: attemptQuantity => dispatch(actions.setAttemptQuantity(attemptQuantity)),
});

export default props => {
    const ConnectedStart = connect(
        mapStateToProps,
        mapDispathcToProps
    )(Start);
    return (
        <ConnectedStart {...props} />
    );
}