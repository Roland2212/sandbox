import { createFeatureSelector, createSelector } from '@ngrx/store';
import { fromTeamReducer } from '@store/reducers';
import { TeamsState } from '@store/reducers/team/team.reducer';

export const teamSelector = createFeatureSelector<TeamsState>('teams');

export const teamsSelector = createSelector(teamSelector, fromTeamReducer.selectors.selectAll);

export const isLoaded = createSelector(teamSelector, state => {
    return state.isLoaded;
});
