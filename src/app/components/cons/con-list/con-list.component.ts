import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromApp from '../../../store/reducers/app.reducers';

@Component({
  selector: 'app-con-list',
  templateUrl: './con-list.component.html',
  styleUrls: ['./con-list.component.scss']
})
export class ConListComponent implements OnInit {

  cons$: Observable<any>;
  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.cons$ = this.store.select(fromApp.selectCons);
  }

}
