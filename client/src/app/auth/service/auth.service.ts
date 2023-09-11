import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Credentials } from '@auth/interfaces/credentials.interface';
import { User } from '@auth/interfaces/user.interface';
import { EMPTY, Observable, delay, of, switchMap } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private http: HttpClient) {}

    signIn(credentials: Credentials): Observable<User> {
        // eslint-disable-next-line multiline-comment-style
        // TODO: Add http call
        // return this.http.post(`api/auth`, { ...credentials }, {}).pipe(
        //     map(() => {
        //         return { status: 200 };
        //     }),
        // );
        return of(EMPTY).pipe(
            delay(2000),
            switchMap(() => {
                return of({ id: '1', name: 'Roland', email: 'roland@gmail.com' });
            }),
        );
    }

    // signOut(): void {}
}
