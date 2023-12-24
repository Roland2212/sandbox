import { Member } from '@team/interfaces/team.interface';

export interface Sprint extends DaysPointsCapacity {
    id: string;
    teamId: string;
    name: string;
    startDate: string;
    endDate: string;
    description: string;
    status: SprintStatus;
    members: SprintMember[];
}

export enum SprintStatus {
    IN_PROGRESS = 'IN_PROGRESS',
    FINISHED = 'FINISHED',
}

export interface SprintMember extends Member, DaysPointsCapacity {}

export interface DaysPointsCapacity {
    daysCapacity: number | null;
    actualDaysCapacity: number | null;
    pointsCapacity: number | null;
    actualPointsCapacity: number | null;
}
