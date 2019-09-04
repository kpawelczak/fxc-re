import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckboxComponent } from 'src/app/ui/form/checkbox/checkbox.component';


@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		CheckboxComponent
	],
	exports: [
		CheckboxComponent
	]
})
export class CheckboxModule {
}
