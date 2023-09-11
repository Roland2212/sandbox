import { NgModule } from '@angular/core';
import { OverviewViewComponent } from '@team/views/overview/overview.component';
import { SharedModule } from '@shared/modules/shared.module';
import { TeamRoutingModule } from './routing.module';
import { CreateViewComponent } from '@team/views/create/create.component';
import { EditViewComponent } from '@team/views/edit/edit.component';
import { TeamsComponent } from '@team/components/cards/teams/teams.component';
import { TeamInformationComponent } from '@team/components/cards/team-information/team-information.component';
import { AddTeamMemberDialogComponent } from '@team/components/dialogs/add-team-member/add-team-member.component';
import { TeamListComponent } from '@team/components/lists/team-list/team-list.component';
import { TeamMemberListComponent } from '@team/components/lists/team-member-list/team-member-list.component';
import { TeamFormComponent } from '@team/components/forms/team-form/team-form.component';
import { TeamService } from '@team/services/team.service';

@NgModule({
    declarations: [
        // Views
        OverviewViewComponent,
        CreateViewComponent,
        EditViewComponent,
        // Components
        TeamsComponent,
        TeamInformationComponent,
        TeamListComponent,
        TeamMemberListComponent,
        TeamFormComponent,
        // Dialogs
        AddTeamMemberDialogComponent,
    ],
    imports: [TeamRoutingModule, SharedModule],
    providers: [TeamService],
})
export class TeamModule {}
