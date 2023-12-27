import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { ActivatedRoute } from '@angular/router';
import { LayoutService } from '@core/services/layout.service';
import { SubscriptionDirective } from '@shared/directives/subscription.directive';
import { SharedDetailsMapper } from '@shared/interfaces/details-mapper.interface';
import { Member, Team } from '@team/interfaces/team.interface';
import { TeamService } from '@team/services/team.service';
import { Observable, tap } from 'rxjs';
import { SPRINT_WIZARD_MAPPER, TEAM_CAPACITY_MAPPER } from './sprint-wizard.config';
import { DatePipe } from '@angular/common';
import { DATE_FORMAT } from '@core/constants/date.constant';
import { SprintService } from '@estimation/services/sprint.service';
import { Sprint, SprintMember } from '@estimation/interfaces/sprint.interface';

interface SprintFormI {
    name: FormControl<string>;
    startDate: FormControl<string>;
    endDate: FormControl<string>;
    description: FormControl<string>;
}

interface CapacityFormI {
    daysCapacity: FormControl<number | null>;
    pointsCapacity: FormControl<number | null>;
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

    // TODO: Fix issue withresetinng forms
    teamMembersCapacity: { member: Member; form: FormGroup<CapacityFormI> }[] = [];
    teamMembersCapacityValidators = [Validators.required];

    // Sprint Capacity Form
    daysCapacityControl = new FormControl<number | null>(null, [Validators.required]);
    pointsCapacityControl = new FormControl<number | null>(null, [Validators.required]);
    sprintCapacityForm = new FormGroup<CapacityFormI>({} as CapacityFormI);

    team!: Team;

    sprintWizardMapper: SharedDetailsMapper[] = SPRINT_WIZARD_MAPPER;
    teamCapacityMapper: SharedDetailsMapper[] = TEAM_CAPACITY_MAPPER;

    get teamId(): string {
        return this.route.snapshot.paramMap.get('teamId') || '';
    }

    constructor(
        private route: ActivatedRoute,
        private layoutService: LayoutService,
        private teamService: TeamService,
        private sprintService: SprintService,
        private datePipe: DatePipe,
    ) {
        super();
    }

    ngOnInit(): void {
        this._getTeam();
    }

    onNavigateToSprintCapacity(): void {
        let isValid = true;

        if (this.teamMembersCapacity.length) {
            this.teamMembersCapacity.forEach(item => {
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
        this.teamMembersCapacity.forEach(item => {
            item.form.reset();
        });
    }

    onCreateSprint(): void {
        const sprint = this.generateSprintInformationSummary();

        this.addSubscription(this.sprintService.createSprint(this.teamId, sprint).pipe(tap(console.log)).subscribe());
    }

    private _getTeam(): void {
        this.addSubscription(
            this.teamService
                .getTeam(this.teamId)
                .pipe(
                    tap(team => {
                        this.team = team;
                        this._generateTeamCapacityForms(team.members);
                    }),
                )
                .subscribe(),
        );
    }

    private _generateTeamCapacityForms(members: Member[]): void {
        members.forEach(member => {
            const form = new FormGroup<CapacityFormI>({
                daysCapacity: new FormControl<number | null>(null),
                pointsCapacity: new FormControl<number | null>(null),
            });
            this.teamMembersCapacity.push({ member, form });
        });
    }

    generateSprintInformationSummary(): Sprint {
        const members = this.teamMembersCapacity.map(item => {
            return this.generateSprintTeamInformationSummary(item);
        });
        return {
            ...this.sprintForm.value,
            ...this.sprintCapacityForm.value,
            startDate: this.datePipe.transform(this.sprintForm.value.startDate, DATE_FORMAT) || '',
            endDate: this.datePipe.transform(this.sprintForm.value.endDate, DATE_FORMAT) || '',
            members,
        } as Sprint;
    }

    generateSprintTeamInformationSummary(item: { member: Member; form: FormGroup<CapacityFormI> }): SprintMember {
        const { member, form } = item;
        return {
            ...member,
            ...form.value,
        } as SprintMember;
    }
}
