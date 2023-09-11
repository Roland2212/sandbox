import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatDrawerMode, MatSidenav } from '@angular/material/sidenav';
import { NavigationItem } from '@core/interfaces/navigation.interface';
import { NAVIGATION_ITEMS } from '@core/routes/routes';
import { SideNavigationService } from '@core/services/side-navigation.service';
import { SubscriptionDirective } from '@shared/directives/subscription.directive';

@Component({
    selector: 'app-side-navigation',
    templateUrl: './side-navigation.component.html',
    styleUrls: ['./side-navigation.component.scss'],
})
export class SideNavigationComponent extends SubscriptionDirective implements AfterViewInit {
    @ViewChild('drawer') public sideNavigationRef!: MatSidenav;
    @Input() backdrop: boolean = true;
    @Input() mode: MatDrawerMode = 'over';

    navigationItems: NavigationItem[] = NAVIGATION_ITEMS;

    constructor(private sideNavigationService: SideNavigationService) {
        super();
    }

    ngAfterViewInit(): void {
        this.sideNavigationService.setSideNavigation(this.sideNavigationRef);
    }
}