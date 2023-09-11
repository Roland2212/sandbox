import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddTeamMemberDialogComponent } from '@team/components/dialogs/add-team-member/add-team-member.component';
import { TEAM_INFORMATION_DIALOG_CONFIG } from './team-information.config';
import { Observable } from 'rxjs';
import { LayoutService } from '@core/services/layout.service';

@Component({
    selector: 'app-team-information',
    templateUrl: './team-information.component.html',
    styleUrls: ['./team-information.component.scss'],
})
export class TeamInformationComponent {
    isMobileLayout$: Observable<boolean> = this.layoutService.isMobile;

    constructor(
        private dialog: MatDialog,
        private layoutService: LayoutService,
    ) {}

    onOpenAddTeamMemberDialog(): void {
        this.dialog.open(AddTeamMemberDialogComponent, TEAM_INFORMATION_DIALOG_CONFIG);
    }
}
