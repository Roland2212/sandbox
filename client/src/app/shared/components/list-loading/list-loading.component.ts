import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-shared-list-loading',
    templateUrl: './list-loading.component.html',
    styleUrls: ['./list-loading.component.scss'],
})
export class SharedListLoadingComponent {
    @Input() icon: string = 'description';
    @Input() itemsLength: number = 1;
}
