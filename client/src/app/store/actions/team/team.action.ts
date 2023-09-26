import { createAction, props } from '@ngrx/store';
import { Team } from '@team/interfaces/team.interface';

export const loadAllTeams = createAction('[TEAM] Load All Teams');

export const allTeamsLoaded = createAction('[TEAM] All Teams Loaded', props<{ teams: Team[] }>());
