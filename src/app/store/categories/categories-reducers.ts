import {createReducer, on} from '@ngrx/store';
import {getCategoriesFailure, getCategoriesSuccess} from './categories-actions';
import {CategoryResponse} from '../../models/category';

export interface CategoriesStateModel {
  categoriesResponse: CategoryResponse | null; // Replace 'any' with the actual type of your categories response
  loading: boolean;
  error: any;
}

export interface CategoriesState {
  categories: CategoriesStateModel;
}

const initialState: CategoriesStateModel = {
  categoriesResponse: null,
  loading: false,
  error: null,
};

export const categoriesReducer = createReducer(
  initialState,

  on(getCategoriesSuccess, (state, { categories }) => ({
    ...state,
    categoriesResponse: categories,
    loading: false,
    error: null,
  })),
  on(getCategoriesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
);
