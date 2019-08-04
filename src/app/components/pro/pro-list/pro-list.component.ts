import { Component, OnInit } from '@angular/core';
import * as fromApp from '../../../store/reducers/app.reducers';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-pro-list',
  templateUrl: './pro-list.component.html',
  styleUrls: ['./pro-list.component.scss']
})
export class ProListComponent implements OnInit {
  pros$: Observable<any>;
  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.pros$ = this.store.select(fromApp.selectPros);
  }

}
