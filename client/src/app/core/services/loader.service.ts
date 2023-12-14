import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class LoaderService {
    private _isLoading$ = new BehaviorSubject<boolean>(false);

    get isLoading$(): Observable<boolean> {
        return this._isLoading$.asObservable();
    }

    showLoader(): void {
        this._isLoading$.next(true);
    }

    hideLoader(): void {
        this._isLoading$.next(false);
    }
}
