export default storeName => {
    const getStore = (state) => state[storeName] || {};

    return {
        appScore: state => getStore(state).formattedResult,
        playerScore: state => getStore(state).playerScore,
        attemptQuantity: state => getStore(state).attemptQuantity,
    };
}