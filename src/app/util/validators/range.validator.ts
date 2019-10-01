import { FormGroup, ValidatorFn } from '@angular/forms';

export const RangeValidator: ValidatorFn = (formGroup: FormGroup) => {
	const high = formGroup.get('High').value;
	const low = formGroup.get('Low').value;

	return high !== null && low !== null && high > low
		? null
		: { range: true };
};
