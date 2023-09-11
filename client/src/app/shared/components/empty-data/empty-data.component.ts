import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-empty-data',
    templateUrl: './empty-data.component.html',
    styleUrls: ['./empty-data.component.scss'],
})
export class EmptyDataComponent {
    @Input() icon: string = '';
    @Input() iconColor: string = 'primary';
    @Input() text: string = 'No data';
}
