import types from './types';

const initialState = {
    appScore: 0,
    playerScore: 0,
    attemptQuantity: 5,
};

const calcScore = (currScore, shoulbBeIncreased) => currScore + +!!shoulbBeIncreased;

export default storeName => (state = initialState, action) => {
    const storeTypes = types(storeName);

    switch(action.type) {
        case storeTypes.INCREMEMENT_SCORE: 
            return {
                ...state,
                appScore: calcScore(state.appScore, !action.payload.playerWin),
                playerScore: calcScore(state.playerScore, action.payload.playerWin),
            };
        case storeTypes.SET_ATTEMPT_QUANTITY: 
            return {
                ...state,
                attemptQuantity: action.payload.attemptQuantity,
            };
        default: 
            return { ...state }
    }
}