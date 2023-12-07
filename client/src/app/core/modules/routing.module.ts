import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeViewComponent } from '@core/views/home/home.component';

const ROUTES: Routes = [
    {
        path: '',
        component: HomeViewComponent,
        children: [
            {
                path: 'team',
                loadChildren: () => {
                    return import('@team/modules/team.module').then(m => {
                        return m.TeamModule;
                    });
                },
            },
            {
                path: 'estimation/teams',
                loadChildren: () => {
                    return import('@estimation/modules/estimation.module').then(m => {
                        return m.EstimationModule;
                    });
                },
            },
            // TODO: Check redirect path
            {
                path: '**',
                redirectTo: 'team',
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class CoreRoutingModule {}
