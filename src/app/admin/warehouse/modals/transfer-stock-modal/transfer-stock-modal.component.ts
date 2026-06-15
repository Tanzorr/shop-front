import { ChangeDetectionStrategy, Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Actions, ofType } from '@ngrx/effects';
import { take } from 'rxjs';
import { RootState } from '../../../../models/root-state';
import { transferStock, transferStockFailure, transferStockSuccess } from '../../store/admin-warehouse-actions';
import { StockLevel } from '../../../shared/models/warehouse.model';

@Component({
  selector: 'app-transfer-stock-modal',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './transfer-stock-modal.component.html',
  styleUrl: './transfer-stock-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransferStockModalComponent {
  @Input() productId!: number;
  @Input() fromWarehouseId!: number;
  @Input() warehouses: StockLevel[] = [];
  @Output() closed = new EventEmitter<boolean>();

  private store: Store<RootState> = inject(Store);
  private fb = inject(FormBuilder);
  private actions$ = inject(Actions);

  form = this.fb.group({
    toWarehouseId: [null as number | null, Validators.required],
    quantity: [1, [Validators.required, Validators.min(1)]],
    comment: [''],
  });

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const value = this.form.getRawValue();

    this.actions$.pipe(ofType(transferStockSuccess, transferStockFailure), take(1)).subscribe((action) => {
      this.closed.emit(action.type === transferStockSuccess.type);
    });

    this.store.dispatch(
      transferStock({
        productId: this.productId,
        fromWarehouseId: this.fromWarehouseId,
        toWarehouseId: Number(value.toWarehouseId),
        quantity: Number(value.quantity),
        comment: value.comment || null,
      })
    );
  }

  cancel(): void {
    this.closed.emit(false);
  }
}
