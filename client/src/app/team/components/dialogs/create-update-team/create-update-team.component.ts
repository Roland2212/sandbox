import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Update } from '@ngrx/entity';
import { Store } from '@ngrx/store';
import { uid } from '@shared/helpers/uid.helper';
import { createTeam, updateTeam } from '@store/actions/team/team.action';
import { Member, Team } from '@team/interfaces/team.interface';

@Component({
    selector: 'app-create-update-team',
    templateUrl: './create-update-team.component.html',
    styleUrls: ['./create-update-team.component.scss'],
})
export class CreateUpdateTeamDialogComponent implements OnInit {
    form = new FormGroup({
        id: new FormControl(''),
        name: new FormControl(''),
        country: new FormControl(''),
    });

    membersForms: FormGroup[] = [];

    get dialogState(): string {
        return this.dialogData.team ? 'update' : 'create';
    }

    constructor(
        @Inject(MAT_DIALOG_DATA) private dialogData: { team: Team | null },
        private dialogRef: MatDialogRef<CreateUpdateTeamDialogComponent>,
        private store: Store,
    ) {}

    ngOnInit(): void {
        this._prefillForm();
    }

    addTeamMember(): void {
        this._generateMemberForm(null);
    }

    removeTeamMember(formIndex: number): void {
        this.membersForms.splice(formIndex, 1);
    }

    onClose(): void {
        this.dialogRef.close(false);
    }

    onCreateUpdateTeam(): void {
        if (!this.form.valid) {
            this.form.markAllAsTouched();
            return;
        }
        const teamValue = this.form.value;
        const members = this._getMembersValues();
        const isUpdate = !!this.dialogData.team;

        if (!isUpdate) {
            this.store.dispatch(createTeam({ team: { ...teamValue, id: uid(), members } as Team }));
        } else {
            this.store.dispatch(
                updateTeam({ team: { id: teamValue.id, changes: { ...teamValue, members } } as Update<Team> }),
            );
        }

        this.dialogRef.close(teamValue);
    }

    private _prefillForm(): void {
        const { team } = this.dialogData;

        if (!team) {
            return;
        }

        this.form.patchValue(team);

        this._prefillMembers(team.members);
    }

    private _prefillMembers(members: Member[]): void {
        members.map(item => {
            this._generateMemberForm(item);
        });
    }

    private _generateMemberForm(member: Member | null): void {
        const memberForm = new FormGroup({
            id: new FormControl(member?.id || uid()),
            name: new FormControl(member?.name || ''),
            surname: new FormControl(member?.surname || ''),
            role: new FormControl(member?.role || ''),
        });
        this.membersForms.push(memberForm);
    }

    private _getMembersValues(): Member[] {
        return this.membersForms.map(form => {
            return form.value as Member;
        });
    }
}
