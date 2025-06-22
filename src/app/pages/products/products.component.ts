import {Component} from '@angular/core';
import {TwoColumComponents} from '../../layouts/two-colum/two-colum.components';
import {ProductListComponent} from './product-list/product-list.component';

@Component({
  selector: 'app-products',
  imports: [
    TwoColumComponents,
    ProductListComponent,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent{


}
