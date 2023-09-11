import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-add-team-member-dialog',
    templateUrl: './add-team-member.component.html',
    styleUrls: ['./add-team-member.component.scss'],
})
export class AddTeamMemberDialogComponent {
    form = new FormGroup({});

    constructor(private dialogRef: DialogRef) {}

    onSaveTeamMember(): void {
        this.dialogRef.close();
    }
}
