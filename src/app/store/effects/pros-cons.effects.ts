import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as ProsConsActions from '../actions/pros-cons.actions';
import { exhaustMap, map, mergeMap, withLatestFrom } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from '../reducers/app.reducers';
import { ProsConsService } from '../../services/pros-cons.service';
import { of } from 'rxjs';

export class ProsConsEffects {
  loadProsCons = createEffect(() =>
      this.actions$.pipe(
          ofType(ProsConsActions.loadList),
          withLatestFrom(this.store$),
          exhaustMap(([action, state]) => {
            const {groupId, userId} = state.user;

            return this.prosConsService.getProsAndCons({groupId, userId}).pipe(
                mergeMap((result) => {
                  const {cons, pros} = result;

                  return [
                    ProsConsActions.consLoaded({cons}),
                    ProsConsActions.prosLoaded({pros})
                  ];
                })
            );
          }),
      )
  );

  removePro = createEffect(() =>
      this.actions$.pipe(
          ofType(ProsConsActions.removePro),
          withLatestFrom(this.store$),
          exhaustMap(([action, state]) => {
            const index = state.prosCons.pros.findIndex(title => title === action.title);
            const pros = [...state.prosCons.pros];
            pros.splice(index, 1);

            const {cons} = state.prosCons;
            const {groupId, userId} = state.user;

            return this.prosConsService.update({groupId, userId}, {pros, cons}).pipe(
                map(result => ProsConsActions.loadList())
            );
          })
      )
  );

  removeCon = createEffect(() =>
      this.actions$.pipe(
          ofType(ProsConsActions.removeCon),
          withLatestFrom(this.store$),
          exhaustMap(([action, state]) => {
            const index = state.prosCons.cons.findIndex(title => title === action.title);
            const cons = [...state.prosCons.cons];
            cons.splice(index, 1);

            const {pros} = state.prosCons;
            const {groupId, userId} = state.user;

            return this.prosConsService.update({groupId, userId}, {pros, cons}).pipe(
                map(result => ProsConsActions.loadList())
            );
          })
      )
  );

  constructor(private actions$: Actions,
              private store$: Store<AppState>,
              private prosConsService: ProsConsService) {
  }
}
