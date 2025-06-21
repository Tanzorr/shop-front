import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FooterComponent} from './presentational/footer/footer.component';
import {ProductsEffects} from './store/products-effects';
import {EffectsModule, provideEffects} from '@ngrx/effects';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FooterComponent
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {
  protected title = 'shop-front';
}
