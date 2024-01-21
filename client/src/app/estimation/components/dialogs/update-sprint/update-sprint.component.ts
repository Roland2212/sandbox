import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Sprint } from '@estimation/interfaces/sprint.interface';

@Component({
    selector: 'app-update-sprint',
    templateUrl: './update-sprint.component.html',
    styleUrls: ['./update-sprint.component.scss'],
})
export class UpdateSprintDialogComponent implements AfterViewInit {
    nameControl = new FormControl<string>('', [Validators.required]);
    startDateControl = new FormControl<string>('', [Validators.required]);
    endDateControl = new FormControl<string>('', [Validators.required]);
    daysCapacityControl = new FormControl<number | null>(null, [Validators.required]);
    pointsCapacityControl = new FormControl<number | null>(null, [Validators.required]);
    descriptionControl = new FormControl<string>('');

    form = new FormGroup({
        name: this.nameControl,
        startDate: this.startDateControl,
        endDate: this.endDateControl,
        daysCapacity: this.daysCapacityControl,
        pointsCapacity: this.pointsCapacityControl,
        description: this.descriptionControl,
    });

    constructor(
        private dialogRef: MatDialogRef<UpdateSprintDialogComponent>,
        @Inject(MAT_DIALOG_DATA) private dialogData: { sprint: Sprint },
    ) {}

    ngAfterViewInit(): void {
        this._prefillForm();
    }

    onClose(): void {
        this.dialogRef.close(false);
    }

    onUpdateSprint(): void {
        console.log('here');
    }

    private _prefillForm(): void {
        const { sprint } = this.dialogData;

        if (!sprint) {
            return;
        }
        console.log(sprint);

        this.form.patchValue(sprint);
    }
}
