import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Credentials } from '@auth/interfaces/credentials.interface';
import { AuthService } from '@auth/service/auth.service';
import { Store } from '@ngrx/store';
import { SubscriptionDirective } from '@shared/directives/subscription.directive';
import { tap } from 'rxjs';
import { AppState } from '@store/reducers/app.reducer';
import { signIn } from '@store/actions/auth.action';
import { User } from '@auth/interfaces/user.interface';

@Component({
    selector: 'app-auth-view',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss'],
})
export class AuthViewComponent extends SubscriptionDirective {
    form = new FormGroup({
        login: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required]),
    });

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
            this.authService
                .signIn(this.form.value as Credentials)
                .pipe(
                    tap((user: User) => {
                        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
                        this.store.dispatch(signIn({ user }));
                        void this.router.navigate(['..'], { relativeTo: this.route });
                    }),
                )
                .subscribe(),
        );
    }
}
