import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class CoreLoaderService {
    private _isLoading$ = new BehaviorSubject<boolean>(false);
    private _loadingMessage$ = new BehaviorSubject<string>('');

    get isLoading$(): Observable<boolean> {
        return this._isLoading$.asObservable();
    }

    get loadingMessage$(): Observable<string> {
        return this._loadingMessage$.asObservable();
    }

    showLoader(message: string): void {
        this._loadingMessage$.next(message);
        this._isLoading$.next(true);
    }

    hideLoader(): void {
        this._loadingMessage$.next('');
        this._isLoading$.next(false);
    }
}
