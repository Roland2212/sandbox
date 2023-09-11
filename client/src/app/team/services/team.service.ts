import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Member, Team } from '@team/interfaces/team.interface';
import { BehaviorSubject, Observable } from 'rxjs';

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

    getTeams(): Observable<Team[]> {
        return this.http.get<Team[]>(`api/teams`, {});
    }

    getTeam(id: string): Observable<Team> {
        return this.http.get<Team>(`api/teams/${id}`, {});
    }

    geTeamMembers(id: string): Observable<Member[]> {
        return this.http.get<Member[]>(`api/teams/${id}/members`, {});
    }
}
