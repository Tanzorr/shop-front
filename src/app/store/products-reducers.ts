import { createReducer, on } from '@ngrx/store';
import { getProductsSuccess } from './products-actions';
import { ProductResponse} from '../models/products';

export interface ProductsStateModel {
  productsResponse: ProductResponse | null;
  loading: boolean;
  error: any;
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
