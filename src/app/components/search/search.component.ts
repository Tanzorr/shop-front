import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {debounceTime, distinctUntilChanged} from 'rxjs';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  private _fb: FormBuilder = new FormBuilder();
  searchForm: FormGroup;

  @Input() customClass: string = '';
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    this.searchForm = this._fb.group({
      query: [''],
    });

    this.searchForm
      .get('query')
      ?.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    )
      .subscribe((query: string) => {
        this.search.emit(query.trim());
      });
  }

  clearSearch(): void {
    this.searchForm.reset();
    this.search.emit('');
  }
}
