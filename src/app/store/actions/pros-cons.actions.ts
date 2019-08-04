import { createAction, props } from '@ngrx/store';

export const PROS_CONS_LOAD_LIST = '[PROS_CONS] Load list';
export const PROS_CONS_PROS_LOADED = '[PROS_CONS] Pros loaded';
export const PROS_CONS_CONS_LOADED = '[PROS_CONS] Cons loaded';
export const PROS_CONS_REMOVE_PRO = '[PROS_CONS] Remove pro';
export const PROS_CONS_REMOVE_CON = '[PROS_CONS] Remove con';
export const PROS_CONS_ADD_PRO = '[PROS_CONS] Add pro';
export const PROS_CONS_ADD_CON = '[PROS_CONS] Add con';

export const loadList = createAction(PROS_CONS_LOAD_LIST);

export const prosLoaded = createAction(
    PROS_CONS_PROS_LOADED,
    props<{ pros: string[] }>()
);

export const consLoaded = createAction(
    PROS_CONS_CONS_LOADED,
    props<{ cons: string[] }>()
);

export const removePro = createAction(
    PROS_CONS_REMOVE_PRO,
    props<{ title: string }>()
);

export const removeCon = createAction(
    PROS_CONS_REMOVE_CON,
    props<{ title: string }>()
);

export const addPro = createAction(
    PROS_CONS_ADD_PRO,
    props<{ title: string }>()
);

export const addCon = createAction(
    PROS_CONS_ADD_CON,
    props<{ title: string }>()
);

