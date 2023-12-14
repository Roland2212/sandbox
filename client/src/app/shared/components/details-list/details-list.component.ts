import { Component, Input } from '@angular/core';
import { SharedDetailsMapper } from '@shared/interfaces/details-mapper.interface';
import { SharedGenericObject } from '@shared/interfaces/generic-object.interface';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-shared-details-list',
    templateUrl: './details-list.component.html',
    styleUrls: ['./details-list.component.scss'],
})
export class SharedDetailsListComponent {
    @Input() item$!: Observable<SharedGenericObject>;
    @Input() item!: SharedGenericObject;
    @Input() mapper!: SharedDetailsMapper[];
    @Input() columnsLength: number = 4;
}
