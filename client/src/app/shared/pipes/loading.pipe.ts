import { HttpErrorResponse } from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core';
import { SharedGenericObject } from '@shared/interfaces/generic-object.interface';
import { Observable, catchError, map, of, startWith } from 'rxjs';

@Pipe({
    name: 'loading',
})
export class SharedLoadingPipe implements PipeTransform {
    transform<T extends SharedGenericObject>(
        value: Observable<T>,
    ): Observable<{ loading: boolean; value?: T; error?: HttpErrorResponse }> {
        return value.pipe(
            map(value => {
                return { loading: false, value };
            }),
            startWith({ loading: true }),
            catchError((error: HttpErrorResponse) => {
                return of({ loading: false, error });
            }),
        );
    }
}
