import { SharedDetailsMapper } from '@shared/interfaces/details-mapper.interface';

export const SPRINT_WIZARD_MAPPER: SharedDetailsMapper[] = [
    {
        icon: 'analytics',
        label: 'Name',
        key: 'name',
    },
    {
        icon: 'calendar_month',
        label: 'Start Date',
        key: 'startDate',
    },
    {
        icon: 'calendar_month',
        label: 'End Date',
        key: 'endDate',
    },
    {
        icon: 'calendar_today',
        label: 'Sprint Capacity',
        key: 'sprintCapacity',
    },
    {
        icon: 'description',
        label: 'Description',
        key: 'description',
    },
];

export const TEAM_CAPACITY_MAPPER: SharedDetailsMapper[] = [
    {
        icon: 'person',
        label: 'Name',
        key: 'name',
    },
    {
        icon: 'schedule',
        label: 'Days Capacity',
        key: 'daysCapacity',
    },
    {
        icon: 'timeline',
        label: 'Points Capacity',
        key: 'pointsCapacity',
    },
];
