import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Team } from '@team/interfaces/team.interface';
import { TeamService } from '@team/services/team.service';
import { Observable, of } from 'rxjs';

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
        private teamService: TeamService,
    ) {}

    ngOnInit(): void {
        this._getTeams();
    }

    onNavigateToEditTeam(teamId: string): void {
        void this.router.navigate(['edit', teamId], { relativeTo: this.route });
    }

    private _getTeams(): void {
        // TODO: Get teams from store
        this.teams$ = this.teamService.getTeams();
    }
}
