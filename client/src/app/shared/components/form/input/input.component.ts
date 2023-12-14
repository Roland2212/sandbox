import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn } from '@angular/forms';

@Component({
    selector: 'app-shared-input',
    templateUrl: './input.component.html',
})
export class SharedInputComponent implements OnInit {
    @Input() control = new FormControl();
    @Input() form!: FormGroup;
    @Input() name: string = `input_${Date.now().toFixed(4)}`;
    @Input() label: string = 'Input';
    @Input() placeholder: string = '';
    @Input() classList: string[] = [];
    @Input() validators: ValidatorFn[] = [];

    ngOnInit() {
        this._setControlToForm();
    }

    private _setControlToForm() {
        this.form?.setControl(this.name, this.control);
        if (this.validators.length) {
            this.control.setValidators(this.validators);
            this.control.updateValueAndValidity();
        }
    }
}
