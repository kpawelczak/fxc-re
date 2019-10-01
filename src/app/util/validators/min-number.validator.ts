import { AbstractControl } from '@angular/forms';

export const ValidateMinNumber = (control: AbstractControl) => {

	return control.value > 0
		? null
		: { notZero: true };
};
