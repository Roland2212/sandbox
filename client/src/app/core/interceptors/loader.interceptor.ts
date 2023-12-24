import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoaderService } from '@core/services/loader.service';
import { RequestHeader } from '@shared/interfaces/request-header.interface';
import { Observable, delay, finalize } from 'rxjs';

@Injectable()
export class CoreLoaderInterceptor implements HttpInterceptor {
    constructor(private loaderService: LoaderService) {}

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        const loadingMessage = request.headers.get(RequestHeader.LOADING_MESSAGE) || '';

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
