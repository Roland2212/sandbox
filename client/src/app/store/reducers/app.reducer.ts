import { ActionReducerMap } from '@ngrx/store';
import { AuthState, authReducer } from './auth/auth.reducer';
import { RouterState, routerReducer } from '@ngrx/router-store';
import { TeamsState, teamsReducer } from './team/team.reducer';

export interface AppState {
    router: RouterState;
    auth: AuthState;
    teams: TeamsState;
}

export const reducers: ActionReducerMap<AppState> = {
    router: routerReducer,
    auth: authReducer,
    teams: teamsReducer,
};
