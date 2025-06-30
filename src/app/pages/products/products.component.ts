import {Component} from '@angular/core';
import {ProductListComponent} from './product-list/product-list.component';
import {TwoColumnComponents} from '../../layouts/two-colum/two-column-component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    TwoColumnComponents,
    ProductListComponent,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent{


}
