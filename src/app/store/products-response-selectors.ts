

export const productsResponseSelectors = (state: any) => {
  const { productsResponse, loading, error } = state.productsReducer;

  return {
    productsResponse,
    loading,
    error
  };
};

export const productsResponseSelector = (state: any) => {
  return state.productsReducer.productsResponse;
}
