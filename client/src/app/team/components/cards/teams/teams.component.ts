import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-teams',
    templateUrl: './teams.component.html',
    styleUrls: ['./teams.component.scss'],
})
export class TeamsComponent {
    constructor(
        private route: ActivatedRoute,
        private router: Router,
    ) {}

    onNavigateToCreateTeam(): void {
        void this.router.navigate(['create'], { relativeTo: this.route });
    }
}
