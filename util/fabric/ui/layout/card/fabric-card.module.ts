import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FabricCardComponent } from 'util/fabric/ui/layout/card/card.component';

import 'util/fabric/ui/layout/card/themes/card.material.scss';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		FabricCardComponent
	],
	exports: [
		FabricCardComponent
	]
})
export class FabricCardModule {
}
