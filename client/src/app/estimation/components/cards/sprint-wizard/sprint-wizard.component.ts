import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { ActivatedRoute } from '@angular/router';
import { LayoutService } from '@core/services/layout.service';
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
    @ViewChild('sprintWizardStepper') private sprintWizardStepperRef!: MatStepper;

    isMobileLayout$: Observable<boolean> = this.layoutService.isMobile$;

    // Sprint Form
    nameControl = new FormControl('', [Validators.required]);
    startDateControl = new FormControl('', [Validators.required]);
    endDateControl = new FormControl('', [Validators.required]);
    descriptionControl = new FormControl('');
    sprintForm = new FormGroup({});

    // Team Capacity Form
    teamCapacityMembers: { member: Member; form: FormGroup }[] = [];
    teamCapacityValidators = [Validators.required];

    // Sprint Capacity Form
    spritCapacityControl = new FormControl('', [Validators.required]);
    sprintCapacityForm = new FormGroup({});

    team$!: Observable<Team>;

    get teamId(): string {
        return this.route.snapshot.paramMap.get('teamId') || '';
    }

    constructor(
        private route: ActivatedRoute,
        private layoutService: LayoutService,
        private teamService: TeamService,
    ) {
        super();
    }

    ngOnInit(): void {
        this._getTeam();
    }

    goToSprintCapacity(): void {
        let isValid = true;

        if (this.teamCapacityMembers.length) {
            this.teamCapacityMembers.forEach(item => {
                if (item.form.invalid) {
                    isValid = false;
                    item.form.markAllAsTouched();
                }
            });
        }

        if (!isValid) {
            return;
        }

        this.sprintWizardStepperRef.next();
    }

    resetStepper(): void {
        this.sprintWizardStepperRef.reset();
        this.teamCapacityMembers.forEach(item => {
            item.form.reset();
        });
    }

    private _getTeam(): void {
        this.addSubscription(
            this.teamService
                .getTeam(this.teamId)
                .pipe(
                    tap(team => {
                        this.team$ = of(team);
                        this._generateTeamCapacityForms(team.members);
                    }),
                )
                .subscribe(),
        );
    }

    private _generateTeamCapacityForms(members: Member[]): void {
        members.forEach(member => {
            const form = new FormGroup({
                daysCapacity: new FormControl(null),
                pointsCapacity: new FormControl(null),
            });
            this.teamCapacityMembers.push({ member, form });
        });
    }
}
