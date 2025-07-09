import {DestroyRef, inject, Injectable, signal} from '@angular/core';
import {ProductsState} from '../../../../store/products/products-reducers';
import {Store} from '@ngrx/store';
import {getProducts} from '../../../../store/products/products-actions';
import {productsResponseSelector} from '../../../../store/products/products-response-selectors';
import {PageQueryParams} from '../../../../models/pagination';
import {selectedCategoryIdsSelector} from '../../../../store/categories/categories-response-selector';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private  destroyRef = inject(DestroyRef);
  private store: Store<ProductsState> = inject(Store);
  public productsResponse$ = this.store.select(productsResponseSelector);
  public selectedProductIds$ = this.store.select(selectedCategoryIdsSelector);
  public selectedCategoriesIds = signal<number[]>([]);
  constructor() {
    this.selectedProductIds$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((selectedCategoriesIds) => {
        this.getProducts({category_ids: selectedCategoriesIds});
        this.selectedCategoriesIds.set(selectedCategoriesIds);
      });
  }
  public getProducts(pageQueryParams: PageQueryParams) {

    const stringParams = Object.entries(pageQueryParams)
      .map(([key, val]) => `${key}=${val}`)
      .join('&');
    this.store.dispatch(getProducts(stringParams))
  }

  public searchValue(searchValue: string) {
    const params = {search: searchValue, category_ids: this.selectedCategoriesIds()};
    this.getProducts(params);
  }
  public changePage(url:any){
    const urlArr = url.toString().trim().split('=');
    const pageNumber = urlArr[urlArr.length - 1];
    this.getProducts({page: pageNumber,  category_ids:this.selectedCategoriesIds()})
  }
}
