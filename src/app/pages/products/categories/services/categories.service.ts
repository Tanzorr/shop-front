import {inject, Injectable} from '@angular/core';
import {CategoriesState} from '../../../../store/categories/categories-reducers';
import {Store} from '@ngrx/store';
import {getCategories, setSelectedCategoryIds} from '../../../../store/categories/categories-actions';
import {categoriesSelectors} from '../../../../store/categories/categories-selectors';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private store:Store<CategoriesState> =inject(Store);
  public categoriesResponse$ = this.store.select(categoriesSelectors);
  public categoriesLoading$ = this.store.select(state => state.categories.loading);

  public getCategories() {
    this.store.dispatch(getCategories());
  }

  public setSelectedCategoryIds(selectedCategoryIds: number[]) {
    this.store.dispatch(setSelectedCategoryIds(selectedCategoryIds))
  }
}
