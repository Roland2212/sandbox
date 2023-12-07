import { Injectable } from '@angular/core';
import { Sprint } from '@estimation/interfaces/sprint.interface';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';

@Injectable()
export class SprintEntityService extends EntityCollectionServiceBase<Sprint> {
    constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
        super('Sprint', serviceElementsFactory);
    }
}
