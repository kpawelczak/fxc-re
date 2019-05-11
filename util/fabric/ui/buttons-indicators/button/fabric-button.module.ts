import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FabricButtonComponent } from 'util/fabric/ui/buttons-indicators/button/button.component';

import 'util/fabric/ui/buttons-indicators/button/themes/button.dark.scss';
import 'util/fabric/ui/buttons-indicators/button/themes/button.light.scss';
import 'util/fabric/ui/buttons-indicators/button/themes/button.material.scss';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		FabricButtonComponent
	],
	exports: [
		FabricButtonComponent
	]
})
export class FabricButtonModule {
}
