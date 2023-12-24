export interface Team {
    id: string;
    name: string;
    country: string;
    members: Member[];
}

export interface Member {
    id: string;
    name: string;
    surname: string;
    role: MemberRoles;
}

export enum MemberRoles {
    FRONTEND_DEVELOPER = 'FRONTEND_DEVELOPER',
    BACKEND_DEVELOPER = 'BACKEND_DEVELOPER',
    PROJECT_MANAGER = 'PROJECT_MANAGER',
    QA = 'QA',
}
