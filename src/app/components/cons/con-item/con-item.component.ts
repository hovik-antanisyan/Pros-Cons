import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/reducers/app.reducers';
import * as ProsConsActions from '../../../store/actions/pros-cons.actions';
import { RemoveItemDialogComponent } from '../../remove-item-dialog/remove-item-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-con-item',
  templateUrl: './con-item.component.html',
  styleUrls: ['./con-item.component.scss']
})
export class ConItemComponent implements OnInit {
  @Input('con') con;

  constructor(private store: Store<AppState>,
              private dialog: MatDialog) {
  }

  ngOnInit() {
  }

  onRemoveCon(title) {
    const dialogRef = this.dialog.open(RemoveItemDialogComponent);

    dialogRef.afterClosed().subscribe((agree?) => {
      if (agree) {
        this.store.dispatch(ProsConsActions.removeCon({title}));
      }
    });
  }
}
