import { User } from '@auth/interfaces/user.interface';
import { createReducer, on } from '@ngrx/store';
import { AuthActions } from '@store/actions/';

export interface AuthState {
    user: User | null;
}

export const initialAuthState: AuthState = {
    user: null,
};

export const authReducer = createReducer(
    initialAuthState,
    on(AuthActions.signIn, (state, action) => {
        return { user: action.user };
    }),
    on(AuthActions.signOut, (state, action) => {
        return {
            user: null,
        };
    }),
);
