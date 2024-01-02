import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CoreNotifyComponent } from '@core/components/notify/notify.component';
import { NotifyType } from '@core/interfaces/notify.interface';

@Injectable({
    providedIn: 'root',
})
export class CoreNotifyService {
    constructor(private snackBar: MatSnackBar) {}

    showSuccessSnackBar(message: string): void {
        this.snackBar.openFromComponent(CoreNotifyComponent, {
            data: { icon: 'check', message },
            panelClass: NotifyType.SUCCESS,
        });
    }

    showErrorSnackBar(message: string): void {
        this.snackBar.openFromComponent(CoreNotifyComponent, {
            data: { icon: 'error', message },
            panelClass: NotifyType.ERROR,
        });
    }
}
