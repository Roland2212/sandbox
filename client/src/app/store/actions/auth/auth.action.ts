import { User } from '@auth/interfaces/user.interface';
import { createAction, props } from '@ngrx/store';

export const signIn = createAction('[AUTH] Sign In', props<{ user: User }>());

export const signOut = createAction('[AUTH] Sign Out');
