import { NgModule } from '@angular/core';
import { CoreRoutingModule } from '@core/modules/routing.module';
import { HomeViewComponent } from '@core/views/home/home.component';
import { NavigationComponent } from '@core/components/navigation/navigation.component';
import { SharedModule } from '@shared/modules/shared.module';
import { SettingsDialogComponent } from '@core/components/dialogs/settings/settings.component';
import { SideNavigationComponent } from '@core/components/side-navigation/side-navigation.component';

@NgModule({
    declarations: [
        // Views
        HomeViewComponent,
        // Components
        NavigationComponent,
        SideNavigationComponent,
        // Dialogs
        SettingsDialogComponent,
    ],
    imports: [CoreRoutingModule, SharedModule],
})
export class CoreModule {}
