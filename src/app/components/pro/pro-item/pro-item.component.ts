import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/reducers/app.reducers';
import * as ProsConsActions from '../../../store/actions/pros-cons.actions';

@Component({
  selector: 'app-pro-item',
  templateUrl: './pro-item.component.html',
  styleUrls: ['./pro-item.component.scss']
})
export class ProItemComponent implements OnInit {
  @Input('pro') pro;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
  }

  onRemovePro(title) {
    this.store.dispatch(ProsConsActions.removePro({title}));
  }

}
