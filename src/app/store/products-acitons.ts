import {createAction} from '@ngrx/store';

export const getProducts = createAction(
  '[Products] Get Products'
);
export const getProductsSuccess = createAction(
  '[Products] Get Products Success',
  (products: any[]) => ({products})
);

export const getProductsFailure = createAction(
  '[Products] Get Products Failure',
  (error: any) => ({error})
);

