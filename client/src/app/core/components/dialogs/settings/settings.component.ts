import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { ValueLabel } from '@shared/interfaces/value-label.interface';

@Component({
    selector: 'app-settings-dialog',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss'],
})
export class SettingsDialogComponent implements OnInit {
    languagesOptions: ValueLabel[] = [
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
        private dialogRef: MatDialogRef<SettingsDialogComponent>,
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
