import { Action, createReducer, on } from '@ngrx/store';

import * as UserActions from '../actions/user.actions';

export interface UserState {
  groupId: string;
  userId: string;
}

const initialState: UserState = {
  groupId: '',
  userId: ''
};

const userReducer = createReducer(
    initialState,
    on(UserActions.groupIdLoaded, (state, props) => ({
      ...state,
      groupId: props.groupId
    })),
    on(UserActions.userIdLoaded, (state, props) => ({
      ...state,
      userId: props.userId
    }))
);

export function reducer(state: UserState | undefined, action: Action) {
  return userReducer(state, action);
}
