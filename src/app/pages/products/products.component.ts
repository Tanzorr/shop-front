import { Component } from '@angular/core';
import {TwoColumComponents} from '../../layouts/two-colum/two-colum.components';

@Component({
  selector: 'app-products',
  imports: [
    TwoColumComponents
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

}
