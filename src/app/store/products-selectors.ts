import {ProductsState} from './products-reducers';

export const productsSelectors = (state: ProductsState) => {
  return {
    products: state.products.products,
    loading: state.products.loading,
    error: state.products.error,
  };
}
