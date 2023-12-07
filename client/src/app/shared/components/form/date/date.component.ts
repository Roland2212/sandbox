import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DateFilterFn } from '@angular/material/datepicker';

@Component({
    selector: 'app-shared-date',
    templateUrl: './date.component.html',
})
export class SharedDateComponent implements OnInit {
    @Input() form!: FormGroup;
    @Input() control = new FormControl();
    @Input() name: string = `datepicker_${Date.now().toFixed(4)}`;
    @Input() label: string = 'Date';
    @Input() hint: string = '';
    @Input() classList: string[] = [];
    @Input() filterError: string = 'Filter Error';
    @Input() filterFn: DateFilterFn<Date | null> = (date: Date | null) => {
        return true;
    };

    ngOnInit(): void {
        this._setControlToForm();
    }

    filter(date: Date | null): boolean {
        return this.filterFn(date);
    }

    private _setControlToForm(): void {
        this.form?.setControl(this.name, this.control);
    }
}
