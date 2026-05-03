import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import {provideRouter, withComponentInputBinding} from '@angular/router';

import {routes } from './app.routes';

import {provideStore} from '@ngrx/store';
import {productsReducer} from './store/products/products-reducers';
import {provideEffects} from '@ngrx/effects';

import {provideHttpClient} from '@angular/common/http';
import {provideStoreDevtools} from '@ngrx/store-devtools';
import {categoriesReducer} from './store/categories/categories-reducers';
import {CategoriesEffects} from './store/categories/categories-effects';
import {ProductsEffects} from './store/products/products-effects';
import {productReducer} from './store/product/product-reducers';
import {ProductEffects} from './store/product/product-effect';
import {provideRouterStore, RouterStateSerializer} from '@ngrx/router-store';
import {CustomSerializer} from './store/route/router-sate-serializer';



export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(),
    provideStore({
      productsReducer,
      categoriesReducer,
      productReducer,
    }),
    provideEffects([
      ProductsEffects,
      CategoriesEffects,
      ProductEffects
    ]),
    provideStoreDevtools({
      maxAge: 25, // Optional: number of actions to retain
      logOnly: false // true = log-only mode (for production)
    }),
    provideRouterStore({
      serializer: CustomSerializer,
    }),

  ]
};
