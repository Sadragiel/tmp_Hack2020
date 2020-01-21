export default storeName => {
    const getStore = (state) => state[storeName] || {};

    return {
        getFormattedResult: state => getStore(state).formattedResult,
        isHumming: state => getStore(state).isHumming,
    };
}