import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'isFalse',
})
export class IsFalsePipe implements PipeTransform {
    transform(value: unknown): boolean {
        return !value;
    }
}
