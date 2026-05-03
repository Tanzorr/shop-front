import {ProductsStateModel} from '../store/products/products-reducers';
import {CategoriesStateModel} from '../store/categories/categories-reducers';
import {ProductStateModel} from '../store/product/product-reducers';

export interface RootState {
  categoriesReducer: CategoriesStateModel;
  productsReducer: ProductsStateModel;
  productReducer: ProductStateModel;
}
