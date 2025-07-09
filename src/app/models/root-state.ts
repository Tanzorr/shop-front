import {ProductsStateModel} from '../store/products/products-reducers';
import {CategoriesStateModel} from '../store/categories/categories-reducers';

export interface RootState {
  categoriesReducer: CategoriesStateModel;
  productsReducer: ProductsStateModel;
}
