import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';
import { Notify } from '@core/interfaces/notify.interface';

@Component({
    selector: 'app-core-notify',
    templateUrl: './notify.component.html',
    styleUrls: ['./notify.component.scss'],
})
export class CoreNotifyComponent {
    message: string = '';
    state: Notify = Notify.DEFAULT;

    constructor(
        @Inject(MAT_SNACK_BAR_DATA) private data: { message: string; state: Notify },
        private snackBarRef: MatSnackBarRef<CoreNotifyComponent>,
    ) {
        this.message = data.message;
        this.state = data.state;
    }

    onDismiss(): void {
        this.snackBarRef.dismissWithAction();
    }
}
