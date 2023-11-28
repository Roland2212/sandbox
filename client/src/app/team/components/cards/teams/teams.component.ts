import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateUpdateTeamDialogComponent } from '@team/components/dialogs/create-update-team/create-update-team.component';

@Component({
    selector: 'app-teams',
    templateUrl: './teams.component.html',
    styleUrls: ['./teams.component.scss'],
})
export class TeamsComponent {
    constructor(private dialog: MatDialog) {}

    onOpenCreateTeam(): void {
        this.dialog
            .open(CreateUpdateTeamDialogComponent, { data: { team: null } })
            .afterClosed()
            .pipe()
            .subscribe();
    }
}
