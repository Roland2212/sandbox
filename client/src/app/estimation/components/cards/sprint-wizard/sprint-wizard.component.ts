import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SubscriptionDirective } from '@shared/directives/subscription.directive';
import { Member, Team } from '@team/interfaces/team.interface';
import { TeamService } from '@team/services/team.service';
import { Observable, of, tap } from 'rxjs';

@Component({
    selector: 'app-estimation-sprint-wizard',
    templateUrl: './sprint-wizard.component.html',
    styleUrls: ['./sprint-wizard.component.scss'],
})
export class SprintWizardCardComponent extends SubscriptionDirective implements OnInit {
    // Sprint Form
    nameControl = new FormControl('', [Validators.required]);
    startDateControl = new FormControl('', [Validators.required]);
    endDateControl = new FormControl('', [Validators.required]);
    descriptionControl = new FormControl('');

    sprintForm = new FormGroup({});

    // teamCapacityForm = new FormGroup({});

    // Sprint Capacity Form
    spritCapacityControl = new FormControl('', [Validators.required]);

    sprintCapacityForm = new FormGroup({});

    team$!: Observable<Team>;
    members: Member[] = [];

    get teamId(): string {
        return this.route.snapshot.paramMap.get('teamId') || '';
    }

    constructor(
        private route: ActivatedRoute,
        private teamService: TeamService,
    ) {
        super();
    }

    ngOnInit(): void {
        this._getTeam();
    }

    private _getTeam(): void {
        this.team$ = this.teamService.getTeam(this.teamId).pipe(
            tap(team => {
                this.members = team.members;
            }),
        );
    }
}
