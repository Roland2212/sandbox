import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BackButtonComponent } from '@shared/components/back-button/back-button.component';
import { TranslateModule } from '@ngx-translate/core';
import { IsFalsePipe } from '@shared/pipes/is-false.pipe';
import { ListLoadingComponent } from '@shared/components/list-loading/list-loading.component';
import { HttpClientModule } from '@angular/common/http';
import { LoadingPipe } from '@shared/pipes/loading.pipe';
import { EmptyDataComponent } from '@shared/components/empty-data/empty-data.component';

@NgModule({
    declarations: [
        // Components
        BackButtonComponent,
        ListLoadingComponent,
        EmptyDataComponent,
        // Pipes
        IsFalsePipe,
        LoadingPipe,
    ],
    imports: [ReactiveFormsModule, CommonModule, MaterialModule, HttpClientModule, TranslateModule],
    exports: [
        // Modules
        ReactiveFormsModule,
        CommonModule,
        MaterialModule,
        HttpClientModule,
        TranslateModule,
        // Components
        BackButtonComponent,
        ListLoadingComponent,
        EmptyDataComponent,
        // Pipes
        IsFalsePipe,
        LoadingPipe,
    ],
    providers: [],
})
export class SharedModule {}
