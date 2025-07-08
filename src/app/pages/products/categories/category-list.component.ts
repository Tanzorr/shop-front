import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import {CategoriesService} from './services/categories.service';
import {AsyncPipe, JsonPipe} from '@angular/common';


@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [
    AsyncPipe,
    JsonPipe
  ],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryListComponent implements OnInit {

  private _categoryService = inject(CategoriesService);
  categoriesResponse$  = this._categoryService.categoriesResponse$;

  ngOnInit(): void {
    this._categoryService.getCategories();
  }
}
