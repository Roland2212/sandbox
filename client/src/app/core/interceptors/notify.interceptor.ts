import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CoreNotifyService } from '@core/services/notify.service';
import { SharedRequestHeader } from '@shared/interfaces/request-header.interface';
import { Observable, catchError, finalize } from 'rxjs';

@Injectable()
export class CoreNotifyInterceptor implements HttpInterceptor {
    constructor(private notifyService: CoreNotifyService) {}

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        const successMessage = request.headers.get(SharedRequestHeader.SUCCESS_MESSAGE) || '';
        const errorMessage = request.headers.get(SharedRequestHeader.ERROR_MESSAGE) || '';
        let isErrorState = false;

        return next.handle(request).pipe(
            catchError(error => {
                isErrorState = true;

                if (errorMessage) {
                    this.notifyService.showErrorSnackBar(errorMessage);
                }
                throw error;
            }),
            finalize(() => {
                if (successMessage && !isErrorState) {
                    this.notifyService.showSuccessSnackBar(successMessage);
                }
            }),
        );
    }
}
