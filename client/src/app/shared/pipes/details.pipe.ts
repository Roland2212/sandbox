import { Pipe, PipeTransform } from '@angular/core';
import { SharedDetailsItem } from '@shared/interfaces/details-item.interface';
import { SharedDetailsMapper } from '@shared/interfaces/details-mapper.interface';
import { SharedGenericObject } from '@shared/interfaces/generic-object.interface';

@Pipe({
    name: 'details',
})
export class SharedDetailsPipe implements PipeTransform {
    transform(value: SharedGenericObject, mapper: SharedDetailsMapper[]): SharedDetailsItem[] {
        const details = mapper.map(({ icon, label, key }) => {
            return {
                icon,
                label,
                value: (value?.[key] || '-') as string,
            };
        });
        return details;
    }
}
