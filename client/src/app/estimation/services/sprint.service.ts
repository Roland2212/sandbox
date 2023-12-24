import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sprint } from '@estimation/interfaces/sprint.interface';
import { SharedStatusResponse } from '@shared/interfaces/status-response.interface';
import { setLoadingMessage } from '@shared/utilities/request-messages.utilitie';
import { Observable } from 'rxjs';

@Injectable()
export class SprintService {
    constructor(private http: HttpClient) {}

    getAllSprints(teamId: string): Observable<Sprint[]> {
        return this.http.get<Sprint[]>(`http://localhost:5200/api/teams/${teamId}/sprints`, {
            headers: { ...setLoadingMessage('sprints') },
        });
    }

    getSprint(teamId: string, sprintId: string): Observable<Sprint> {
        return this.http.get<Sprint>(`http://localhost:5200/api/teams/${teamId}/sprints/${sprintId}`);
    }

    createSprint(teamId: string, sprint: Sprint): Observable<SharedStatusResponse> {
        return this.http.post<SharedStatusResponse>(`http://localhost:5200/api/teams/${teamId}/sprints`, { sprint });
    }
}
