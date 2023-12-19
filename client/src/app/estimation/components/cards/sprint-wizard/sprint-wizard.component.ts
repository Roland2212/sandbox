import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { ActivatedRoute } from '@angular/router';
import { LayoutService } from '@core/services/layout.service';
import { SubscriptionDirective } from '@shared/directives/subscription.directive';
import { SharedDetailsMapper } from '@shared/interfaces/details-mapper.interface';
import { Member, Team } from '@team/interfaces/team.interface';
import { TeamService } from '@team/services/team.service';
import { Observable, of, tap } from 'rxjs';
import { SPRINT_WIZARD_MAPPER, TEAM_CAPACITY_MAPPER } from './sprint-wizard.config';
import { SharedGenericObject } from '@shared/interfaces/generic-object.interface';
import { DatePipe } from '@angular/common';
import { DATE_FORMAT } from '@core/constants/date.constant';

interface SprintFormI {
    name: FormControl<string>;
    startDate: FormControl<string>;
    endDate: FormControl<string>;
    description?: FormControl<string>;
}

interface TeamMemberCapacityFormI {
    daysCapacity: FormControl<string>;
    pointsCapacity: FormControl<string>;
}

@Component({
    selector: 'app-estimation-sprint-wizard',
    templateUrl: './sprint-wizard.component.html',
    styleUrls: ['./sprint-wizard.component.scss'],
})
export class SprintWizardCardComponent extends SubscriptionDirective implements OnInit {
    @ViewChild('sprintWizardStepper') private sprintWizardStepperRef!: MatStepper;

    isMobileLayout$: Observable<boolean> = this.layoutService.isMobile$;

    // Sprint Form
    nameControl = new FormControl<string>('', [Validators.required]);
    startDateControl = new FormControl<string>('', [Validators.required]);
    endDateControl = new FormControl<string>('', [Validators.required]);
    descriptionControl = new FormControl<string>('');
    sprintForm = new FormGroup<SprintFormI>({} as SprintFormI);

    // Team Capacity Form
    teamCapacityMembers: { member: Member; form: FormGroup<TeamMemberCapacityFormI> }[] = [];
    teamCapacityValidators = [Validators.required];

    // Sprint Capacity Form
    sprintCapacityControl = new FormControl('', [Validators.required]);
    sprintCapacityForm = new FormGroup({});

    team$!: Observable<Team>;

    sprintWizardMapper: SharedDetailsMapper[] = SPRINT_WIZARD_MAPPER;
    teamCapacityMapper: SharedDetailsMapper[] = TEAM_CAPACITY_MAPPER;

    get teamId(): string {
        return this.route.snapshot.paramMap.get('teamId') || '';
    }

    constructor(
        private route: ActivatedRoute,
        private layoutService: LayoutService,
        private teamService: TeamService,
        private datePipe: DatePipe,
    ) {
        super();
    }

    ngOnInit(): void {
        this._getTeam();
    }

    onNavigateToSprintCapacity(): void {
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

    onResetStepper(): void {
        this.sprintWizardStepperRef.reset();
        this.teamCapacityMembers.forEach(item => {
            item.form.reset();
        });
    }

    onCreateSprint(): void {
        console.log(this.generateSprintInformationSummary());
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
            const form = new FormGroup<TeamMemberCapacityFormI>({
                daysCapacity: new FormControl(''),
                pointsCapacity: new FormControl(''),
            } as TeamMemberCapacityFormI);
            this.teamCapacityMembers.push({ member, form });
        });
    }

    generateSprintInformationSummary(): SharedGenericObject {
        return {
            ...this.sprintForm.value,
            ...this.sprintCapacityForm.value,
            startDate: this.datePipe.transform(this.sprintForm.value.startDate, DATE_FORMAT),
            endDate: this.datePipe.transform(this.sprintForm.value.endDate, DATE_FORMAT),
        };
    }

    generateSprintTeamInformationSummary(item: { member: Member; form: FormGroup }): SharedGenericObject {
        const { member, form } = item;
        return {
            ...member,
            ...form.value,
        } as SharedGenericObject;
    }
}
