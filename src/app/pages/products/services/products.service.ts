import {inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ProductsState} from '../../../store/products-reducers';
import {Store} from '@ngrx/store';
import {getProducts} from '../../../store/products-acitons';
import {productsResponseSelector, productsResponseSelectors} from '../../../store/products-response-selectors';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private store: Store<ProductsState> = inject(Store);
  public productsResponse$ = this.store.select(productsResponseSelector);
  public productsLoading$ = this.store.select(state => state.products.loading);

  public getProducts() {
    this.store.dispatch(getProducts())
  }

}
