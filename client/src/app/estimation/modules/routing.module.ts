import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateSprintViewComponent } from '@estimation/views/create/create.component';
import { OverviewViewComponent } from '@estimation/views/overview/overview.component';
import { SprintsViewComponent } from '@estimation/views/sprints/sprints.component';

const ROUTES: Routes = [
    { path: '', component: OverviewViewComponent },
    { path: ':teamId/sprints', component: SprintsViewComponent },
    { path: ':teamId/sprints/create', component: CreateSprintViewComponent },
];

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class EstimationRoutingModule {}
