import { createReducer, on } from '@ngrx/store';
import { getProductsSuccess } from './products-acitons';

export interface ProductsStateModel {
  products: any[];
  loading: boolean;
  error: any;
}

export interface ProductsState {
  products: ProductsStateModel;
}

const initialState: ProductsStateModel = {
  products: [],
  loading: false,
  error: null,
};

export const productsReducer = createReducer(
  initialState,
  on(getProductsSuccess, (state, { products }) => ({
    ...state,
    products,
    loading: false,
    error: null,
  }))
);
