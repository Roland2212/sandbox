import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/modules/shared.module';
import { AuthViewComponent } from '@auth/views/auth/auth.component';
import { AuthRoutingModule } from './routing.module';
import { StoreModule } from '@ngrx/store';

@NgModule({
    declarations: [
        // Views
        AuthViewComponent,
    ],
    imports: [AuthRoutingModule, SharedModule, StoreModule.forFeature('auth', {})],
    exports: [],
})
export class AuthModule {}
