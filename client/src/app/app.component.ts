import { Component } from '@angular/core';
import { SubscriptionDirective } from '@shared/directives/subscription.directive';
import { LayoutService } from '@core/services/layout.service';
import { TranslateService } from '@ngx-translate/core';
import { tap } from 'rxjs';

@Component({
    selector: 'app-root',
    template: `<div class="root-wrapper" [ngClass]="layoutType"><router-outlet></router-outlet></div>`,
})
export class AppComponent extends SubscriptionDirective {
    layoutType: string = '';

    constructor(
        public translateService: TranslateService,
        private layoutService: LayoutService,
    ) {
        super();

        this._getLanguage();
        this._getLayoutType();
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
}
