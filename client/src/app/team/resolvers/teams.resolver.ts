import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { Team } from '@team/interfaces/team.interface';
import { TeamService } from '@team/services/team.service';
import { Observable } from 'rxjs';

export const TeamsResolver: ResolveFn<Team[]> = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
): Observable<Team[]> => {
    const teamService = inject(TeamService);

    return teamService.getTeams();
};
