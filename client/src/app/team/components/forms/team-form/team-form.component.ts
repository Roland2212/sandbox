import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LayoutService } from '@core/services/layout.service';
import { TeamService } from '@team/services/team.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-team-form',
    templateUrl: './team-form.component.html',
    styleUrls: ['./team-form.component.scss'],
})
export class TeamFormComponent implements OnInit {
    isMobileLayout$: Observable<boolean> = this.layoutService.isMobile;

    name = new FormControl('');
    country = new FormControl('');

    constructor(
        private layoutService: LayoutService,
        private teamService: TeamService,
    ) {}

    ngOnInit(): void {
        this._setFormControls();
    }

    private _setFormControls(): void {
        this.teamService.setControlToTeamForm('name', this.name);
        this.teamService.setControlToTeamForm('country', this.country);
    }
}
