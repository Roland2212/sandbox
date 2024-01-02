import { Component } from '@angular/core';
import { CoreLoaderService } from '@core/services/loader.service';

@Component({
    selector: 'app-core-loader',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.scss'],
})
export class CoreLoaderComponent {
    isLoading$ = this.loaderService.isLoading$;
    loadingMessage$ = this.loaderService.loadingMessage$;

    constructor(private loaderService: CoreLoaderService) {}
}
