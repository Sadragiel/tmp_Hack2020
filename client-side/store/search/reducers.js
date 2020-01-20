import types from './types';

const initialState = {
    formattedResult: '',
};

export default storeName => (state = initialState, action) => {
    const storeTypes = types(storeName);

    switch(action.type) {
        case storeTypes.APPLY_RESULTS: 
            return {
                ...state,
                formattedResult: action.payload.formattedResult
            };
        default: 
            return { ...state }
    }
}