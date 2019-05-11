import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FabricChipComponent } from 'util/fabric/ui/buttons-indicators/chip/chip.component';

import 'util/fabric/ui/buttons-indicators/chip/themes/chip.material.scss';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		FabricChipComponent
	],
	exports: [
		FabricChipComponent
	]
})
export class FabricChipModule {
}
