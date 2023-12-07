import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { StatusResponse } from '@shared/interfaces/status-response.interface';
import { Team } from '@team/interfaces/team.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class TeamService {
    constructor(private http: HttpClient) {}

    getAllTeams(): Observable<Team[]> {
        return this.http.get<Team[]>(`http://localhost:5200/api/teams`);
    }

    getTeam(teamId: string): Observable<Team> {
        return this.http.get<Team>(`http://localhost:5200/api/teams/${teamId}`);
    }

    createTeam(team: Team): Observable<StatusResponse> {
        return this.http.post<StatusResponse>(`http://localhost:5200/api/teams`, { ...team });
    }

    updateTeam(team: Team): Observable<StatusResponse> {
        return this.http.patch<StatusResponse>(`http://localhost:5200/api/teams`, { ...team });
    }
}
