import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from './store/reducers/app.reducers';
import * as userActions from './store/actions/user.actions';
import * as prosConsActions from './store/actions/pros-cons.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Should I ...?';

  constructor(private store: Store<fromApp.AppState>) {

  }

  ngOnInit(): void {
    this.store.dispatch(userActions.loadGroupAndUserIds());

    this.store.select(fromApp.selectGroupIdAndUserId).subscribe(res => {
      if (res.userId && res.groupId) {
        this.store.dispatch(prosConsActions.loadList());
      }
    });
  }
}
