import {inject, Injectable} from '@angular/core';
import {ProductsState} from '../../../../store/products-reducers';
import {Store} from '@ngrx/store';
import {getProducts} from '../../../../store/products-actions';
import {productsResponseSelector} from '../../../../store/products-response-selectors';
import {PageQueryParams} from '../../../../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private store: Store<ProductsState> = inject(Store);
  public productsResponse$ = this.store.select(productsResponseSelector);
  public productsLoading$ = this.store.select(state => state.products.loading);

  public getProducts(pageQueryParams: PageQueryParams) {

    const stringParams = Object.entries(pageQueryParams)
      .map(([key, val]) => `${key}=${val}`)
      .join('&');
    this.store.dispatch(getProducts(stringParams))
  }
}
