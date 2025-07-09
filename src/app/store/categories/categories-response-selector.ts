export const selectedCategoryIdsSelector = (state: any) => {
  return state.categoriesReducer.selectedCategoryIds || [];
}

export const categoriesListSelector = (state: any) => {
  return state.categoriesReducer.categoriesResponse?.data || [];
}
