import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@auth/service/auth.service';
import { SettingsDialogComponent } from '@core/components/dialogs/settings/settings.component';
import { SETTINGS_DIALOG_CONFIG } from './navigation.config';
import { LayoutService } from '@core/services/layout.service';
import { NavigationItem } from '@core/interfaces/navigation.interface';
import { NAVIGATION_ITEMS } from '@core/routes/routes';
import { SideNavigationService } from '@core/services/side-navigation.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
    navigationItems: NavigationItem[] = NAVIGATION_ITEMS;
    isMobileLayout$: Observable<boolean> = this.layoutService.isMobile;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authService: AuthService,
        private dialog: MatDialog,
        private layoutService: LayoutService,
        private sideNavigationService: SideNavigationService,
    ) {}

    onSignOut(): void {
        // this.authService.signOut();
        void this.router.navigate(['', 'auth'], { relativeTo: this.route });
    }

    onOpenSettingsDialog(): void {
        this.dialog.open(SettingsDialogComponent, SETTINGS_DIALOG_CONFIG);
    }

    onToggleSideNavigation(): void {
        this.sideNavigationService.toggle();
    }
}
