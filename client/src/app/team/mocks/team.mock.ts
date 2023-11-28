import { Team } from '@team/interfaces/team.interface';
import { TEAM_MEMBERS_MOCK } from './member.mock';

export const TEAM_LIST_MOCK: Team[] = [
    {
        id: '1',
        name: 'Team Deloitte',
        country: 'NL',
        members: TEAM_MEMBERS_MOCK,
    },
    {
        id: '2',
        name: 'Team MyCubes',
        country: 'UA',
        members: TEAM_MEMBERS_MOCK,
    },
    {
        id: '3',
        name: 'Team Phillips',
        country: 'NL',
        members: TEAM_MEMBERS_MOCK,
    },
];
