import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Member } from '@team/interfaces/team.interface';
import { TeamService } from '@team/services/team.service';
import { EMPTY, Observable, delay, iif, of, switchMap } from 'rxjs';

// TODO: Remove Mock
const TEAM_MEMBER_MOCK: Member[] = [
    {
        id: '1',
        name: 'Kyrylo',
        surname: 'Mykhailytskyi',
        role: 'Software Engineer',
    },
    {
        id: '2',
        name: 'John',
        surname: 'Doe',
        role: 'Project Manager',
    },
    {
        id: '3',
        name: 'Kyrylo',
        surname: 'Mykhailytskyi',
        role: 'Software Engineer',
    },
    {
        id: '4',
        name: 'John',
        surname: 'Doe',
        role: 'Project Manager',
    },
    {
        id: '5',
        name: 'Kyrylo',
        surname: 'Mykhailytskyi',
        role: 'Software Engineer',
    },
    {
        id: '5',
        name: 'John',
        surname: 'Doe',
        role: 'Project Manager',
    },
];

@Component({
    selector: 'app-team-member-list',
    templateUrl: './team-member-list.component.html',
    styleUrls: ['./team-member-list.component.scss'],
})
export class TeamMemberListComponent implements OnInit {
    members$: Observable<Member[]> = of([]);

    members = new FormControl([]);

    get teamId(): string {
        return this.route.snapshot.paramMap.get('teamId') || '';
    }

    constructor(
        private route: ActivatedRoute,
        private teamService: TeamService,
    ) {}

    ngOnInit(): void {
        this._setFormControls();
        this._getTeamMembers();
    }

    private _setFormControls(): void {
        this.teamService.setControlToTeamForm('members', this.members);
    }

    private _getTeamMembers(): void {
        const retrieveMembers$ = of(EMPTY).pipe(
            delay(3000),
            switchMap(() => {
                return of(TEAM_MEMBER_MOCK);
            }),
        );

        this.members$ = this.teamService.isCreate$.pipe(
            switchMap(isCreate => {
                return iif(
                    () => {
                        return isCreate;
                    },
                    of([]),
                    retrieveMembers$,
                );
            }),
        );
    }
}
