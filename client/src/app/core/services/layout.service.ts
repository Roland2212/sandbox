import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Injectable, OnDestroy } from '@angular/core';
import { LayoutTypes } from '@core/interfaces/layout.interface';
import { BehaviorSubject, Observable, Subscription, map } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class LayoutService implements OnDestroy {
    private _currentLayoutType$: BehaviorSubject<LayoutTypes> = new BehaviorSubject<LayoutTypes>(LayoutTypes.DESKTOP);
    private _subscriptions: Subscription = new Subscription();

    layoutBreakpoints: Map<string, LayoutTypes> = new Map([
        [Breakpoints.XSmall, LayoutTypes.MOBILE],
        [Breakpoints.Small, LayoutTypes.TABLET],
        [Breakpoints.Medium, LayoutTypes.TABLET],
        [Breakpoints.Large, LayoutTypes.DESKTOP],
        [Breakpoints.XLarge, LayoutTypes.DESKTOP],
    ]);

    get isMobile(): Observable<boolean> {
        return this._currentLayoutType$.pipe(
            map(layoutType => {
                return layoutType === LayoutTypes.MOBILE;
            }),
        );
    }

    get isTablet(): Observable<boolean> {
        return this._currentLayoutType$.pipe(
            map(layoutType => {
                return layoutType === LayoutTypes.TABLET;
            }),
        );
    }

    get isDesktop(): Observable<boolean> {
        return this._currentLayoutType$.pipe(
            map(layoutType => {
                return layoutType === LayoutTypes.DESKTOP;
            }),
        );
    }

    constructor(public breakpointObserver: BreakpointObserver) {
        this._subscriptions.add(
            breakpointObserver.observe(Array.from(this.layoutBreakpoints.keys())).subscribe(result => {
                for (const query of Object.keys(result.breakpoints)) {
                    if (result.breakpoints[query] === true) {
                        this._currentLayoutType$.next(this.layoutBreakpoints.get(query)!);
                    }
                }
            }),
        );
    }

    ngOnDestroy(): void {
        this._subscriptions.unsubscribe();
    }

    getLayoutType(): Observable<LayoutTypes> {
        return this._currentLayoutType$.asObservable();
    }

    setLayoutBreakpoints(breakpoints: Map<string, LayoutTypes>): void {
        this.layoutBreakpoints = breakpoints;
    }
}
