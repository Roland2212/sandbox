import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CoreLoaderService } from '@core/services/loader.service';
import { SharedRequestHeader } from '@shared/interfaces/request-header.interface';
import { Observable, finalize } from 'rxjs';

@Injectable()
export class CoreLoaderInterceptor implements HttpInterceptor {
    constructor(private loaderService: CoreLoaderService) {}

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        const loadingMessage = request.headers.get(SharedRequestHeader.LOADING_MESSAGE) || '';

        if (loadingMessage) {
            this.loaderService.showLoader(loadingMessage);
        }

        return next.handle(request).pipe(
            finalize(() => {
                this.loaderService.hideLoader();
            }),
        );
    }
}
