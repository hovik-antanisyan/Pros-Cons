import { Component, OnInit } from '@angular/core';
import * as ProsConsActions from '../../store/actions/pros-cons.actions';
import * as fromApp from '../../store/reducers/app.reducers';
import * as fromProsCons from '../../store/reducers/pros-cons.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-cons',
  templateUrl: './cons.component.html',
  styleUrls: ['./cons.component.scss']
})
export class ConsComponent implements OnInit {
  conTitle = '';

  constructor(private store: Store<fromApp.AppState>) {
  }

  ngOnInit() {
  }

  addCon() {
    this.store.dispatch(ProsConsActions.addCon({title: this.conTitle}));

    this.store.select(fromApp.selectPros).subscribe((state: fromProsCons.ProsConsState) => {
          if (state.prosLoaded && !state.prosLoading) {
            this.conTitle = '';
          }
        }
    );
  }

}
