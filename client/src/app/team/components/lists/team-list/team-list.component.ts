import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store, select } from '@ngrx/store';
import { SubscriptionDirective } from '@shared/directives/subscription.directive';
import { loadAllTeams } from '@store/actions/team/team.action';
import { AppState } from '@store/reducers/app.reducer';
import { isLoaded, teamsSelector } from '@store/selectors/team.selector';
import { CreateUpdateTeamDialogComponent } from '@team/components/dialogs/create-update-team/create-update-team.component';
import { Team } from '@team/interfaces/team.interface';
import { Observable, of, tap } from 'rxjs';

@Component({
    selector: 'app-team-list',
    templateUrl: './team-list.component.html',
    styleUrls: ['./team-list.component.scss'],
})
export class TeamListComponent extends SubscriptionDirective implements OnInit {
    teams$!: Observable<Team[]>;
    isLoading!: boolean;

    constructor(
        private store: Store<AppState>,
        private dialog: MatDialog,
    ) {
        super();
    }

    ngOnInit(): void {
        this._getTeams();
        this._setTeams();
    }

    onOpenUpdateTeam(team: Team): void {
        this.dialog.open(CreateUpdateTeamDialogComponent, { data: { team } }).afterClosed().pipe().subscribe();
    }

    private _getTeams(): void {
        this.addSubscription(
            this.store
                .pipe(
                    select(isLoaded),
                    tap(isLoaded => {
                        this.isLoading = !isLoaded;
                        if (!isLoaded) {
                            this.store.dispatch(loadAllTeams());
                        }
                    }),
                )
                .subscribe(),
        );
    }

    private _setTeams(): void {
        this.addSubscription(
            this.store
                .pipe(
                    select(teamsSelector),
                    tap(teams => {
                        this.teams$ = of(teams);
                    }),
                )
                .subscribe(),
        );
    }
}
