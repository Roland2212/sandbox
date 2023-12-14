import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedDetailsMapper } from '@shared/interfaces/details-mapper.interface';

// TODO: Test mapper

const mock_mapper: SharedDetailsMapper[] = [
    {
        icon: 'badge',
        label: 'Name',
        key: 'name',
    },
    {
        icon: 'description',
        label: 'Description',
        key: 'description',
    },
];

const mock_item = {
    name: 'Kyrylo',
    description: '54 years old',
};

@Component({
    selector: 'app-estimation-sprints',
    templateUrl: './sprints.component.html',
    styleUrls: ['./sprints.component.scss'],
})
export class SprintsCardComponent {
    mapper: SharedDetailsMapper[] = mock_mapper;
    item = mock_item;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
    ) {}

    onNavigateToCreateSprint(): void {
        void this.router.navigate([`./create`], { relativeTo: this.route });
    }
}
