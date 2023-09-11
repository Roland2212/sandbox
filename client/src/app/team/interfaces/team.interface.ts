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
    role: string;
}
