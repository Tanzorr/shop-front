import {inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ProductsState} from '../../../../store/products-reducers';
import {Store} from '@ngrx/store';
import {getProducts} from '../../../../store/products-acitons';
import {productsSelectors} from '../../../../store/products-selectors';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private store: Store<ProductsState> = inject(Store);
  public products$ = this.store.select(productsSelectors);

  public getProducts() {
    this.store.dispatch(getProducts())
  }

}
