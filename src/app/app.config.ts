import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import {routes } from './app.routes';

import {provideStore} from '@ngrx/store';
import {productsReducer} from './store/products/products-reducers';
import {provideEffects} from '@ngrx/effects';

import {provideHttpClient} from '@angular/common/http';
import {provideStoreDevtools} from '@ngrx/store-devtools';
import {categoriesReducer} from './store/categories/categories-reducers';
import {CategoriesEffects} from './store/categories/categories-effects';
import {ProductsEffects} from './store/products/products-effects';



export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(),
    provideStore({
      productsReducer,
      categoriesReducer
    }),
    provideEffects([
      ProductsEffects,
      CategoriesEffects
    ]),
    provideStoreDevtools({
      maxAge: 25, // Optional: number of actions to retain
      logOnly: false // true = log-only mode (for production)
    })
  ]
};
