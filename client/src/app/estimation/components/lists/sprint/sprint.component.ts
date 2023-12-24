import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sprint } from '@estimation/interfaces/sprint.interface';
import { SprintService } from '@estimation/services/sprint.service';
import { SubscriptionDirective } from '@shared/directives/subscription.directive';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-estimation-sprint-list',
    templateUrl: './sprint.component.html',
    styleUrls: ['./sprint.component.scss'],
})
export class SprintListComponent extends SubscriptionDirective implements OnInit {
    sprints$!: Observable<Sprint[]>;

    get teamId(): string {
        return this.route.snapshot.paramMap.get('teamId') || '';
    }

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private sprintService: SprintService,
    ) {
        super();
    }

    ngOnInit(): void {
        this._getSprints();
    }

    onNavigateToSprint(sprintId: string): void {
        void this.router.navigate([`./${sprintId}`], { relativeTo: this.route });
    }

    private _getSprints(): void {
        this.sprints$ = this.sprintService.getAllSprints(this.teamId);
    }
}
