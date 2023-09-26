import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Credentials } from '@auth/interfaces/credentials.interface';
import { AuthService } from '@auth/service/auth.service';
import { Store } from '@ngrx/store';
import { SubscriptionDirective } from '@shared/directives/subscription.directive';
import { EMPTY, catchError, finalize, of, switchMap, tap } from 'rxjs';
import { AppState } from '@store/reducers/app.reducer';
import { signIn } from '@store/actions/auth/auth.action';

@Component({
    selector: 'app-auth-view',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss'],
})
export class AuthViewComponent extends SubscriptionDirective {
    form = new FormGroup({
        login: new FormControl('roland@gmail.com', [Validators.required]),
        password: new FormControl('123456', [Validators.required]),
    });
    loading: boolean = false;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authService: AuthService,
        private store: Store<AppState>,
    ) {
        super();
    }

    signIn(): void {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }

        this.addSubscription(
            of(EMPTY)
                .pipe(
                    tap(() => {
                        this.loading = true;
                    }),
                    tap(() => {
                        this.disableFormWhenLoading();
                    }),
                    switchMap(() => {
                        return this.authService.signIn(this.form.value as Credentials);
                    }),
                    tap(user => {
                        this.store.dispatch(signIn({ user }));
                    }),
                    finalize(() => {
                        this.loading = false;
                    }),
                    catchError(error => {
                        this.enableForm();
                        return of(error);
                    }),
                )
                .subscribe(),
        );
    }

    disableFormWhenLoading(): void {
        this.form.disable();
    }

    enableForm(): void {
        this.form.enable();
    }
}
