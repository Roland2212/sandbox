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
        const subject = 'sprints';
        return this.http.get<Sprint[]>(`http://localhost:5200/api/teams/${teamId}/sprints`, {
            headers: { ...setLoadingMessage(subject), ...setErrorMessage(subject) },
        });
    }

    getSprint(teamId: string, sprintId: string): Observable<Sprint> {
        const subject = 'sprint';
        return this.http.get<Sprint>(`http://localhost:5200/api/teams/${teamId}/sprints/${sprintId}`, {
            headers: { ...setLoadingMessage(subject), ...setErrorMessage(subject) },
        });
    }

    createSprint(teamId: string, sprint: Sprint): Observable<SharedStatusResponse> {
        const subject = 'sprint';
        return this.http.post<SharedStatusResponse>(
            `http://localhost:5200/api/teams/${teamId}/sprints`,
            { sprint },
            {
                headers: { ...setLoadingMessage(subject), ...setErrorMessage(subject), ...setSuccessMessage(subject) },
            },
        );
    }
}
