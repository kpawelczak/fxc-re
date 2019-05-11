import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FabricCheckboxComponent } from 'util/fabric/ui/form/checkbox/checkbox.component';

import 'util/fabric/ui/form/checkbox/themes/checkbox.material.scss';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		FabricCheckboxComponent
	],
	exports: [
		FabricCheckboxComponent
	]
})
export class FabricCheckboxModule {
}
