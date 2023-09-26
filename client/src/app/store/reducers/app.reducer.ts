import { ActionReducerMap } from '@ngrx/store';
import { AuthState, authReducer } from './auth/auth.reducer';
import { RouterState, routerReducer } from '@ngrx/router-store';

export interface AppState {
    router: RouterState;
    auth: AuthState;
}

export const reducers: ActionReducerMap<AppState> = {
    router: routerReducer,
    auth: authReducer,
};
