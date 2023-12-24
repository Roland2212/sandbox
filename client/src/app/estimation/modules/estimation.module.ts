import { NgModule } from '@angular/core';
import { OverviewViewComponent } from '@estimation/views/overview/overview.component';
import { EstimationRoutingModule } from './routing.module';
import { SharedModule } from '@shared/modules/shared.module';
import { TeamListComponent } from '@estimation/components/lists/team/team.component';
import { TeamsCardComponent } from '@estimation/components/cards/teams/teams.component';
import { TeamService } from '@team/services/team.service';
import { SprintsViewComponent } from '@estimation/views/sprints/sprints.component';
import { SprintListComponent } from '@estimation/components/lists/sprint/sprint.component';
import { SprintsCardComponent } from '@estimation/components/cards/sprints/sprints.component';
import { SprintService } from '@estimation/services/sprint.service';
import { CreateSprintViewComponent } from '@estimation/views/create/create.component';
import { EntityDefinitionService, EntityMetadataMap } from '@ngrx/data';
import { SprintEntityService } from '@estimation/services/sprint-entity.service';
import { SprintWizardCardComponent } from '@estimation/components/cards/sprint-wizard/sprint-wizard.component';
import { UpdateSprintViewComponent } from '@estimation/views/update/update.component';
import { SprintCardComponent } from '@estimation/components/cards/sprint/sprint.component';
import { UpdateSprintDialogComponent } from '@estimation/components/dialogs/update-sprint/update-sprint.component';

const entityMetadata: EntityMetadataMap = {
    Sprints: {},
};

@NgModule({
    declarations: [
        // Components
        TeamsCardComponent,
        TeamListComponent,
        SprintsCardComponent,
        SprintListComponent,
        SprintWizardCardComponent,
        SprintCardComponent,
        // Views
        OverviewViewComponent,
        SprintsViewComponent,
        CreateSprintViewComponent,
        UpdateSprintViewComponent,
        // Dialogs
        UpdateSprintDialogComponent,
    ],
    imports: [EstimationRoutingModule, SharedModule],
    providers: [
        // Services
        TeamService,
        SprintService,
        SprintEntityService,
    ],
})
export class EstimationModule {
    constructor(private entityDefinitionService: EntityDefinitionService) {
        entityDefinitionService.registerMetadataMap(entityMetadata);
    }
}
