import types from './types';

const initialState = {
    formattedResult: '',
};

export default storeName => (state = initialState, action) => {
    const storeTypes = types(storeName);

    switch(action.type) {
        case storeTypes.HUMMING_STARTED: 
            return {
                ...state,
                isHumming: true
            };
        case storeTypes.APPLY_RESULTS: 
            return {
                ...state,
                formattedResult: action.payload.formattedResult,
                isHumming: false
            };
        default: 
            return { ...state }
    }
}