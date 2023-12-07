import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sprint } from '@estimation/interfaces/sprint.interface';
import { Observable } from 'rxjs';

//TODO: Implement HTTP call

@Injectable()
export class SprintService {
    constructor(private http: HttpClient) {}

    getAllSprints(): Observable<Sprint[]> {
        return this.http.get<Sprint[]>(`http://localhost:5200/api/sprints`);
    }
}
