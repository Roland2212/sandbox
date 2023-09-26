import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsResolver } from '@team/resolvers/teams.resolver';
import { CreateViewComponent } from '@team/views/create/create.component';
import { EditViewComponent } from '@team/views/edit/edit.component';
import { OverviewViewComponent } from '@team/views/overview/overview.component';

const ROUTES: Routes = [
    {
        path: '',
        component: OverviewViewComponent,
        // TODO: Check if resolver is needed
        // resolve: {
        //     teams: TeamsResolver,
        // },
    },
    { path: 'create', component: CreateViewComponent },
    { path: 'edit/:teamId', component: EditViewComponent },
];

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class TeamRoutingModule {}
