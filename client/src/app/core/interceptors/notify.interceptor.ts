import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NotifyState } from '@core/interfaces/notify.interface';
import { NotifyService } from '@core/services/notify.service';
import { SharedRequestHeader } from '@shared/interfaces/request-header.interface';
import { Observable, catchError, finalize } from 'rxjs';

@Injectable()
export class CoreNotifyInterceptor implements HttpInterceptor {
    constructor(private notifyService: NotifyService) {}

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        const successMessage = request.headers.get(SharedRequestHeader.SUCCESS_MESSAGE) || '';
        const errorMessage = request.headers.get(SharedRequestHeader.ERROR_MESSAGE) || '';
        let isErrorState = false;

        return next.handle(request).pipe(
            catchError(error => {
                isErrorState = true;

                if (errorMessage) {
                    this.notifyService.showSnackBar(errorMessage, NotifyState.ERROR);
                }
                throw error;
            }),
            finalize(() => {
                if (successMessage && !isErrorState) {
                    this.notifyService.showSnackBar(successMessage, NotifyState.SUCCESS);
                }
            }),
        );
    }
}
