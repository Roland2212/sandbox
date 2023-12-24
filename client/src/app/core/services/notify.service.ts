import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CoreNotifyComponent } from '@core/components/notify/notify.component';
import { Notify } from '@core/interfaces/notify.interface';

@Injectable({
    providedIn: 'root',
})
export class NotifyService {
    constructor(private snackBar: MatSnackBar) {}

    showSnackBar(message: string, state: Notify): void {
        this.snackBar.openFromComponent(CoreNotifyComponent, { data: { message, state } });
    }
}
