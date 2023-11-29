import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { StatusResponse } from '@shared/interfaces/status-response.interface';
import { Team } from '@team/interfaces/team.interface';
import { TEAM_LIST_MOCK } from '@team/mocks/team.mock';
import { BehaviorSubject, EMPTY, Observable, delay, of, switchMap } from 'rxjs';

@Injectable()
export class TeamService {
    private _isCreateSubject$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    private _teamForm: FormGroup = new FormGroup({});

    get isCreate$(): Observable<boolean> {
        return this._isCreateSubject$.asObservable();
    }

    get teamForm(): FormGroup {
        return this._teamForm;
    }

    constructor(private http: HttpClient) {}

    setIsCreate(isCreate: boolean) {
        this._isCreateSubject$.next(isCreate);
    }

    setControlToTeamForm(name: string, control: AbstractControl): void {
        this.teamForm.setControl(name, control);
    }

    prefillTeamForm(value: Team): void {
        this.teamForm.patchValue(value);
    }

    getAllTeams(): Observable<Team[]> {
        // TODO: Add http call

        // return this.http.get<Team[]>(`api/teams`, {});
        return of(EMPTY).pipe(
            delay(2000),
            switchMap(() => {
                return of(TEAM_LIST_MOCK);
            }),
        );
    }

    createTeam(team: Team): Observable<StatusResponse> {
        // TODO: Add http call
        return of(EMPTY).pipe(
            delay(2000),
            switchMap(() => {
                return of({ status: 'OK' });
            }),
        );
    }

    updateTeam(team: Team): Observable<StatusResponse> {
        // TODO: Add http call
        return of(EMPTY).pipe(
            delay(2000),
            switchMap(() => {
                return of({ status: 'OK' });
            }),
        );
    }
}
