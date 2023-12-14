import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-shared-details-item',
    templateUrl: './details-item.component.html',
    styleUrls: ['./details-item.component.scss'],
})
export class SharedDetailsItemComponent {
    @Input() icon: string = 'description';
    @Input() label!: string;
    @Input() value: string = '-';
}
