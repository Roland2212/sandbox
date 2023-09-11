import * as memoizee from 'memoizee';

export function memoize() {
    return (target: Object, key: string | symbol, descriptor: PropertyDescriptor) => {
        const method = memoizee(descriptor.value) as Function;
        descriptor.value = function applyMemoizedMethod(...args: unknown[]) {
            return method.apply(this, args) as Function;
        };
    };
}
