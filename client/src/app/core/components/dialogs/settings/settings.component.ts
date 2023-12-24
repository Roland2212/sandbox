import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { SharedValueLabel } from '@shared/interfaces/value-label.interface';

@Component({
    selector: 'app-core-settings-dialog',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss'],
})
export class CoreSettingsDialogComponent implements OnInit {
    languagesOptions: SharedValueLabel[] = [
        {
            value: 'en',
            label: 'English',
        },
        {
            value: 'ua',
            label: 'Українська',
        },
    ];

    form = new FormGroup({
        language: new FormControl(''),
    });

    constructor(
        private dialogRef: MatDialogRef<CoreSettingsDialogComponent>,
        private translateService: TranslateService,
    ) {}

    ngOnInit(): void {
        this.form.get('language')?.setValue(this.translateService.currentLang);
    }

    onSaveSettings(): void {
        const language = this.form.get('language')?.value || 'en';
        this.translateService.use(language);
        localStorage.setItem('language', language);
        this.dialogRef.close();
    }
}
