import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sprint } from '@estimation/interfaces/sprint.interface';
import { SharedStatusResponse } from '@shared/interfaces/status-response.interface';
import { setLoadingMessage, setSuccessMessage, setErrorMessage } from '@shared/utilities/request-messages.utility';
import { Observable } from 'rxjs';

@Injectable()
export class SprintService {
    constructor(private http: HttpClient) {}

    getAllSprints(teamId: string): Observable<Sprint[]> {
        return this.http.get<Sprint[]>(`http://localhost:5200/api/teams/${teamId}/sprints`, {
            headers: { ...setLoadingMessage('sprints'), ...setSuccessMessage(''), ...setErrorMessage('') },
        });
    }

    getSprint(teamId: string, sprintId: string): Observable<Sprint> {
        return this.http.get<Sprint>(`http://localhost:5200/api/teams/${teamId}/sprints/${sprintId}`, {
            headers: { ...setLoadingMessage('sprint'), ...setSuccessMessage('') },
        });
    }

    createSprint(teamId: string, sprint: Sprint): Observable<SharedStatusResponse> {
        return this.http.post<SharedStatusResponse>(`http://localhost:5200/api/teams/${teamId}/sprints`, { sprint });
    }
}
