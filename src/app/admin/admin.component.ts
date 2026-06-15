import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminComponent {
  navLinks = [
    { label: 'Orders', url: '/admin/orders' },
    { label: 'Products', url: '/admin/products' },
    { label: 'Categories', url: '/admin/categories' },
    { label: 'Warehouse', url: '/admin/warehouse' },
  ];
}
