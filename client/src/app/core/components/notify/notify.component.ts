import { Component, Inject, OnInit } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';
import { NotifyState } from '@core/interfaces/notify.interface';

@Component({
    selector: 'app-core-notify',
    templateUrl: './notify.component.html',
    styleUrls: ['./notify.component.scss'],
})
export class CoreNotifyComponent implements OnInit {
    message: string = '';
    state: NotifyState = NotifyState.DEFAULT;

    constructor(
        @Inject(MAT_SNACK_BAR_DATA) private snackBarData: { message: string; state: NotifyState },
        private snackBarRef: MatSnackBarRef<CoreNotifyComponent>,
    ) {}

    ngOnInit(): void {
        this.message = this.snackBarData?.message;
        this.state = this.snackBarData?.state;
    }

    onDismiss(): void {
        this.snackBarRef.dismissWithAction();
    }
}
