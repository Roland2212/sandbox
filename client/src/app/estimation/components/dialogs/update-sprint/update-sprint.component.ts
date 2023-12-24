import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Sprint } from '@estimation/interfaces/sprint.interface';

@Component({
    selector: 'app-update-sprint',
    templateUrl: './update-sprint.component.html',
    styleUrls: ['./update-sprint.component.scss'],
})
export class UpdateSprintDialogComponent {
    constructor(
        private dialogRef: MatDialogRef<UpdateSprintDialogComponent>,
        @Inject(MAT_DIALOG_DATA) dialogData: { sprint: Sprint },
    ) {}

    onClose(): void {
        this.dialogRef.close(false);
    }

    onUpdateSprint(): void {
        console.log('here');
    }
}
