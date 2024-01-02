import { Component, Inject, OnInit } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';
import { NotifyData } from '@core/interfaces/notify.interface';

@Component({
    selector: 'app-core-notify',
    templateUrl: './notify.component.html',
    styleUrls: ['./notify.component.scss'],
})
export class CoreNotifyComponent implements OnInit {
    icon: string = 'description';
    message: string = '';

    constructor(
        @Inject(MAT_SNACK_BAR_DATA) private snackBarData: NotifyData,
        private snackBarRef: MatSnackBarRef<CoreNotifyComponent>,
    ) {}

    ngOnInit(): void {
        this.icon = this.snackBarData?.icon;
        this.message = this.snackBarData?.message;
    }

    onDismiss(): void {
        this.snackBarRef.dismissWithAction();
    }
}
