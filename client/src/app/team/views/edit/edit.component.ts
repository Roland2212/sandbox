import { Component, OnInit } from '@angular/core';
import { TeamService } from '@team/services/team.service';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.scss'],
})
export class EditViewComponent implements OnInit {
    constructor(private teamService: TeamService) {}

    ngOnInit(): void {
        this.teamService.setIsCreate(false);
    }
}
