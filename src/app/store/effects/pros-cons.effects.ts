import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as ProsConsActions from '../actions/pros-cons.actions';
import { exhaustMap, mergeMap, withLatestFrom } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from '../reducers/app.reducers';
import { ProsConsService } from '../../services/pros-cons.service';

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

  constructor(private actions$: Actions,
              private store$: Store<AppState>,
              private prosConsService: ProsConsService) {
  }
}
