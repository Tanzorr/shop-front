export const categoriesSelectors = (state: any) => {
  return state.categoriesReducer.categoriesResponse;
}

export const selectedCategoryIdsSelector = (state: any) => {
  return state.categoriesReducer.selectedCategoryIds || [];
}
