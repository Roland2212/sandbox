import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    isSignedIn = new BehaviorSubject<boolean>(false);

    signIn(): void {
        this.isSignedIn.next(true);
    }

    signOut(): void {
        this.isSignedIn.next(false);
    }

    isUserSignedIn(): Observable<boolean> {
        return this.isSignedIn.asObservable();
    }
}
