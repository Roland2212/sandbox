import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState } from '@store/reducers/app.reducer';
import { isUserSignedInSelector } from '@store/selectors/auth.selector';
import { Observable, tap } from 'rxjs';

export const authGuard: CanActivateFn = (
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
): Observable<boolean> | boolean => {
    const store = inject(Store<AppState>);
    const router = inject(Router);

    return store.pipe(
        select(isUserSignedInSelector),
        tap(isSignedIn => {
            if (!isSignedIn) {
                void router.navigate(['auth']);
            }
        }),
    );
};
