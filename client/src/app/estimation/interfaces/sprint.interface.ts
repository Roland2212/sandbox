export interface Sprint {
    id: string;
    name: string;
    startDate: string;
    endDate: string;
    status: SprintStatus;
    pointsCapacity: number;
    actualPointsCapacity: number | null;
    members: SprintMember[];
}

export enum SprintStatus {
    STARTED = 'started',
    IN_PROGRESS = 'in_progress',
    FINISHED = 'finished',
}

export interface SprintMember {
    id: string;
    name: string;
    role: string;
    daysCapacity: number;
    actualDaysCapacity: number | null;
    pointsCapacity: number;
    actualPointsCapacity: number | null;
}
