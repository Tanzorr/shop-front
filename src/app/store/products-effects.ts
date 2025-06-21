import { Actions, createEffect, ofType } from '@ngrx/effects';
import { inject } from '@angular/core';
import { getProducts, getProductsFailure, getProductsSuccess } from './products-acitons';
import { exhaustMap, map, catchError, of } from 'rxjs';
import { ProductsService } from '../services/api/products.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductsEffects {
  private actions$ = inject(Actions);
  private productService = inject(ProductsService);

  getProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getProducts),
      exhaustMap(() =>
        this.productService.getAll().pipe(
          map(products => getProductsSuccess(products)),
          catchError(error => of(getProductsFailure(error)))
        )
      )
    );
  });
}
