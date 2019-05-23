import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FabricToggleButtonGroupComponent } from 'util/fabric/ui/buttons-indicators/toggle-button-group/toggle-button-group.component';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		FabricToggleButtonGroupComponent
	],
	exports: [
		FabricToggleButtonGroupComponent
	]
})
export class FabricToggleButtonGroupModule {
}
