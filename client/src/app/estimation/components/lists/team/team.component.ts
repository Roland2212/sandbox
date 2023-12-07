import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubscriptionDirective } from '@shared/directives/subscription.directive';
import { Team } from '@team/interfaces/team.interface';
import { TeamService } from '@team/services/team.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-estimation-team-list',
    templateUrl: './team.component.html',
    styleUrls: ['./team.component.scss'],
})
export class TeamListComponent extends SubscriptionDirective implements OnInit {
    teams$!: Observable<Team[]>;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private teamService: TeamService,
    ) {
        super();
    }

    ngOnInit(): void {
        this._getTeams();
    }

    onNavigateToTeamSprints(teamId: string): void {
        void this.router.navigate([`./${teamId}/sprints`], { relativeTo: this.route });
    }

    private _getTeams(): void {
        this.teams$ = this.teamService.getAllTeams();
    }
}
