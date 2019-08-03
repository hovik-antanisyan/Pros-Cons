import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, exhaustMap, map, mergeMap, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';

import { UserService } from '../../services/user.service';
import * as fromApp from '../reducers/app.reducers';
import * as UserActions from '../actions/user.actions';

@Injectable()
export class UserEffects {
  getGroupAndUserIds = createEffect(() =>
      this.actions$.pipe(
          ofType(UserActions.loadGroupAndUserIds),
          withLatestFrom(this.store$),
          exhaustMap(action => {
                return this.userService.getUserAndGroupIds().pipe(
                    mergeMap(userInfo => {
                      return [
                          UserActions.groupIdLoaded({groupId: userInfo.groupId}),
                          UserActions.userIdLoaded({userId: userInfo.userId}),
                      ];
                    }),
                    // catchError(error => of(AuthApiActions.loginFailure({ error })))
                );
              }
          )
      ));

  constructor(
      private actions$: Actions,
      private userService: UserService,
      private store$: Store<fromApp.AppState>
  ) {
  }
}
