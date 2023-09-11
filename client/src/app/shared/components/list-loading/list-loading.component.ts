import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-list-loading',
    templateUrl: './list-loading.component.html',
    styleUrls: ['./list-loading.component.scss'],
})
export class ListLoadingComponent {
    @Input() icon: string = 'remove';
    @Input() itemsLength: number = 1;
}
