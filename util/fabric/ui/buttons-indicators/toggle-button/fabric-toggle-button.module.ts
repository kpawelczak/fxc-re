import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FabricToggleButtonComponent } from 'util/fabric/ui/buttons-indicators/toggle-button/toggle-button.component';
import { FabricButtonModule } from 'util/fabric/ui/buttons-indicators/button/fabric-button.module';

import 'util/fabric/ui/buttons-indicators/toggle-button/themes/toggle-button.material.scss';

@NgModule({
	imports: [
		CommonModule,
		FabricButtonModule
	],
	declarations: [
		FabricToggleButtonComponent
	],
	exports: [
		FabricToggleButtonComponent,
		FabricButtonModule
	]
})
export class FabricToggleButtonModule {
}
