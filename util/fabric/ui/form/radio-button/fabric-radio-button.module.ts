import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FabricRadioButtonComponent } from 'util/fabric/ui/form/radio-button/radio-button.component';

import 'util/fabric/ui/form/radio-button/themes/radio-button.material.scss';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		FabricRadioButtonComponent
	],
	exports: [
		FabricRadioButtonComponent
	]
})
export class FabricRadioButtonModule {
}
