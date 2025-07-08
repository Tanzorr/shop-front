export const categoriesSelectors = (state: any) => {
  console.log('ccc',state.categoriesReducer);
  return state.categoriesReducer.categoriesResponse;
}
