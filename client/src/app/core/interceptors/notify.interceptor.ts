import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// TODO: Add notify interceptor

@Injectable()
export class CoreNotifyInterceptor implements HttpInterceptor {
    constructor() {}
    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        // console.log(request.headers);

        return next.handle(request);
    }
}
