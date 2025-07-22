import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import {ProductService} from './services/product.service';
import {AsyncPipe, JsonPipe} from '@angular/common';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    JsonPipe,
    AsyncPipe
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit{
  private _productService = inject(ProductService);
  private _route: ActivatedRoute = inject(ActivatedRoute);
  product$ = this._productService.product$;


  ngOnInit(): void {
  const productId = this._route.snapshot.paramMap.get('id');
    this._productService.getProduct(Number(productId));
  }
}
