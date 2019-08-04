import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/reducers/app.reducers';
import * as ProsConsActions from '../../../store/actions/pros-cons.actions';
import { MatDialog } from '@angular/material';
import { RemoveItemDialogComponent } from '../../remove-item-dialog/remove-item-dialog.component';

@Component({
  selector: 'app-pro-item',
  templateUrl: './pro-item.component.html',
  styleUrls: ['./pro-item.component.scss']
})
export class ProItemComponent implements OnInit {
  @Input('pro') pro;

  constructor(private store: Store<AppState>,
              private dialog: MatDialog) {
  }

  ngOnInit() {
  }

  onRemovePro(title) {
    const dialogRef = this.dialog.open(RemoveItemDialogComponent);

    dialogRef.afterClosed().subscribe((agree?) => {
      if (agree) {
        this.store.dispatch(ProsConsActions.removePro({title}));
      }
    });
  }

}
