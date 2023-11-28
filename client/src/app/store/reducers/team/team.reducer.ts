import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { TeamsActions } from '@store/actions';
import { Team } from '@team/interfaces/team.interface';

export interface TeamsState extends EntityState<Team> {
    isLoaded: boolean;
}

export const adapter = createEntityAdapter<Team>();

export const selectors = adapter.getSelectors();

export const initialTeamState = adapter.getInitialState({ isLoaded: false });

export const teamsReducer = createReducer(
    initialTeamState,
    on(TeamsActions.allTeamsLoaded, (state, action) => {
        return adapter.setAll(action.teams, { ...state, isLoaded: true });
    }),
    on(TeamsActions.createTeam, (state, action) => {
        return adapter.addOne(action.team, { ...state });
    }),
    on(TeamsActions.updateTeam, (state, action) => {
        return adapter.updateOne(action.team, { ...state });
    }),
);
