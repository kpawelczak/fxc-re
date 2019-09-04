import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BadgeModule } from './buttons-indicators/badge/badge.module';
import { ButtonModule } from './buttons-indicators/button/button.module';

import { CheckboxModule } from './form/checkbox/checkbox.module';
import { ChipModule } from './buttons-indicators/chip/chip.module';
import { SelectModule } from './form/modals/select/select.module';
import { InputModule } from './form/input/input.module';
import { ToggleButtonModule } from './buttons-indicators/toggle-button/toggle-button.module';


const modules = [
	BadgeModule,
	ButtonModule,
	CheckboxModule,
	ChipModule,
	SelectModule,
	InputModule,
	ToggleButtonModule
];

@NgModule({
	imports: [
		CommonModule,
		...modules
	],
	exports: [
		...modules
	]
})
export class SimpleUIModule {
}
