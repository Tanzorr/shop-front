import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FooterComponent} from './presentational/footer/footer.component';
import {ProductsEffects} from './store/products-effects';
import {EffectsModule, provideEffects} from '@ngrx/effects';
import {NavigationComponents} from './presentational/navigation.components/navigation.components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FooterComponent,
    NavigationComponents
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {
  protected title = 'shop-front';
}
