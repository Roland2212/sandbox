import { Directive } from '@angular/core';
import { EMPTY, Observable, of, tap } from 'rxjs';

@Directive()
export class LoadingDirective {
    public loading: boolean = false;

    startWithLoading$(): Observable<unknown> {
        return of(EMPTY).pipe(
            tap(() => {
                this.loading = true;
            }),
        );
    }
}
