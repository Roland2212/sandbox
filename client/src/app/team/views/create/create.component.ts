import { Component, OnInit } from '@angular/core';
import { TeamService } from '@team/services/team.service';

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.scss'],
})
export class CreateViewComponent implements OnInit {
    constructor(private teamService: TeamService) {}

    ngOnInit(): void {
        this.teamService.setIsCreate(true);
    }
}
