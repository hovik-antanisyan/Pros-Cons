import { createAction, props } from '@ngrx/store';

export const PROS_CONS_LOAD_LIST = '[PROS_CONS] Load list';
export const PROS_CONS_PROS_LOADED = '[PROS_CONS] Pros loaded';
export const PROS_CONS_CONS_LOADED = '[PROS_CONS] Cons loaded';

export const loadList = createAction(PROS_CONS_LOAD_LIST);

export const prosLoaded = createAction(
    PROS_CONS_PROS_LOADED,
    props<{ pros: string[] }>()
);

export const consLoaded = createAction(
    PROS_CONS_CONS_LOADED,
    props<{ cons: string[] }>()
);

