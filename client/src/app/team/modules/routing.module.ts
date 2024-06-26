import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewViewComponent } from '@team/views/overview/overview.component';

const ROUTES: Routes = [
    {
        path: '',
        component: OverviewViewComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class TeamRoutingModule {}
