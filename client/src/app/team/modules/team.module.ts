import { NgModule } from '@angular/core';
import { OverviewViewComponent } from '@team/views/overview/overview.component';
import { SharedModule } from '@shared/modules/shared.module';
import { TeamRoutingModule } from './routing.module';
import { TeamsComponent } from '@team/components/cards/teams/teams.component';
import { TeamListComponent } from '@team/components/lists/team-list/team-list.component';
import { TeamService } from '@team/services/team.service';
import { EffectsModule } from '@ngrx/effects';
import { TeamEffects } from '@store/effects/team/team.effect';
import { CreateUpdateTeamDialogComponent } from '@team/components/dialogs/create-update-team/create-update-team.component';

@NgModule({
    declarations: [
        // Views
        OverviewViewComponent,
        // Components
        TeamsComponent,
        TeamListComponent,
        // Dialogs
        CreateUpdateTeamDialogComponent,
    ],
    imports: [TeamRoutingModule, SharedModule, EffectsModule.forFeature([TeamEffects])],
    providers: [TeamService],
})
export class TeamModule {}
