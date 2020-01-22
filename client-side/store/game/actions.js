import types from './types';
import { createAction } from 'redux-actions';

export default storeName => {
    const storeTypes = types(storeName);

    return {
        setAttemptQuantity: createAction(storeTypes.SET_ATTEMPT_QUANTITY, attemptQuantity => { attemptQuantity }),
        incrementScore: createAction(storeTypes.INCREMEMENT_SCORE, playerWin => ({ playerWin }) ),
    }
}