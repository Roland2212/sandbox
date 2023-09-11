import { Directive, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Directive()
export class SubscriptionDirective implements OnDestroy {
    private _subscriptions: Subscription = new Subscription();

    constructor() {}

    ngOnDestroy(): void {
        this._subscriptions.unsubscribe();
    }

    addSubscription(subscription: Subscription): void {
        this._subscriptions.add(subscription);
    }
}
