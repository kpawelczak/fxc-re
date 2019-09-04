import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToggleButtonGroupComponent } from 'src/app/ui/buttons-indicators/toggle-button-group/toggle-button-group.component';


@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		ToggleButtonGroupComponent
	],
	exports: [
		ToggleButtonGroupComponent
	]
})
export class ToggleButtonGroupModule {
}
