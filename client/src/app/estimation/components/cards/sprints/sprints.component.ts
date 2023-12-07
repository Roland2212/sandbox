import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-estimation-sprints',
    templateUrl: './sprints.component.html',
    styleUrls: ['./sprints.component.scss'],
})
export class SprintsCardComponent {
    constructor(
        private route: ActivatedRoute,
        private router: Router,
    ) {}

    onNavigateToCreateSprint(): void {
        void this.router.navigate([`./create`], { relativeTo: this.route });
    }
}
