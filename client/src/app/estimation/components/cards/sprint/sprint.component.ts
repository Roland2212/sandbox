import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sprint } from '@estimation/interfaces/sprint.interface';
import { SprintService } from '@estimation/services/sprint.service';
import { SubscriptionDirective } from '@shared/directives/subscription.directive';
import { SharedDetailsMapper } from '@shared/interfaces/details-mapper.interface';
import { Observable, tap } from 'rxjs';
import { SPRINT_MAPPER } from './sprint.config';
import { LayoutService } from '@core/services/layout.service';
import { MatDialog } from '@angular/material/dialog';
import { UpdateSprintDialogComponent } from '@estimation/components/dialogs/update-sprint/update-sprint.component';

@Component({
    selector: 'app-estimation-sprint',
    templateUrl: './sprint.component.html',
    styleUrls: ['./sprint.component.scss'],
})
export class SprintCardComponent extends SubscriptionDirective implements OnInit {
    isMobileLayout$: Observable<boolean> = this.layoutService.isMobile$;

    sprint!: Sprint;

    sprintMapper: SharedDetailsMapper[] = SPRINT_MAPPER;

    get teamId(): string {
        return this.route.snapshot.paramMap.get('teamId') || '';
    }

    get sprintId(): string {
        return this.route.snapshot.paramMap.get('sprintId') || '';
    }

    constructor(
        private route: ActivatedRoute,
        private layoutService: LayoutService,
        private sprintService: SprintService,
        private dialog: MatDialog,
    ) {
        super();
    }

    ngOnInit(): void {
        this._getSprint();
    }

    private _getSprint(): void {
        this.addSubscription(
            this.sprintService
                .getSprint(this.teamId, this.sprintId)
                .pipe(
                    tap(sprint => {
                        this.sprint = sprint;
                    }),
                )
                .subscribe(),
        );
    }

    onOpenUpdateSprintDialog(): void {
        this.dialog.open(UpdateSprintDialogComponent, { data: this.sprint }).afterClosed().pipe().subscribe();
    }
}
