import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NavigationComponents} from '../presentational/navigation.components/navigation.components';

@Component({
  selector: 'app-pages',
  standalone: true,
  imports: [RouterOutlet, NavigationComponents],
  templateUrl: './pages.component.html',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class PagesComponent {

}
