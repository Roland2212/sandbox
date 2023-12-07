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
        // Views
        OverviewViewComponent,
        SprintsViewComponent,
        CreateSprintViewComponent,
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
