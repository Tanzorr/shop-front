import { Component } from '@angular/core';
import {TwoColumComponents} from '../../layouts/two-colum/two-colum.components';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    TwoColumComponents
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
