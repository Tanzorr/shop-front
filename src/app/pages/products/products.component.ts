import {Component, inject, OnInit} from '@angular/core';
import {TwoColumComponents} from '../../layouts/two-colum/two-colum.components';
import {ProductsService} from './services/products/products.service';
import {AsyncPipe, JsonPipe} from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [
    TwoColumComponents,
    JsonPipe,
    AsyncPipe
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit{
  private _productsService = inject(ProductsService);
  products$ = this._productsService.products$;
  ngOnInit(): void {
    this._productsService.getProducts();
  }




}
