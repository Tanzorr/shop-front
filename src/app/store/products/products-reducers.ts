import { createReducer, on } from '@ngrx/store';

import { ProductResponse} from '../../models/products';
import {getProductsSuccess} from './products-actions';

export interface ProductsStateModel {
  productsResponse: ProductResponse | null;
  loading: boolean;
  error: any;
  selectedCategoryIds?: number[]; // Optional property to hold selected category IDs
}

export interface ProductsState {
  products: ProductsStateModel;
}

const initialState: ProductsStateModel = {
  productsResponse: null,
  loading: false,
  error: null,
};

export const productsReducer = createReducer(
  initialState,
  on(getProductsSuccess, (state, {products}) => ({
    ...state,
    productsResponse: products,
    loading: false,
    error: null,
  }))
);
