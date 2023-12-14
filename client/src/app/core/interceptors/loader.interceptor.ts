/* eslint-disable @typescript-eslint/no-explicit-any */

import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoaderService } from '@core/services/loader.service';
import { Observable, finalize } from 'rxjs';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
    constructor(private loaderService: LoaderService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.loaderService.showLoader();

        return next.handle(request).pipe(
            finalize(() => {
                this.loaderService.hideLoader();
            }),
        );
    }
}
