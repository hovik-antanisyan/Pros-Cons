import {InjectionToken} from '@angular/core';
import { Action, ActionReducerMap, createSelector, State } from '@ngrx/store';

import * as fromUser from '../reducers/user.reducer';
import { UserState } from './user.reducer';

export interface AppState {
  user: fromUser.UserState;
  // more state here
}

// AOT compatibility
export const ROOT_REDUCERS = new InjectionToken<ActionReducerMap<AppState, Action>>(
    'ROOT_REDUCERS_TOKEN',
    {
      factory: () => ({
        user: fromUser.reducer
      })
    }
);

export const selectGroupIdAndUserId = createSelector(
    (state: AppState) => state.user,
    (state: UserState) => ({groupId: state.groupId, userId: state.userId})
);
