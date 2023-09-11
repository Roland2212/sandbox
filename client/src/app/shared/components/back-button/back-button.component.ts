import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-back-button',
    templateUrl: './back-button.component.html',
    styleUrls: ['./back-button.component.scss'],
})
export class BackButtonComponent {
    @Input() label: string = 'Back';
    @Input() icon: string = 'arrow_back';
    @Input() path: string[] = ['..'];

    constructor(
        private route: ActivatedRoute,
        private router: Router,
    ) {}

    onBack(): void {
        void this.router.navigate(this.path, { relativeTo: this.route });
    }
}
