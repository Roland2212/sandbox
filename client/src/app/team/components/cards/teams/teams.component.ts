import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateUpdateTeamDialogComponent } from '@team/components/dialogs/create-update-team/create-update-team.component';
import { filter } from 'rxjs';

@Component({
    selector: 'app-team-teams',
    templateUrl: './teams.component.html',
    styleUrls: ['./teams.component.scss'],
})
export class TeamsComponent {
    constructor(private dialog: MatDialog) {}

    onOpenCreateTeam(): void {
        this.dialog
            .open(CreateUpdateTeamDialogComponent, { data: { team: null } })
            .afterClosed()
            .pipe(
                filter(team => {
                    return !!team;
                }),
            )
            .subscribe();
    }
}
