import {createAction} from '@ngrx/store';
import {CategoryResponse} from '../../models/category';

export const getCategories = createAction(
  '[CategoryListComponent] Get CategoryListComponent',
  (params?: string) => ({params})
)

export const getCategoriesSuccess = createAction(
  '[CategoryListComponent] Get CategoryListComponent Success',
  (categories: CategoryResponse) => ({categories})
)

export const getCategoriesFailure = createAction(
  '[CategoryListComponent] Get CategoryListComponent Failure',
  (error: any) => ({error})
);

