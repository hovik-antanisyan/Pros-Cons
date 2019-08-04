import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/reducers/app.reducers';
import * as ProsConsActions from '../../../store/actions/pros-cons.actions';

@Component({
  selector: 'app-con-item',
  templateUrl: './con-item.component.html',
  styleUrls: ['./con-item.component.scss']
})
export class ConItemComponent implements OnInit {
  @Input('con') con;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
  }

  onRemoveCon(title) {
    this.store.dispatch(ProsConsActions.removeCon({title}));
  }
}
