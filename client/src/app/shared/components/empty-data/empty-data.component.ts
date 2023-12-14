import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-shared-empty-data',
    templateUrl: './empty-data.component.html',
    styleUrls: ['./empty-data.component.scss'],
})
export class SharedEmptyDataComponent {
    @Input() icon: string = '';
    @Input() iconColor: string = 'primary';
    @Input() text_key: string = 'common.empty.default';
}
