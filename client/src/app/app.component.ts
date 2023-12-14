import { Component } from '@angular/core';
import { SubscriptionDirective } from '@shared/directives/subscription.directive';
import { LayoutService } from '@core/services/layout.service';
import { TranslateService } from '@ngx-translate/core';
import { tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '@store/reducers/app.reducer';
import { signIn } from '@store/actions/auth/auth.action';
import { User } from '@auth/interfaces/user.interface';

@Component({
    selector: 'app-root',
    template: `<div class="root-wrapper" [ngClass]="layoutType">
        <app-loader></app-loader>
        <router-outlet></router-outlet>
    </div>`,
})
export class AppComponent extends SubscriptionDirective {
    layoutType: string = '';

    constructor(
        public translateService: TranslateService,
        private layoutService: LayoutService,
        private store: Store<AppState>,
    ) {
        super();

        this._getLanguage();
        this._getLayoutType();
        this._getUserProfile();
    }

    private _getLanguage(): void {
        const savedLanguage = localStorage.getItem('language') || 'en';
        this.translateService.addLangs(['en', 'ua']);
        this.translateService.setDefaultLang('en');
        this.translateService.use(savedLanguage);
    }

    private _getLayoutType(): void {
        this.addSubscription(
            this.layoutService
                .getLayoutType()
                .pipe(
                    tap(layoutType => {
                        this.layoutType = layoutType;
                    }),
                )
                .subscribe(),
        );
    }

    private _getUserProfile(): void {
        const user = localStorage.getItem('user') || '""';
        const parsedUserProfile = JSON.parse(user) as User;

        if (user) {
            this.store.dispatch(signIn({ user: parsedUserProfile }));
        }
    }
}
