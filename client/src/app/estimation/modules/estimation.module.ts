import { NgModule } from '@angular/core';
import { OverviewViewComponent } from '@estimation/views/overview/overview.component';
import { EstimationRoutingModule } from './routing.module';
import { SharedModule } from '@shared/modules/shared.module';

@NgModule({
    declarations: [
        // Views
        OverviewViewComponent,
    ],
    imports: [EstimationRoutingModule, SharedModule],
})
export class EstimationModule {}
