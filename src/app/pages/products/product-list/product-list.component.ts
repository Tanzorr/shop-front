import {Component, inject, OnInit} from '@angular/core';
import {ProductsService} from './services/products.service';
import {Observable} from 'rxjs';
import {ProductResponse} from '../../../models/products';
import {AsyncPipe} from '@angular/common';
import {ProductComponent} from '../../../components/product/product.component';
import {PageChangedEvent} from 'ngx-bootstrap/pagination';
import {PaginationComponent} from '../../../components/pagination/pagination.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    AsyncPipe,
    ProductComponent,
    PaginationComponent
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

  getUsersWithParams($event: PageChangedEvent) {

  }

  changePage(url: any) {
    //console.log('event', url);
    const urlArr = url.toString().trim().split('?');
    const paginationLinkUrl = urlArr[urlArr.length-1];
    this._productsService.getProducts({paginationLinkUrl})
  }
}
