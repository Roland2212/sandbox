import { NgModule } from '@angular/core';
import { CoreRoutingModule } from '@core/modules/routing.module';
import { HomeViewComponent } from '@core/views/home/home.component';
import { CoreNavigationComponent } from '@core/components/navigation/navigation.component';
import { SharedModule } from '@shared/modules/shared.module';
import { CoreSettingsDialogComponent } from '@core/components/dialogs/settings/settings.component';
import { CoreSideNavigationComponent } from '@core/components/side-navigation/side-navigation.component';
import { CoreLoaderInterceptor } from '@core/interceptors/loader.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoreLoaderComponent } from '@core/components/loader/loader.component';
import { CoreNotifyInterceptor } from '@core/interceptors/notify.interceptor';
import { CoreNotifyComponent } from '@core/components/notify/notify.component';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';

@NgModule({
    declarations: [
        // Views
        HomeViewComponent,
        // Components
        CoreNavigationComponent,
        CoreSideNavigationComponent,
        CoreLoaderComponent,
        CoreNotifyComponent,
        // Dialogs
        CoreSettingsDialogComponent,
    ],
    imports: [CoreRoutingModule, SharedModule],
    exports: [CoreLoaderComponent],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: CoreLoaderInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: CoreNotifyInterceptor, multi: true },
        { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 2500 } },
    ],
})
export class CoreModule {}
