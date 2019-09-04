import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChipComponent } from 'src/app/ui/buttons-indicators/chip/chip.component';


@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		ChipComponent
	],
	exports: [
		ChipComponent
	]
})
export class ChipModule {
}
