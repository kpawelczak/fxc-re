import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FabricRadioGroupComponent } from 'util/fabric/ui/form/radio-group/radio-group.component';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		FabricRadioGroupComponent
	],
	exports: [
		FabricRadioGroupComponent
	]
})
export class FabricRadioGroupModule {
}
