import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FabricSpinnerComponent } from 'util/fabric/ui/spinners/spinner/spinner.component';

import 'util/fabric/ui/spinners/spinner/themes/spinner.material.scss';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		FabricSpinnerComponent
	],
	exports: [
		FabricSpinnerComponent
	]
})
export class FabricSpinnerModule {
}
