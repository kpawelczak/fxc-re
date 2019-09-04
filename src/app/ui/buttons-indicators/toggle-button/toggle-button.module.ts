import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToggleButtonComponent } from 'src/app/ui/buttons-indicators/toggle-button/toggle-button.component';
import { ButtonModule } from 'src/app/ui/buttons-indicators/button/button.module';


@NgModule({
	imports: [
		CommonModule,
		ButtonModule
	],
	declarations: [
		ToggleButtonComponent
	],
	exports: [
		ToggleButtonComponent,
		ButtonModule
	]
})
export class ToggleButtonModule {
}
