import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TeamsActions } from '@store/actions';
import { allTeamsLoaded } from '@store/actions/team/team.action';
import { TeamService } from '@team/services/team.service';
import { concatMap, map } from 'rxjs';

@Injectable()
export class TeamEffects {
    loadTeams$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(TeamsActions.loadAllTeams),
            concatMap(action => {
                return this.teamsService.getAllTeams();
            }),
            map(teams => {
                return allTeamsLoaded({ teams });
            }),
        );
    });

    constructor(
        private actions$: Actions,
        private teamsService: TeamService,
    ) {}
}
