import {Component, inject, OnInit} from '@angular/core';
import {TwoColumComponents} from '../../layouts/two-colum/two-colum.components';
import {ProductsService} from './services/products.service';
import {AsyncPipe, JsonPipe} from '@angular/common';
import {Observable} from 'rxjs';
import {ProductResponse, ProductsState} from '../../models/products';

@Component({
  selector: 'app-products',
  imports: [
    TwoColumComponents,
    AsyncPipe,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit{
  private _productsService = inject(ProductsService);
  productsResponse$: Observable<ProductResponse> = this._productsService.productsResponse$;
  productsLoading$: Observable<boolean> = this._productsService.productsLoading$;
  ngOnInit(): void {
    this._productsService.getProducts();
  }




}
