import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { Member, Team } from '@team/interfaces/team.interface';
import { BehaviorSubject, EMPTY, Observable, delay, of, switchMap } from 'rxjs';

// TODO: Remove Mock
const TEAMS_MOCK: Team[] = [
    {
        id: '1',
        name: 'Team Deloitte',
        country: 'NL',
        members: [],
    },
    {
        id: '2',
        name: 'Team MyCubes',
        country: 'UA',
        members: [],
    },
    {
        id: '3',
        name: 'Team Phillips',
        country: 'NL',
        members: [],
    },
    {
        id: '4',
        name: 'Team Phillips',
        country: 'NL',
        members: [],
    },
    {
        id: '5',
        name: 'Team Phillips',
        country: 'NL',
        members: [],
    },
    {
        id: '6',
        name: 'Team Phillips',
        country: 'NL',
        members: [],
    },
    {
        id: '1',
        name: 'Team Deloitte',
        country: 'NL',
        members: [],
    },
    {
        id: '2',
        name: 'Team MyCubes',
        country: 'UA',
        members: [],
    },
    {
        id: '3',
        name: 'Team Phillips',
        country: 'NL',
        members: [],
    },
    {
        id: '3',
        name: 'Team Phillips',
        country: 'NL',
        members: [],
    },
    {
        id: '3',
        name: 'Team Phillips',
        country: 'NL',
        members: [],
    },
    {
        id: '3',
        name: 'Team Phillips',
        country: 'NL',
        members: [],
    },
];

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
        // TODO: Add http call

        // return this.http.get<Team[]>(`api/teams`, {});
        return of(EMPTY).pipe(
            delay(3000),
            switchMap(() => {
                return of(TEAMS_MOCK);
            }),
        );
    }

    getTeam(id: string): Observable<Team> {
        return this.http.get<Team>(`api/teams/${id}`, {});
    }

    geTeamMembers(id: string): Observable<Member[]> {
        return this.http.get<Member[]>(`api/teams/${id}/members`, {});
    }
}
