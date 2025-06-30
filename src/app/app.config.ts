import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import {routes } from './app.routes';

import {provideStore} from '@ngrx/store';
import {productsReducer} from './store/products-reducers';
import {provideEffects} from '@ngrx/effects';
import {ProductsEffects} from './store/products-effects';
import {provideHttpClient} from '@angular/common/http';
import {provideStoreDevtools} from '@ngrx/store-devtools';



export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(),
    provideStore({
      productsReducer
    }),
    provideEffects([
      ProductsEffects
    ]),
    provideStoreDevtools({
      maxAge: 25, // Optional: number of actions to retain
      logOnly: false // true = log-only mode (for production)
    })
  ]
};
