import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SharedStreamService {
    private _streamRefresh$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    initializeStreamRefresh(): BehaviorSubject<boolean> {
        return this._streamRefresh$;
    }

    streamRefresh(): void {
        this._streamRefresh$.next(true);
    }
}
