import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/reducers/app.reducers';
import * as fromProsCons from '../../store/reducers/pros-cons.reducer';
import * as ProsConsActions from '../../store/actions/pros-cons.actions';

@Component({
  selector: 'app-pro',
  templateUrl: './pro.component.html',
  styleUrls: ['./pro.component.scss']
})
export class ProComponent implements OnInit {
  proTitle = '';

  constructor(private store: Store<fromApp.AppState>) {
  }

  ngOnInit() {

  }

  addPro() {
    this.store.dispatch(ProsConsActions.addPro({title: this.proTitle}));

    this.store.select(fromApp.selectPros).subscribe((state: fromProsCons.ProsConsState) => {
      if (state.prosLoaded && !state.prosLoading) {
            this.proTitle = '';
          }
        }
    );
  }
}
