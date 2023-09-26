import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthActions } from '@store/actions';
import { tap } from 'rxjs';

@Injectable()
export class AuthEffect {
    signIn$ = createEffect(
        () => {
            return this.actions$.pipe(
                ofType(AuthActions.signIn),
                tap(action => {
                    const user = JSON.stringify(action.user);
                    localStorage.setItem('user', user);
                }),
                tap(() => {
                    void this.router.navigate([''], { relativeTo: this.route });
                }),
            );
        },
        { dispatch: false },
    );

    signOut$ = createEffect(
        () => {
            return this.actions$.pipe(
                ofType(AuthActions.signOut),
                tap(action => {
                    localStorage.removeItem('user');
                }),
                tap(() => {
                    void this.router.navigate(['/auth']);
                }),
            );
        },
        { dispatch: false },
    );

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private actions$: Actions,
    ) {}
}
