import { SharedDetailsMapper } from '@shared/interfaces/details-mapper.interface';

export const SPRINT_WIZARD_MAPPER: SharedDetailsMapper[] = [
    {
        icon: 'analytics',
        label: null,
        labelKey: 'estimation.text.sprint_name',
        key: 'name',
    },
    {
        icon: 'calendar_month',
        label: null,
        labelKey: 'common.text.start_date',
        key: 'startDate',
    },
    {
        icon: 'calendar_month',
        label: null,
        labelKey: 'common.text.end_date',
        key: 'endDate',
    },
    {
        icon: 'schedule',
        label: null,
        labelKey: 'estimation.text.days_capacity',
        key: 'daysCapacity',
    },
    {
        icon: 'timeline',
        label: null,
        labelKey: 'estimation.text.points_capacity',
        key: 'pointsCapacity',
    },
    {
        icon: 'description',
        label: null,
        labelKey: 'estimation.text.sprint_goal',
        key: 'description',
    },
];

export const TEAM_CAPACITY_MAPPER: SharedDetailsMapper[] = [
    {
        icon: 'person',
        label: null,
        labelKey: 'team.text.name',
        key: 'name',
    },
    {
        icon: 'person',
        label: null,
        labelKey: 'team.text.surname',
        key: 'surname',
    },
    {
        icon: 'schedule',
        label: null,
        labelKey: 'estimation.text.days_capacity',
        key: 'daysCapacity',
    },
    {
        icon: 'timeline',
        label: null,
        labelKey: 'estimation.text.points_capacity',
        key: 'pointsCapacity',
    },
];
