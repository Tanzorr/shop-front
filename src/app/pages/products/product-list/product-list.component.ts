import {Component, inject, OnInit} from '@angular/core';
import {ProductsService} from './services/products.service';
import {Observable} from 'rxjs';
import {ProductResponse} from '../../../models/products';
import {AsyncPipe} from '@angular/common';
import {ProductComponent} from '../../../components/product/product.component';

@Component({
  selector: 'app-product-list',
  imports: [
    AsyncPipe,
    ProductComponent
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit{
  private _productsService = inject(ProductsService);
  productsResponse$: Observable<ProductResponse> = this._productsService.productsResponse$;
  productsLoading$: Observable<boolean> = this._productsService.productsLoading$;
  ngOnInit(): void {
    this._productsService.getProducts();
  }

}
