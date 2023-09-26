import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '@store/reducers/app.reducer';
import { AuthState } from '@store/reducers/auth/auth.reducer';

export const authSelector = createFeatureSelector<AuthState>('auth');

export const isUserSignedInSelector = createSelector(
    (state: AppState): AuthState => {
        return state.auth;
    },
    auth => {
        return !!auth.user;
    },
);

export const isUserSignedOutSelector = createSelector(isUserSignedInSelector, isSignedIn => {
    return !isSignedIn;
});

export const userSelector = createSelector(
    (state: AppState): AuthState => {
        return state.auth;
    },
    auth => {
        return auth.user;
    },
);
