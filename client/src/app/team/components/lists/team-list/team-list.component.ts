import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Team } from '@team/interfaces/team.interface';
import { EMPTY, Observable, delay, of, switchMap } from 'rxjs';

// TODO: Remove Mock
const TEAMS_MOCK: Team[] = [
    {
        id: '1',
        name: 'Team Deloitte',
        country: 'NL',
        members: [],
    },
    {
        id: '2',
        name: 'Team MyCubes',
        country: 'UA',
        members: [],
    },
    {
        id: '3',
        name: 'Team Phillips',
        country: 'NL',
        members: [],
    },
    {
        id: '4',
        name: 'Team Phillips',
        country: 'NL',
        members: [],
    },
    {
        id: '5',
        name: 'Team Phillips',
        country: 'NL',
        members: [],
    },
    {
        id: '6',
        name: 'Team Phillips',
        country: 'NL',
        members: [],
    },
    {
        id: '1',
        name: 'Team Deloitte',
        country: 'NL',
        members: [],
    },
    {
        id: '2',
        name: 'Team MyCubes',
        country: 'UA',
        members: [],
    },
    {
        id: '3',
        name: 'Team Phillips',
        country: 'NL',
        members: [],
    },
    {
        id: '3',
        name: 'Team Phillips',
        country: 'NL',
        members: [],
    },
    {
        id: '3',
        name: 'Team Phillips',
        country: 'NL',
        members: [],
    },
    {
        id: '3',
        name: 'Team Phillips',
        country: 'NL',
        members: [],
    },
];

@Component({
    selector: 'app-team-list',
    templateUrl: './team-list.component.html',
    styleUrls: ['./team-list.component.scss'],
})
export class TeamListComponent implements OnInit {
    teams$: Observable<Team[]> = of([]);

    constructor(
        private route: ActivatedRoute,
        private router: Router,
    ) {}

    ngOnInit(): void {
        this._getTeams();
    }

    onNavigateToEditTeam(teamId: string): void {
        void this.router.navigate(['edit', teamId], { relativeTo: this.route });
    }

    private _getTeams(): void {
        this.teams$ = of(EMPTY).pipe(
            delay(3000),
            switchMap(() => {
                return of(TEAMS_MOCK);
            }),
        );
    }
}
