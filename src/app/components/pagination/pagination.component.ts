import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PaginationLink} from '../../models/media';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [],
  templateUrl: './pagination.component.html'
})
export class PaginationComponent {
  @Input() paginationLinks: PaginationLink[] = [];
  @Output() pageChange = new EventEmitter<string | null>();

  changePage(url: string | null) {
    this.pageChange.emit(url);
  }
}
