import { InjectionToken } from '@angular/core';
import { Action, ActionReducerMap, createSelector, State } from '@ngrx/store';

import * as fromUser from '../reducers/user.reducer';
import * as fromProsCons from '../reducers/pros-cons.reducer';
import { UserState } from './user.reducer';
import { ProsConsState } from '../reducers/pros-cons.reducer';

export interface AppState {
  user: fromUser.UserState;
  prosCons: fromProsCons.ProsConsState;
}

// AOT compatibility
export const ROOT_REDUCERS = new InjectionToken<ActionReducerMap<AppState, Action>>(
    'ROOT_REDUCERS_TOKEN',
    {
      factory: () => ({
        user: fromUser.reducer,
        prosCons: fromProsCons.reducer
      })
    }
);

export const selectGroupIdAndUserId = createSelector(
    (state: AppState) => state.user,
    (state: UserState) => ({groupId: state.groupId, userId: state.userId})
);

export const selectPros = createSelector(
    (state: AppState) => state.prosCons,
    (state: ProsConsState) => ({
      pros: state.pros,
      prosLoading: state.prosLoading,
      prosLoaded: state.prosLoaded
    })
);

export const selectCons = createSelector(
    (state: AppState) => state.prosCons,
    (state: ProsConsState) => ({
      cons: state.cons,
      consLoading: state.consLoading,
      consLoaded: state.consLoaded
    })
);
