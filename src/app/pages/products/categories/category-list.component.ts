import {ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit, signal} from '@angular/core';
import {CategoriesService} from './services/categories.service';
import {AsyncPipe} from '@angular/common';
import {Category} from '../../../models/category';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';


@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [
    AsyncPipe,
  ],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryListComponent implements OnInit {
  private  destroyRef = inject(DestroyRef);
  private _categoryService = inject(CategoriesService);
  categoriesResponse$  = this._categoryService.categoriesResponse$;

  selectedCategoriesIds = signal<number[]>([]);
  categories = signal<Category[]>([]);

  ngOnInit(): void {
    this._categoryService.getCategories();
    this.categoriesResponse$.pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(
      (categoriesResponse) => {
        this.categories.set(categoriesResponse.data);
      }
    );
  }

  toggleCategory(categoryId: number): void {
    const currentSelection = this.selectedCategoriesIds();
    if (currentSelection.includes(categoryId)) {
      this.selectedCategoriesIds.set(currentSelection.filter(id => id !== categoryId));
    } else {
      this.selectedCategoriesIds.set([...currentSelection, categoryId]);
    }

    this._categoryService.setSelectedCategoryIds(this.selectedCategoriesIds());
  }
}
