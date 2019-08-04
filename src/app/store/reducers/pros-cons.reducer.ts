import { Action, createReducer, on } from '@ngrx/store';

import * as ProsConsActions from '../actions/pros-cons.actions';

export interface ProsConsState {
  pros: string[];
  prosLoading: boolean;
  prosLoaded: boolean;
  cons: string[];
  consLoading: boolean;
  consLoaded: boolean;
}

const initialState: ProsConsState = {
  pros: [],
  prosLoading: false,
  prosLoaded: false,
  cons: [],
  consLoading: false,
  consLoaded: false
};

const prosConsReducer = createReducer(
    initialState,
    on(ProsConsActions.loadList, (state, props) => ({
      ...state,
      prosLoading: true,
      prosLoaded: false,
      consLoading: true,
      consLoaded: false
    })),
    on(ProsConsActions.addPro, (state, props) => ({
      ...state,
      prosLoading: true,
      prosLoaded: false,
      consLoading: true,
      consLoaded: false
    })),
    on(ProsConsActions.addCon, (state, props) => ({
      ...state,
      prosLoading: true,
      prosLoaded: false,
      consLoading: true,
      consLoaded: false
    })),
    on(ProsConsActions.prosLoaded, (state, props) => ({
      ...state,
      pros: props.pros,
      prosLoading: false,
      prosLoaded: true,
    })),
    on(ProsConsActions.consLoaded, (state, props) => ({
      ...state,
      cons: props.cons,
      consLoading: false,
      consLoaded: true,
    })),
);

export function reducer(state: ProsConsState | undefined, action: Action) {
  return prosConsReducer(state, action);
}
