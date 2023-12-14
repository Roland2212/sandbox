import { NgModule } from '@angular/core';
import { CoreRoutingModule } from '@core/modules/routing.module';
import { HomeViewComponent } from '@core/views/home/home.component';
import { NavigationComponent } from '@core/components/navigation/navigation.component';
import { SharedModule } from '@shared/modules/shared.module';
import { SettingsDialogComponent } from '@core/components/dialogs/settings/settings.component';
import { SideNavigationComponent } from '@core/components/side-navigation/side-navigation.component';
import { LoaderService } from '@core/services/loader.service';
import { LoaderInterceptor } from '@core/interceptors/loader.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderComponent } from '@core/components/loader/loader.component';

@NgModule({
    declarations: [
        // Views
        HomeViewComponent,
        // Components
        NavigationComponent,
        SideNavigationComponent,
        LoaderComponent,
        // Dialogs
        SettingsDialogComponent,
    ],
    imports: [CoreRoutingModule, SharedModule],
    exports: [LoaderComponent],
    providers: [{ provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }],
})
export class CoreModule {}
