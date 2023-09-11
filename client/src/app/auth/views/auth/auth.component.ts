import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@auth/service/auth.service';

@Component({
    selector: 'app-auth-view',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss'],
})
export class AuthViewComponent {
    form = new FormGroup({
        login: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required]),
    });

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authService: AuthService,
    ) {}

    signIn(): void {
        // eslint-disable-next-line multiline-comment-style
        // if (this.form.invalid) {
        //     this.form.markAllAsTouched();
        //     return;
        // }

        // eslint-disable-next-line no-console
        console.log(this.form.value);

        this.authService.signIn();
        void this.router.navigate(['..'], { relativeTo: this.route });
    }
}
