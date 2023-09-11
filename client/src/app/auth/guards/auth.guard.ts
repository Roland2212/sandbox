import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '@auth/service/auth.service';
import { Observable } from 'rxjs';

export const authGuard: CanActivateFn = (
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
): Observable<boolean> | boolean => {
    const authService: AuthService = inject(AuthService);

    // return authService.isUserSignedIn();
    return true;
};
