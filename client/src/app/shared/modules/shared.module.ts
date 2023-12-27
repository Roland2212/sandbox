import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { SharedBackButtonComponent } from '@shared/components/back-button/back-button.component';
import { TranslateModule } from '@ngx-translate/core';
import { SharedIsFalsePipe } from '@shared/pipes/is-false.pipe';
import { SharedListLoadingComponent } from '@shared/components/list-loading/list-loading.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedEmptyDataComponent } from '@shared/components/empty-data/empty-data.component';
import { SharedLoadingListPipe } from '@shared/pipes/loading-list.pipe';
import { SharedInputComponent } from '@shared/components/form/input/input.component';
import { SharedDateComponent } from '@shared/components/form/date/date.component';
import { SharedTextareaComponent } from '@shared/components/form/textarea/textarea.component';
import { SharedLoadingPipe } from '@shared/pipes/loading.pipe';
import { SharedDetailsItemComponent } from '@shared/components/details-item/details-item.component';
import { SharedDetailsListComponent } from '@shared/components/details-list/details-list.component';
import { SharedDetailsPipe } from '@shared/pipes/details.pipe';

@NgModule({
    declarations: [
        // Components
        SharedBackButtonComponent,
        SharedListLoadingComponent,
        SharedEmptyDataComponent,
        SharedInputComponent,
        SharedDateComponent,
        SharedTextareaComponent,
        SharedDetailsListComponent,
        SharedDetailsItemComponent,
        // Pipes
        SharedIsFalsePipe,
        SharedLoadingListPipe,
        SharedLoadingPipe,
        SharedDetailsPipe,
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
        SharedBackButtonComponent,
        SharedListLoadingComponent,
        SharedEmptyDataComponent,
        SharedInputComponent,
        SharedDateComponent,
        SharedTextareaComponent,
        SharedDetailsListComponent,
        SharedDetailsItemComponent,
        // Pipes
        SharedIsFalsePipe,
        SharedLoadingListPipe,
        SharedLoadingPipe,
        SharedDetailsPipe,
    ],
    providers: [DatePipe],
})
export class SharedModule {}
