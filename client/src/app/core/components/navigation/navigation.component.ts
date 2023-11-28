import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SettingsDialogComponent } from '@core/components/dialogs/settings/settings.component';
import { SETTINGS_DIALOG_CONFIG } from './navigation.config';
import { LayoutService } from '@core/services/layout.service';
import { NavigationItem } from '@core/interfaces/navigation.interface';
import { NAVIGATION_ITEMS } from '@core/routes/routes';
import { SideNavigationService } from '@core/services/side-navigation.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '@store/reducers/app.reducer';
import { signOut } from '@store/actions/auth/auth.action';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
    navigationItems: NavigationItem[] = NAVIGATION_ITEMS;
    isMobileLayout$: Observable<boolean> = this.layoutService.isMobile$;

    constructor(
        private dialog: MatDialog,
        private layoutService: LayoutService,
        private sideNavigationService: SideNavigationService,
        private store: Store<AppState>,
    ) {}

    onSignOut(): void {
        this.store.dispatch(signOut());
    }

    onOpenSettingsDialog(): void {
        this.dialog.open(SettingsDialogComponent, SETTINGS_DIALOG_CONFIG);
    }

    onToggleSideNavigation(): void {
        this.sideNavigationService.toggle();
    }
}
