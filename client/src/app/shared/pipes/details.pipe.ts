import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SharedDetailsItem } from '@shared/interfaces/details-item.interface';
import { SharedDetailsMapper } from '@shared/interfaces/details-mapper.interface';
import { SharedGenericObject } from '@shared/interfaces/generic-object.interface';

@Pipe({
    name: 'details',
})
export class SharedDetailsPipe implements PipeTransform {
    transform(value: SharedGenericObject, mapper: SharedDetailsMapper[]): SharedDetailsItem[] {
        const details = mapper.map(({ icon, label, labelKey, key }) => {
            return {
                icon,
                label,
                labelKey,
                value: (value?.[key] || '-') as string,
            };
        });
        return details;
    }
}
