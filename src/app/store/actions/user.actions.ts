import { createAction, props } from '@ngrx/store';

export const USER_LOAD_GROUP_IDS = '[User] Load group id and user id';
export const USER_GROUP_ID_LOADED = '[User] Group id loaded';
export const USER_USER_ID_LOADED = '[User] User id loaded';

export const loadGroupAndUserIds = createAction(USER_LOAD_GROUP_IDS);

export const groupIdLoaded = createAction(
    USER_GROUP_ID_LOADED,
    props<{groupId: string}>()
);

export const userIdLoaded = createAction(
    USER_USER_ID_LOADED,
    props<{userId: string}>()
);
