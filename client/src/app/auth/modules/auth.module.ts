import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/modules/shared.module';
import { AuthViewComponent } from '@auth/views/auth/auth.component';
import { AuthRoutingModule } from './routing.module';

@NgModule({
    declarations: [
        // Views
        AuthViewComponent,
    ],
    imports: [AuthRoutingModule, SharedModule],
    exports: [],
})
export class AuthModule {}
